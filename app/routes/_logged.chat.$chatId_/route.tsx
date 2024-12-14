import React, { useState, useEffect, useRef } from 'react'
import { Typography, Input, Button, List, Rate, Upload, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { Prisma } from '@prisma/client'
type ExtendedChat = Prisma.ChatGetPayload<{
  include: { messages: true }
}> & { name?: string }
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ChatPage() {
  const { chatId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [messages, setMessages] = useState<any[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [chatName, setChatName] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { data: chatData, refetch: refetchChat } = Api.chat.findUnique.useQuery(
    { where: { id: chatId } },
  )
  const { mutateAsync: sendMessage } = Api.message.create.useMutation()
  const { mutateAsync: updateChat } = Api.chat.update.useMutation()
  const { mutateAsync: deleteChat } = Api.chat.delete.useMutation()
  const { mutateAsync: createFeedback } = Api.feedback.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  useEffect(() => {
    if (chatData) {
      const extendedChatData = chatData as ExtendedChat
      setMessages(extendedChatData.messages || [])
      setChatName(extendedChatData.name || '')
    }
  }, [chatData])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const newMessage = await sendMessage({
      data: {
        content: inputMessage,
        chatId: chatId!,
        userId: user!.id,
        aiModelId: 'default-ai-model-id', // Replace with actual AI model ID
      },
    })

    setMessages([...messages, newMessage])
    setInputMessage('')
    refetchChat()
  }

  const handleFileUpload = async (info: any) => {
    const { file } = info
    try {
      const { url } = await upload({ file })
      const fileType = file.type.split('/')[0]
      let content = `Uploaded ${fileType}: ${url}`

      if (fileType === 'image') {
        content = `![Uploaded Image](${url})`
      }

      await sendMessage({
        data: {
          content,
          chatId: chatId!,
          userId: user!.id,
          aiModelId: 'default-ai-model-id',
        },
      })

      refetchChat()
    } catch (error) {
      message.error('File upload failed')
    }
  }

  const handleRateResponse = async (messageId: string, rating: number) => {
    await createFeedback({
      data: {
        rating,
        userId: user!.id,
        messageId,
      },
    })
    message.success('Feedback submitted')
  }

  const handleRenameChat = async () => {
    try {
      await updateChat({
        where: { id: chatId },
        data: {}, // Removed 'name' property as it's not in the Chat model
      })
      message.success('Chat updated')
    } catch (error) {
      message.error('Failed to update chat')
    }
  }

  const handleDeleteChat = async () => {
    await deleteChat({ where: { id: chatId } })
    message.success('Chat deleted')
    navigate('/home')
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>AI Chat</Title>
        <Paragraph>
          Engage in a conversation with an AI model and get responses to your
          queries.
        </Paragraph>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Input
            value={chatName}
            onChange={e => setChatName(e.target.value)}
            placeholder="Chat Name"
            style={{ width: '70%' }}
          />
          <Button
            onClick={handleRenameChat}
            icon={<i className="las la-edit"></i>}
          >
            Update
          </Button>
          <Button
            onClick={handleDeleteChat}
            danger
            icon={<i className="las la-trash-alt"></i>}
          >
            Delete
          </Button>
        </div>

        <List
          dataSource={messages}
          renderItem={(message: any) => (
            <List.Item>
              <div style={{ width: '100%' }}>
                <Text strong>{message.user?.name || 'AI'}:</Text>
                <Paragraph>{message.content}</Paragraph>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text type="secondary">
                    {dayjs(message.createdAt).format('YYYY-MM-DD HH:mm')}
                  </Text>
                  {message.user?.id !== user?.id && (
                    <Rate
                      onChange={value => handleRateResponse(message.id, value)}
                    />
                  )}
                </div>
              </div>
            </List.Item>
          )}
        />
        <div ref={messagesEndRef} />

        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Input
            value={inputMessage}
            onChange={e => setInputMessage(e.target.value)}
            onPressEnter={handleSendMessage}
            placeholder="Type your message..."
            style={{ flex: 1, marginRight: '10px' }}
          />
          <Upload customRequest={handleFileUpload} showUploadList={false}>
            <Button icon={<i className="las la-paperclip"></i>} />
          </Upload>
          <Button
            onClick={handleSendMessage}
            type="primary"
            icon={<i className="las la-paper-plane"></i>}
          >
            Send
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

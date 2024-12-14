import React from 'react'
import { Typography, Row, Col, Card, List, Button } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: chats } = Api.chat.findMany.useQuery({
    include: { messages: true },
    orderBy: { updatedAt: 'desc' },
    take: 5,
  })

  const { data: folders } = Api.folder.findMany.useQuery({
    orderBy: { updatedAt: 'desc' },
    take: 5,
  })

  const { data: aiModels } = Api.aiModel.findMany.useQuery({})

  const { data: recipes } = Api.recipe.findMany.useQuery({
    orderBy: { updatedAt: 'desc' },
    take: 5,
  })

  const { mutateAsync: createChat } = Api.chat.create.useMutation()

  const handleCreateChat = async (modelId: string) => {
    if (!user) return
    const newChat = await createChat({
      data: {
        userId: user.id,
        messages: {
          create: {
            content: 'New chat started',
            aiModelId: modelId,
            userId: user.id,
          },
        },
      },
    })
    navigate(`/chat/${newChat.id}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Dashboard</Title>
        <Text>
          Welcome to your workspace. Here's an overview of your recent
          activities and quick access to common tasks.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-comments"></i> Recent Chats
                </>
              }
            >
              <List
                dataSource={chats}
                renderItem={chat => (
                  <List.Item
                    key={chat.id}
                    onClick={() => navigate(`/chat/${chat.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Text>{chat.messages?.[0]?.content || 'New Chat'}</Text>
                    <Text type="secondary">
                      {dayjs(chat.updatedAt).format('MMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-folder"></i> Recent Folders
                </>
              }
            >
              <List
                dataSource={folders}
                renderItem={folder => (
                  <List.Item
                    key={folder.id}
                    onClick={() => navigate('/folders')}
                    style={{ cursor: 'pointer' }}
                  >
                    <Text>{folder.name}</Text>
                    <Text type="secondary">
                      {dayjs(folder.updatedAt).format('MMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-robot"></i> Start a New Chat
                </>
              }
            >
              <List
                dataSource={aiModels}
                renderItem={model => (
                  <List.Item>
                    <Button
                      onClick={() => handleCreateChat(model.id)}
                      style={{ width: '100%' }}
                    >
                      {model.name}
                    </Button>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-book-open"></i> Premade Recipes
                </>
              }
            >
              <List
                dataSource={recipes}
                renderItem={recipe => (
                  <List.Item
                    key={recipe.id}
                    onClick={() => navigate('/recipes')}
                    style={{ cursor: 'pointer' }}
                  >
                    <Text>{recipe.title}</Text>
                    <Text type="secondary">
                      {dayjs(recipe.updatedAt).format('MMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

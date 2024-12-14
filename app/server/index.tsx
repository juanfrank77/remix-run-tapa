import { AiServer } from '@plugins/ai/server'
import { EmailServer } from '@/plugins/email/server'
import { PaymentServer } from '~/plugins/payment/server'

export const appRouter = AiServer.trpcRouter.merge(PaymentServer.trpcRouter).merge(
    EmailServer.trpcRouter,
)
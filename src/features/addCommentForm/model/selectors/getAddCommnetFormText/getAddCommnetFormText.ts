import { StateSchema } from '@/app/providers/StoreProvider'

export const getAddCommnetFormText = (state: StateSchema) => state?.addCommentForm?.text ?? ''

import { JsonSettings } from '../../types/jsonSettings'

import { buildSelector } from '@/shared/lib/store'

const defaultJson: JsonSettings = {}

export const [useJsonUserSettings, getUseJsonUserSettings] = buildSelector(
  (state) => state.user?.authData?.jsonSettings ?? defaultJson,
)

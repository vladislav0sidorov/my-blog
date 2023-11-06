import { Story } from '@storybook/react'

import { FeatureFlags } from '@/shared/types/featureFlags'
import { setFeatureFlags } from '@/shared/lib/features'

export const FeatureFlagDecorator = (feature: FeatureFlags) => (StoryComponent: Story) => {
  setFeatureFlags(feature)

  return <StoryComponent />
}

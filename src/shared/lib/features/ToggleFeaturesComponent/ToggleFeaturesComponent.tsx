import { ReactElement } from 'react'

import { getFeatureFlag } from '../setGetFeatures/setGetFeatures'

import { FeatureFlags } from '@/shared/types/featureFlags'

interface ToggleFeaturesComponentProps {
  featureName: keyof FeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeaturesComponent = (props: ToggleFeaturesComponentProps) => {
  const { featureName, on, off } = props

  if (getFeatureFlag(featureName)) {
    return on
  }

  return off
}

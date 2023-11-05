import { LOCAL_STORAGE_LAST_DESIGN_THEME_KEY } from '@/shared/const/lodalStorage'
import { FeatureFlags } from '@/shared/types/featureFlags'

const defaultFeatures = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_THEME_KEY) === 'new',
}

let featureFlags: FeatureFlags = {
  ...defaultFeatures,
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlag(featureFlag: keyof FeatureFlags) {
  return featureFlags?.[featureFlag]
}

export function getAllFeatureFlags() {
  return featureFlags
}

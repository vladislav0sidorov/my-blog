import { createAsyncThunk } from '@reduxjs/toolkit'

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi'
import { getAllFeatureFlags } from '../lib/setGetFeatures/setGetFeatures'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { FeatureFlags } from '@/shared/types/featureFlags'

interface UpdateFeatureFlagOptions {
  userId: string
  newFeatures: Partial<FeatureFlags>
}

export const updateFeatureFlag = createAsyncThunk<void, UpdateFeatureFlagOptions, ThunkConfig<string>>(
  'features/updateFeatureFlag',
  // eslint-disable-next-line consistent-return
  async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi

    try {
      await dispatch(updateFeatureFlagsMutation({ userId, features: { ...getAllFeatureFlags(), ...newFeatures } }))

      window.location.reload()
    } catch (error) {
      console.log(error)
      return rejectWithValue('')
    }
  },
)

import { createAsyncThunk } from '@reduxjs/toolkit'

import { JsonSettings } from '../types/jsonSettings'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { setJsonSettingsMutation } from '../api/userApi'
import { getUseJsonUserSettings } from '../selectors/jsonUserSettings/jsonUserSettings'

import { ThunkConfig } from '@/app/providers/StoreProvider'

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi
    const userData = getUserAuthData(getState())
    const currentSettings = getUseJsonUserSettings(getState())

    if (!userData) {
      return rejectWithValue('Нет данных пользователя')
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        }),
      ).unwrap()

      if (!response.jsonSettings) {
        return rejectWithValue('')
      }

      return response.jsonSettings
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)

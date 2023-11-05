import { createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '../types/user'
import { getUserDataByIdQuery } from '../api/userApi'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { LOCAL_STORAGE_LAST_DESIGN_THEME_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/lodalStorage'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) {
      return rejectWithValue('Уникальный id пользователя не был найден')
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()

      localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_THEME_KEY, response.features?.isAppRedesigned ? 'new' : 'old')
      return response
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)

import { createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '../types/user'
import { getUserDataByIdQuery } from '../api/userApi'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/lodalStorage'

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

      return response
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)

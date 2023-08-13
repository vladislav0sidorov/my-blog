import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ScrollRestorationSchema } from '../types/scrollRestoration'

const initialState: ScrollRestorationSchema = {
  scrollPosition: {},
}

export const ScrollRestorationSlice = createSlice({
  name: 'ScrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      state.scrollPosition[action.payload.path] = action.payload.position
    },
  },
})

export const { actions: ScrollRestorationActions } = ScrollRestorationSlice
export const { reducer: ScrollRestorationReducer } = ScrollRestorationSlice

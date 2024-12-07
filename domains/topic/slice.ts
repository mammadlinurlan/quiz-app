import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TopicState {
  selectedTopic: string | null;
}

const initialState: TopicState = {
  selectedTopic: null,
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    setSelectedTopic: (state, action: PayloadAction<string>) => {
      state.selectedTopic = action.payload;
    },
    clearSelectedTopic: (state) => {
      state.selectedTopic = null;
    },
  },
});

export const { setSelectedTopic, clearSelectedTopic } = topicSlice.actions;

export default topicSlice.reducer;

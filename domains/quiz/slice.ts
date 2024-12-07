import { IQuestion } from './../../models/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuizState {
  selectedAnswer: string;
  currentQuestionIndex: number;
  currentQuestion: IQuestion | null;
  isSubmitted: boolean;
  correctAnswersCount: number;
  wrongAnswersCount: number;
  correctAnswer: string;
  questions: IQuestion[];
  isResultsShowing: boolean;
}

const initialState: QuizState = {
  selectedAnswer: '',
  currentQuestionIndex: 0,
  currentQuestion: null,
  isSubmitted: false,
  correctAnswersCount: 0,
  wrongAnswersCount: 0,
  correctAnswer: '',
  questions: [],
  isResultsShowing: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedAnswer: (state, action: PayloadAction<string>) => {
      state.selectedAnswer = action.payload;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    setCurrentQuestion: (state, action: PayloadAction<IQuestion>) => {
      state.currentQuestion = action.payload;
    },
    setIsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
    setCorrectAnswersCount: (state) => {
      state.correctAnswersCount += 1;
    },
    setWrongAnswersCount: (state) => {
      state.wrongAnswersCount += 1;
    },
    setCorrectAnswer: (state, action: PayloadAction<string>) => {
      state.correctAnswer = action.payload;
    },
    setQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload;
    },
    setIsResultsShowing: (state, action: PayloadAction<boolean>) => {
      state.isResultsShowing = action.payload;
    },
    resetState: (
      state,
      action: PayloadAction<{ isQuestionsKeeped: boolean }>,
    ) => {
      if (action.payload.isQuestionsKeeped) {
        return {
          ...initialState,
          questions: state.questions,
        };
      } else {
        return initialState;
      }
    },
  },
});

export const {
  setSelectedAnswer,
  nextQuestion,
  setCurrentQuestion,
  setIsSubmitted,
  setWrongAnswersCount,
  setCorrectAnswersCount,
  setCorrectAnswer,
  setQuestions,
  resetState,
  setIsResultsShowing,
} = quizSlice.actions;

export default quizSlice.reducer;

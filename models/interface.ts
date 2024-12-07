export interface IListItem {
  id: number;
  text: string;
  icon?: (iconSize: string | undefined) => React.ReactNode;
  iconBgColor?: string;
  onClick?: () => void;
}

export interface IAnswer {
  id: number;
  value: string;
  variant: string;
}

export interface IQuestion {
  id: number;
  question: string;
  options: IAnswer[];
}

export interface ICorrectAnswer {
  questionId: number;
  correctAnswer: number;
}

export interface ICorrectAnswers {
  [topic: string]: ICorrectAnswer[];
}

export interface ITopicQuestions {
  [topic: string]: IQuestion[];
}

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
  correctAnswer: number;
}

export interface ITopicQuestions {
  [topic: string]: IQuestion[];
}

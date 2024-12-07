export interface ITopicItem {
  id: number;
  text: string;
  icon?: (iconSize: string | undefined) => React.ReactNode;
  iconBgColor?: string;
  textColor?: string;
  shadowColor?: string;
  onClick?: () => void;
}

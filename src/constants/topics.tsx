import { ITopicItem } from '@/components/Topic/TopicItem.interface';
import { Html } from '@/components/SvgComponents/Html';
import { Javascript } from '@/components/SvgComponents/Javascript';
import { Css } from '@/components/SvgComponents/Css';
import { Accessibility } from '@/components/SvgComponents/Accessibility';

export const mockTopics: ITopicItem[] = [
  {
    id: 1,
    text: 'HTML',
    icon: (iconSize) => <Html width={iconSize} height={iconSize} />,
    iconBgColor: '#FFF1E9',
  },
  {
    id: 2,
    text: 'CSS',
    icon: (iconSize) => <Css width={iconSize} height={iconSize} />,
    iconBgColor: '#E0FDEF',
  },
  {
    id: 3,
    text: 'Javascript',
    icon: (iconSize) => <Javascript width={iconSize} height={iconSize} />,
    iconBgColor: '#EBF0FF',
  },
  {
    id: 4,
    text: 'Accessibility',
    icon: (iconSize) => <Accessibility width={iconSize} height={iconSize} />,
    iconBgColor: '#F6E7FF',
  },
];

'use client';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { mockTopics } from '@/constants/topics';
import { ITopicItem } from '@/components/Topic/TopicItem.interface';

export const useGetTopic = (): ITopicItem | undefined => {
  const params = useRouter()?.query;
  const topicName = params.topic as string;
  const topic = useMemo(() => {
    return mockTopics?.find(
      (topic) => topic.text.toUpperCase() === topicName?.toUpperCase(),
    );
  }, [params]);
  return topic;
};

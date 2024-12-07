'use client';

import React from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { ITopicItem } from './TopicItem.interface';

const TopicItem: React.FC<ITopicItem> = ({
  id,
  text,
  icon,
  iconBgColor,
  onClick,
}) => {
  const { selectedTopic } = useSelector((state: RootState) => state.topic);
  const iconSize = useBreakpointValue({ base: '28px', sm: '40px' });

  return (
    <Flex
      gap={8}
      bg={'var(--button-background-color)'}
      alignItems='center'
      p={{ base: 2, sm: 3, md: '4.5' }}
      borderRadius={24}
      height='max-content'
      boxShadow={'var(--button-shadow)'}
      cursor='pointer'
      onClick={onClick}
      key={id}
      _hover={{
        border: 'solid 3px var(--toggle-color)',
      }}
      border={
        selectedTopic === text
          ? 'solid 3px var(--toggle-color)'
          : 'solid 3px transparent'
      }
    >
      <Box
        w={{ base: '40px', sm: '56px' }}
        h={{ base: '40px', sm: '56px' }}
        bg={iconBgColor}
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='8px'
      >
        {icon?.(iconSize)}
      </Box>
      <Text
        fontSize={{ base: '18px', sm: '28px' }}
        textStyle='headingS'
        textColor={'var(--button-text-color)'}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default TopicItem;

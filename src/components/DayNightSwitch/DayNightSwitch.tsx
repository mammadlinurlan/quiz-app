'use client';

import { useState, useEffect } from 'react';
import {
  Switch,
  useColorMode,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
// import { Sun } from '@/components/SvgComponents/Sun';
import { Sun } from '../../components/SvgComponents/Sun';
import { Moon } from '../../components/SvgComponents/Moon';

export default function DayNightSwitch() {
  const iconSize = useBreakpointValue({ base: '16px', sm: '24px' });
  const togglePaddingSize = useBreakpointValue({ base: '3px 4px', sm: '4px' });
  const { toggleColorMode, colorMode } = useColorMode();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
    toggleColorMode();
  };

  useEffect(() => {
    setIsChecked(colorMode === 'dark');
  }, [colorMode]);

  return (
    <Flex gap={{ base: 2, sm: 4 }} align={'center'}>
      <Sun width={iconSize} height={iconSize} />
      <div onClick={toggleColorMode}></div>
      <Switch
        data-testid={'switch'}
        size={{ base: 'sm', sm: 'md' }}
        isChecked={isChecked}
        sx={{
          '& .chakra-switch__track': {
            backgroundColor: 'var(--toggle-color)',
            padding: togglePaddingSize,
          },

          '& .chakra-switch__thumb': {
            backgroundColor: 'white',
          },
        }}
        onChange={handleChange}
      />
      <Moon width={iconSize} height={iconSize} />
    </Flex>
  );
}

'use client';

import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import { store } from '../../../store/store';
import theme from '../../../theme';

interface Props {
  children: React.ReactNode;
}

export function ProviderWrapper(props: Props) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {props.children}
      </ChakraProvider>
    </Provider>
  );
}

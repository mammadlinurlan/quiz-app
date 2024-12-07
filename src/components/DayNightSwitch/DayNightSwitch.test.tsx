import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

import DayNightSwitch from './DayNightSwitch';

describe('Dark mode toggle test', () => {
  test('Should change light mode to dark mode', () => {
    render(
      <ChakraProvider>
        <DayNightSwitch />
      </ChakraProvider>,
    );
    const htmlTag = document.documentElement;
    const switchElement = screen.getByTestId('switch');

    expect(htmlTag.getAttribute('data-theme')).toBe('light');
    fireEvent.click(switchElement);
    expect(htmlTag.getAttribute('data-theme')).toBe('dark');
  });
});

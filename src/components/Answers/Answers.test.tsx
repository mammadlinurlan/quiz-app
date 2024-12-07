import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '../../../store/store';
import { IQuestion } from '../../../models/interface';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Quiz } from '../Quiz/Quiz';

const mockQuestions: IQuestion[] = [
  {
    id: 1,
    question: 'What is the purpose of the <head> tag in an HTML document?',
    options: [
      {
        id: 1,
        value: 'To define the main content of the page',
        variant: 'A',
      },
      {
        id: 2,
        value: 'To contain meta-information about the document',
        variant: 'B',
      },
      {
        id: 3,
        value: 'To display the page title in the browser',
        variant: 'C',
      },
      { id: 4, value: 'To include external JavaScript files', variant: 'D' },
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: 'Test 2',
    options: [
      {
        id: 1,
        value: 'To define the main content of the page',
        variant: 'A',
      },
      {
        id: 2,
        value: 'To contain meta-information about the document',
        variant: 'B',
      },
      {
        id: 3,
        value: 'To display the page title in the browser',
        variant: 'C',
      },
      { id: 4, value: 'To include external JavaScript files', variant: 'D' },
    ],
    correctAnswer: 2,
  },
];
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Quiz Component with Redux', () => {
  test('should render answers and question correctly', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { topic: 'html' }, // Mocking router query params if needed
      push: jest.fn(),
    });
    render(
      <Provider store={store}>
        <ChakraProvider>
          <Quiz questions={mockQuestions} />
        </ChakraProvider>
      </Provider>,
    );

    expect(screen.getByText(mockQuestions[0].question)).toBeInTheDocument();
    mockQuestions[0].options.forEach((answer) => {
      expect(screen.getByText(answer.value)).toBeInTheDocument();
    });
  });
});

import { NextApiRequest, NextApiResponse } from 'next';

import { ITopicQuestions } from '../../../models/interface';

const questionsData: ITopicQuestions = {
  html: [
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
      correctAnswer: 2, // B
    },
    {
      id: 2,
      question: 'Which HTML element is used to define a hyperlink?',
      options: [
        { id: 1, value: '<a>', variant: 'A' },
        { id: 2, value: '<link>', variant: 'B' },
        { id: 3, value: '<div>', variant: 'C' },
        { id: 4, value: '<button>', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 3,
      question: 'What does the <img> tag in HTML do?',
      options: [
        { id: 1, value: 'It embeds a video', variant: 'A' },
        { id: 2, value: 'It embeds an image', variant: 'B' },
        { id: 3, value: 'It creates a clickable button', variant: 'C' },
        { id: 4, value: 'It displays a header', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 4,
      question:
        'What is the correct syntax to include an external JavaScript file in an HTML document?',
      options: [
        { id: 1, value: '<script src="script.js"></script>', variant: 'A' },
        {
          id: 2,
          value: '<javascript src="script.js"></javascript>',
          variant: 'B',
        },
        { id: 3, value: '<link src="script.js"></link>', variant: 'C' },
        { id: 4, value: '<script href="script.js"></script>', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 5,
      question: 'What does the <form> tag represent in HTML?',
      options: [
        { id: 1, value: 'A section for image content', variant: 'A' },
        {
          id: 2,
          value: 'A section for user input to be submitted',
          variant: 'B',
        },
        { id: 3, value: 'A container for JavaScript functions', variant: 'C' },
        { id: 4, value: 'A container for multimedia content', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 6,
      question:
        'What attribute is used to define an alternative text for an image if the image cannot be displayed?',
      options: [
        { id: 1, value: 'alt', variant: 'A' },
        { id: 2, value: 'src', variant: 'B' },
        { id: 3, value: 'title', variant: 'C' },
        { id: 4, value: 'description', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 7,
      question: 'Which of the following is a valid HTML5 doctype declaration?',
      options: [
        { id: 1, value: '<!DOCTYPE html>', variant: 'A' },
        { id: 2, value: '<!DOCTYPE HTML PUBLIC>', variant: 'B' },
        { id: 3, value: '<!DOCTYPE HTML5>', variant: 'C' },
        { id: 4, value: '<!DOCTYPE HTML5 PUBLIC>', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 8,
      question: 'What tag is used to define a table row in HTML?',
      options: [
        { id: 1, value: '<tr>', variant: 'A' },
        { id: 2, value: '<table>', variant: 'B' },
        { id: 3, value: '<td>', variant: 'C' },
        { id: 4, value: '<th>', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 9,
      question: 'What is the default value of the <input> type attribute?',
      options: [
        { id: 1, value: 'text', variant: 'A' },
        { id: 2, value: 'password', variant: 'B' },
        { id: 3, value: 'checkbox', variant: 'C' },
        { id: 4, value: 'radio', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
  ],
  javascript: [
    {
      id: 1,
      question: 'What is the result of 2 + 2?',
      options: [
        { id: 1, value: '3', variant: 'A' },
        { id: 2, value: '4', variant: 'B' },
        { id: 3, value: '5', variant: 'C' },
        { id: 4, value: '6', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 2,
      question: 'What is the keyword to declare a variable in JavaScript?',
      options: [
        { id: 1, value: 'var', variant: 'A' },
        { id: 2, value: 'let', variant: 'B' },
        { id: 3, value: 'const', variant: 'C' },
        { id: 4, value: 'define', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 3,
      question: "What is the result of typeof 'hello' in JavaScript?",
      options: [
        { id: 1, value: 'string', variant: 'A' },
        { id: 2, value: 'number', variant: 'B' },
        { id: 3, value: 'boolean', variant: 'C' },
        { id: 4, value: 'undefined', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 4,
      question:
        'Which of the following is a method to add a new element to an array in JavaScript?',
      options: [
        { id: 1, value: 'push()', variant: 'A' },
        { id: 2, value: 'shift()', variant: 'B' },
        { id: 3, value: 'pop()', variant: 'C' },
        { id: 4, value: 'splice()', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 5,
      question: 'What is the correct syntax for a JavaScript function?',
      options: [
        { id: 1, value: 'function myFunc() {}', variant: 'A' },
        { id: 2, value: 'function = myFunc() {}', variant: 'B' },
        { id: 3, value: 'func myFunc() {}', variant: 'C' },
        { id: 4, value: 'function: myFunc() {}', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 6,
      question:
        "What is the correct way to call a function named 'myFunction' in JavaScript?",
      options: [
        { id: 1, value: 'myFunction()', variant: 'A' },
        { id: 2, value: 'call myFunction()', variant: 'B' },
        { id: 3, value: 'myFunction[]', variant: 'C' },
        { id: 4, value: 'execute myFunction', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 7,
      question:
        'Which of the following operators is used to compare values in JavaScript?',
      options: [
        { id: 1, value: '=', variant: 'A' },
        { id: 2, value: '==', variant: 'B' },
        { id: 3, value: '===', variant: 'C' },
        { id: 4, value: '&&', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 8,
      question:
        'Which method is used to remove the last element from an array in JavaScript?',
      options: [
        { id: 1, value: 'pop()', variant: 'A' },
        { id: 2, value: 'push()', variant: 'B' },
        { id: 3, value: 'shift()', variant: 'C' },
        { id: 4, value: 'unshift()', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 9,
      question: 'What does the keyword "this" refer to in JavaScript?',
      options: [
        { id: 1, value: 'The current function', variant: 'A' },
        { id: 2, value: 'The parent function', variant: 'B' },
        { id: 3, value: 'The global object', variant: 'C' },
        { id: 4, value: 'The object that is calling the method', variant: 'D' },
      ],
      correctAnswer: 4, // D
    },
  ],
  accessibility: [
    {
      id: 1,
      question: 'What does the "alt" attribute in an <img> tag provide?',
      options: [
        { id: 1, value: 'Image dimensions', variant: 'A' },
        { id: 2, value: 'Alternative text for screen readers', variant: 'B' },
        { id: 3, value: 'Hyperlink destination', variant: 'C' },
        { id: 4, value: 'CSS styling for the image', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 2,
      question: 'What is ARIA and what is its purpose?',
      options: [
        { id: 1, value: 'A CSS framework for styling', variant: 'A' },
        { id: 2, value: 'An HTML attribute for navigation', variant: 'B' },
        {
          id: 3,
          value: 'A set of attributes to improve accessibility',
          variant: 'C',
        },
        { id: 4, value: 'A JavaScript library', variant: 'D' },
      ],
      correctAnswer: 3, // C
    },
    {
      id: 3,
      question: 'Which attribute is used to define a keyboard shortcut?',
      options: [
        { id: 1, value: 'accesskey', variant: 'A' },
        { id: 2, value: 'shortcut', variant: 'B' },
        { id: 3, value: 'keybind', variant: 'C' },
        { id: 4, value: 'keypress', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 4,
      question: 'What is the purpose of the "role" attribute in HTML?',
      options: [
        { id: 1, value: 'To define the style of an element', variant: 'A' },
        {
          id: 2,
          value: 'To describe an element’s purpose for assistive technologies',
          variant: 'B',
        },
        { id: 3, value: 'To create interactive content', variant: 'C' },
        { id: 4, value: 'To enable animations', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 5,
      question: 'What is a semantic HTML element?',
      options: [
        {
          id: 1,
          value: 'An element that has predefined styling',
          variant: 'A',
        },
        {
          id: 2,
          value: 'An element that clearly describes its content',
          variant: 'B',
        },
        { id: 3, value: 'An element used only for images', variant: 'C' },
        { id: 4, value: 'An element that requires JavaScript', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 6,
      question:
        'Which HTML element is used to define navigation links for assistive technologies?',
      options: [
        { id: 1, value: '<nav>', variant: 'A' },
        { id: 2, value: '<div>', variant: 'B' },
        { id: 3, value: '<aside>', variant: 'C' },
        { id: 4, value: '<section>', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 7,
      question: 'What is a screen reader?',
      options: [
        {
          id: 1,
          value: 'A tool that magnifies text for the visually impaired',
          variant: 'A',
        },
        {
          id: 2,
          value:
            'A software that converts visual information into audio for users',
          variant: 'B',
        },
        { id: 3, value: 'A device to track user input', variant: 'C' },
        { id: 4, value: 'A plugin for optimizing images', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 8,
      question:
        'Which HTML attribute provides a description for interactive elements?',
      options: [
        { id: 1, value: 'aria-label', variant: 'A' },
        { id: 2, value: 'tooltip', variant: 'B' },
        { id: 3, value: 'alt', variant: 'C' },
        { id: 4, value: 'meta', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 9,
      question: 'What is the purpose of a "skip to main content" link?',
      options: [
        {
          id: 1,
          value: 'To bypass non-essential content for accessibility users',
          variant: 'A',
        },
        { id: 2, value: 'To bookmark the page', variant: 'B' },
        { id: 3, value: 'To navigate to the footer', variant: 'C' },
        { id: 4, value: 'To zoom into the page content', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 10,
      question:
        'Which of the following is important for color contrast accessibility?',
      options: [
        { id: 1, value: 'Using bright colors only', variant: 'A' },
        {
          id: 2,
          value: 'Ensuring high contrast between text and background',
          variant: 'B',
        },
        { id: 3, value: 'Adding animations to links', variant: 'C' },
        { id: 4, value: 'Using inline styles', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
  ],

  css: [
    {
      id: 1,
      question: 'What does the CSS `display: flex` property do?',
      options: [
        {
          id: 1,
          value: 'It centers the content within an element',
          variant: 'A',
        },
        {
          id: 2,
          value: 'It creates a flex container for its children',
          variant: 'B',
        },
        { id: 3, value: 'It makes the element inline', variant: 'C' },
        {
          id: 4,
          value: 'It applies a grid layout to the element',
          variant: 'D',
        },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 2,
      question: 'Which property is used to change the text color in CSS?',
      options: [
        { id: 1, value: 'color', variant: 'A' },
        { id: 2, value: 'text-color', variant: 'B' },
        { id: 3, value: 'font-color', variant: 'C' },
        { id: 4, value: 'background-color', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 3,
      question:
        'How do you select an element with the class name "box" in CSS?',
      options: [
        { id: 1, value: '#box', variant: 'A' },
        { id: 2, value: '.box', variant: 'B' },
        { id: 3, value: 'box', variant: 'C' },
        { id: 4, value: '[box]', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 4,
      question: 'Which CSS property is used to change the font size of text?',
      options: [
        { id: 1, value: 'font-size', variant: 'A' },
        { id: 2, value: 'font-style', variant: 'B' },
        { id: 3, value: 'font-weight', variant: 'C' },
        { id: 4, value: 'text-size', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 5,
      question: 'What does the `position: absolute` property do?',
      options: [
        {
          id: 1,
          value: 'It positions the element relative to its parent',
          variant: 'A',
        },
        {
          id: 2,
          value: 'It positions the element relative to the entire page',
          variant: 'B',
        },
        {
          id: 3,
          value: 'It positions the element at the bottom of the container',
          variant: 'C',
        },
        {
          id: 4,
          value: 'It positions the element within the viewport',
          variant: 'D',
        },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 6,
      question:
        'Which property is used to create space between the content of an element and its border?',
      options: [
        { id: 1, value: 'padding', variant: 'A' },
        { id: 2, value: 'margin', variant: 'B' },
        { id: 3, value: 'border-spacing', variant: 'C' },
        { id: 4, value: 'spacing', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 7,
      question: 'What does the `z-index` property control in CSS?',
      options: [
        { id: 1, value: 'The stack order of elements', variant: 'A' },
        { id: 2, value: 'The size of the element', variant: 'B' },
        { id: 3, value: 'The background color of the element', variant: 'C' },
        { id: 4, value: 'The opacity of the element', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
    {
      id: 8,
      question:
        'Which property is used to set the background color of an element in CSS?',
      options: [
        { id: 1, value: 'color', variant: 'A' },
        { id: 2, value: 'background-color', variant: 'B' },
        { id: 3, value: 'bg-color', variant: 'C' },
        { id: 4, value: 'background', variant: 'D' },
      ],
      correctAnswer: 2, // B
    },
    {
      id: 9,
      question: 'What is the purpose of the `float` property in CSS?',
      options: [
        {
          id: 1,
          value: 'It positions an element relative to its parent',
          variant: 'A',
        },
        {
          id: 2,
          value: 'It makes an element float above other content',
          variant: 'B',
        },
        {
          id: 3,
          value:
            'It positions an element to the left or right of its container',
          variant: 'C',
        },
        { id: 4, value: 'It creates space between elements', variant: 'D' },
      ],
      correctAnswer: 3, // C
    },
    {
      id: 10,
      question:
        'Which CSS property is used to control the spacing between words in a text?',
      options: [
        { id: 1, value: 'word-spacing', variant: 'A' },
        { id: 2, value: 'letter-spacing', variant: 'B' },
        { id: 3, value: 'text-spacing', variant: 'C' },
        { id: 4, value: 'line-spacing', variant: 'D' },
      ],
      correctAnswer: 1, // A
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { topic },
  } = req;

  if (req.method === 'GET') {
    if (!topic || !((topic as string).toLowerCase() in questionsData)) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    // Return the questions for the specified topic
    res.status(200).json(questionsData[(topic as string).toLowerCase()]);
  }
  if (req.method === 'POST') {
    const { topic, questionId, answer } = req.body;

    const question = questionsData[(topic as string).toLowerCase()].find(
      (q) => q.id === questionId,
    );
    if (!question) {
      return res.status(400).json({ message: 'Not found' });
    }

    const isCorrect = answer === question.correctAnswer;

    return res
      .status(200)
      .json({ isCorrect, correctAnswer: question.correctAnswer });
  }
}

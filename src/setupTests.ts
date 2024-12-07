// Mocking matchMedia for Jest tests with a more detailed implementation
global.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false, // default behavior for non-matching query
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated method
  removeListener: jest.fn(), // deprecated method
}));

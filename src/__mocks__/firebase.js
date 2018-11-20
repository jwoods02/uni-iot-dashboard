const firebaseMock = jest.genMockFromModule("firebase");

// firebaseMock.initializeApp.mockImplementation(true);
// const auth = jest.fn({});

export default {
  initializeApp: jest.fn(() => {}),
  auth: jest.fn(() => {
    function signInWithEmailAndPassword() {
      Promise.resolve();
    }
  })
};

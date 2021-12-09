const storage = [];

const localStorageMock = {
  getItem: (key) => storage[key],
  setItem: (key, value) => {
    storage[key] = value;
  },
};

export default localStorageMock;

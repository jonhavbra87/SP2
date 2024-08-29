/* eslint-env jest */

import * as mocks from '../../mocks/index.js';
import { logout } from './logout.js';
import { login } from './login.js';
import { load } from '../../storage/index.js';

// Mocking document for tests

global.document = {
  querySelector: jest.fn(() => ({
    addEventListener: jest.fn((event, callback) => {
      if (event === 'click') {
        callback(); // simulate a click
      }
    }),
  })),
};

const userResponseClone = () => ({ data: { ...mocks.authResponse.data } });

describe('logout', () => {
  beforeEach(() => {
    global.fetch = mocks.createMockFetch(userResponseClone());
    global.localStorage = mocks.localStorageMock();
  });
  afterEach(() => {
    global.localStorage.clear();
  });

  it('should set the token with a successful login', async () => {
    await login(mocks.validUserData.email, mocks.validUserData.password);
    expect(load('accessToken')).toBe(mocks.authResponse.data.accessToken);
  });

  it('should return the user name with a successful login', async () => {
    const result = await login(mocks.validUserData.email, mocks.validUserData.password);
    expect(result.name).toBe(mocks.authResponse.data.name);
  });

  it('clears the token from localStorage', () => {
    localStorage.setItem('accessToken', mocks.authResponse.data.accessToken);
    localStorage.setItem('profile', JSON.stringify(mocks.authResponse.data));
    logout();
    expect(localStorage.getItem('accessToken')).toBe(null);
    expect(localStorage.getItem('profile')).toBe(null);
  });
});

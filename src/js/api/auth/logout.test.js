/* eslint-env jest */

import * as mocks from '../../mocks/index.js';
import { save } from '../../storage/save.js';
import { load } from '../../storage/load.js';
import { login } from './login.js';
import { logout } from './logout.js';

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
    expect(load('token')).toBe(mocks.authResponse.data.accessToken);
  });

  it('should return the user name with a successful login', async () => {
    const result = await login(mocks.validUserData.email, mocks.validUserData.password);
    expect(result.name).toBe(mocks.authResponse.data.name);
  });

  it('clears the token from localStorage', () => {
    save('token', mocks.authResponse.data.accessToken);
    save('profile', JSON.stringify(mocks.authResponse.data));
    logout();
    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('profile')).toBe(null);
  });
});

export const validUserData = {
  name: 'Valid User',
  email: 'validUser@stud.noroff.no',
  password: 'password!23',
};

export const invalidUserData = {
  name: 'Invalid User',
  email: 'invalidUser@gmail.com',
  password: 'password323',
};

export const accessToken = 'FAKE_ACCESS_TOKEN';

export const authResponse = {
  data: {
    ...validUserData,
    accessToken,
  },
};

import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'aasdfasdgdsfgsi8347ytijbrfkjert834hi', {
    expiresIn: '30d',
  });
};

export default generateToken;

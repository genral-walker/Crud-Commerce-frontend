const dev = {
  BASE_URL: 'http://localhost:3000/scandiweb-ecommerce/backend',
};

const prod = {
  BASE_URL: '',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default config;

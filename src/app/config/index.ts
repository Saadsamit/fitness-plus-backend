import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  url:
    process.env.NODE_ENV === 'production'
      ? process.env.SERVER_URL
      : process.env.LOCAL_URL,
};

export default config;

import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function Main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('connected');
    app.listen(config.port);
  } catch (error) {
    console.log(error);
  }
}

Main();

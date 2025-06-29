import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    console.log(`Database Connection Successful`);

    server = app.listen(config.port, () => {
      console.log(`Dresspro Server Running On Port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// Server shutdown for unhandled Rejection
process.on('unhandledRejection', () => {
  console.log(`🥺 unhandledRejection is Detected ! shutting down ... `);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// Server shutdown for uncaught exception
process.on('uncaughtException', () => {
  console.log(`🥺 uncaught exception is Detected ! shutting down ... `);
  process.exit(1);
});

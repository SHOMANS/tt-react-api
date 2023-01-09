import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connect('mongodb+srv://SHOMANS:10061999@cluster0.aey1sqb.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

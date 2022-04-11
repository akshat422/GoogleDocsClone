import mongoose from "mongoose";

const Connection = async (
  username = "usercode",
  password = "codeforinterview"
) => {
  const URL = `mongodb+srv://akshat:akshat@cluster0.tuyd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    `;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;

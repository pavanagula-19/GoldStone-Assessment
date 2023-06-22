const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRouter = require('./routes/user.routes');
const { exportCSVRouter } = require('./routes/exportCSV.routes');
const UserModel = require('./models/user.model');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send('Home page..');
})

app.use("/user", userRouter);
app.use("/export-csv", exportCSVRouter)

// FOR WRONG URL-ENDPOINTS
app.use("*", (req, res) => {
  res.status(404).send({ message: "Provided wrong URL-Endpoint!" });
})
app.listen(process.env.PORT || 8080, async () => {
  try {
    console.log('Server connected successfully.');
    console.log('⏳ DB Connecting...');
    await connectDB// Add parentheses to invoke the function
    console.log('✅ DB Connected');
  } catch (error) {
    console.log('❌ error:', error);
  }
});

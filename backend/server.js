const express = require('express')
const app = express();
const PORT = proccess.env.PORT || 8000

app.use('/users', userRoute)

app.use(handleError)

app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running, you better catch it!");
  });
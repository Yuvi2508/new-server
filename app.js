import express from "express";




const server = express();

const port = process.env.PORT || 3000


server.use('*', (req, res, next) => {
      res.send('hello')
})


server.listen(port, () => {
      console.log(`lisening on port ${port}`);
})

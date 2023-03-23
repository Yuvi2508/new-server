import express from "express";




const server = express();

server.use('*', (req, res, next) => {
      res.send('hello')
})


server.listen(3000, () => {
      console.log(`lisening on port ${3000}`);
})

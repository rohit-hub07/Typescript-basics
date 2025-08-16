import express, { Request, Response, NextFunction} from 'express';
import router from './routes/todo';
import bodyParser from 'body-parser';

const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.use("/todos", router);

//error handler 
app.use((err: Error,req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({message: err.message})
})

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
})
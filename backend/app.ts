import express, { Request, Response, NextFunction} from "express";
import InputError from "./errors/InputError";
import ApiRouter from "./routes";
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', ApiRouter);
app.use('/api', express.static('public/logos'));

/* Si no entro a ninguna ruta, va al manejo de errores. */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof InputError) {
    res.status(400).send({ err: err.message });
  }

  if (!err || err.status == 404) {
    return res.status(404).send({ err: 'Endpoint not found.' });
  }

  if (err.status) {
    return res.status(err.status).send({ err: err.message });
  }

  return res.status(500).send({ err: 'Internal server error.' });
})


export default app;

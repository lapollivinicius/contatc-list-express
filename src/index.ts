import express, { type Express, type Request, type Response } from 'express';
import path from "path"
import router from './routes/routes.ts';
import mongoose from 'mongoose';
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import csrf from "csurf";
import { checkCSFRError, CRSFMiddleware } from "./middleware/csrf.ts";
import session from "express-session";

dotenv.config();
const databaseURL = process.env.DATABASE_URL!

if (!databaseURL) {
  throw new Error("Banco de dados não registrado");
}

await mongoose.connect(databaseURL)

const app: Express = express();

const _dirname = process.cwd();
app.use('/static', express.static(path.join(_dirname, "src", 'public')));

app.set("views", path.resolve(_dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(
  session({
    secret: "secret",
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000*60*60*24*7,
      httpOnly: true
    }
  }),
);

app.use(csrf());
app.use(CRSFMiddleware);
app.use(router);
app.use(checkCSFRError);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/")
});
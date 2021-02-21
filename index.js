import { typeDefs, resolvers } from "./graphql";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { createServer } from "http";

dotenv.config();

const port = process.env.PORT || "4000";
const app = express();

app.use(
    cors({
      origin: [
        "http://localhost:3000",
      ],
      credentials: true,
    })
  );
  app.use(bodyParser.json());
  
  app.use(cookieParser());


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
 
});
console.log(new Date(Date.now()).toISOString())

apolloServer.applyMiddleware({ app, cors: false });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

const db = process.env.MONGO_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`MongoDB connected`);
    //makeData();
  })
  .catch((err) => console.log(`MongoDB connection FAILED`, err));

httpServer.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
  );
});

import  express  from "express";
import cors from 'cors'
import 'dotenv/config'
import env from './util/ValidateEnv'
import mainRoutes from './routes/mainRoutes'
import { errorHandler, notFoundPage } from "./middleware/errorMiddleware";
import db from './config/dbConnect'
const Port = env.PORT || 3001
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/todolist/api',mainRoutes )
app.use(notFoundPage)
app.use(errorHandler)



db();
app.listen(Port,() => {
console.log('server is listeing in Port:' , Port)
})
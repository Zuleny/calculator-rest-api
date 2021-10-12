import express, { json } from 'express';
import morgan from 'morgan';
import cors from "cors";

//routes
import calculatorRoutes from './api/calculator/routes/calculator.route';

//initalizations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);      // using a port assigned for OS; else 3000 port

// Globals  Variables

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());

//routes
app.get('/', (req, res) =>{
    res.json("Bienvenidos");
})

app.use('/api/adder',calculatorRoutes);


export default app;
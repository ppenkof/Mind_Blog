import express from 'express';
import routes from './routes.js';
import handlebars from 'express-handlebars';
import mongoose, { get, mongo } from 'mongoose';
import cokieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';
import helpers from './models/helpers/index.js';
import 'dotenv/config';
import { errorMiddleware } from './middlewares/errorMiddleware.js';


const app = express();  

//Connect to DB
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'exam_prep_db' 
    });

    console.log('Connected to DB successfuly...')
} catch (error) {
    console.error('Error connecting to DB: ', error.message);
}

//Config handlebars
app.engine('hbs',handlebars.engine({ 
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    } ,
    helpers,
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Add static middleware
app.use(express.static('src/public'));

//Cokie parser
app.use(cokieParser());

//Body parser
app.use(express.urlencoded({ extended: false })); 

//Use Auth middleware
app.use(authMiddleware);

//Add routes
app.use(routes);

//Add global error handling middleware  
app.use(errorMiddleware)

app.listen(process.env.PORT, () => {  
    console.log(`Server is running on http://localhost:${process.env.PORT}...`);  
});


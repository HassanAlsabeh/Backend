import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app =express();
app.use(cors());
mongoose.connect('mongodb+srv://hassanalsabeh:Intelligent94@cluster0.xbziz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection
    .once('open', () => console.log("Data base is connected"))
    .on('error', (error) => {
        console.log("we have an error" + error);
    });



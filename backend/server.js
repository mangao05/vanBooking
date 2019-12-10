const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@yeom-02rhg.mongodb.net/vanforhire?retryWrites=true&w=majority",{
	useNewUrlParser:true, 
	useUnifiedTopology:true, 
	useFindAndModify:false,
	useCreateIndex: true
}).then(()=>{
	console.log("Remote Database Connection Established");
});

// Instantiate routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const samplesRouter = require('./routes/samples');
const vansRouter = require('./routes/vans');

// Use the instantiated routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/samples', samplesRouter);
app.use('/vans', vansRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
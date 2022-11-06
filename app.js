var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 8082;

//db connection with mongoose(mongodb)
mongoose
    .connect(
        'mongodb+srv://admin:uv1Uee550cHbcFVn@test.wcdtbi5.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.log(err);
    });

//to get the css file from public folder
app.use(express.static(__dirname + '/public'));

//interact with index.ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose schema
var todoSchema = new mongoose.Schema({
    name: String,
});

var Todo = mongoose.model('Todo', todoSchema);

//routes
app.get('/', (req, res) => {
    // gets the todos
    Todo.find({}, (error, todoList) => {
        if (error) {
            console.log(error);
        } else {
            res.render('index.ejs', { todoList: todoList });
        }
    });
});

app.get('/index.js', (req, res) => {
    res.sendFile('index.js');
});

// new todo
app.post('/newtodo', (req, res) => {
    if (!req.body.task || !req.body.task.replace(/\s/g, '')) {
        res.redirect('/');
    } else if (req.body.task) {
        var newTask = new Todo({
            name: req.body.task,
        });
        Todo.create(newTask, (err, Todo) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`inserted ${newTask} to the database todo`);
                res.redirect('/');
            }
        });
    }
});

// delete a todo
app.get('/delete/:id', (req, res) => {
    var taskId = req.params.id; //get the id from the api
    console.log(req.params.id);
    mongoose.model('Todo').deleteOne({ _id: taskId }, (err, result) => {
        if (err) {
            console.log(`Error is deleting the task ${taskId}`);
        } else {
            console.log('Task successfully deleted from database');
            res.redirect('/');
        }
    });
});

/*
app.post('/edit/:id', (req, res) => {
    var taskId = req.params.id;
    console.log(req.params.id);
    console.log(req.body);
    mongoose
        .model('Todo')
        .findByIdAndUpdate(taskId, { name: 'Fornite' }, (error, result) => {
            if (error) {
                console.log('Error on edit task. Task ID: ' + taskId);
            } else {
                console.log('Task successfully edited on database!');
                res.redirect('/');
            }
        });
});
*/

app.post('/delAlltodo', (req, res) => {
    var myquery = { name: /^O/ };
    mongoose.model('Todo').deleteMany({}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Deleted all tasks`);
            res.redirect('/');
        }
    });
});

// catch invalid page
app.get('*', (req, res) => {
    res.send('<h1>Invalid Page</h1>');
});

app.listen(port, error => {
    if (error) {
        console.log('Issue in connecting to the server');
    } else {
        console.log('Successfully connected to the server');
        console.log(`localhost:${port}`);
    }
});

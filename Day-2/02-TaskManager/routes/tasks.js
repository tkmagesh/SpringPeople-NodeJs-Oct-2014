var express = require('express');
var router = express.Router();

var tasksData = [
    {id : 1, name : "Learn JavaScript", isCompleted : false },
    {id : 2, name : "Explore Node.js", isCompleted : true },
    {id : 3, name : "Master Angular.js", isCompleted : false }
];

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
    res.render('tasks/list', {tasks : tasksData});
});

router.get('/new',function(req,res){
    res.render('tasks/new');
});

router.post('/new',function(req,res){
    var taskName = req.body.newTaskName;
    var newTaskId = tasksData.reduce(function(s,task){
        return s > task.id ? s : task.id;
    },0)+1;
    var newTask = {
        id : newTaskId,
        name : taskName,
        isCompleted : false
    };
    tasksData.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id',function(req,res){
    var taskId = parseInt(req.params.id,10);
    var task = tasksData.filter(function(t){
        return t.id === taskId;
    })[0];
    task.isCompleted = !task.isCompleted;
    res.redirect('/tasks');
});
router.post('/toggle',function(req,res){
    var taskId = parseInt(req.body.id,10);
    var task = tasksData.filter(function(t){
        return t.id === taskId;
    })[0];
    task.isCompleted = !task.isCompleted;
    res.write(JSON.stringify(task));
    res.end();
});

module.exports = router;

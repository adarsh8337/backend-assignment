const Task = require("../models/Task");

exports.createTask = async (req,res)=>{
try {
const task = new Task({
title:req.body.title,
description:req.body.description,
userId:req.user.id
});

await task.save();

res.json(task);
} catch (err) {
res.status(500).json({error: err.message});
}
};

exports.getTasks = async (req,res)=>{
try {
const tasks = await Task.find({userId:req.user.id});

res.json(tasks);
} catch (err) {
res.status(500).json({error: err.message});
}
};

exports.updateTask = async (req,res)=>{
try {
const task = await Task.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

if (!task) {
return res.status(404).json({message: "Task not found"});
}

res.json(task);
} catch (err) {
res.status(500).json({error: err.message});
}
};

exports.deleteTask = async (req,res)=>{
try {
const task = await Task.findByIdAndDelete(req.params.id);

if (!task) {
return res.status(404).json({message: "Task not found"});
}

res.json({message:"Task deleted"});
} catch (err) {
res.status(500).json({error: err.message});
}
};
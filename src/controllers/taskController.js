const Task = require("../models/task");
const path = require("path");
const statusController = require('./statusController')

exports.getAllTasks = async (req, res, next) => {
  try {
    const dateNow = Date.now()
    var incompleteTasks = await Task.findAll({ where: { isDone: false } });
    var completeTasks = await Task.findAll({ where: { isDone: true } });
    completeTasks = statusController.setStatusCompleteTasks(completeTasks)
    incompleteTasks = statusController.setStatusIncompleteTasks(incompleteTasks)
    res.status(200).render(path.join(__dirname, "../views/pages/index.ejs"), {
      incompleteTasks,
      completeTasks,
      percentage: await statusController.buildStatusInfos()
    });
  } catch (err) {
    next(err);
  }
}; 
exports.getCompleteTasks = async (req, res, next) => {
  try {
    var completeTasks = await Task.findAll({ where: { isDone: true } });
    completeTasks = statusController.setStatusCompleteTasks(completeTasks)
    res
      .status(200)
      .render(path.join(__dirname, "../views/pages/tarefas-concluidas.ejs"), {
        completeTasks,
        percentage: await statusController.buildStatusInfos()
      });
  } catch (err) {
    next(err);
  }
};

exports.createNewTask = async (req, res, next) => {
  try {
    const newTask = Task.build({ title: "Edite sua nova tarefa", date_limit: null });
    await newTask.save();
  } catch (err) {
    next(err);
  }
  res.status(200).redirect("/home");
};

exports.getTaskByid = async (req, res, next) => {
  let { id } = req.params;
  try {
    let task = await Task.findByPk(id);
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTaskById = async (req, res, next) => {
  const { id, title, description, date, listid } = req.body;
  try {
    const task = await Task.findByPk(id);

    task.title = title;

    task.description = description;

    task.date_limit = date !== "" ? date : null;

    // O correto é task.list_id ou task.listId, ao inves de task.listid
    task.list_id = listid != "" ? listid : null;

    await task.save();
    res.redirect("back");
  } catch (err) {
    next(err);
  }
};
exports.deleteTaskById = async (req, res, next) => {
  let { id } = Object.assign({}, req.params, req.body);
  try {
    const task = await Task.findByPk(id);
    task.destroy();
    res.redirect("back");
  } catch (err) {
    next(err);
  }
};
exports.toggleStatusTask = async (req, res, next) => {
  let { id } = Object.assign({}, req.params, req.body);
  try {
    const task = await Task.findByPk(id);
    task.isDone = !task.isDone;
    task.save();
    res.redirect("back");
  } catch (err) {
    next(err);
  }
};

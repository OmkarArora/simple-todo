const mongoose = require("mongoose");

// mongodb+srv://omkar:hlkARym02L0AwKry@cluster0.3rjzbxr.mongodb.net//todos
// .env
mongoose.connect(
  "mongodb+srv://omkar:hlkARym02L0AwKry@cluster0.3rjzbxr.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};

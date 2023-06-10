import React, { useState } from "react";
import { Button, Input, List, Icon } from "semantic-ui-react";
import "./App.css";

interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  createdDate: Date;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleAddTodo = () => {
    if (newTodo) {
      const newId = todos.length + 1;
      const createdDate = new Date();
      const newTodoItem: Todo = {
        id: newId,
        task: newTodo,
        isCompleted: false,
        createdDate: createdDate,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleSortByDate = () => {
    if (sortOrder === "asc") {
      const sortedTodos = [...todos].sort(
          (a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
      );
      setTodos(sortedTodos);
      setSortOrder("desc");
    } else {
      const sortedTodos = [...todos].sort(
          (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      );
      setTodos(sortedTodos);
      setSortOrder("asc");
    }
  };

  return (
      <div className="App">
        <h1>Todos</h1>
        <div className="todo-container">
          <Input
              className="todo-input"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add todo..."
          />
          <Button
              className="todo-button"
              primary
              onClick={handleAddTodo}
              disabled={!newTodo}
          >
            Add
          </Button>
          <Button.Group floated="right">
            {sortOrder === "asc" ? (
                <>
                  <Button content="Old to New" onClick={handleSortByDate} />
                  <Button.Or />
                  <Button content={<Icon name="arrow alternate circle down" />} onClick={handleSortByDate} />
                </>
            ) : (
                <>
                  <Button content={<Icon name="arrow alternate circle up" />} onClick={handleSortByDate} />
                  <Button.Or />
                  <Button content="New to Old" onClick={handleSortByDate} />
                </>
            )}
          </Button.Group>
        </div>
        <List divided relaxed className="todo-list">
          {todos.map((todo) => (
              <List.Item
                  key={todo.id}
                  className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
                  onDoubleClick={() => handleToggleComplete(todo.id)}
              >
                <List.Icon
                    name={todo.isCompleted ? "check circle" : "circle outline"}
                    onClick={() => handleToggleComplete(todo.id)}
                    className="todo-icon"
                />
                <List.Content>
                  <List.Description
                      className={
                        todo.isCompleted ? "todo-task completed" : "todo-task"
                      }
                  >
                    {todo.task}
                  </List.Description>
                  <List.Header>
                    <small className="todo-created">
                      Created: {todo.createdDate.toLocaleString()}
                    </small>
                  </List.Header>
                </List.Content>
                <List.Content floated="right">
                  <List.Icon
                      name="trash alternate outline"
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="todo-delete"
                  />
                </List.Content>
              </List.Item>
          ))}
        </List>
      </div>
  );
};

export default App;

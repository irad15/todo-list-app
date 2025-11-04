package com.Irad.todo.service;

import com.Irad.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {
    private final List<Todo> todos = new ArrayList<>();
    private long nextId = 1;

    // Add a new todo
    public Todo addTodo(Todo todo) {
        todo.setId(nextId++);
        todos.add(todo);
        return todo;
    }

    // Get all todos
    public List<Todo> getAllTodos() {
        return todos;
    }

    // Get a single todo by ID
    public Todo getTodoById(Long id){
        for (Todo todo:todos){
            if(todo.getId().equals(id)){
                return todo;
            }
        }
        return null;
    }

    // Update an existing todo
    public Todo updateTodo(Long id, Todo updatedTodo){
        Todo todo = getTodoById(id);
        if (todo != null) {
            todo.setTitle(updatedTodo.getTitle());
            todo.setCompleted(updatedTodo.isCompleted());
        }
        return todo;
    }

    // Delete a todo
    public boolean deleteTodo(Long id) {
        Todo todo = getTodoById(id);
        if (todo == null) {
            return false; // not found
        }
        todos.remove(todo);
        return true; // deleted
    }

}



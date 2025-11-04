import { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../api/todos';
import { useNavigate } from 'react-router-dom';

const TaskListPage = () => {
    const [todos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const navigate = useNavigate();

    // Fetch all todos on mount
    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getAllTodos();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    // Add a new todo
    const handleAddTodo = async () => {
        if (!newTitle.trim()) return;
        const newTodo = await createTodo({ title: newTitle, completed: false });
        setTodos(prev => [...prev, newTodo]);
        setNewTitle('');
    };

    // Toggle completed status
    const handleToggle = async (id) => {
        const todo = todos.find(t => t.id === id);
        if (!todo) return;
        const updated = await updateTodo(id, { ...todo, completed: !todo.completed });
        setTodos(prev => prev.map(t => t.id === id ? updated : t));
    };

    // Delete a todo
    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div style={{ padding: '16px', maxWidth: '600px', margin: '0 auto' }}>
            {/* Company logo */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <img
                    src="/favicon.png"
                    alt="Company Logo"
                    style={{ width: '100px', height: '100px' }}
                />
            </div>

            <h1>Todo List</h1>

            {/* Add new todo */}
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <input
                    type="text"
                    placeholder="New task"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    style={{ flex: 1, padding: '8px' }}
                />
                <button onClick={handleAddTodo} style={{ marginLeft: '8px' }}>Add</button>
            </div>

            {/* Render all todos */}
            {todos.map(todo => (
                <TaskItem
                    key={todo.id}
                    task={todo}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onDoubleClick={() => navigate(`/todos/${todo.id}`)}
                />
            ))}
        </div>
    );

};

export default TaskListPage;

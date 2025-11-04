import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTodoById, updateTodo } from '../api/todos';

const TaskPage = () => {
    const { id } = useParams(); // get the todo ID from the URL
    const navigate = useNavigate();

    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch the todo on mount
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const data = await getTodoById(id);
                setTodo(data);
                setLoading(false);
            } catch (err) {
                setError('Todo not found');
                setLoading(false);
            }
        };
        fetchTodo();
    }, [id]);

    // save changes
    const handleSave = async () => {
        await updateTodo(id, todo);
        navigate('/'); // go back to task list after saving
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '16px' }}>
            <h1>Edit Todo</h1>
            <div style={{ marginBottom: '8px' }}>
                <label>Title: </label>
                <input
                    type="text"
                    value={todo.title}
                    onChange={e => setTodo(prev => ({ ...prev, title: e.target.value }))}
                    style={{ marginLeft: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '16px' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => setTodo(prev => ({ ...prev, completed: !prev.completed }))}
                    />
                    Completed
                </label>
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => navigate('/')} style={{ marginLeft: '8px' }}>Cancel</button>
        </div>
    );
};

export default TaskPage;

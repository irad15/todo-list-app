
const TaskItem = ({ task, onToggle, onDelete, onDoubleClick }) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            style={{ marginRight: '8px' }}
        />
        <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}
            onDoubleClick={onDoubleClick}
        >
            {task.title}
        </span>
        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '8px' }}>Delete</button>
    </div>
);

export default TaskItem;

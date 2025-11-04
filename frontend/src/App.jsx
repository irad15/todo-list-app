// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import TaskPage from './pages/TaskPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Main task list page */}
                <Route path="/" element={<TaskListPage />} />

                {/* Single task page */}
                <Route path="/todos/:id" element={<TaskPage />} />
            </Routes>
        </Router>
    );
}

export default App;


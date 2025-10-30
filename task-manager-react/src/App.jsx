import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  // STATE 1: Array of all tasks
  const [tasks, setTasks] = useState([]);
  
  // STATE 2: Current filter ('all', 'active', or 'completed')
  const [filter, setFilter] = useState('all');

  // FUNCTION 1: Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Unique ID using timestamp
      text: taskText,
      completed: false
    };
    // Create new array with new task added
    setTasks([...tasks, newTask]);
  };

  // FUNCTION 2: Toggle task completion
  const toggleTask = (id) => {
    // Map through tasks and flip the completed status for matching ID
    setTasks(tasks.map(task =>
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // FUNCTION 3: Delete a task
  const deleteTask = (id) => {
    // Filter out the task with matching ID
    setTasks(tasks.filter(task => task.id !== id));
  };

  // FUNCTION 4: Get filtered tasks based on current filter
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks; // 'all' shows everything
  };

  // Get filtered tasks for display
  const filteredTasks = getFilteredTasks();
  
  // Calculate counts for header and sidebar
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <>
      <div className="page">
          <header className="site-header">
              <button className="menu-button">
                  <img className="menu-icon" src="/assets/menu_icon.png" alt="Menu Icon"/>
              </button>
              <form>
                <label className="search-container">
                  <img className="search-icon" src="/assets/search_icon.png" alt="Search Icon"/>
                  <input className="search-input" type="search" placeholder="Quick Find"/>
                  </label>
              </form>
              <div className="site-header_status">
                  <img className="check-icon" src="/assets/check_icon.png" alt="Check Icon"/>
                  <span>30/5</span>
              </div>
          </header>
          <main className="site-main">
              <aside className="sidebar">
                  <ul>
                      <li>
                          <img className="nav-icon" src="/assets/inbox_icon.png" alt="Inbox Icon"/>
                          Inbox
                          <span className="task-count">5</span>
                      </li>
                      <li>
                          <img className="nav-icon" src="/assets/calendar_icon.png" alt="Today Icon"/>
                          Today
                          <span className="task-count">5</span>
                      </li>
                      <li>
                          <img className="nav-icon" src="/assets/upcoming_icon.png" alt="Upcoming Icon"/>
                          Upcoming
                          <span className="task-count"></span>
                      </li>
                  </ul>
              </aside>
              <section className="main-content">
                  <h1>Inbox</h1>
                  <ul>
                      <li className="checklist">
                          <input type="checkbox" className="check-box" />
                          Call Mom
                      </li>
                      <li className="checklist">
                          <input type="checkbox" className="check-box" />
                          Buy the new issue of Scientific American
                      </li>
                      <li className="checklist">
                          <input type="checkbox" className="check-box" />
                          Return the textbook to Josie
                      </li>
                      <li className="checklist">
                          <input type="checkbox" className="check-box" />
                          Buy the new album by Rake
                      </li>
                      <li className="checklist">
                          <input type="checkbox" className="check-box" />
                          Buy a gift card for Dad
                      </li>
                  </ul>
              </section>
          </main>
      </div>
  </>
  )
}

export default App
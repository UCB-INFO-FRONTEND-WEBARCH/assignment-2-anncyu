import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
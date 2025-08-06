import React from "react"
import "./App.css"

import type { Theme } from "./types"
import ThemeContext from "./contexts/ThemeContext"

import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import FilterButtons from "./components/FilterButtons"
import TodoList from "./components/TodoList"

function App() {
  const [theme, setTheme] = React.useState<Theme>("dark")

  React.useEffect(() => {
    document.documentElement.dataset.bsTheme = theme
  }, [theme])

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header />
          </ThemeContext.Provider>
          <hr />
          <TodoInput />
          <FilterButtons />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App

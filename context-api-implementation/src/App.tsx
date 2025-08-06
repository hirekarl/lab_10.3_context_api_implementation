import "./App.css"

import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import FilterButtons from "./components/FilterButtons"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <Header />
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

import Header from "./components/Header.jsx"
import Tabs from "./components/Tabs.jsx"
import TodoInput from "./components/TodoInput.jsx"
import TodoList from "./components/TodoList.jsx"

function App(props) {
  const todos = [
    {input: 'Wrote Rust Program', completed: true},
    {input: 'wrote a in hiragana/japanese', completed: true},
    {input: 'solved leetcode 704 in 2 langs', completed: true},
    {input: 'do prepare backlogs syllabus', completed: false},
  ]
  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} />
    <TodoList todos={todos} />
    <TodoInput todos={todos} />
    </>
  )
}

export default App

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  const [todos, setTodo] = useState<string[]>([])

  return (
    <div>
      <Header onCreateNewToDo={() => {}}/>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>

            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast. </p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS .</p>
          </div>
        </section>
        <ul>
          {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
      </main>
    <Footer />
    </div>
  )
}
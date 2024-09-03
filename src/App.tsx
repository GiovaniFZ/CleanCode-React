import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import * as Input from './components/Input'

export default function App() {
  const [todos, setTodo] = useState<string[]>([])

  function handleCreateNewTodo() {

  }

  const isTodoListEmpty = todos.length === 0;

  return (

    <div>
      <Header onCreateNewToDo={handleCreateNewTodo} />

      <Input.Root>
        <Input.Label htmlFor="name" id="name-label" />
        <Input.ErrorMessage message="Digite seu nome" />
        <Input.FormField />
        <Input.Icon>
          <span></span>
        </Input.Icon>
      </Input.Root>

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
        
      {isTodoListEmpty && (
        <p>Nenhum todo cadastrado</p>
      )}

      </main>
      <Footer />
    </div>
  )
}
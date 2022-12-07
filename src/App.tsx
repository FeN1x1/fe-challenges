import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import GuessTheNumber from "./challenges/GuessTheNumber"
import TelephoneFormatter from "./challenges/TelephoneFormatter"
import Counter from "./challenges/Counter"
import { default as Toast } from "./challenges/Toast/Index"
import PasswordStrength from "./challenges/PasswordStrength"
import StarRating from "./challenges/StarRating"
import PixelDrawer from "./challenges/PixelDrawer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo h-40" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo h-40" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl">Vite + React</h1>
      <div className="card py-16">
        {/* <GuessTheNumber /> */}
        {/* <Counter /> */}
        {/* <TelephoneFormatter /> */}
        {/* <Toast /> */}
        {/* <PasswordStrength /> */}
        {/* <StarRating /> */}
        <PixelDrawer />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

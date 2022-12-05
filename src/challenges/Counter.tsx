import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const [increaseCoeficient, setIncreaseCoeficient] = useState<number>(1)
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <button onClick={() => setCount(count + increaseCoeficient)}>
          Increase
        </button>
        <div className="p-4 text-xl rounded border-2 border-gray-300 mx-4 px-6">
          {count}
        </div>
        <button onClick={() => setCount(count - increaseCoeficient)}>
          Decrease
        </button>
      </div>
      <input
        className="border-2 rounded border-gray-300 px-4 py-2"
        value={increaseCoeficient}
        onChange={(e) => setIncreaseCoeficient(+e.target.value)}
        type="number"
      />
      <button
        onClick={() => {
          setCount(0)
          setIncreaseCoeficient(1)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter

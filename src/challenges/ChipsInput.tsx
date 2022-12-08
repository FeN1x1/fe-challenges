import { useState, KeyboardEvent } from "react"
import CloseIcon from "@mui/icons-material/Close"

const ChipsInput = () => {
  const [input, setInput] = useState<string>("")
  const [chips, setChips] = useState<string[]>([])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setInput("")
      setChips([...chips, input])
    }
  }

  const handleOnClick = (id: number) => {
    setChips(chips.filter((c, idx) => idx !== id))
  }

  return (
    <div className="flex flex-col gap-6">
      <input
        className="rounded px-4 py-2 text-xl"
        placeholder="Type & hit Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex gap-4 px-4 w-64 overflow-scroll p-12">
        {chips.map((c, idx) => {
          return (
            <span className="rounded-full border px-4 py-2" key={idx}>
              {c}
              <span onClick={() => handleOnClick(idx)}>
                <CloseIcon className="ml-2" />
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default ChipsInput

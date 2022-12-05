import { Fragment, useState } from "react"

type InvalidGuessedNumber = "high" | "low" | 0

const ranNum = Math.floor(Math.random() * 100)

const GuessTheNumber = () => {
  const [guessArray, setGuessArray] = useState<number[]>([])
  const [guessedNumber, setGuessedNumber] = useState<string>("")
  const [invalidGuessedNumber, setInvalidGuessedNumber] =
    useState<InvalidGuessedNumber>(0)

  const lastGuessedNumber = guessArray[guessArray.length - 1]
  const hasWon = lastGuessedNumber === ranNum
  const isGuessedNumberEmpty = guessedNumber === ""
  const isHigherOrLower =
    lastGuessedNumber > ranNum
      ? "Your guessed number is too high"
      : "Your guessed number is too low"

  const guessTheNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (+guessedNumber !== 0) {
      if (+guessedNumber > 100) {
        setInvalidGuessedNumber("high")
      } else if (+guessedNumber < 0) {
        setInvalidGuessedNumber("low")
      } else {
        invalidGuessedNumber !== 0 && setInvalidGuessedNumber(0)
        setGuessArray([...guessArray, +guessedNumber])
      }
      setGuessedNumber("")
    }
  }
  console.log(ranNum)
  return (
    <div className="border-gray-200 border rounded p-4">
      <form onSubmit={guessTheNumber}>
        <div>
          <input
            disabled={hasWon}
            className="rounded border-2 border-gray-200  px-4 py-2"
            type="number"
            placeholder={`${
              hasWon
                ? "Congrats! You've guessed right"
                : "Please input your number..."
            }`}
            onChange={(e) => setGuessedNumber(e.target.value)}
            value={guessedNumber}
          />
          <div className="flex items-center pt-4 justify-center">
            <span>
              Your guesses:{" "}
              {guessArray.map((n, idx) => {
                return (
                  <Fragment key={idx}>{`${
                    idx !== 0 ? ", " : ""
                  }${n}`}</Fragment>
                )
              })}
            </span>
          </div>
        </div>

        <div className="flex justify-center py-4 gap-4">
          <button
            className={`${
              isGuessedNumberEmpty ? "cursor-not-allowed" : ""
            } rounded border-2 border-gray-200 px-4`}
            type="submit"
            disabled={isGuessedNumberEmpty}
          >
            Guess
          </button>
          <button
            className={`${
              !hasWon ? "cursor-not-allowed text-gray-100" : ""
            } rounded text-gray-500 border-2 border-gray-200 px-4`}
            disabled={!hasWon}
            onClick={() => {
              setGuessArray([])
              setGuessedNumber("")
            }}
          >
            Start the Game
          </button>
        </div>
      </form>

      {ranNum}

      <div className="">
        <span>
          {hasWon && "You've guessed the right number! Congrats"}
          {guessArray.length === 9 &&
            "You've guessed 10 times and still didn't find the number. You've lost"}
          {guessArray.length === 0 ||
            (!hasWon && invalidGuessedNumber === 0 && isHigherOrLower)}
          {invalidGuessedNumber !== 0 &&
            !hasWon &&
            `Your input number is out of 1 - 100 range (too ${invalidGuessedNumber})`}
        </span>
      </div>
    </div>
  )
}

export default GuessTheNumber

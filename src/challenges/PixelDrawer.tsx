import { Fragment, useState } from "react"

type Tbox = {
  color: string
}

const colorBoxes: Tbox[] = [
  { color: "bg-green-300" },
  { color: "bg-red-300" },
  { color: "bg-blue-300" },
  { color: "bg-yellow-300" },
  { color: "bg-orange-300" },
  { color: "bg-brown-300" },
  { color: "bg-gray-300" },
  { color: "bg-purple-300" },
]

const PixelDrawer = () => {
  const [color, setColor] = useState<string>("bg-green-300")
  const [boxes, setBoxes] = useState<Tbox[][]>(
    new Array(8).fill(0).map(() => {
      return new Array(8).fill(0).map(() => {
        return {
          color: "bg-white",
        }
      })
    })
  )

  const handleOnBoxClick = (b1Idx: number, b2Idx: number) => {
    setBoxes(
      boxes.map((b1, b1I) => {
        if (b1I === b1Idx) {
          return b1.map((b2, b2I) => {
            if (b2I === b2Idx) {
              return {
                color,
              }
            } else {
              return b2
            }
          })
        } else {
          return b1
        }
      })
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        {boxes.map((b1, b1Idx) => {
          return (
            <div key={b1Idx} className="flex">
              {b1.map((b2, b2Idx) => {
                return (
                  <span
                    key={b2Idx}
                    onClick={() => handleOnBoxClick(b1Idx, b2Idx)}
                    className={`border h-8 w-8 cursor-pointer ${b2.color}`}
                  ></span>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="flex">
        {colorBoxes.map((b) => {
          return (
            <span
              onClick={() => setColor(b.color)}
              className={`${b.color} border h-8 w-8 cursor-pointer`}
            ></span>
          )
        })}
      </div>
    </div>
  )
}

export default PixelDrawer

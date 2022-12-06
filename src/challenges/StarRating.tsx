import { Fragment, useState } from "react"

type TStar = {
  fill: string
  stroke: string
  id: number
}

const StarRating = () => {
  let index = 0
  const [stars, setStars] = useState<TStar[]>(
    new Array(5).fill(0).map(() => {
      return { fill: "gray", stroke: "black", id: index++ }
    })
  )

  const [rating, setRating] = useState<number>(0)

  const handleOnMouseEnter = (id: number) => {
    setStars(
      stars.map((s) => {
        if (s.id < id + 1) {
          return {
            ...s,
            fill: "yellow",
            stroke: "yellow",
          }
        } else {
          return {
            ...s,
            fill: "gray",
            stroke: "black",
          }
        }
      })
    )
  }

  const handleOnMouseLeave = (id: number) => {
    setStars(
      stars.map((s) => {
        if (s.id < rating) {
          return {
            ...s,
            fill: "yellow",
            stroke: "yellow",
          }
        } else {
          return {
            ...s,
            fill: "gray",
            stroke: "black",
          }
        }
      })
    )
  }

  return (
    <>
      {" "}
      <div className="flex bg-gray-400 p-8 items-center justify-center">
        {stars?.map((s, idx) => {
          return (
            <div
              key={s.id}
              onMouseEnter={() => handleOnMouseEnter(s.id)}
              onMouseLeave={() => handleOnMouseLeave(s.id)}
              onClick={() => setRating(s.id + 1)}
            >
              <div className="px-1">
                <Star fill={s.fill} stroke={s.stroke} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-4 mx-auto">
        <span className="text-xl font-bold">{rating}</span>
      </div>
    </>
  )
}

const Star = ({ fill, stroke }: { fill: string; stroke: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
    >
      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
    </svg>
  )
}

export default StarRating

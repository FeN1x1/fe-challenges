import { useState } from "react"

const PasswordStrength = () => {
  const [password, setPassword] = useState("")

  const useBarLength = () => {
    if (password.length > 0 && password.length <= 4) {
      return {
        length: 20,
        color: "bg-red-600",
      }
    } else if (password.length > 4 && password.length <= 8) {
      return {
        length: 40,
        color: "bg-blue-600",
      }
    } else if (password.length > 8) {
      return {
        length: 80,
        color: "bg-green-600",
      }
    } else {
      return {
        length: 0,
        color: "bg-white",
      }
    }
  }

  const barLength = useBarLength().length
  const barColor = useBarLength().color

  return (
    <div className="flex flex-col gap-4 p-4">
      <input
        className="px-4 py-2 rounded border border-gray-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Input your password..."
      />
      <div className="w-full bg-gray h-3">
        <div
          className={`${barColor} h-2 rounded transition-all duration-300 ease-in-out`}
          style={{
            width: `${barLength}%`,
          }}
        ></div>
      </div>
      <span>{password}</span>
    </div>
  )
}

export default PasswordStrength

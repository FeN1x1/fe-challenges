import { useState } from "react"

const TelephoneFormatter = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("")

  const setTelephoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (phoneNumber.length > 3) {
      const target = e.target.value
      console.log(target)

      const nonAlphaNumeric = target.replace(/\W/g, "")
      console.log(nonAlphaNumeric)
      setPhoneNumber(`+(${nonAlphaNumeric}) - `)
    } else {
      setPhoneNumber(e.target.value)
    }
  }
  return (
    <div>
      <input
        className="px-4 py-2 border border-gray-300 rounded"
        type="text"
        placeholder="Type number..."
        value={phoneNumber}
        onChange={setTelephoneNumber}
      />
      <div className="pt-3">{phoneNumber}</div>
    </div>
  )
}

export default TelephoneFormatter

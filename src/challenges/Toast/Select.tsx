import type { Option } from "./Index"

const Select = ({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (e: any) => void
  options: Option[]
}): JSX.Element => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-4 py-2 rounded mb-4"
    >
      {options.map((o, idx) => {
        return (
          <option key={idx} value={o.value}>
            {o.name}
          </option>
        )
      })}
    </select>
  )
}

export default Select

import CheckIcon from "@mui/icons-material/Check"
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher"
import CloseIcon from "@mui/icons-material/Close"

export type Icon = "Check" | "FireExtinguisher"

const Component = ({
  classes,
  message,
  icon,
  hideToast,
}: {
  classes: string
  message: string
  icon: Icon
  hideToast: () => void
}): JSX.Element => {
  const getIcon = () => {
    switch (icon) {
      case "Check":
        return <CheckIcon />
      case "FireExtinguisher":
        return <FireExtinguisherIcon />
      default:
        return <></>
    }
  }
  return (
    <div
      className={`flex gap-4 rounded border-2 text-black px-2 py-3 mb-4 ${classes}`}
    >
      {getIcon()}
      <span>{message}</span>
      <span onClick={hideToast}>
        <CloseIcon className="ml-auto" />
      </span>
    </div>
  )
}

export default Component

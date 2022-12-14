import { useEffect, useRef, useState } from "react"
import Component from "./Component"
import type { Icon } from "./Component"
import { v4 as uuidv4 } from "uuid"
import Select from "./Select"
import autoAnimate from "@formkit/auto-animate"

type Toast = {
  id?: string
  color: string
  icon: Icon
  message: string
  isVisible: boolean
}

export type Option = {
  value: string
  name: string
}

const Index = () => {
  const [toastList, setToastList] = useState<Toast[]>([])
  const [newToast, setNewToast] = useState<Toast>({
    color: "bg-white",
    icon: "Check",
    message: "This is new toast!",
    isVisible: true,
  })

  const toastListParent = useRef(null)

  useEffect(() => {
    toastListParent.current && autoAnimate(toastListParent.current)
  }, [toastListParent])

  return (
    <div>
      <div ref={toastListParent} className="absolute top-8 left-8">
        {toastList.map((t) => {
          return (
            t.isVisible && (
              <Component
                key={t.id}
                classes={`${t.color}`}
                message={t.message}
                icon={t.icon}
                hideToast={() =>
                  setToastList(toastList.filter((to) => to.id !== t.id))
                }
              />
            )
          )
        })}
      </div>
      <div className="flex flex-col">
        <Select
          value={newToast.color}
          onChange={(e) => setNewToast({ ...newToast, color: e.target.value })}
          options={[
            { value: "bg-white", name: "Clear" },
            { value: "bg-red-400", name: "Red" },
            { value: "bg-green-400", name: "Green" },
            { value: "bg-blue-400", name: "Blue" },
          ]}
        />
        <Select
          value={newToast.message}
          onChange={(e) =>
            setNewToast({ ...newToast, message: e.target.value })
          }
          options={[
            { value: "This is new toast!", name: "New Toast" },
            { value: "Nova sprava", name: "New Message" },
            { value: "Ahoj", name: "Hey" },
            { value: "Nie", name: "No" },
          ]}
        />
        <Select
          value={newToast.icon}
          onChange={(e) => setNewToast({ ...newToast, icon: e.target.value })}
          options={[
            { value: "Check", name: "Check Mark" },
            { value: "FireExtinguisher", name: "Fire Extinguisher" },
          ]}
        />
      </div>
      <div
        className="px-4 py-2 border border-gray-400 rounded cursor-pointer"
        onClick={() => {
          const uuid = uuidv4()
          setToastList([
            ...toastList,
            {
              id: uuid,
              color: newToast.color,
              icon: newToast.icon,
              message: newToast.message,
              isVisible: true,
            },
          ])
          // setTimeout(() => {
          //   setToastList(
          //     toastList.map((t) => {
          //       if (t.id === uuid) {
          //         return {
          //           ...t,
          //           isVisible: false,
          //         }
          //       } else {
          //         return t
          //       }
          //     })
          //   )
          // }, 5000)
        }}
      >
        New Toast
      </div>
    </div>
  )
}

export default Index

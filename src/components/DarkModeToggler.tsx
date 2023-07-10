"use client"

import { TMode, ThemeContext } from "@/context/ThemeContext"
import { mdiThemeLightDark, mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js"
import Icon from "@mdi/react"
import { useContext, useState } from "react"

const modeMap = {
  'light': mdiWhiteBalanceSunny,
  'dark': mdiWeatherNight,
  'system': mdiThemeLightDark,
}

type Mode = {
  title: string
  value: TMode
  icon: string
}
const modeList: Mode[] = [
  {
    title: 'Light',
    value: 'light',
    icon: mdiWhiteBalanceSunny,
  },
  {
    title: 'Dark',
    value: 'dark',
    icon: mdiWeatherNight,
  },
  {
    title: 'System',
    value: 'system',
    icon: mdiThemeLightDark,
  },
]

const DarkModeToggler = () => {
  const { changeMode, mode } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  const handleModeChange = (mode: TMode) => {
    setOpen(false)
    changeMode(mode)
  }

  return (
    <div className="relative flex items-center p-2 px-4">
      <button className="flex items-center gap-1" onClick={() => setOpen(prev => !prev)}>
        <Icon path={modeMap[mode]} size={1} />
        Theme
      </button>
      {open && (
        <ul className="absolute bg-white dark:bg-slate-700/50 shadow-lg top-full right-0 z-50 rounded">
          {modeList.map((mode) => (
            <li className="py-2 px-3 flex items-center cursor-pointer gap-1 hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-slate-600/50" key={mode.value} onClick={() => handleModeChange(mode.value)}>
              <Icon path={mode.icon} size={1} />
              {mode.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DarkModeToggler
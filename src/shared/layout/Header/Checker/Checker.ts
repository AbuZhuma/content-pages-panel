import { useLocation } from "react-router-dom"
import { useHeaderStore } from "../../../store/useHeader"
import { useEffect } from "react"
import { menuMap, type MenuMapKeys } from "../../../configs"
import { useStyles } from "../../../store/useStyles"

export const Checkers = () => {
  const { setTitle } = useHeaderStore()
  const { pathname } = useLocation()
  const { getStyles } = useStyles()

  useEffect(() => {
    getStyles()
  }, [getStyles])

  useEffect(() => {
    const pathn = menuMap[`/${pathname.split("/")[1]}` as MenuMapKeys]
    if (pathn) {
      setTitle(pathn.label)
    }
  }, [setTitle, pathname])
  
  return null
}
'use client'

import { ThemeProvider } from "next-theme";

const Provider = ({children}) => {
  return (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  )
}

export default Provider;
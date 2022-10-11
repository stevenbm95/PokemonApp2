
import { ThemeProvider,CssBaseline } from "@mui/material"
import { redTheme } from "./"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={redTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

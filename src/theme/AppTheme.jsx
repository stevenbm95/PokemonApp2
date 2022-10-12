
import { ThemeProvider,CssBaseline, Grid } from "@mui/material"
import { redTheme } from "./"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={redTheme}>
      <Grid container flexDirection='row'  sx={{ backgroundColor: 'primary.main',
                minHeight: '100vh',
                pt: 9}}>
        <CssBaseline/>
        {children}
        </Grid>
    </ThemeProvider>
  )
}

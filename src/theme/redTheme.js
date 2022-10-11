import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const redTheme = createTheme({
    palette:{
        primary:{
            main: '#e5e5e5',
            red:'#F22539',
             grey: '#BFBFBF'
        }
    },
    error: {
        main: red.A400
    }
})
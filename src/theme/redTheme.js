import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const redTheme = createTheme({
    palette:{
        primary:{
            main: '#F9F9F9',
            red:'#F22539',
             grey: '#BFBFBF'
        }
    }, secoundary:{
        main: '#F22539'
    },
    error: {
        main: red.A400
    }
})
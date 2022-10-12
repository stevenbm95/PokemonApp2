import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar } from "./NavBar"

export const PokemonLayout = ({children}) => {
  return (
    <>
            <NavBar />
          
            {/* isLoading */}
            { children}

   </>
  )
}

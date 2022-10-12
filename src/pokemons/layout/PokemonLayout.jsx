import { Box } from "@mui/system"
import { NavBar } from "../components"

export const PokemonLayout = ({children}) => {
  return (
    <>
        <Box>
            <NavBar />

            <Box >
            {/* isLoading */}
            { children}

            </Box>

        </Box>
            
   </>
  )
}

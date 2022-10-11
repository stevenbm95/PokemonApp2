import { Route, Routes } from "react-router-dom"
import { PokemonsRoutes } from "../pokemons/routes/PokemonsRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <PokemonsRoutes />}/>

    </Routes>
  )
}

import { Route, Routes } from "react-router-dom";
import {PokemonPage} from '../pages';
import {ListView}  from '../view';




export const PokemonsRoutes = () => {
  return (
    <Routes>
       <Route path="/*" element={ <PokemonPage/>} />
       <Route path="/list" element={ <ListView/>} />
    </Routes>
  )
}

import{
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard, Login} from "../pages";
import { Editar } from "../pages/editar/editar";
import { Estoque } from "../pages/Estoque/Estoque";
import { Entrada } from "../pages/Entrada/Entrada_sai";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/Entrada",
        element: <Entrada></Entrada>,
      },
      {
        path: "/estoque",
        element: <Estoque></Estoque>,
      },
      {
        path: "/editar",
        element: <Editar></Editar>,
      },
    ]
  }, 
  {
    path: "/Login",
    element: <Login></Login>
  },

  
]);
export default router;
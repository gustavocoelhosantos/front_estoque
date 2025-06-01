import { createBrowserRouter } from "react-router-dom";
import React from "react";
import {
  Dashboard,
  Login,
  Marcacao,
  Cadastros,
  DashboardAdmin,
  CadastrosUsuarios,
  ConsultarUsuarios,
  ConsultarPessoas,
  ConsultarProntuario,
  DashboardMedico,
  AgendaDia,
  DashboardEstoque,
  Editar,
  CadastroEstoque,
  Entrada
} from "../pages";


const router = createBrowserRouter([
  {
    path: "/Estoque",
    element: <DashboardEstoque></DashboardEstoque>,
    children: [
      {
        path: "Cadastro",
        element: <CadastroEstoque></CadastroEstoque>,
      },
      {
        path: "Entrada",
        element: <Entrada></Entrada>,
      },
      {
        path: "Editar",
        element: <Editar></Editar>,
      },
    ],
  },
  {
    path: "/Comum",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Marcacao></Marcacao>,
      },
      {
        path: "Cadastros",
        element: <Cadastros></Cadastros>,
      },
      {
        path: "ConsultarPessoas",
        element: <ConsultarPessoas></ConsultarPessoas>,
      },
    ],
  },
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/Admin",
    element: <DashboardAdmin></DashboardAdmin>,
    children: [
      {
        path: "CadastrosUsuarios",
        element: <CadastrosUsuarios></CadastrosUsuarios>,
      },
      {
        path: "ConsultarUsuarios",
        element: <ConsultarUsuarios></ConsultarUsuarios>,
      },
    ],
  },
  {
    path: "Medico",
    element: <DashboardMedico></DashboardMedico>,
    children: [
      {
        path: "ConsultarProntuarios",
        element: <ConsultarProntuario></ConsultarProntuario>,
      },
      {
        path: "AgendaDia",
        element: <AgendaDia></AgendaDia>,
      },
    ],
  },
  { 
    path: "/Estoque",
    element: <DashboardMedico></DashboardMedico>,
    children: [
      {
        path: "/Estoque/Registrar",
        element: <ConsultarProntuario></ConsultarProntuario>,
      },
      {
        path: "/Estoque/Atualizar",
        element: <AgendaDia></AgendaDia>,
      },
    ],
  }
]);

export default router;

export { Login } from "./login/Login";


// Rotas para usuários comuns
export { Dashboard } from "./Comum/dashboard/Dashboard";
export { Marcacao } from "./Comum/marcacao/Marcacao";
export { Cadastros } from "./Comum/cadastros/Cadastros";
export { ConsultarPessoas } from "./Comum/cadastros/ConsultarPessoas";

//Rotas Administrador
export { CadastrosUsuarios } from "./admin/cadastros/CadastrosUsuarios";
export { DashboardAdmin } from "./admin/dashboardAdmin/DashboardAdmin";
export { ConsultarUsuarios } from "./admin/cadastros/ConsultarUsuarios";


//Rotas Estoque
export { DashboardEstoque } from "./Estoque/dashboardEstoque/DashboardEst";
export { Entrada } from "./Estoque/Entrada/Entrada_sai";
export { Editar } from "./Estoque/editar/editar";
export { CadastroEstoque } from "./Estoque/CadastroEstoque";

// Imports medicos
export { DashboardMedico } from "./medico/dashboardMedico/Dashboardmed";
export { ConsultarProntuario } from "./medico/Cadastros/ProntuarioPessoa";
export { AgendaDia } from "./medico/agenda/agendaDiaria";

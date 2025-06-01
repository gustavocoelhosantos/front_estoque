create database medflow;

use medflow;

CREATE TABLE perfis (
    id_perfis int PRIMARY KEY,
    nome VARCHAR(50) NOT NULL -- Comum, Admin, Medico
);

CREATE TABLE usuarios (
    id_usuario int auto_increment PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL, -- formato: 000.000.000-00
    data_nascimento date NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    perfil_id INT NOT NULL,
    FOREIGN KEY (perfil_id) REFERENCES perfis(id_perfis)
);

CREATE TABLE pacientes (
    id_paciente int auto_increment PRIMARY KEY,
    nome varchar(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL, -- redundante, mas pode ser útil se separar do usuário
    cartao_sus VARCHAR(15) UNIQUE,
    data_nascimento DATE,
    telefone VARCHAR(20),
    cep VARCHAR(8),
    endereco varchar(255),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medicos (
    id_medico int auto_increment PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    crm VARCHAR(20) UNIQUE NOT NULL,
    especialidade VARCHAR(50),
    telefone VARCHAR(20),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario)
);

CREATE TABLE escala (
	id_escala int auto_increment PRIMARY KEY,
	id_medico INT UNIQUE NOT NULL,
    segunda ENUM('Escalado', 'Folga'),
    terca ENUM('Escalado', 'Folga'),
    quarta ENUM('Escalado', 'Folga'),
    quinta ENUM('Escalado', 'Folga'),
    sexta ENUM('Escalado', 'Folga'),
    sabado ENUM('Escalado', 'Folga'),
    domingo ENUM('Escalado', 'Folga')
);

CREATE TABLE prontuario(
	paciente_id int unique not null,
	alergias varchar(50),
    tipo_sanguineo Char(3),
    medicamentos varchar(255),
    cirurgias varchar(255),
    doencas_infecciosas varchar(50),
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id_paciente)
);

CREATE TABLE agendamentos (
    id_agendamento int auto_increment PRIMARY KEY,
    paciente_id INT NOT NULL,
    medico_id INT NOT NULL,
    data_hora datetime NOT NULL,
    status VARCHAR(30) DEFAULT 'agendado', -- agendado, cancelado, concluído
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id_paciente),
    FOREIGN KEY (medico_id) REFERENCES medicos(id_medico)
);

CREATE TABLE consultas (
    id_consulta int auto_increment PRIMARY KEY,
    agendamento_id INT UNIQUE NOT NULL,
    descricao varchar(255),
    receita varchar(255),
    observacoes varchar(255),
    data_consulta datetime,
    FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id_agendamento)
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    fornecedor VARCHAR(255),
    data_pedido DATE NOT NULL,
    validade DATE NOT NULL,
    embalagem VARCHAR(255),
    unidade_medida VARCHAR(100),
    temperatura ENUM('Perecível', 'Resfriado', 'Termossensível') NOT NULL
);


INSERT INTO perfis (id_perfis, nome) VALUES (1, 'Comum'),(2, 'Admin'),(3, 'Medico');

INSERT INTO usuarios (nome, email, senha, cpf, data_nascimento, perfil_id) VALUES ("David Ramos Mendes Cardoso", "daviddivad25.12@gmail.com", "Senha@123", "41143676831", "2004-12-25", 2);

INSERT INTO medicos (usuario_id, crm, especialidade, telefone) Values (1, "12345678", "Cardiologista", "11992382152");

INSERT INTO pacientes (nome, cpf, cartao_sus, data_nascimento, telefone, cep, endereco) VALUES ("David Ramos Mendes Cardoso", "41143676831", "123456789012345", '2004-12-25', "11911007252", "06767230", "Mario Latorre 245");

INSERT INTO prontuario (paciente_id, alergias, tipo_sanguineo, medicamentos, cirurgias, doencas_infecciosas) VALUES (1, "Pelo de gato", "O-", "", "Transplante de rim", "Tuberculose");

INSERT INTO agendamentos (paciente_id, medico_id, data_hora, status) VALUES (1, 1, '2023-10-01 10:00:00', 'agendado');

INSERT INTO consultas (agendamento_id, descricao, receita, observacoes, data_consulta) VALUES (1, "Consulta de rotina", "Medicamento A - 1x ao dia", "Nenhuma observação", '2023-10-01 10:00:00');

INTSERT INTO produtos (nome, valor, fornecedor, data_pedido, validade, embalagem, unidade_medida, temperatura) VALUES 
("Medicamento A", 50.00, "Farmácia XYZ", '2023-09-01', '2025-09-01', "Caixa com 30 comprimidos", "Comprimido", "Perecível"),
("Medicamento B", 30.00, "Distribuidora ABC", '2023-08-15', '2024-08-15', "Frasco com 100ml", "Líquido", "Resfriado");

select * from usuarios;
select * from pacientes;
select * from medicos;
select * from agendamentos;
select * from prontuario;

drop database medflow;

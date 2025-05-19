import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Grid
} from '@mui/material';
import axios from 'axios';

export const Editar = () => {
  const [formData, setFormData] = useState({
    id: '',
    unidade_medida: '',
    nome: '',
    Valor: '',
    Fornecedor: '',
    Data_Pedido: '',
    Validade: '',
    Refrigerado: '',
    Embalagem: '',
    Perecivel: '',
    Tipo: '',
  });

  const [carregado, setCarregado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const buscarProduto = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/produtos/${formData.id}`);
      setFormData(response.data);
      setCarregado(true);
    } catch (error) {
      alert('Produto não encontrado.');
      setCarregado(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/produtos/${formData.id}`, formData);
      alert('Produto atualizado com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar o produto.');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Editar Produto
      </Typography>

      {/* Buscar Produto */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={8}>
          <TextField
            label="ID do Produto"
            variant="outlined"
            fullWidth
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ height: '100%' }}
            onClick={buscarProduto}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>

      {/* Formulário de edição */}
      {carregado && (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                name="nome"
                fullWidth
                value={formData.nome}
                onChange={handleChange}
              />
            </Grid>
            {/* (restante dos campos aqui, com Grid item xs={12} para alinhar um em cima do outro) */}

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Temperatura</FormLabel>
                <RadioGroup
                  row
                  name="Tipo"
                  value={formData.Tipo}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Perecível" control={<Radio />} label="Perecível" />
                  <FormControlLabel value="Resfriado" control={<Radio />} label="Resfriado" />
                  <FormControlLabel value="Termossensível" control={<Radio />} label="Termossensível" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Salvar Alterações
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};






























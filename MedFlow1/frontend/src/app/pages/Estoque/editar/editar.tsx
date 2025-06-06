import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Alert,
  Snackbar
} from '@mui/material';
import api from '../../../../services/api'; 

export const Editar = () => {
  const [idBusca, setIdBusca] = useState('');
  const [produto, setProduto] = useState({
    id: '',
    unidade_medida: '',
    nome: '',
    valor: '',
    fornecedor: '',
    data_pedido: '',
    validade: '',
    embalagem: '',
    tipo: ''
  });
  const [produtoEncontrado, setProdutoEncontrado] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChangeBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setIdBusca(value);
  };

  const handleChangeProduto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleBuscar = async () => {
    if (!idBusca) {
      setSnackbarMessage('Digite um ID válido.');
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await api.get(`/Estoque/BuscarPorId/${idBusca}`);

      if (!response.data || Object.keys(response.data).length === 0) {
        setSnackbarMessage('Produto não encontrado.');
        setProdutoEncontrado(false);
      } else {
        setProduto(response.data);
        setProdutoEncontrado(true);
      }
    } catch (error) {
      console.error(error);
      setSnackbarMessage('Erro ao buscar o produto.');
      setProdutoEncontrado(false);
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/Produto/AtualizarProduto`, produto);
      setSnackbarMessage('Produto atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      setSnackbarMessage('Erro ao atualizar o produto.');
    } finally {
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 700, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Editar Produto
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            label="Buscar por ID"
            value={idBusca}
            onChange={handleChangeBusca}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleBuscar} fullWidth>
            Buscar
          </Button>
        </Grid>
      </Grid>

      {produtoEncontrado && (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <TextField label="ID" name="id" value={produto.id} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Nome" name="nome" value={produto.nome} onChange={handleChangeProduto} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Valor" name="valor" value={produto.valor} onChange={handleChangeProduto} type="number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Fornecedor" name="fornecedor" value={produto.fornecedor} onChange={handleChangeProduto} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Data do Pedido"
                name="data_pedido"
                value={produto.data_pedido}
                onChange={handleChangeProduto}
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Validade"
                name="validade"
                value={produto.validade}
                onChange={handleChangeProduto}
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Embalagem" name="embalagem" value={produto.embalagem} onChange={handleChangeProduto} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Unidade de Medida" name="unidade_medida" value={produto.unidade_medida} onChange={handleChangeProduto} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel>Tipo de Produto</FormLabel>
                <RadioGroup row name="tipo" value={produto.tipo} onChange={handleChangeProduto}>
                  <FormControlLabel value="Perecível" control={<Radio />} label="Perecível" />
                  <FormControlLabel value="Resfriado" control={<Radio />} label="Resfriado" />
                  <FormControlLabel value="Termossensível" control={<Radio />} label="Termossensível" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary" fullWidth>
                Salvar Alterações
              </Button>
            </Grid>
          </Grid>
        </form>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

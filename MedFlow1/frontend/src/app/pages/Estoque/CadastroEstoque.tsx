import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';

export const CadastroEstoque = () => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    unidade_medida: '',
    valor: '',
    fornecedor: '',
    data_pedido: '',
    validade: '',
    embalagem: '',
    tipo: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);

    setOpenSnackbar(true);
    setFormData({
      id: '',
      nome: '',
      unidade_medida: '',
      valor: '',
      fornecedor: '',
      data_pedido: '',
      validade: '',
      embalagem: '',
      tipo: '',
    }); 
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 700 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Registrar Produto
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
        

            <Grid item xs={12} sm={6}>
              <TextField
                label="ID"
                name="id"
                value={formData.id}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Valor"
                name="valor"
                type="number"
                value={formData.valor}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Fornecedor"
                name="fornecedor"
                value={formData.fornecedor}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Data do Pedido"
                name="data_pedido"
                type="date"
                value={formData.data_pedido}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Validade"
                name="validade"
                type="date"
                value={formData.validade}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Embalagem"
                name="embalagem"
                value={formData.embalagem}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Unidade de Medida"
                name="unidade_medida"
                value={formData.unidade_medida}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Temperatura</FormLabel>
                <RadioGroup
                  row
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Perecível" control={<Radio />} label="Perecível" />
                  <FormControlLabel value="Resfriado" control={<Radio />} label="Resfriado" />
                  <FormControlLabel value="Termossensível" control={<Radio />} label="Termossensível" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Cadastrar Produto
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={handleCloseSnackbar}>
          Produto cadastrado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};







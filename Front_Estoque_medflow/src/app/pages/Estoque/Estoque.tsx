import React, { useState } from 'react';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Box,
  Typography,
  Grid,
} from '@mui/material';

export const Estoque = () => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    valor: '',
    fornecedor: '',
    data_pedido: '',
    validade: '',
    embalagem: '',
    unidade: '',
    temperatura: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Editar Produto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <TextField
              label="ID"
              name="id"
              fullWidth
              value={formData.id}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              name="nome"
              fullWidth
              value={formData.nome}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Valor"
              name="valor"
              type="number"
              fullWidth
              value={formData.valor}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Fornecedor"
              name="fornecedor"
              fullWidth
              value={formData.fornecedor}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Data do Pedido"
              name="data_pedido"
              type="date"
              fullWidth
              value={formData.data_pedido}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Validade"
              name="validade"
              type="date"
              fullWidth
              value={formData.validade}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Embalagem"
              name="embalagem"
              fullWidth
              value={formData.embalagem}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Unidade de Medida"
              name="unidade"
              fullWidth
              value={formData.unidade}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Temperatura</FormLabel>
            <RadioGroup
              row
              name="temperatura"
              value={formData.temperatura}
              onChange={handleChange}
            >
              <FormControlLabel
                value="perecível"
                control={<Radio />}
                label="Perecível"
              />
              <FormControlLabel
                value="resfriado"
                control={<Radio />}
                label="Resfriado"
              />
              <FormControlLabel
                value="termossensível"
                control={<Radio />}
                label="Termossensível"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

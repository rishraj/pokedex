import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import SelectPokemon from './SelectPokemon';
import SelectPokemons from './SelectPokemons';


export default function PokemonForm(){

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="section">

          <SelectPokemon />
          <SelectPokemons />

        </Box>
      </Box>
    </Container>
  );
}




/* import Form from 'react-bootstrap/Form'

export default function PokemonForm() {
  const submitForm = (e) => {
    e.preventDefault()
    console.log()
  }

  return (
    <>
      <h2>Pokemon Form</h2>
      <form onSubmit={submitForm}>
        <Form.Group ></Form.Group>
      </form>
    </>
  );
} */

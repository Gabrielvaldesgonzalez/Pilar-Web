import {Layout} from '../layouts/Layout';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {appActions, appSelector} from '../redux/appRedux';
import React, {useState} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {Box, Button, Card, CardContent, CardHeader, Checkbox, Grid, Stack, TextField, Typography} from '@mui/material';

export const Todo = () => {

  const dispatch = useDispatch()
  const todos = useSelector(appSelector.todo)
  const [text, setText] = useState<string>('')
  const [blur, setBlur] = useState(false);
  const showError = blur && text === '';

  const handleBlur = () => {
    setBlur(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(appActions.setCompletedTodo({id, completed: e.target.checked}))
  }

  const addTask = () => {
    dispatch(appActions.addTodo({text: text, id: uuid()}))
    setText('')
    setBlur(false)
  }

  const deleteTask = (id: string) => {
    dispatch(appActions.deleteTodo(id))
  }

  return (
    <Layout>
      <Grid container spacing={3} sx={{backgroundColor: '#f6f6f6'}}>
        <Grid item md={12} xs={12}>
          <Card>
            <CardHeader title="Agregar tarea"/>
            <CardContent>
              <Stack sx={{justifyContent: 'space-around'}} direction="row">
                <Grid item md={10}>
                  <TextField
                    value={text}
                    label="Descripcìón"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    required
                    error={showError}
                    helperText={showError ? 'Este campo es requerido.' : ''}
                  />
                </Grid>
                <Grid item md={2}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      startIcon={<AddCircleIcon/>}
                      color="success"
                      disabled={text === ''}
                      variant="contained"
                      onClick={() => addTask()}
                      size="large"
                      fullWidth
                      sx={{margin: 1}}
                    >
                      Agregar
                    </Button>
                  </Box>
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} sx={{mt: 3}}>
          <Card>
            <CardHeader title=" Listado tareas"/>
            <CardContent>
              <Stack sx={{justifyContent: 'space-between', pb: 3, mb: 3, borderBottom: '1px solid', fontWeight: 'bold'}}
                     direction="row">
                <Grid item md={1}>
                  Completa
                </Grid>
                <Grid item md={9}>
                  Descripción
                </Grid>
                <Grid item md={2}>
                  Acción
                </Grid>
              </Stack>
              {todos.map((todo: any) =>
                (
                  <Stack key={todo.id} sx={{justifyContent: 'space-between', mb: 2}} direction="row">
                    <Grid item md={1}>
                      <Checkbox checked={todo.completed} onChange={e => handleChecked(e, todo.id)}/>
                    </Grid>
                    <Grid item md={9} sx={{pt: 1}}>
                      <Typography sx={{
                        fontSize: 18,
                        fontWeight: 700
                      }}
                      >
                        {todo.text}
                      </Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => deleteTask(todo.id)}
                        startIcon={<CancelIcon/>}
                      >
                        Eliminar
                      </Button>
                    </Grid>
                  </Stack>
                )
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

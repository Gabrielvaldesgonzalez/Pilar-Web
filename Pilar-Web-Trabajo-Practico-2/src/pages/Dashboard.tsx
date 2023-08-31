import {Layout} from '../layouts/Layout';
import {Container, Grid} from '@mui/material';
import {useSelector} from 'react-redux';
import {appSelector} from '../redux/appRedux';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import {TaskStatusCard} from './components/TaskStatus.card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {ShortcutCard} from './components/ShortcutCard'

export const Dashboard = () => {
  const todos = useSelector(appSelector.todo)
  const todoCompleted = todos.filter((t: any) => t.completed)
  const todoUncompleted = todos.filter((t: any) => !t.completed)
  const shortCuts = [
    {
      url: '/todo',
      image: '/images/todo.png',
      title: 'Todos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      url: '/fetch-list',
      image: '/images/pockeball.png',
      title: 'Feching list',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    }
  ]

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <TaskStatusCard
            description="Tareas Completadas"
            count={todoCompleted.length}
            todos={todoCompleted}
            bgColor="rgb(144, 202, 249)"
            icon={<CheckCircleIcon sx={{color: 'rgb(25, 118, 210)'}} fontSize="large"/>}
          />
          <TaskStatusCard
            description="Tareas Pendientes"
            count={todoUncompleted.length}
            todos={todoUncompleted}
            bgColor="rgb(250 174 184)"
            icon={<CancelIcon sx={{color: 'rgb(211, 47, 47)'}} fontSize="large"/>}
          />

          {
            shortCuts.map(shortcut => <ShortcutCard {...shortcut} />)
          }
        </Grid>
      </Container>
    </Layout>
  );
}
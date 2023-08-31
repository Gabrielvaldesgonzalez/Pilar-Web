import {Box, CardContent, Grid, Paper, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React from 'react';

export interface Props {
  description: string
  count: number
  todos: any[]
  bgColor: string
  icon: React.ReactNode;
}

export const TaskStatusCard = ({description, count, todos, bgColor, icon}: Props) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Paper elevation={0} sx={{borderRadius: 16}} variant="outlined">
        <CardContent sx={{padding: '20px 38px 20px 30px', backgroundColor: bgColor}}>
          <Stack justifyContent="space-between" direction="row" alignItems="center">
            {icon}
            <Box sx={{flexGrow: 1, textAlign: 'right'}}>
              <Typography fontSize={30}>
                {count}
              </Typography>
              <Typography fontSize={20}>{description}</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Paper>
      {todos.map((t: any, index: number) =>
        (
          <Stack key={index} sx={{mt: 2, ml: 2}} direction="row">
            <ArrowRightIcon sx={{mr: 2}}/>
            {t.text}
          </Stack>)
      )
      }
    </Grid>
  )
}
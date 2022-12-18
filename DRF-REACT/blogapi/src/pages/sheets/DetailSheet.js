import React, { useEffect, useState} from 'react';
import Values from '../../components/detailsheet/Values';
import backendURL from '../../backendURL';
import { Typography, Grid, Box } from '@mui/material';

const DetailSheet = () => {
  const [appState, setAppState] = useState({
    loading: false, 
    data: null, 
  })

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = backendURL.value + '/api/1';
    fetch(apiUrl)
      .then((data) => data.json()) 
      .then((data) => {
        setAppState({ loading: false, data: data });
      });
  }, [setAppState]);

  if(!appState.data)
		return 
			<p style={{ fontSize: '25px'}}>
				We are waiting for the data to load!...
			</p>;

  const handleChange = (event) => {
    const changedData = appState.data
    changedData["sheet"][`${event.target.name}`] = event.target.value
    setAppState({
      loading: false,
      data: changedData,
    });
  };

  console.log(appState.data.sheet.photo);

  return (
    <Grid  
      container
      className="DetailSheet"
      style={{ 
        width: "1500px",
        margin: "0 auto"
      }}
    >
      <Grid 
        container 
        direction="column"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: 1160,
          }}
          src={backendURL.value + appState.data.sheet.photo}
        />
        <Typography 
          variant="h3" 
          sx={{ 
            mt: 5,
            fontWeight: 400,
            lineHeight: '1.36'
          }}
        >
          {appState.data.sheet.title}
        </Typography>
        <Typography variant="overline" >
          By: {appState.data.sheet.author} | {appState.data.sheet.published}
        </Typography>
        <Typography variant="body1" >
          {appState.data.sheet.excerpt}
        </Typography>
        <Typography variant="subtitle1" >
          {appState.data.sheet.performance_points}
        </Typography>
      </Grid>
      {/* <h1 style={{textAlign: 'center',}}>{appState.data.sheet.title}</h1> */}
      <Values data={appState.data} onChange={handleChange}/>
    </Grid>
  )
}

export default DetailSheet
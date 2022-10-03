import React, { useEffect, useState} from 'react';
import Values from '../components/detailsheet/Values';
import backendURL from '../backendURL';

const DetailSheet = () => {
  const [appState, setAppState] = useState({
    loading: false, 
    data: null, 
  })

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = backendURL.value + '1';
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

  return (
    <div className="DetailSheet">
      <h1 style={{textAlign: 'center',}}>{appState.data.sheet.title}</h1>
      <Values data={appState.data} onChange={handleChange}/>
    </div>
  )
}

export default DetailSheet
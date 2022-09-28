// Loops through data return from Data and place on screen plus some styling
import React, { useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ActionAreaCard from '../components/listsheet/ActionAreaCard';

const Posts = () => {
	const [appState, setAppState] = useState({
    loading: false, 
    posts: null,
  })

	// fetches data from Django backend
	useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl)
      .then((data) => data.json()) 
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);

	if(!appState.posts)
		return 
			<p style={{ fontSize: '25px'}}>
				We are waiting for the data to load!...
			</p>;
	
	const posts = appState.posts;
	if (!posts || posts.length === 0) 
		return <p>Can not find any posts, sorry</p>;

	return (
		<div className="ListSheet">
      <h1 style={{textAlign: 'center',}}>Latest Posts</h1>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<ActionAreaCard title={post.title} body={post.excerpt}/>
							</Grid>
						);
					})}
				</Grid>
			</Container>
    </div>
	);
};
export default Posts;
// Loops through data return from Data and place on screen plus some styling
import React, { useEffect, useState} from 'react';
import Cookies from 'js-cookie'

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
		console.log(Cookies.get('access_token'))
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl, { 
			method: 'GET', 
			headers: new Headers({
					'Authorization': "JWT " + Cookies.get('access_token'), 
			}), 
		})
      .then((data) => data.json()) 
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      })
			.catch((e) => {
				console.log(e);
			});
  }, [setAppState]);

	if(!appState.posts)
	return <p style={{textAlign: 'center'}}>
				We are waiting for the data to load!...
			</p>;
	
	console.log(appState.posts);

	const posts = appState.posts;
	if (!posts || posts.length === 0) 
		return <p style={{textAlign: 'center'}}>
				Can not find any posts, sorry
			</p>;
	else if (posts["detail"] === 'Given token not valid for any token type')
		return <p style={{textAlign: 'center'}}>
				Please sign in first before accessing the tuning sheets.
			</p>;

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
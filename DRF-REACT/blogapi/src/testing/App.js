import React, { useEffect, useState} from 'react';
import Posts from '../pages/ListSheet'
import PostLoadingComponent from './PostLoading';

function App() {
  const PostLoading = PostLoadingComponent(Posts); //allows posts to be displayed depending on loading state
  const [appState, setAppState] = useState({
    loading: false, //when loading = true (shows PostLoading component), when collected loading = false (shows post component)
    posts: null, // all data from api
  })
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl)
      .then((data) => data.json()) // whatever is returned here is passed on to the next then
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  )
}

export default App;

// class connectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api/';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   render(){
//     return <div>Example connection</div>;
//   }
// }

// export default connectionExample;



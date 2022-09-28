// Used for loading when connecting to api

import React from 'react'

const PostLoading = (Component) => {
  return function PostLoadingComponent({ isLoading, ...props }) {
    if(!isLoading) {
      console.log(props);
      return <Component {...props} />;
    }
    return (
      <p style={{ fontSize: '25px'}}>
        We are waiting for the data to load!...
      </p>
    );
  };
}

export default PostLoading
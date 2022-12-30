// Loops through data return from Data and place on screen plus some styling
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

// import Grid from "@mui/material/Grid";
import { Container, Box } from "@mui/material";
import ActionAreaCard from "../../components/listsheet/ActionAreaCard";
import backendURL from "../../backendURL";

const Posts = () => {
  // Styling
  const cardWidth = 360;

  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  // fetches data from Django backend
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = backendURL.value + "/api";
    fetch(apiUrl, {
      method: "GET",
      headers: new Headers({
        // Access_token is required here because getting the tuning sheet lists requires authentication
        Authorization: "JWT " + Cookies.get("access_token"),
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

  if (!appState.posts)
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        We are waiting for the data to load!...
      </p>
    );

  // console.log(appState.posts);

  const posts = appState.posts;
  if (!posts || posts.length === 0)
    return (
      // <p
      //   style={{
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     height: "40vh",
      //   }}
      // >
      //   Can not find any posts, sorry
      // </p>
      <>
        <Box sx={{ width: "100%" }}>
          Sorry, there are no project with those criteria!
        </Box>
        <ActionAreaCard
          sx={{
            visibility: "hidden",
            aspectRatio: "1.2/1",
            maxWidth: {
              xs: "100%",
              md: cardWidth,
            },
            p: 1,
          }}
        />
      </>
    );
  else if (posts["detail"] === "Given token not valid for any token type")
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        Please sign in first before accessing the tuning sheets.
      </p>
    );

  return (
    <div className="ListSheet">
      <h1 style={{ textAlign: "center" }}>Latest Posts</h1>
      <Container maxWidth="md" component="main" sx={{ height: "100vh" }}>
        {/* <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => {
            return (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={post.id} xs={12} md={4}></Grid>
            );
          })}
        </Grid> */}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            width: {
              // when screen size < 900px, make the layout of project cards as wide as the screen
              xs: "100%",
              md: "auto",
            },
            gridTemplateColumns: {
              xs: "100%",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
          }}
        >
          {posts.map((post, index) => {
            return (
              <Box
                sx={{
                  "& .card_container": {
                    mx: 0,
                    width: "100%",
                    // 360 x 300 aspect ratio, from figma specifications
                    height: "auto",
                    aspectRatio: {
                      xs: "1.2/1",
                      md: "1.2/1",
                    },
                    // used maxWidth for responsive design
                    maxWidth: {
                      xs: "100%",
                      md: cardWidth,
                    },
                    "& > img": {
                      height: "45%",
                    },
                    "& .content_container": {
                      mx: { xs: "30px", sm: "15px", md: "30px" },
                      "& a": {
                        scale: { xs: "0.6", sm: "0.45" },
                      },
                    },
                    "& .card_header": {
                      fontSize: "1.5em",
                    },
                  },
                }}
                key={index}
              >
                <ActionAreaCard
                  title={post.title}
                  body={post.excerpt}
                  imageURL={post.photo}
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};
export default Posts;

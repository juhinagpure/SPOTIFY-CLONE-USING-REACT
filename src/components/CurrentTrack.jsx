import React, { useEffect } from "react";
import styled from "styled-components";

export default function currentTrack() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: " Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return <Container>CurrentTrack</Container>;
}

const Container = styled.div``;

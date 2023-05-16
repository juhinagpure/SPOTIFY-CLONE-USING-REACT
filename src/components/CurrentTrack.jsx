import React, { useEffect } from "react";
import styled from "styled-components";

export default function currentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
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
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artists) => artists.name),
          image: item.album.images[2].url,
        };
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return <Container>CurrentTrack</Container>;
}

const Container = styled.div``;

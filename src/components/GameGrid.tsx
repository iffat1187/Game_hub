import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import type { GameQuery } from "../App";
import { Grid } from "@chakra-ui/react";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating_top: number;

  parent_platforms: {
    platform: Platform;
  }[];
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, [gameQuery]);

  return (
    <>
      {error && <p>{error}</p>}

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
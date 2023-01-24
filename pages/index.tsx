import React, { ReactElement, useEffect, useState } from "react";
import { useGithub } from "@/context/githubContext";
import { useRouter } from "next/router";
import { Box, Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function Home(): ReactElement {
  const [name, setName] = useState("");
  const { getUserRepos, repoData, notFound, clearState } = useGithub();
  const router = useRouter();

  useEffect(() => {
    clearState();
  }, []);

  const handleClick = async () => {
    getUserRepos(name);
    repoData !== null && repoData.length > 0 && (await router.push("/result"));
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <Box>
        <Box sx={{ display: "flex" }}>
          <TextField
            name={"name"}
            id="input-with-sx"
            label="Search"
            type={"search"}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<Search />}
            sx={{ marginLeft: "1rem" }}
            onClick={handleClick}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

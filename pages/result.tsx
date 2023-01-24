import React, { ReactElement, useEffect, useState } from "react";
import { Results } from "@/components/Result/Results";
import { useGithub } from "@/context/githubContext";
import { useRouter } from "next/router";
import { Box, Button, TablePagination, TextField } from "@mui/material";
import { Profile } from "@/components/Result/Profile";
import Link from "next/link";
import { Search } from "@mui/icons-material";

export default function Result(): ReactElement {
  const router = useRouter();
  const { userData, repoData } = useGithub();
  const [page, setPage] = React.useState(0);

  const rowsPerPage = 10;

  useEffect(() => {
    !repoData && router.replace("/");
  }, [repoData, router]);

  const currentItems =
    repoData &&
    repoData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      minHeight={"100vh"}
      mt={"3rem"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Box display={"inline"} mr={"1rem"}>
          <Link href={"/"} replace>
            <Button size="small">Back to search</Button>
          </Link>
          <Profile user={userData} />
        </Box>
        <Box mt={"2rem"}>
          <Results repoData={currentItems} />
          <TablePagination
            component={"div"}
            count={repoData ? repoData.length : 0}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
            sx={{ display: "flex", justifyContent: "center", color: "white" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

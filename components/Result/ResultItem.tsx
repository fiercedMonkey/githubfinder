import React, { FunctionComponent } from "react";
import { RepoData } from "@/types/Repo";
import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/router";

type ResultItemProps = {
  repoData: RepoData;
  align?: "right";
};

export const ResultItem: FunctionComponent<ResultItemProps> = ({
  repoData,
  align,
}) => {
  const onTableRowClick = () => {
    window.open(repoData.html_url, "_blank");
  };

  return (
    <>
      <TableRow
        hover
        tabIndex={-1}
        key={repoData.name}
        onClick={onTableRowClick}
        sx={{ cursor: "pointer" }}
      >
        <TableCell align={align}>{repoData.name}</TableCell>
        <TableCell align={align}>{repoData.stargazers_count}</TableCell>
        <TableCell align={align}>{repoData.forks_count}</TableCell>
        <TableCell align={align}>{repoData.html_url}</TableCell>
      </TableRow>
    </>
  );
};

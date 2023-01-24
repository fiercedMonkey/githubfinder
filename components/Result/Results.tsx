import React, { FunctionComponent } from "react";
import { ResultItem } from "@/components/Result/ResultItem";
import { userRepoContextType } from "@/types/Repo";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type ResultsProps = {
  repoData: userRepoContextType["repoData"];
};

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: readonly Column[] = [
  { id: "name", label: "Name" },
  { id: "stars", label: "Stars" },
  { id: "forks", label: "Forks" },
  { id: "link", label: "Link" },
];

export const Results: FunctionComponent<ResultsProps> = ({ repoData }) => {
  return (
    <Paper sx={{ width: "900px", overflow: "hidden" }}>
      <TableContainer>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ border: "1px solid grey" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {repoData &&
              repoData.map((repo) => (
                <ResultItem repoData={repo} key={repo.name} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

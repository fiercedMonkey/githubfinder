import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { userRepoContextType } from "@/types/Repo";
import Link from "next/link";

type ProfileProps = {
  user: userRepoContextType["userData"];
};

export const Profile: FunctionComponent<ProfileProps> = ({ user }) => {
  const foo = 1;

  return (
    <>
      {user && (
        <Card sx={{ marginBottom: "2rem" }}>
          <CardContent>
            <Box component={"div"} sx={{ display: "flex" }}>
              <Box component={"div"} sx={{ margin: "1rem" }}>
                <Avatar
                  alt={user.login}
                  src={user.avatar_url}
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
              <Box component={"div"} sx={{ margin: "1rem" }}>
                <Typography variant="h5" component="div">
                  {user.login}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Repositories: {user.public_repos}
                </Typography>
                <Link href={user.html_url} legacyBehavior>
                  <a target={"_blank"}>
                    <Button size="small">Visit Profile on Github</Button>
                  </a>
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

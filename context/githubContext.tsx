import { createContext, useContext, useState } from "react";
import axios from "axios";
import { userRepoContextType } from "@/types/Repo";
import { useRouter } from "next/router";

const githubContextInitialValue = {
  notFound: false,
  repoData: null,
  userData: null,
  getUserRepos: () => {},
  clearState: () => {},
};

const GithubContext = createContext<userRepoContextType>(
  githubContextInitialValue
);

export function useGithub() {
  return useContext(GithubContext);
}

export function GithubProvider({ children }: any) {
  const router = useRouter();
  const [notFound, setNotFound] = useState(false);
  const [repoData, setRepoData] =
    useState<userRepoContextType["repoData"]>(null);
  const [userData, setUserData] =
    useState<userRepoContextType["userData"]>(null);

  const clearState = () => {
    setUserData(null);
    setRepoData(null);
  };
  const getUserRepos = async (username: string) => {
    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUserData(res.data);
        setNotFound(res.status !== 200);
      })
      .catch((e) => setNotFound(e.response.status === 404));

    await axios
      .get(`https://api.github.com/users/${username}/repos`, {
        params: { per_page: 100 },
      })
      .then((res) => {
        setRepoData(res.data);
        router.push("/result");
      })
      .catch((e) => e);
  };

  const value: userRepoContextType = {
    notFound,
    repoData,
    userData,
    getUserRepos,
    clearState,
  };

  return (
    <>
      <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
    </>
  );
}

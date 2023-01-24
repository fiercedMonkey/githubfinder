export type RepoData = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
};

export type UserData = {
  avatar_url: string;
  login: string;
  public_repos: number;
  html_url: string;
};

export type userRepoContextType = {
  notFound: boolean;
  repoData: RepoData[] | null;
  userData: UserData | null;
  getUserRepos: (value: string) => void;
  clearState: () => void;
};

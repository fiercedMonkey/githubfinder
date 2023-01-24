import { render } from "@testing-library/react";
import Result from "../../pages/result";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "@/pages";
import { GithubProvider } from "@/context/githubContext";
import { repoDataMock } from "@/mocks/repoDataMock";
import { useRouter } from "next/router";
import { userDataMock } from "@/mocks/userDataMock";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

describe("Home", () => {
  it("renders resultpage", () => {
    const mockRouter = {
      replace: jest.fn(),
    };

    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GithubProvider value={[repoDataMock, userDataMock]}>
          <Result />
        </GithubProvider>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

import type { AppProps } from "next/app";
import { GithubProvider } from "@/context/githubContext";
import { ReactElement } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GithubProvider>
        <Component {...pageProps} />
      </GithubProvider>
    </ThemeProvider>
  );
}

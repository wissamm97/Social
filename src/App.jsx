// import styled from "@emotion/styled";
// import { Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed } from "./Components/Feed";
import { Navbar } from "./Components/Navbar";
import { Rightbar } from "./Components/Rightbar";
import { Sidebar } from "./Components/Sidebar";
import Add from "./Components/Add";
import { useState } from "react";
function App() {
  // const MyButton = styled(Button)(({ theme }) => ({
  //   backgroundColor: theme.palette.myColor.main,
  //   border: '1px solid ',
  //   borderColor:theme.palette.myColor.light
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // }));
  return (
    // <>
    //   <Typography
    //     sx={{ backgroundColor: "myColor.main" }}
    //     variant="body1"
    //     color="initial"
    //   >
    //     Test ddd
    //   </Typography>
    //   <MyButton>Add</MyButton>
    // </>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;

import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { LairView } from "./pages/LairView";
// import { themeOptions } from "./generatorTheme";

// const theme = createTheme(themeOptions);

function App() {
	return (
		// <ThemeProvider theme={theme}>
		<Box>
			<Typography>Lair Planner</Typography>
			<LairView />
		</Box>
		// </ThemeProvider>
	);
}

export default App;

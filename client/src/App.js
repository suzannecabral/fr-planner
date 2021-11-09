import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { LairView } from "./pages/LairView";
import ButtonAppBar from "./components/muiTemplates/ButtonAppBar";
import MiniDrawer from "./components/muiTemplates/MiniDrawer";
// import { themeOptions } from "./generatorTheme";

// const theme = createTheme(themeOptions);

function App() {
	const activePage = {
		title: "Lair View",
		desc: "View all your dragons in a big ole list",
		component: <LairView />,
	};
	return (
		// <ThemeProvider theme={theme}>
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<ButtonAppBar title="View" />
			<MiniDrawer
				contentWindow={activePage.component}
				contentTitle={activePage.title}
			/>
		</Box>
		// </ThemeProvider>
	);
}

export default App;

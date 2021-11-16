import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import ButtonAppBar from "./components/muiTemplates/ButtonAppBar";
import { NavBar } from "./components/NavBar";
import { allPagesRoutes } from "./pages/allPagesRoutes";
// import { themeOptions } from "./generatorTheme";
// const theme = createTheme(themeOptions);

function App() {
	const allPages = allPagesRoutes;
	const [activePage, setActivePage] = React.useState(allPages[0]);

	return (
		// <ThemeProvider theme={theme}>
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<ButtonAppBar title="View" />
			{/* Pages are displayed in the NavBar component */}
			<NavBar
				allPages={allPages}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</Box>
		// </ThemeProvider>
	);
}

export default App;

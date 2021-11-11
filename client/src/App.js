import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import ButtonAppBar from "./components/muiTemplates/ButtonAppBar";
import { NavBar } from "./components/NavBar";
import { LairView } from "./pages/LairView";
import AppsIcon from "@mui/icons-material/Apps";
import { Uploader } from "./pages/Uploader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PairView } from "./pages/PairView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ColorCalc } from "./pages/ColorCalc";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Match } from "./pages/Match";
import AnimationIcon from "@mui/icons-material/Animation";
import { SaleCode } from "./pages/SaleCode";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { BioCode } from "./pages/BioCode";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { AucLinks } from "./pages/AucLinks";
import GavelIcon from "@mui/icons-material/Gavel";
// import { themeOptions } from "./generatorTheme";
import { DragonsContext } from "./context/DragonsContext";
// const theme = createTheme(themeOptions);

function App() {
	const allPages = [
		{
			shortTitle: "View",
			title: "Lair View",
			component: <LairView />,
			icon: <AppsIcon />,
			route: "/",
		},
		{
			shortTitle: "Add",
			title: "Add Dragons",
			component: <Uploader />,
			icon: <AddCircleIcon />,
			route: "/add",
		},
		{
			shortTitle: "Pairs",
			title: "Pair Viewer",
			component: <PairView />,
			icon: <FavoriteIcon />,
			route: "/pairs",
		},
		{
			shortTitle: "Calc",
			title: "Color Calculator",
			component: <ColorCalc />,
			icon: <AssessmentIcon />,
			route: "/calc",
		},
		{
			shortTitle: "Match",
			title: "Matchmaker",
			component: <Match />,
			icon: <AnimationIcon />,
			route: "/match",
		},
		{
			shortTitle: "Sale",
			title: "Generate Sale BBCode",
			component: <SaleCode />,
			icon: <ReceiptIcon />,
			route: "/sale",
		},
		{
			shortTitle: "Bio",
			title: "Generate Bio BBCode",
			component: <BioCode />,
			icon: <LoyaltyIcon />,
			route: "/bio",
		},
		{
			shortTitle: "AH",
			title: "Generate Auction House Links",
			component: <AucLinks />,
			icon: <GavelIcon />,
			route: "/ah",
		},
	];

	const [allDragons, setAllDragons] = React.useState([]);
	const [activePage, setActivePage] = React.useState(allPages[0]);
	const value = { allDragons, setAllDragons };

	return (
		// <ThemeProvider theme={theme}>
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<DragonsContext.Provider value={value}>
				<ButtonAppBar title="View" />
				{/* Pages are displayed in the NavBar component */}
				<NavBar
					allPages={allPages}
					activePage={activePage}
					setActivePage={setActivePage}
				/>
			</DragonsContext.Provider>
		</Box>
		// </ThemeProvider>
	);
}

export default App;

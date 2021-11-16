import React from "react";
import { LairView } from "./LairView";
import AppsIcon from "@mui/icons-material/Apps";
import { Uploader } from "./Uploader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PairView } from "./PairView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ColorCalc } from "./ColorCalc";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Match } from "./Match";
import AnimationIcon from "@mui/icons-material/Animation";
import { SaleCode } from "./SaleCode";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { BioCode } from "./BioCode";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { AucLinks } from "./AucLinks";
import GavelIcon from "@mui/icons-material/Gavel";

export const allPagesRoutes = [
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

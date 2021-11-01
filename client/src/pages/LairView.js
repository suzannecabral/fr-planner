import React from "react";
import { Box, Typography } from "@mui/material";
import { fakeDragons } from "../api/fakeDragons";
import { Bio } from "../components/Bio";
import { nanoid } from "nanoid";

const LairView = (props) => {
	const dragons = fakeDragons;
	console.log(dragons);

	return (
		<Box
			display="flex"
			sx={{
				flexWrap: "wrap",
			}}
		>
			{dragons.map((dragon) => {
				return <Bio key={nanoid.generate} dragon={dragon} />;
			})}
		</Box>
	);
};

export { LairView };

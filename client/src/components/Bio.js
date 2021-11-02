import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { BioDetails } from "./BioDetails";

const Bio = (props) => {
	const { dragon } = props;
	return (
		<Box
			sx={{
				padding: "6px",
				margin: "0 0 4px 4px",
				flexDirection: "column",
				border: "1px solid lightgray",
				borderRadius: "6px",
			}}
			display="flex"
		>
			{/* Name & Thumbnail */}
			<Box sx={{ margin: "0 auto", textAlign: "center" }}>
				<Link href={dragon.url}>
					<img width="100px" alt={dragon.name} src={dragon.minipicurl} />
				</Link>
				<Typography variant="body2">{dragon.name}</Typography>
			</Box>
			<BioDetails dragon={dragon} />
		</Box>
	);
};

export { Bio };

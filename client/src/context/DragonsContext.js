import * as React from "react";

// export const DragonsContext = React.createContext({
// 	allDragons: [],
// 	setDragons: () => {},
// });

export const DragonsContext = React.createContext();

export const DragonsContextProvider = (props) => {
	const [dragons, setDragons] = React.useState([]);
	return (
		<DragonsContext.Provider value={{ dragons }}>
			{props.children}
		</DragonsContext.Provider>
	);
};

import React from "react";

const ContextRouteElement = ({ provider, component, ...rest }) => {
	const { Provider } = provider;
	const Component = component;

	return (
		<Provider>
			{Component}
			{/* <Component {...rest} /> */}
		</Provider>
	);
};

export default ContextRouteElement;

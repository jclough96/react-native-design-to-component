import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';
import ScaleContext from './ScaleContext';

export default ScaleProvider = function(props) {
	const [originalDimensions, setOriginalDimensions] = React.useState({
		height: null,
		width: null
	});
	const [currentDimensions, setCurrentDimensions] = React.useState({
		height: null,
		width: null
	});
	const [heightPercentage, setHeightPercentage] = React.useState(null);
	const [widthPercentage, setWidthPercentage] = React.useState(null);

	React.useEffect(() => {
		const { height, width } = Dimensions.get('window');
		setOriginalDimensions(props.config);
		setCurrentDimensions({ width, height });

		// calculate height percentage difference
		const newHeightPercentage = height / props.config.height;
		const newWidthPercentage = width / props.config.width;
		setHeightPercentage(newHeightPercentage);
		setWidthPercentage(newWidthPercentage);
	}, []);

	const height = value => {
		// Returns computed height
		// const heightValue = PixelRatio.roundToNearestPixel(currentDimensions)
		return value * heightPercentage;
	};

	const width = value => {
		// Returns computed width
		return value * widthPercentage;
	};

	const fontSize = value => {
		// Returns computed font size
		const averageChange = (heightPercentage + widthPercentage) / 2;
		return value * averageChange;
	};

	const radius = value => {
		// Returns computed radius
		const averageChange = (heightPercentage + widthPercentage) / 2;

		return value * averageChange;
	};

	const values = React.useMemo(() => ({ height, width, fontSize, radius, originalDimensions, currentDimensions }), [currentDimensions]);

	return <ScaleContext.Provider value={values}>{props.children}</ScaleContext.Provider>;
};

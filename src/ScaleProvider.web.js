/*
 * Author: Joseph Clough (joseph.clough@thedistance.co.uk)
 * Created: Fri, 4th December 202020
 * Copyright 2020 - The Distance
 */
import React from "react";
import ScaleContext from "./ScaleContext";

export default (props) => {
  if (!props.config) {
    throw new Error(
      `Please ensure that a config object containing the original devices height and width is supplied to the ScaleProvider component.`
    );
  }
  const [originalDimensions, setOriginalDimensions] = React.useState({
    height: props.config.height,
    width: props.config.width,
  });
  const [currentDimensions, setCurrentDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [heightPercentage, setHeightPercentage] = React.useState(null);
  const [widthPercentage, setWidthPercentage] = React.useState(null);

  React.useEffect(() => {
    // calculate height percentage difference
    const newHeightPercentage =
      currentDimensions.height / originalDimensions.height;
    const newWidthPercentage =
      currentDimensions.width / originalDimensions.width;
    setHeightPercentage(newHeightPercentage);
    setWidthPercentage(newWidthPercentage);
  }, [
    currentDimensions.height,
    currentDimensions.width,
    originalDimensions.height,
    originalDimensions.width,
    props.config,
  ]);

  const getHeight = React.useCallback(
    (value) => {
      // Returns computed height
      // const heightValue = PixelRatio.roundToNearestPixel(currentDimensions)
      return value * heightPercentage;
    },
    [heightPercentage]
  );

  const getWidth = React.useCallback(
    (value) => {
      // Returns computed width
      return value * widthPercentage;
    },
    [widthPercentage]
  );

  const fontSize = React.useCallback(
    (value) => {
      // Returns computed font size
      const averageChange = (heightPercentage + widthPercentage) / 2;
      return value * averageChange;
    },
    [heightPercentage, widthPercentage]
  );

  const radius = React.useCallback(
    (value) => {
      // Returns computed radius
      const averageChange = (heightPercentage + widthPercentage) / 2;

      return value * averageChange;
    },
    [heightPercentage, widthPercentage]
  );

  const values = React.useMemo(
    () => ({
      getHeight,
      getWidth,
      fontSize,
      radius,
      originalDimensions,
      currentDimensions,
    }),

    [
      currentDimensions,
      fontSize,
      getHeight,
      getWidth,
      originalDimensions,
      radius,
    ]
  );

  return (
    <ScaleContext.Provider value={values}>
      {props.children}
    </ScaleContext.Provider>
  );
};

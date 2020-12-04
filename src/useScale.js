/*
 * Author: Joseph Clough (joseph.clough@thedistance.co.uk)
 * Created: Fri, 4th December 202020
 * Copyright 2020 - The Distance
 */
import React from 'react';
import ScaleContext from './ScaleContext';

export default () => {
	const context = React.useContext(ScaleContext);

	if (context === undefined) {
		throw new Error('`ScaleHook` hook must be used within a `ScaleProvider` component');
	}
	return context;
};

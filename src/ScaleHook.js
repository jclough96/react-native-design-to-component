import React from 'react';
import ScaleContext from './ScaleContext';

export default () => {
	const context = React.useContext(ScaleContext);

	if (context === undefined) {
		throw new Error('`ScaleHook` hook must be used within a `ScaleProvider` component');
	}
	return context;
};

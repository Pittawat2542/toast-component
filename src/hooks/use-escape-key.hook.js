import React from 'react';

const useEscapeKey = (callback) => {
	React.useEffect(() => {
		function handleKeyDown(ev) {
			if (ev.key === 'Escape') {
				callback();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [callback]);
};

export default useEscapeKey;

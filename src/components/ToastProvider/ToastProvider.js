import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const clearAllToasts = React.useCallback(() => {
		setToasts([]);
	}, [setToasts]);

	return (
		<ToastContext.Provider
			value={{
				toasts,
				setToasts,
				clearAllToasts,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;

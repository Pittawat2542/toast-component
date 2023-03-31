import Button from '../Button';
import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const { toasts, setToasts, clearAllToasts } = React.useContext(ToastContext);
	const [message, setMessage] = React.useState('');
	const [selectedVariant, setSelectedVariant] = React.useState(
		VARIANT_OPTIONS[0]
	);

	React.useEffect(() => {
		function handleKeyDown(ev) {
			if (ev.key === 'Escape') {
				clearAllToasts();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	function addNewToast(ev) {
		ev.preventDefault();
		const newToasts = [
			...toasts,
			{ id: crypto.randomUUID(), message, variant: selectedVariant },
		];
		setToasts(newToasts);
		setMessage('');
		setSelectedVariant(VARIANT_OPTIONS[0]);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf
				toasts={toasts}
				onDismiss={(id) =>
					setToasts((oldToasts) => oldToasts.filter((t) => t.id !== id))
				}
			/>

			<form className={styles.controlsWrapper} onSubmit={addNewToast}>
				<div className={styles.row}>
					<label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={message}
							onChange={(ev) => setMessage(ev.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((variant) => (
							<label htmlFor={variant} key={variant}>
								<input
									id={variant}
									type='radio'
									name='variant'
									value={variant}
									checked={variant === selectedVariant}
									onChange={() => setSelectedVariant(variant)}
								/>
								{variant}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;

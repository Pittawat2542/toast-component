import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, onDismiss }) {
	return (
		<ol
			className={styles.wrapper}
			role='region'
			aria-live='polite'
			aria-label='Notification'
		>
			{toasts.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id}>
					<Toast id={toast.id} variant={toast.variant} onDismiss={onDismiss}>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;

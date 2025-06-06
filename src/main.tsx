import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NuqsAdapter } from 'nuqs/adapters/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<NuqsAdapter fullPageNavigationOnShallowFalseUpdates>
			<App />
		</NuqsAdapter>
	</React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import * as serviceWorker from './serviceWorker';

// Render App
const application = (
	<App />
)
ReactDOM.render(application, document.getElementById('root'))
// user serviceWorker.unregister(); to stop service worker.
serviceWorker.register();
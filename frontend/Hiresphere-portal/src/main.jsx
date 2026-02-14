import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (err) {
  // render error message into DOM so it's visible in the browser
  // helpful for diagnosing runtime issues during dev
  // eslint-disable-next-line no-console
  console.error(err);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<pre style="color:#c53030;white-space:pre-wrap">${err && err.message ? err.message : String(err)}</pre>`;
  }
}

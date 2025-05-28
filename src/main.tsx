import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function bootstrap() {
  // Load config at runtime
  const base = import.meta.env.BASE_URL || '/'
  const res = await fetch(`${base}config.json`)
  if (!res.ok) throw new Error(`Failed to load config.json`)
  const config = await res.json()

  // apply the configuration
  const root = document.documentElement
  root.style.setProperty('--primary-color', config.primaryColor)
  root.style.setProperty('--secondary-color', config.secondaryColor)
  root.style.setProperty('--primary-text-color', config.primaryTextColor)
  root.style.setProperty('--secondary-text-color', config.secondaryTextColor)

  document.title = config.title || 'MDEditor'

  // Render the application
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App config={config} baseURL={base} />
    </React.StrictMode>
  )
}

bootstrap()

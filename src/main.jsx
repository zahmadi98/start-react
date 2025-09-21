import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
const root = createRoot(container)  // ✅ استفاده از createRoot که import کردی

// رندر App بدون JSX
root.render(React.createElement(App))

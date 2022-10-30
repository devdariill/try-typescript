import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App  age={30} name={"ronald"} lastName={"dario"}/>
  </React.StrictMode>
)
// edit: I've added the `as HTMLElement` to the `getElementById` call. This is because the `getElementById` method returns `HTMLElement | null` and the `render` method expects `HTMLElement`.
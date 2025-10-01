import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from '../App.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} />
  )
)
export default router;
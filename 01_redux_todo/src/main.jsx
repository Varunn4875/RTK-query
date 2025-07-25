import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store'
import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>,
)

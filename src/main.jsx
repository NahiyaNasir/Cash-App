import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
}  from "react-router-dom";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import { Toaster } from 'react-hot-toast';
import router from './Components/Routes/Routes';
import AuthProvider from './Components/Routes/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    <Toaster
  position="top-center"
  reverseOrder={false}
 
/>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

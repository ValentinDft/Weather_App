import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <BrowserRouter>

    <Header/>
    
    <QueryClientProvider client={queryClient}>
	    <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  </BrowserRouter>,
  document.getElementById('root')
);

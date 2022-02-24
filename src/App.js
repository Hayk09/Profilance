import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { RouterProvider } from './providers';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider />
    </QueryClientProvider>
  );
}

export default App;

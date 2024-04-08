import Header from './components/Header'
import Content from './components/Content'
import { TaskProvider } from './contexts/taskContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './components/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Content />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/:key',
        element: null,
      },
      {
        path: '/task/:id',
        element: null,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import { TaskProvider } from './contexts/taskContext'
import { Routes, Route } from 'react-router-dom'
import Column from './components/Column'

function App() {

  return (
    <>
      <Header />
      <TaskProvider>
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/:key' element={<Column />} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App

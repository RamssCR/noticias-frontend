import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '@/views/Dashboard'

function App() {
  return (
    <main className="max-w-[80em] mx-auto w-full flex flex-col items-center gap-5 py-6 px-5 border border-black">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/panel' element={<h1>Main Section</h1>} />
          <Route path='/:id' element={<h1>Main Section</h1>} />
          <Route path='/edit/:id' element={<h1>Main Section</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

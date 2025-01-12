import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import News from './views/News'
import Panel from './views/Panel'
import CreateNews from './views/CreateNews'
import EditNews from './views/EditNews'

function App() {
  return (
    <main className="max-w-[80em] mx-auto w-full flex flex-col items-center gap-5 py-6 px-5">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/panel' element={<Panel />} />
          <Route path='/:id' element={<News />} />
          <Route path='/create' element={<CreateNews />} />
          <Route path='/edit/:id' element={<EditNews />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

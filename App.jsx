import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddStudent from './components/AddStudent'
import SearchStudent from './components/SearchStudent'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/search-student" element={<SearchStudent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

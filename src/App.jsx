import Home from './pages/Home'
import Cursor from './components/Cursor'

const App = () => {
  return (
    <>
      <Cursor />
      <div className="ambient-glow" aria-hidden="true" />
      <Home />
    </>
  )
}

export default App

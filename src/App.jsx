import './App.css'
import Data from './components/DataComponent'
import MapComponent from './components/MapComponent'
import DrawHooks from './hooks/DrawHooks'

function App() {

  return (
    <>
      <MapComponent />
      <DrawHooks />
      <Data />
    </>
  )
}

export default App

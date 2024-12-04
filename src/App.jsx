import { useState } from 'react'
import Navbar from './Components/NavBar'
import Carousel from './Components/Carousal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Navbar />
      <Carousel />
      {/* Add other components or content */}
      <main className="mt-16 p-4">
        <h1 className="text-4xl text-white text-center">Welcome to Ticket Master</h1>
      </main>
    </div>
    </>
  )
}

export default App

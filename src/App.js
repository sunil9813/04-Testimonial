import "./App.css"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <>
      <main>
        <div className='container'>
          <div className='title'>
            <h2>Our Reviews</h2>
            <div className='uderline'></div>
          </div>
          <Testimonial />
        </div>
      </main>
    </>
  )
}

export default App

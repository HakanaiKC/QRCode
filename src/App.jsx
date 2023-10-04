import qr from './assets/image-qr-code.png'
import './App.css'

function App() {
  return (
    <>
      <div className="wrapper">
        <img src={qr} alt="QR Code"/>
        <h2 className='heading'>Improve your front-end skills by building projects</h2>
        <p className='context'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </>
  )
}

export default App

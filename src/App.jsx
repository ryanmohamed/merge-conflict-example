import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [imageData, setImageData] = useState([]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button className="btn" onClick={async () => {
          const res = await fetch("https://picsum.photos/v2/list", { method: "GET" })
          if (res.status !== 200) return;
          const data = await res.json(); // array of objects
          setImageData(data)
        }}>
          Get images
        </button>
        <div className="mt">
          { imageData.map((image, idx) => (
            <img className="img" src={image?.download_url} alt="image" key={idx}/>
          )) }
        </div>
    </>
  )
}

export default App

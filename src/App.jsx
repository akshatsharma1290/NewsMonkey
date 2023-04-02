import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import {Route , Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


function App() {
  let pageSize = 6
  const [progress, setProgress] = useState(0)
  const apiKey = import.meta.env.VITE_NEWS_API
  
  return (
    <>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
    <Routes>
    <Route exact path="/" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/> } ></Route>
    <Route exact path="/business" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/> } ></Route>
    <Route exact path="/entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/> } ></Route>
    <Route exact path="/health" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health"/> } ></Route>
    <Route exact path="/science" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/> } ></Route>
    <Route exact path="/sports" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/> } ></Route>
    <Route exact path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/> } ></Route>
    <Route exact path="/general" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/> } ></Route>
    </Routes>
    </>
  )
}

export default App

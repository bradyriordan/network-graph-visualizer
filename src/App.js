import { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav'
import Button from './components/Button'
import Visualizer from './components/Visualizer'
import Editor from './components/Editor'
import SampleData from './data/SampleData'
import DataValidator from './lib/DataValidator'


function App() {
  const [showEditor, setShowEditor] = useState(true)  
  const [data, setData] = useState(JSON.stringify(SampleData))   
  const [cleanData, setCleanData] = useState(null)
  const [dataError, setDataError] = useState({ json: null, edges: null, vertices: null })

  const toggleEditor = (e) => {
    if (e) { e.preventDefault() };
    setShowEditor(!showEditor)
  }  

  const handleDataChange = (event) => {
    // remove carriage, line and tab returns
    setData(event.replace(/\\./g, ''))
  }

  const submitData = (e) => {
    e.preventDefault()
    const isValidData = !Object.values(dataError).some(error => error !== null)
    if(isValidData){ 
      setCleanData(data)
      toggleEditor() 
    }
  }

  // validate data on every keystroke
  useEffect(() => {
    setDataError(DataValidator(data))
  }, [data])
  
  return (
    <div className="App">
      <div className="row app-container">
        <Nav />
        <div className="main">
          <Button toggleEditor={toggleEditor} />
          <Editor
            toggleEditor={toggleEditor}
            showEditor={showEditor}            
            data={data}
            handleDataChange={handleDataChange}
            dataError={dataError}
            submitData={submitData}
          />
          <div className="col s12">
            <Visualizer data={cleanData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

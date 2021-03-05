import { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Button from './components/Button'
import Visualizer from './components/Visualizer'
import Editor from './components/Editor'
import ErrorBoundary from './components/ErrorBoundary'
import sampleData from './lib/SampleData'


function App() {
  const [showEditor, setShowEditor] = useState(false)  
  const [data, setData] = useState(JSON.stringify(sampleData))  
  const [cleanData, setCleanData] = useState(null)
  const [dataError, setDataError] = useState(null)
  const [formatDataError, setFormatDataError] = useState(false)

  const toggleEditor = (e) => {
    if(e) {e.preventDefault()};    
    setShowEditor(!showEditor)    
  }

  const handleDataChange = (event) => {
    // remove carriage, line and tab returns
    setData(event.replace(/\\./g, ''))   
  }

  const throwFormatDataError = () => {
    setFormatDataError(true)
  }

  const throwDataError = () => {
    setDataError(true)
  }

  const submitData = (e) => {
    // prevent rerender
    e.preventDefault();     
    // send data for validation
    validateData(data);    
  }

  const validateData = input => {
    try {
      console.log(JSON.parse(input))
      // only update visualizer when data is submitted
      setCleanData(data)
      setDataError(false) 
      // format data error handled in error boundary component
      setFormatDataError(false)
    } catch (e) {      
      setDataError(true)
      console.log(e)
    }   
  }

  return (
    <div className="App">
      <div className="row app-container">
        <Nav />
        <div className="main">
          <Button toggleEditor={toggleEditor} />
          <Editor show={showEditor} submitData={submitData} data={data} handleDataChange={handleDataChange} dataError={dataError}/>          
          <div className="col s12">
            {/* For handling render errors not possible with try/catch block */}
            <ErrorBoundary key={formatDataError} formatDataError={formatDataError} throwDataError={throwDataError} throwFormatDataError={throwFormatDataError}  >
              <Visualizer data={cleanData}/>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

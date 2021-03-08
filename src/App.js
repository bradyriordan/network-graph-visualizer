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
  const [JSONformatError, setJSONFormatError] = useState(null)
  const [reactD3GraphError, setReactD3GraphError] = useState(false)

  const toggleEditor = (e) => {
    if(e) {e.preventDefault()};    
    setShowEditor(!showEditor)    
  }

  const handleDataChange = (event) => {
    // remove carriage, line and tab returns
    setData(event.replace(/\\./g, ''))   
  }

  const throwReactD3GraphError = () => {
    setReactD3GraphError(true)
  }

  const throwJSONFormatError = () => {
    setJSONFormatError(true)
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
      setJSONFormatError(false) 
      // format data error handled in error boundary component
      setReactD3GraphError(false)
    } catch (e) {      
      setJSONFormatError(true)
      console.log(e)
    }   
  }

  return (
    <div className="App">
      <div className="row app-container">
        <Nav />
        <div className="main">
          <Button toggleEditor={toggleEditor} />
          <Editor show={showEditor} submitData={submitData} data={data} handleDataChange={handleDataChange} JSONformatError={JSONformatError}/>          
          <div className="col s12">
            {/* For handling render errors not possible with try/catch block */}
            <ErrorBoundary key={reactD3GraphError} reactD3GraphError={reactD3GraphError} throwJSONFormatError={throwJSONFormatError} throwReactD3GraphError={throwReactD3GraphError}  >
              <Visualizer data={cleanData}/>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

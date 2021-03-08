import React, { useEffect } from 'react'
import M from 'materialize-css'
import AceEditor from 'react-ace';
import Error from './Error'
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github"

const Editor = ({ show, data, handleDataChange, submitData, JSONformatError }) => {

    useEffect(() => {
        M.AutoInit();
        var elems = document.querySelector('.sidenav');  
        M.Sidenav.getInstance(elems).open()                  
    },[show])

    return (
        <>
        <ul id="slide-out" className="sidenav">
            
            <li>
                <h5>Enter JSON</h5>
                <div><a href="https://github.com/bradyriordan/network-graph-visualizer#json-formatting-rules" target="_blank" rel="noreferrer">View formatting requirements</a></div>
            </li>
            <li>
                {JSONformatError ? <Error /> : ''} 
                    <div className="editor-content">
                        <AceEditor 
                        theme="github"
                        mode="json"
                        width="100%"
                        height="70vh"
                        onChange={handleDataChange}
                        value={data}
                        setOptions={{
                            useWorker: false,
                            showPrintMargin: false
                        }}/>
                    </div>
            </li>
            
                <a href="/" className={`waves-effect waves-light btn blue darken-4 btn-large`} onClick={(e) => submitData(e)}><i className="material-icons right">refresh</i>Render Graph</a>
            
        </ul>
        </>
    )
}

export default Editor;
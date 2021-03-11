import React, { useEffect } from 'react'
import M from 'materialize-css'
import AceEditor from 'react-ace';
import Error from './Error'
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github"

const Editor = ({ toggleEditor, showEditor, data, handleDataChange, dataError, submitData }) => {

    useEffect(() => {
        M.AutoInit();
        var elems = document.querySelector('.sidenav');
        if(showEditor){
            M.Sidenav.getInstance(elems).open()
        } else {
            M.Sidenav.getInstance(elems).close()
        }
    }, [showEditor]) 
    
    useEffect(() => {
        document.getElementsByClassName('sidenav-overlay')[0].addEventListener('click', (e) => toggleEditor(e))        
    },[showEditor, toggleEditor])

    return (
        <>
            <ul id="slide-out" className="sidenav">
                <a href="/" className="close-editor waves-effect waves-light btn-small red lighten-3" onClick={(e) => toggleEditor(e)}>close</a>
                <li>
                    <h5>Enter JSON</h5>
                    <div><a href="https://github.com/bradyriordan/network-graph-visualizer#json-formatting-rules" target="_blank" rel="noreferrer">View formatting requirements</a></div>
                </li>
                <li>
                    {!Object.values(dataError).every(item => item === null) ? <Error dataError={dataError} /> : ''}
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
                            }} />
                    </div>
                </li>
                <a href="/" className={`waves-effect waves-light btn blue darken-4 btn-large`} onClick={(e) => submitData(e)}><i className="material-icons right">refresh</i>Render Graph</a>
            </ul>
        </>
    )
}

export default Editor;
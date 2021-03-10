import React, { useEffect } from 'react'
import M from 'materialize-css'
import AceEditor from 'react-ace';
import Error from './Error'
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github"

const Editor = ({ show, data, handleDataChange, dataError }) => {

    useEffect(() => {
        M.AutoInit();
        var elems = document.querySelector('.sidenav');
        M.Sidenav.getInstance(elems).open()
    }, [show])

    return (
        <>
            <ul id="slide-out" className="sidenav">
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
                            height="75vh"
                            onChange={handleDataChange}
                            value={data}
                            setOptions={{
                                useWorker: false,
                                showPrintMargin: false
                            }} />
                    </div>
                </li>

            </ul>
        </>
    )
}

export default Editor;
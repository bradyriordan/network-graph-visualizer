import React from 'react'

const Error = ({ dataError }) => {
    return (
        <>
            <div className="data-error scale-transition">JSON Error:
            <ul>
                {/* Convert error object values to array and display them if they exist */}
                    {Object.values(dataError).map((item, i) => {
                        if (item !== null) {
                            return (
                                <li>{item.error}</li>
                            )
                        }
                        return false
                    })
                }
            </ul>
            </div>
        </>
    )
}

export default Error;
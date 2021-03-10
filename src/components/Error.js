import React from 'react'

const Error = ({ dataError }) => {
    return (
        <>
            <p className="data-error scale-transition">Whoops! Looks like there is an error. Fix the error and try again!</p>

            {/* Convert error object values to array and display them if they exist */}
            {Object.values(dataError).map((item, i) => {
                if (item !== null) {
                    return (
                        <p>{item.error}</p>
                    )
                }
                return false
            })
            }
        </>
    )
}

export default Error;
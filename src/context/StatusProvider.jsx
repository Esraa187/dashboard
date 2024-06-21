import React, { useState } from 'react'
import { StatusContext } from './StatusContext'
function StatusProvider(props) {
    const [appear, setApear] = useState(true)
    return (
        <StatusContext.Provider value={{ appear, setApear }}>
            {props.children}
        </StatusContext.Provider>
    )
}

export default StatusProvider

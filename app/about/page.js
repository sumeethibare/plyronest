import React from 'react'
import Showpiece from './components/Showpiece'
import Work from './components/Work'
import People from './components/People'
import CoreTeam from './components/CoreTeam'

function page() {
    return (
        <>
            {/* <Showpiece /> */}
            <Work />
            <People />
            <CoreTeam />
        </>
    )
}

export default page
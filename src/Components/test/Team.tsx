import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Team: React.FunctionComponent = () => {
    return (

        <TeamText>Team <Sidebar/></TeamText>
    )
}

export default Team

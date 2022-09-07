import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Data = styled.section`
    margin-bottom: 30px;
    & div:first-child {
        margin-bottom: 10px;
    }
`

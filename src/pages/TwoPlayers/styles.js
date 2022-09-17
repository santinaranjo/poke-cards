import styled from 'styled-components'
import background from '../../assets/background.jpeg'

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
`

export const Data = styled.section`
    margin-bottom: 10px;
    & div:first-child {
        margin-bottom: 5px;
        margin-top: 10px;
        text-align: center;
    }
    & div:first-child,
    & p {
        font-size: 15px;
        font-weight: bolder;
        color: rgb(60, 90, 170);
        background-color: rgb(255, 210, 50);
        border: 6px solid rgb(60, 90, 170);
        padding: 10px;
        border-radius: 20px;
    }
    & div:nth-child(2) {
        display: flex;
        justify-content: space-between;
    }
`

export const SectionControlls = styled.section`
    button {
        font-size: 15px;
        font-weight: bolder;
        color: rgb(60, 90, 170);
        background-color: rgb(255, 210, 50);
        border: 6px solid rgb(60, 90, 170);
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
    }
    button:active {
        background-color: rgb(255, 100, 50);
    }
    & button:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const LoadCounter = styled.div`
    display: none;
`

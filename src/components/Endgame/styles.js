import styled from 'styled-components'

export const Section = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        font-weight: bolder;
        color: rgb(60, 90, 170);
        background-color: rgb(255, 210, 50);
        border: 6px solid rgb(60, 90, 170);
        padding: 10px;
        border-radius: 20px;
    }
    p {
        margin-bottom: 15px;
    }
    button {
        text-align: center;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 15px;
    }
    a,
    button {
        text-decoration: none;
        text-align: center;
        color: rgb(255, 210, 50);
        background-color: rgb(60, 90, 170);
        border: 6px solid rgb(60, 90, 170);
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
    }
`

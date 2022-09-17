import styled from 'styled-components'
import background from '../../assets/background.jpeg'

export const Section = styled.section`
    background-image: url(${background});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        width: 250px;
        text-align: center;
        text-decoration: none;
        font-size: 23px;
        font-weight: bolder;
        color: rgb(60, 90, 170);
        background-color: rgb(255, 210, 50);
        border: 6px solid rgb(60, 90, 170);
        padding: 10px;
        border-radius: 20px;
        -webkit-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
    }
    & a:first-of-type {
        margin-bottom: 15px;
    }
    img {
        width: 300px;
        height: auto;
        margin-bottom: 20px;
    }
`

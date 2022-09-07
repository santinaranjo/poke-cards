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
        width: 180px;
        text-align: center;
        text-decoration: none;
        font-size: 25px;
        font-weight: bold;
        color: rgb(60, 90, 170);
        background-color: rgb(255, 210, 50);
        border: 5px solid rgb(60, 90, 170);
        padding: 10px;
        border-radius: 20px;
        -webkit-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
    }
    img {
        width: 350px;
        height: auto;
        margin-bottom: 30px;
    }
`

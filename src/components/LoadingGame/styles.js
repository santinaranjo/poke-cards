import styled, { keyframes } from 'styled-components'
import background from '../../assets/background.jpeg'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 8px solid rgb(250, 110, 110);
    border-right: 8px solid rgb(250, 110, 110);
    border-bottom: 8px solid rgb(250, 110, 110);
    border-left: 14px solid rgb(230, 37, 32);
    background: transparent;
    width: 70px;
    height: 70px;
    border-radius: 50%;
`

export const Section = styled.section`
    background-image: url(${background});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

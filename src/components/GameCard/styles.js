import styled from 'styled-components'
import backgroundCard from '../../assets/background-card.png'

const cardWidth = '65px'
const cardHeight = '100px'
const smallerCardWidth = '55px'
const smallerCardHeight = '67px'

export const Card = styled.div`
    width: ${cardWidth};
    height: ${cardHeight};
    @media screen and (max-width: 320px) {
        width: ${smallerCardWidth};
        height: ${smallerCardHeight};
    }
    .card {
        width: 65px;
        height: 100px;
        position: relative;
        transform-style: preserve-3d;
        transition: 150ms;
        cursor: pointer;
        perspective: 1000px;
        transition: all 0.25s ease-in-out;
        width: ${cardWidth};
        height: ${cardHeight};
        @media screen and (max-width: 320px) {
            width: ${smallerCardWidth};
            height: ${smallerCardHeight};
        }
    }

    .card-flip {
        .front {
            transform: perspective(1000px) rotateY(-180deg);
        }
        .back {
            transform: perspective(1000px) rotateY(0deg);
        }
    }

    .front,
    .back {
        position: absolute;
        transition: all 0.25s ease-in-out;
        width: ${cardWidth};
        height: ${cardHeight};
        @media screen and (max-width: 320px) {
            width: ${smallerCardWidth};
            height: ${smallerCardHeight};
        }
        backface-visibility: hidden;
        cursor: pointer;
    }

    .front {
        background-color: rgb(60, 90, 170);
        border-radius: 5px;
        background-image: url(${backgroundCard});
        background-size: 30px;
    }
    .back {
        transform: rotateY(180deg);
        background-color: rgb(255, 210, 50);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 85%;
            height: auto;
        }
    }
`

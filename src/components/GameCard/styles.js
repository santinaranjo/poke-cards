import styled from "styled-components"

export const Card = styled.div`
    .card {
        width: 100px;
        height: 100px;
        position: relative;
        transform-style: preserve-3d;
        transition: 150ms;
        cursor: pointer;
        perspective: 1000px;
        transition: all .25s ease-in-out;
        width: 300px;
        height: 500px;
    }
    
    .card-flip {
        .front {
            transform: perspective(1000px) rotateY(-180deg);
        }
        .back {
            transform: perspective(1000px) rotateY(0deg);
        }
    }

    .front, .back {
        position: absolute;
        transition: all .25s ease-in-out;
        width: 300px;
        height: 500px;
        backface-visibility: hidden;
    }

    .front {
        
        background-color: blue;
    }
    .back {
        transform: rotateY(180deg);
        background-color: green;
    }
`
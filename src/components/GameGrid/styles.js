import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  margin-left: 30px;
  div {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 21%;
    margin-bottom: 20px;
  }
`;

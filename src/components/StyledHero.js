// https://styled-components.com/

import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

// orange를 변수로 선언한 후 color 속성에 값으로 넣어줄 수 있다.
// const orange = "#15025";
// const SimpleButton = styled.button`
//   color: ${orange};
//   background: green;
//   font-size: 3rem;
// `;

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

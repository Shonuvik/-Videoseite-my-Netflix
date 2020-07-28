import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    background-color:#8A2BE2 ;
    color: #fff;
    
    outline: none;
    cursor: pointer;
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 50px;
    border: 1px solid 25px;
    border-radius: 20px;
    padding: 10px 25px;
    &:before {
      font-size: 10px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 
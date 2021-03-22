import React from "react"
import styled from '@emotion/styled'

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 20px !important;
  z-index: 10;
  position: relative;
  width: 100% !important;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    margin: 2px;
    transform-origin: 5px;

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media (min-width: 480px) {
      display: none;
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger aria-label="mobile menu" open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
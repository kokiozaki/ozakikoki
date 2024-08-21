/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { vwPc, bpSp } from '../scripts/styleVariables';
import { css } from '@emotion/react';

const btnAStyle = css`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5rem;
  cursor: pointer;
  padding: ${vwPc(15)} ${vwPc(60)} ${vwPc(15)} ${vwPc(30)};
  position: relative;
  font-size: ${vwPc(20)};
  transition: 0.25s all;

  @media screen and (max-width: ${bpSp}) {
    font-size: 1.4rem;
    padding: 1rem 3.5rem 1rem 2rem;
  }

  &::after {
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2227%22%20height%3D%2210%22%20viewBox%3D%220%200%2027%2010%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M0.563966%209.36452L26.436%209.36452L16.9995%200.635497%22%20stroke%3D%22black%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E');
    position: absolute;
    content: "";
    width: ${vwPc(26)};
    height: ${vwPc(10)};
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateY(-50%);
    top: 48%;
    right: ${vwPc(15)};

    @media screen and (max-width: ${bpSp}) {
      width: 1.8rem;
      height: 1rem;
      right: 1rem;
    }
  }

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:hover::after {
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2227%22%20height%3D%2210%22%20viewBox%3D%220%200%2027%2010%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M0.563966%209.36452L26.436%209.36452L16.9995%200.635497%22%20stroke%3D%22white%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E');
  }

  &.more {
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M1 9L17 9' stroke='black' stroke-linecap='round'/%3E%3Cpath d='M9 1L9 17' stroke='black' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      width: ${vwPc(16)};
      height: ${vwPc(16)};
      transition: 0.25s;
    }

    &:hover {
      &::after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M1 9L17 9' stroke='white' stroke-linecap='round'/%3E%3Cpath d='M9 1L9 17' stroke='white' stroke-linecap='round'/%3E%3C/svg%3E");

      }
    }
  }
`;

interface Props {
  text: string;
  href?: string;
  more?: boolean;
}

const BtnA: React.FC<Props> = ({ text, href, more }) => {

  const className = more ? 'btn-A more' : 'btn-A';

  if (href) {
    return (
      <a href={href} css={btnAStyle} className={className}>
        {text}
      </a>
    );
  } else {
    if (more) {
      return (
        <button css={btnAStyle} className='btn-A more'>
          {text}
        </button>
      );
    } else {
      return (
        <button css={btnAStyle} className='btn-A'>
          {text}
        </button>
      );
    }
  }
}

export default BtnA;


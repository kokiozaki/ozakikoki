/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { vwPc, bpSp } from '../scripts/styleVariables';
import { css } from '@emotion/react';

const btnAStyle = css`

  font-size: ${vwPc(20)};
  width: 150px;
  text-align: center;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  @media screen and (max-width:${bpSp}) {
    font-size: 1.2rem;
  }

  &.btn-16 {
    border: none;
    color: #000;
  }
  &.btn-16:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  &.btn-16:hover {
    color: #000;
  }
  &.btn-16:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  &.btn-16:active {
    top: 2px;
  }

`;

interface Props {
  text: string;
  href?: string;
  more?: boolean;
}

const BtnA: React.FC<Props> = ({ text, href, more }) => {

  const className = more ? 'btn-A more custom-btn btn-16' : 'btn-A custom-btn btn-16';

  if (href) {
    return (
      <a href={href} css={btnAStyle} className={className}>
        {text}
      </a>
    );
  } else {
    if (more) {
      return (
        <button css={btnAStyle} className='btn-A more custom-btn btn-16'>
          {text}
        </button>
      );
    } else {
      return (
        <button css={btnAStyle} className='btn-A custom-btn btn-16'>
          {text}
        </button>
      );
    }
  }
}

export default BtnA;


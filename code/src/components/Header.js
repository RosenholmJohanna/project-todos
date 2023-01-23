/* eslint-disable linebreak-style */
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable arrow-parens */
/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */

import React from 'react';
import styled from 'styled-components';

const DateToday = styled.div`
color: white;
font-style: italic;
padding: 5%;
font-size: 12px;
`

export const HeaderContainer = styled.section`
 background-color:#D3B19E;
`
const HeaderText = styled.h1`
color: white;
margin:0;
padding: 5%;
`


const date = new Date();
const dateToday = date.toString().slice(3, 21) 

export const Header = () => {
  return (
    <HeaderContainer>
      <DateToday>{dateToday}</DateToday>
      <HeaderText>
        Task Manager
      </HeaderText>
    </HeaderContainer>
  )
};
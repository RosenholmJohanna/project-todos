/* eslint-disable linebreak-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-parens */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CiSquareRemove } from 'react-icons/ci'
import  tasks  from '../reducers/tasks'



export const Task = ({ text,  task }) => {
  const dispatch = useDispatch();
 
  return (
    <TaskContainer>
      <TaskTitle>{text} </TaskTitle>
      <ButtonDelete onClick={() => dispatch(tasks.actions.removeThisTask(task))}><CiSquareRemove />
      </ButtonDelete>
    </TaskContainer>
  )
}


const TaskTitle = styled.p`
display: flex;
justify-content: space-between;
box-sizing: border-box;
min-height: 25px; 
margin: 0; 
padding: 2px 10px;
font-family: 'roboto';
`

const TaskContainer = styled.div`
margin: 2%;
display: flex;
flex-direction:row;
justify-content: space-between;
box-sizing: border-box;
width: 100%;
background-color:#D3B19E ; 
border-bottom: 1px solid white;
  svg {
    color: whitesmoke;
  }
`

const ButtonDelete = styled.button`
 background-color:#D3B19E;
 border-style: none;
 font-size: 30px;
cursor: pointer;
`
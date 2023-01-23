/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable arrow-parens */
/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Task} from './Task';
import { NewTask } from './NewTask';
import tasks  from '../reducers/tasks';


const TasksContainer = styled.section`
margin: 0% 5% 5% 5%;
border-radius: 1%;
padding: 5%;
font-size: 16px;
margin: 3% 5% 3% 5%;
background-color:#D3B19E;
color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const ButtonClearList = styled.button`
border-style: none;
text-align: center;
width: 70px;
height:40px;
border-radius:15px;
margin-right: 3% ;
margin-bottom: 3%;
background-color:#669142;
color: whitesmoke;
cursor:pointer;
`

const ButtonNewTask = styled.button`
border-style: none;
height: 50px;
width: 50px;
border-radius: 50%;
background-color:#995E7C;
padding: 0;
color: whitesmoke;
`

const TaskList = () => {
  const listedtasks = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  const [addTask, setAddTask] = useState(false)
  const showInput = () => {
    setAddTask(!addTask)
  }

  return (
    <TasksContainer>
        <ButtonClearList onClick={() => dispatch(tasks.actions.clearTasks())}>
          Clear All
        </ButtonClearList>
      <NewTask addTask={addTask} setAddTask={setAddTask} />
      {listedtasks.map(task => {
        return (
          <Task
            text={task.text}
            key={task.id}
            task={task} />
        )
        })}
      <ButtonNewTask
        type="submit"
        onClick={showInput}>{addTask ? 'Close' : 'New'}
      </ButtonNewTask>
    </TasksContainer>
  )
}

export default TaskList;


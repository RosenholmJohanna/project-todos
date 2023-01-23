/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-react/jsx-no-useless-fragment */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import tasks from '../reducers/tasks'

const Input = styled.input`
width: 100%;
background-color: #d3b19e;
border-bottom: 1px solid white;
padding: 7px;
font-size: 16px;
`

const ButtonSubmit = styled.button`
background-color: #4c5b43;
border-style: none;
font-size: 14px;
height: 50px;
width: 50px;
border-radius: 50%;
color: whitesmoke;
margin-top: 5%;
margin-left: 85%;
cursor: pointer;
`

export const NewTask = ({addTask}) => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask({ newTask}))
    setNewTask(' ')
  }
  return (
  <div>
    {addTask &&
      <form>
        <Input
          type="text"
          placeholder="To do..."
          value={newTask}
          onChange={event => { setNewTask(event.target.value) }} />
        <ButtonSubmit
          type="submit"
          onClick={onSubmit}
          disabled={newTask.length <= 0}> Add task
        </ButtonSubmit>
      </form>}
  </div>
  )
}
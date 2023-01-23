/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit' 
import { v4 as uuidv4 } from 'uuid';

const tasks = createSlice({ //createslice function
  name: 'tasks',
  initialState: {
    items: []
  },
 
  reducers: {
  addTask: (state, action) => {
      const {newTask} = action.payload
      state.items.push({
       id: uuidv4(),
        text: newTask,
        date: new Date().getTime()
      });
    },

    clearTasks: (state) => {
      state.items = []; 
    },

    removeThisTask: (state, action) => {
      const {id} = action.payload;
      const task = state.items.find(task => task.id === id)
      state.items.splice(state.items.indexOf(task), 1); 
        //splice -> owerwrite the original array by remove the deleted one. 1 = delete one task
    }

  }
})

export default tasks;
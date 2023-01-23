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

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NewTask } from 'components/NewTask';
import React from 'react';
import TaskList from './components/TaskList';
import { Header } from './components/Header';
import tasks from './reducers/tasks';



const reducer = combineReducers({ tasks: tasks.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
        <Header />
        <NewTask />
        <TaskList />
    </Provider>
  );
}

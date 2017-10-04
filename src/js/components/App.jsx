import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Greeting from './Greeting'

const App = () => (
  <Provider store={store}>
    <Greeting message="Greetings from React Nano Kit!" />
  </Provider>
)

export default App

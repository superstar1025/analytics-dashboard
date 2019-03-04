import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux/configureStore'
import ThemedApp from 'containers/ThemedApp'
import Dashboard from 'containers/Dashboard'
import Ticker from 'containers/Ticker'
import Footer from 'components/styled/Footer'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ThemedApp>
      <h3>Analytics Dashboard</h3>
      <Dashboard />
      <Ticker />
      <Footer>
        <a href='https://github.com/superstar1025' target='_blank'>
          Analytic Dashboard
        </a>
      </Footer>
    </ThemedApp>
  </Provider>
)

export default App

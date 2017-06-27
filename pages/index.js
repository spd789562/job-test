import React, { Component } from 'react'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import { getInitialStore } from '../store'
import fetch from 'isomorphic-unfetch'

import App from '../container/App'

class Page extends Component {
  static getInitialProps = async ({req}) => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return { users, isServer: !!req}
  }
  render() {
    const store = getInitialStore(reducers, this.props.users, this.props.isServer)
    return (
      <Provider store={ store }>
        <App/>
      </Provider>
    )
  }
}

export default Page
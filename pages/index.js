import React, { Component } from 'react'
import { Providor } from 'react-redux'
import reducers from '../reducers'
import { getInitialStore } from '../store'

import fetch from 'isomorphic-unfetch'


class Page extends Component {
  static getInitialProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return { users }
  }
  render() {
    return (
      <Providor store={ getInitialStore(reducers, users) }>
        <App/>
      </Providor>
    )
  }
}

export default App
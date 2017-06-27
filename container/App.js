import React from 'react'
import User from '../component/user'
import ViewUser from '../component/viewUser'

import { connect } from 'react-redux'

const App = ({users}) => (
  <div>
    <ul className="users">
      { users.map(user => <User user={user} changeUser={changeUser}/>) }
    </ul>
    <ViewUser/>
  </div>
)



export default App
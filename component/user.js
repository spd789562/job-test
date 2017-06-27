import React from 'react'

const User = ({user, changeUser}) => (
  <li className="user">
    <button className="user-button" onClick={changeUser(user.id)}>
      {user.user}
    </button>
  </li>
)
import React from 'react'

const User = ({user, changeUser}) => (
  <li className="user">
    <style jsx>{`
      .user-button{
        padding: 2rem;
        width: 100%;
        height: 5rem;
        text-align: left;
        font-size: 1rem;
      }
      .user-button:hover{
        background-color: #cecece;
      }
      .user:nth-child(odd){
        background-color: #ededed;
      }
    `}</style>
    <button className="user-button" onClick={() => changeUser(user.id)}>
      {user.name}
    </button>
  </li>
)

export default User
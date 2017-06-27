import React, { Component } from 'react'
import User from '../component/user'
import ViewUser from './viewUser'
import AddUser from './AddUser'

import { changeActiveUser, changeViewMod } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  handleChangeUser = (id) => {
    this.props.changeUser(id)
    this.props.changeMod(1)
  }
  render() {
    const {
      users,
      mod,
      changeMod
    } = this.props

    return (
      <div className="container">
        <style global jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          button{
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
          .container{
            max-width:600px;
          }
          input[type="text"]{
            border: none;
            border-bottom: 1px solid #999
          }
          label{
            display:inline-block;
            width: 8rem;
            font-size: 1.6rem;
          }
          input{
            font-size: 1.1rem;
          }
        `}</style>
        <style jsx>{`
          .users{
            float: left;
            width: 100%;
            max-width: 200px;
            height: 400px;
            overflow-y: scroll;
          }
          .userview{
            position: relative;
            float: left;
            height: 400px;
            width: 100%;
            max-width: 400px;
            padding-top: 3rem;
            padding-left: 1rem;
          }
          .add-button{
            position: absolute;
            top:0; right:0;
            padding: 0 1rem;
            font-size: 3rem;
            color: #AAA;
          }
          .add-button:hover{
            color: #666;
            background-color: #CCC
          }
          .insinital-text{
            color: #AAA;
          }
        `}</style>
        <ul className="users">
          { users.map((user, index) => <User user={user} changeUser={this.handleChangeUser} key={index} />) }
        </ul>
        <div className="userview">
          <button className="add-button"onClick={() => changeMod(2)}>+</button>
          {mod === 1?<ViewUser /> : mod === 2?<AddUser /> : <span className="insinital-text">select user to update or add new user</span>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  mod: state.viewMod
})
const mapDispatchToProps = dispatch => ({
  changeUser: (id) => dispatch(changeActiveUser(id)),
  changeMod: (mod) => dispatch(changeViewMod(mod))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
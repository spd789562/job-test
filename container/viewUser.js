import React, { Component } from 'react'
import { updateUser, removeUser, changeViewMod } from '../actions'

import { connect } from 'react-redux'

class ViewUser extends Component {
  componentWillMount() {
    const {
      name,
      username,
      email
    } = this.props.user
    this.setState({
      name,
      username,
      email
    })
  }
  componentWillReceiveProps() {
    const {
      name,
      username,
      email
    } = this.props.user
    this.setState({
      name,
      username,
      email
    })
  }
  handleInput = (input, stateName) => {
    this.setState({[stateName]: input.target.value})
  }
  handleUpdateUser = () => {
    const {
      updateUser,
      changeMod,
      user
    } = this.props
    const {
      name,
      username,
      email
    } = this.state
    updateUser({
      id: user.id,
      name,
      username,
      email
    })
    changeMod(0)
    alert('修改完成')
  }
  handleRemoveUser = () => {
    const { 
      removeUser,
      changeMod
    } = this.props
    changeMod(0)
    alert('刪除成功')
    removeUser(this.props.user.id)
  }
  render() {
    return (
      <div>
        <style jsx>{`
          .update-button, .remove-button{
            position: absolute;
            bottom: 0;
            height: 3rem;
            width: 50%;
            font-size: 1.3rem;
          }
          .remove-button{
            right:0;
          }
          .update-button:hover{
            background-color: #DEDEDE
            color: #333;
          }
          .remove-button:hover{
            background-color: #F87B7B;
            color: #FFF;
          }
        `}</style>
        <div className="edit_block">
          <label>name：</label>
          <input type="text" value={this.state.name} onChange={e => this.handleInput(e, 'name')} /><br />
          <label>username：</label>
          <input type="text" value={this.state.username} onChange={e => this.handleInput(e, 'username')} /><br />
          <label>email：</label>
          <input type="text" value={this.state.email} onChange={e => this.handleInput(e, 'email')} />
        </div>
        <footer>
          <button className="update-button" onClick={this.handleUpdateUser}>
            修改
          </button>
          <button className="remove-button" onClick={this.handleRemoveUser}>
            刪除
          </button>
        </footer>
      </div>    
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users.find(user => user.id === state.activeUser)
})
const mapDispatchToProps = (dispatch) => ({
  updateUser: (...args) => dispatch(updateUser(...args)),
  removeUser: (id) => dispatch(removeUser(id)),
  changeMod: (mod) => dispatch(changeViewMod(mod))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser)
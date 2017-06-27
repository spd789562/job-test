import React, { Component } from 'react'
import { addUser, changeViewMod } from '../actions'

import { connect } from 'react-redux'

class AddUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      username: '',
      email: ''
    }
  }
  handleInput = (input, stateName) => {
    this.setState({[stateName]: input.target.value})
  }
  handleAddUser = () => {
    const {
      addUser,
      changeMod
    } = this.props
    const {
      name,
      username,
      email
    } = this.state
    addUser({
      name,
      username,
      email
    })
    alert('新增成功')
    changeMod(0)
  }
  render() {
    return (
      <div>
        <style jsx>{`
          .add-button{
            position: absolute;
            bottom: 0;
            height: 3rem;
            width: 100%;
            font-size: 1.3rem;
          }
          .add-button:hover{
            background-color: #49CF49
            color: #fff;
          }
        `}</style>
        <dl>
          <label>name：</label>
          <input type="text" value={this.state.name} onChange={e => this.handleInput(e, 'name')} /><br />
          <label>username：</label>
          <input type="text" value={this.state.username} onChange={e => this.handleInput(e, 'username')} /><br />
          <label>email：</label>
          <input type="text" value={this.state.email} onChange={e => this.handleInput(e, 'email')} />
        </dl>
        <footer>
          <button className="add-button" onClick={this.handleAddUser}>
            新增
          </button>
        </footer>
      </div>    
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users[state.activeUser]
})
const mapDispatchToProps = (dispatch) => ({
  addUser: (...args) => dispatch(addUser(...args)),
  changeMod: (mod) => dispatch(changeViewMod(mod))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
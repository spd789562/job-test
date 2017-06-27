import React, { Component } from 'react'
import { updateUser } from '../actions'

class ViewUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      username: '',
      email: ''
    }
  }
  handleInput = (input, stateName) => {
    this.setState({['stateName']: input.target.value})
  }
  render() {

    return (
      <div>
        <dl>
          <label>name:</label>
          <input type="text" value={this.state.name}/>
          <label>username:</label>
          <input type="text" value={this.state.username}/>
          <label>email:</label>
          <input type="text" value={this.state.email}/>
        </dl>
        <footer>
          <button className="update-button">
            修改
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
  updateUser: (...args) => dispatch(updateUser(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser)
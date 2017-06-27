import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  CHANGE_ACTIVE_USER,
  VIEW_MOD
} from '../actions'
import { combineReducers } from 'redux'

const users = (state = [], {type, id, name, username, email}) => {
  switch (type){
    case ADD_USER:
      return state.push({
        id,
        name,
        username,
        email
      })
    case UPDATE_USER: 
      return state.map(user => user.id === id ? {id, name, username, email} : user)
    case REMOVE_USER:
      return state.filter(user => user.id !== id)
  }
}

const activeUser = (state = 0, {type, id}) => {
  switch(type) {
    case CHANGE_ACTIVE_USER:
      return id
  }
}

//status 0: none, 1:view user, 2: add user

const viewMod = (state = 0, {type, mod}) => {
  switch(type) {
    case VIEW_MOD:
      return mod
  }
}

const AppReducer = combineReducers({
  users,
  activeUser,
  viewMod
})

export default AppReducer
let id = 10

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const CHANGE_ACTIVE_USER = 'CHANGE_ACTIVE_USER'

export const VIEW_MOD = 'VIEW_MOD'

export const addUser = ({name, username, email}) => ({
  type: ADD_USER,
  id: ++id,
  name,
  username,
  email
})
export const updateUser = ({id, name, username, email}) => ({
  type: UPDATE_USER,
  id,
  name,
  username,
  email
})
export const removeUser = (id) => ({
  type: REMOVE_USER,
  id
})
export const changeActiveUser = (id) => ({
  type: CHANGE_ACTIVE_USER,
  id
})

export const changeViewMod = (mod) => ({
  type: VIEW_MOD,
  mod
})
// import { handleActions } from 'redux-actions';
// import { AuthActionsEnum } from './actions';
// import usersData from '../storage/person.json';

// export const reducer = handleActions(
//   {
//     [AuthActionsEnum.login]: (state, action) => {
//       const { payload } = action;
//       const { username, password } = payload;
      
//       // Check if usersData is a JSON string before parsing
//       const users = typeof usersData === 'string' ? JSON.parse(usersData) : usersData;


//       return {
//         ...state,
//         authenticated: state.authenticated
//           ? state.authenticated
//           : users.some((user) => user.username === username && user.password === password),
//       };
//     },
//     [AuthActionsEnum.logout]: (state) => ({
//       ...state,
//       authenticated: false,
//     }),
//   },
//   { authenticated: false }
// );
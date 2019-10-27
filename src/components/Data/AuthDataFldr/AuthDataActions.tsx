  // ACTIONS

  const CREATE_USER = 'CREATE_USER';
  const LOGIN = 'LOGIN';
  const GET_USER_DATA = 'GET_USER_DATA';
  const LOGOUT = 'LOGOUT';
  const EDIT_USER_DATA = 'EDIT_USER_DATA';

  interface CREATE_USER_Action {
      type: typeof CREATE_USER;
      email: string;
      password: string;
  };

  interface LOGIN_Action {
      type: typeof LOGIN;
      email: string;
      password: string;
  };

  interface GET_USER_DATA_Action {
      type: typeof GET_USER_DATA;
  };

  interface LOGOUT_Action {
      type: typeof LOGOUT;
  };

  interface EDIT_USER_DATA_Action {
      type: typeof EDIT_USER_DATA;
  };

  export type AuthDataActionTypes = | CREATE_USER_Action | LOGIN_Action | GET_USER_DATA_Action | LOGOUT_Action | EDIT_USER_DATA_Action;
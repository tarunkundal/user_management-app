import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useReducer,
  useContext,
} from "react";
import UserContext from "./UserContext";
import UserI from "../interface";

const initialValue = {
  users: [],
};

const reducerFn = (state: any, action: any) => {
  if (action.type === "ADD_USER") {
    return {
      ...state,
      users: [...state.users, action.user],
    };
  }

  if (action.type === "REMOVE_USER") {
    return {
      ...state,
      users: state.users.filter((user: UserI) => user.id !== action.id),
    };
  }

  if (action.type === "UPDATE_USER") {
    const findUserToUpdate: UserI = state.users.find(
      (user: UserI) => user.id === action.id
    );

    findUserToUpdate.bio = action.user.bio;
    findUserToUpdate.firstName = action.user.firstName;
    findUserToUpdate.lastName = action.user.lastName;
    findUserToUpdate.email = action.user.email;
    findUserToUpdate.phone = action.user.phone;

    return {
      ...state,
    };
  }

  return state;
};

const UserContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  const [userState, dispatchUserAction] = useReducer(reducerFn, initialValue);

  const addUserHandler = (user: UserI) => {
    dispatchUserAction({ type: "ADD_USER", user });
  };

  const removeUserHandler = (id: number | string) => {
    dispatchUserAction({ type: "REMOVE_USER", id });
  };

  const updateUserHandler = (id: number | string, user: UserI) => {
    dispatchUserAction({ type: "UPDATE_USER", id, user });
  };

  const userValue = {
    users: userState.users,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    updateUser: updateUserHandler,
  };

  return (
    <UserContext.Provider value={userValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserStore = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserStore must be used within a UserContextProvider");
  }
  return context;
};

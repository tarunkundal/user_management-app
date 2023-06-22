import { createContext } from "react";
import UserI from "../interface";

const UserContext = createContext({
  users: [
    { id: "", firstName: "", lastName: "", email: "", phone: "", bio: "" },
  ],
  addUser: (user: UserI) => {},
  removeUser: (id: number | string) => {},
  updateUser: (id: number | string, user: UserI) => {},
});

export default UserContext;

import { combinereducers } from "redux";

import userReducer from "./user/user.reducer";

export default combinereducers({
  user: userReducer,
});

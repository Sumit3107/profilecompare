import React from "react";
import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import Compare from "./components/compare";
import Profile from "./components/profile";
import { connect } from "react-redux";
import { adduserinfo, fetchUserInfo} from "./redux/ActionCreators";
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  adduserinfo: () => dispatch(adduserinfo()),
  fetchUserInfo: (username) => {
    dispatch(fetchUserInfo(username));
  }
});
export const App = (props) => {
  return (
    <div className="App">
      <Compare fetchuserinfo={props.fetchUserInfo} />
      <Switch>
        <Route path="/home/:username" component={()=><Profile user={props.user} userErrMess={props.user.errMess} {...props} />} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

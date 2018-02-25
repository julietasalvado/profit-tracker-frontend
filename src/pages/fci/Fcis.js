import React from "react";
import { Switch, Route, withRouter } from 'react-router';
import FciNew from "../fci/new/FciNew";

class Fcis extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/app/fcis/new" exact component={FciNew} />
      </Switch>
    );
  }
}

export default withRouter(Fcis);


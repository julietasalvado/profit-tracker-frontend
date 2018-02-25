import React from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from './FciDashboard.scss';

class FciDashboard extends React.Component {
  /* eslint-disable */
  /* eslint-enable */

  // constructor(props) {
  //   super(props);
  //
  //   // this.state = {
  //   //   alert1Visible: true,
  //   //   alert2Visible: true,
  //   //   alert3Visible: true,
  //   //   alert4Visible: true,
  //   // };
  // }

  render() {
    return (
      <div className={s.root}>
        <ol className="breadcrumb">
          <li>
            <span className="text-muted">
                YOU ARE
                HERE
            </span>
          </li>
          <li className="active">
            FCI Dashboard
          </li>
        </ol>
      </div>
    );
  }
}

function mapStateToProps(/*state*/) {
  return {
    // isFetching: state.posts.isFetching,
    // posts: state.posts.posts,
  };
}

export default connect(mapStateToProps)(withStyles(s)(FciDashboard));

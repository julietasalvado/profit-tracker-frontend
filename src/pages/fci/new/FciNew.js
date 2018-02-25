import withStyles from "isomorphic-style-loader/lib/withStyles";
import React from "react";
import {connect} from "react-redux";
import withMeta from "../../../core/withMeta";
import s from './FciNew.scss';

class FciNew extends React.Component {

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
            New FCI
          </li>
        </ol>
      </div>);
  }
}

function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps)(withStyles(s)(withMeta(FciNew)));

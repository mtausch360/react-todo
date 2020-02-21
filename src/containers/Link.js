import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

import React, { Component } from 'react';

class Link extends Component {
  render () {
    const { active, children, onClick } = this.props
    return (
      <button
        onClick={onClick}
        disabled={active}
        style   = {{
          marginLeft: "4px"
        }}
      >
        {children}
      </button>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

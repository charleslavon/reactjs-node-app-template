import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
import { bindFunctions, PureComponent } from '../../utils/module';


class HomePage extends PureComponent {
    constructor(props, context) {
        super(props, context);
        bindFunctions.call(this,['handleClick']);
    }


    handleFetchNews() {
        this.props.actions.fetchNews();
    }

    handleClick(){
      console.log('clicked');
    }

    render() {
        return ( <h3 onClick={this.handleClick}> React Front End Template </h3> );
    }
}


HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    fetchNews: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return { fetchNews: state.fetchNews };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

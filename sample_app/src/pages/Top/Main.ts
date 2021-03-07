import {Top} from '../../templates';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      messages: bindActionCreators(actions.messages, dispatch),
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Top.Main);

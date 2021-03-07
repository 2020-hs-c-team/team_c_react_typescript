import {Top} from '../../templates';
import {bindActionCreators, compose} from 'redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {connect} from 'react-redux';
import {actions} from '../../redux/actions';

const mapStateToProps = (state: any) => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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

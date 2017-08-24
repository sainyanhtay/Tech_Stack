import React from "react";
import { CardSection } from "./common";
import { connect } from "react-redux";
import ReactNative from "react-native";
import * as actions from "../actions"; //no export default or export * in action

class ListItem extends React.Component {
  componentWillUpdate() {
    ReactNative.LayoutAnimation.spring();
  } //** componentwillupdate() did all component will update every time*/

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <ReactNative.Text style={{ flex: 1 }}>
            {library.description}
          </ReactNative.Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <ReactNative.TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <ReactNative.View>
          <CardSection>
            <ReactNative.Text style={titleStyle}>
              {title}
            </ReactNative.Text>
          </CardSection>
          {this.renderDescription()}
        </ReactNative.View>
      </ReactNative.TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

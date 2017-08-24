import React from "react";
import ReactNative from "react-native";
import { connect } from "react-redux";
import ListItem from './ListItem';

class LibraryList extends React.Component {
  componentWillMount() {
    const ds = new ReactNative.ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ReactNative.ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <span>111</span>

const LoadableComponent = Loadable({
  loader: () => import('braft-editor'),
  loading: Loading
});

export default class LoadableComp extends React.Component {
  render() {
    return <LoadableComponent ref={(instance) => this.editorInstance = instance} />;
  }
}
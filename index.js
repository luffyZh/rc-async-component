import React, { Component } from 'react';

const DefaultLoading = () => <span style={{ fontSize: '12px', color: '#888' }}>正在加载组件...</span>;

const checkLoading = loadingComp => {
  if (typeof loadingComp !== 'string' && typeof loadingComp !== 'function') {
    return DefaultLoading;
  }
  return loadingComp;
}

const asyncComponent = (loadComponent, options) => (
  class AsyncComponent extends Component {
    state = {
      Component: null,
      instance: options && options.instance,
      loading: options && options.loading
    }
  
    componentDidMount() {
      if (this.hasLoadedComponent()) {
          return;
      }

      loadComponent()
          .then(module => module.default)
          .then(Component => {
              this.setState({ Component });
          })
          .catch((err) => {
            console.error(`Cannot load component in <AsyncComponent />`);
            throw err;
          });
    }
  
    hasLoadedComponent() {
      return this.state.Component !== null;
    }
  
    render() {
      const { Component, instance, loading } = this.state;
      const LoadingComp = checkLoading(loading); 
      return Component          
        ? (instance
          ? <Component ref={(instance) => this.compInstance = instance} {...this.props} />
          : <Component {...this.props} />)
        : <LoadingComp />;
    }
  }
)



export default asyncComponent;

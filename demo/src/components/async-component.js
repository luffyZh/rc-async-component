import React, { Component } from 'react';

const DefaultLoading = () => <span style={{ fontSize: '12px', color: '#888' }}>正在加载组件...</span>;

const checkLoading = loadingComp => {
  if (typeof loadingComp !== 'string' || typeof loadingComp !== 'function') {
    console.error(`The loading component is invalid, please make sure it's a valid react component!`);
    return DefaultLoading;
  }
  return loadingComp;
} 

const asyncComponent = (loadComponent, paramObj = { instance: false, loading: null }) => (
  class AsyncComponent extends Component {
    state = {
      Component: null,
      instance: paramObj.instance,
      Loading: paramObj.loading ? checkLoading(paramObj.loading) : DefaultLoading
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
      const { Component, instance, Loading } = this.state;
      return Component          
        ? (instance
          ? <Component ref={(instance) => this.compInstance = instance} {...this.props} />
          : <Component {...this.props} />)
        : <Loading />;
    }
  }
)



export default asyncComponent;

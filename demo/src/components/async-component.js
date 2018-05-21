import React from 'react';

const asyncComponent = (loadComponent, instance) => (
  class AsyncComponent extends React.Component {
    state = {
        Component: null,
        instance: instance ? true : false,
    }
  
    componentDidMount() {
        if (this.hasLoadedComponent()) {
            return;
        }
  
        loadComponent()
            .then(module => module.default)
            .then((Component) => {
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
        const { Component, instance } = this.state;
        return (Component) ? ( instance ? <Component ref={(instance) => this.compInstance = instance} {...this.props} /> : <Component {...this.props} /> ) : null;
    }
  }
)



export default asyncComponent;

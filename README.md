# rc-async-component
A react async component for lazy import component.

### Install
```
  npm install rc-async-component
  Or
  yarn add rc-async-component
```
### Usage
```
  import asyncComponent from 'rc-async-component';

  const BestInput = asyncComponent(() => import('react-best-input'));

  export default BestInput;
```
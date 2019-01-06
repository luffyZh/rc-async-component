import asyncComponent from './async-component';

const BraftEditor = asyncComponent(() =>import('braft-editor'), {
  instance: true
});

export default BraftEditor;
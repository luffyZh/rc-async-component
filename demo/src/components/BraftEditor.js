import asyncComponent from './async-component';

const BraftEditor = asyncComponent(() =>import('braft-editor'), true);

export default BraftEditor;
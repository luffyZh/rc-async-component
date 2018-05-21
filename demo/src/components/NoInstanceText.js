import asyncComponent from './async-component';

const NoInstanceText = asyncComponent(() => import('./TextComp'));

export default NoInstanceText;

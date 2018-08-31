# rc-async-component
A react async component for lazy load component.

### Install
```
  npm install rc-async-component
  Or
  yarn add rc-async-component
```
### Version
v1.0.7:
  - support async get component's instance and use methods.
### Usage
```
  // no instance component
  import asyncComponent from 'rc-async-component';

  const BestInput = asyncComponent(() => import('react-best-input'));

  export default BestInput;
```
```
  // the component has instance and methods
  import asyncComponent from 'rc-async-component';

  const BrafEditor = asyncComponent(() => import('braft-editor'), true); // set the second param true

  export default BraftEditor;
  
  // get the instance
  ...
  import BraftEditor from '../../components/BraftEditor';
  ...
  
  constructor(props) {
    super(props);
    this.state = {
      inputErrorShow: 'none',
      inputContent: '',
    };
    this.braftInstance = this.editorInstance.compInstance; // get the instance
  }
  
  submit = () => {
    this.braftInstance.setContent('<p>222</p>');
  }
  
  render（） {
    return (
       <BraftEditor ref={instance => (this.editorInstance = instance)} {...editorProps} />
    )
  }
```  

> Please run the demo for the details.

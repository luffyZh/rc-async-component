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
v1.1.0
  - add loading component 

### Usage
```
  // no instance component
  import asyncComponent from 'rc-async-component';

  const BestInput = asyncComponent(() => import('react-best-input'));

  export default BestInput;
```
```
 // the loading component
 import asyncComponent from 'rc-async-component';

const BestInput = asyncComponent(() => import('react-best-input'), {
  loading: () => <span>加载组件...</span>
});

export default BestInput;
```

```
  // the component has instance and methods
  import asyncComponent from 'rc-async-component';

  const BrafEditor = asyncComponent(() => import('braft-editor'), {
    instance: true
  }); // set the second param true

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

### Props
asyncComponent(() => import('react-best-input'), { ...Props });

Props | Description | Type | Default
------------ | ------------- | ------------ | -------------
loading | The loading component will show when <AsyncComponent> is not loaded on the page! | function\|string | null
instance | The <AsyncComponent> has itself instance to use | bool | false

> Please run the demo for the details.

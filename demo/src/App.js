import React, { Component } from 'react';
import 'braft-editor/dist/braft.css'
import './App.css';
import BraftEditor from './components/BraftEditor';
import NoInstanceText from './components/NoInstanceText';
import LoadableComponent from './components/LoadableComp'

class App extends Component {
  
  addContent = () => {
    console.log(this);
    this.braftInstance.compInstance.setContent('<p>我是通过获取实例插入的内容</p>');
  }

  addContent2 = () => {
    console.log(this);
    this.loadableInstance.editorInstance.setContent('<p>我是通过获取实例插入的内容</p>');
  }

  render() {
    const editorProps = {
      height: 400,
      placeholder: '请输入您的建议!',
      contentFormat: 'html',
      excludeControls: [ 'superscript', 'subscript' ],
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">rc-async-component</h1>
        </header>
        <h2 style={{ textAlign: 'center' }}>不获取组件的实例对象</h2>
        <div style={{ width: '50%', margin: '10px auto' }}>
          <NoInstanceText />
        </div>
        <h2 style={{ textAlign: 'center' }}>获取组件的实例对象</h2>
        <div style={{ width: '50%', margin: '10px auto' }}>
          <div style={{ border: '1px solid #888', marginBottom: '4px' }}>
            <BraftEditor ref={(instance) => this.braftInstance = instance} {...editorProps} />
          </div>
          <button onClick={this.addContent}>插入内容</button>
        </div>
        <div style={{ width: '50%', margin: '10px auto' }}>
          <div style={{ border: '1px solid #888', marginBottom: '4px' }}>
            <LoadableComponent ref={(instance) => this.loadableInstance = instance} {...editorProps} />
          </div>
          <button onClick={this.addContent2}>插入内容2</button>
        </div>
      </div>
    );
  }
}

export default App;

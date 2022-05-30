import React, { useState } from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

const Editor: React.FC = () => {
  const [code, setCode] = useState('// type your code...');

  const options = {
    selectOnLineNumbers: true,
  };

  const editorDidMount = (editor: any, monaco: any) => {
    console.log('editorDidMount', editor);
    editor.focus();
  };

  const onChange = (newValue: string, e: any) => {
    console.log('onChange', newValue, e);
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default Editor;

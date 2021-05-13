import React from 'react';
import { AppProps } from './todo-list.mode';

export class InputBox extends React.Component<AppProps, any, any> {
  getValue() {
    let textBoxValue = document.getElementById('inputBox') as HTMLInputElement;
    this.props.handler(textBoxValue.value);
    textBoxValue.value = '';
  }

  onKeyPress(e:any) {
    if (e.key === 'Enter') {
      this.getValue();
    }
  }

  render() {
    return (
      <div className="input-group mb-3">
        <button className="btn btn-primary" type="button" onClick={() => this.getValue()}>
          <i className="fa fa-pencil"/> Add to list
        </button>
        <input type="text" id="inputBox" className="form-control" placeholder="What needs to be done..." onKeyPress={(e) => this.onKeyPress(e)}/>
      </div>
    )
  }
}

import './App.css';
import { AppProps, AppState, List } from './todo-list.mode';
import { InputBox } from './inputBox';
import { Component } from 'react';
import * as React from 'react';

class App extends Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {list: []};
    this.handler = this.handler.bind(this)
  }

  handler(item: string) {
    const list: List[] = this.state.list;
    list.push({title: item, completed: false});
    this.setState({list: list});
  }

  removeFromList(listItem: number) {
    const list: List[] = this.state.list;
    list.splice(listItem, 1);
    this.setState({list: list});
  }

  markAsCompleted(listItem: number) {
    let newList = this.state.list;
    newList[listItem].completed = !newList[listItem].completed;
    this.setState({list: newList});
  }

  render() {
    const listItems = this.state.list.map((item, index) => {
      return (
        <li className={`list-group-item d-flex align-items-center`} key={index}>
          <input className="form-check-input me-1" type="checkbox" checked={item.completed}
                 onChange={() => this.markAsCompleted(index)}/>
          <div className={`ms-2 me-auto`}>
            <span className={`${item.completed ? 'text-decoration-line-through' : ''}`}>{item.title}</span>
            <span className={`ms-2 , ${!item.completed ? 'd-none' : ''}`}>
            Completed! <i className="fa fa-thumbs-up text-success"/>
          </span>
          </div>
          <i className="fa fa-trash text-secondary" onClick={() => this.removeFromList(index)}/>
        </li>
      )
    });
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-12">
            <InputBox handler={this.handler}/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <ul className="list-group">
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

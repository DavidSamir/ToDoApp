import React from 'react';


class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>To do App</h3>
          <form onSubmit={this.handleSubmit}>
            <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
            <button>
              Add
            </button>
          </form>
          <TodoList items={this.state.items} />
          <div className="developed" > <a href="https://davidsamir.com" target="_blank" rel="noopener noreferrer" >David Samir</a> </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
      remv(e) {
          e.currentTarget.parentElement.parentElement.remove()
        //   localStorage.setItem("todo", "this.props.items.id");
        }
    render() {

        return (
            <div className="containe">
                <ul>
                {this.props.items.map(item => (
                    <li key={item.id}> <div  className="item"> <p> {item.text}</p> <span onClick={this.remv}>remove</span> </div> </li> 
                    ))}
                </ul>
              </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <TodoApp />,
//     document.getElementById('todos-example')
//   );

  export default TodoApp;


import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [{title: "Raheel", edit: false},
              {title: "Haseeb", edit: false}],
      value: "",
      update_value: ''
    }
  }

  // Function
  add_todo() {
    this.state.todos.push({title: this.state.value, edit: false})
    this.state.value = ""
    this.setState({
      todos: this.state.todos
    })
    console.log(this.state.todos);
  }

  
  delete_todo = (index) => {
    this.state.todos.splice(index,1)
    
    // console.log(this.state.todos[index]);
    // this.state.todos.Splice(index,1)
    this.setState({
      todos: this.state.todos
    })
  }
  
  deleteAll_todo() {
    this.state.todos = []
    this.setState({
      todos: this.state.todos
    })
  }
  
  edit_todo = (e,index) => {
    this.state.todos[index].edit = true
    this.setState ({
      todos: this.state.todos
    })
  }
  
  update_todo(index) {
    this.state.todos[index].title = this.state.update_value
    this.state.todos[index].edit = false
    console.log(this.state.update_value);
    this.setState({
      todos: this.state.todos
    })
  }

  // Render
  render(){
    let { todos,value } = this.state
    return(
      <div>
        <input value={value} type="text" placeholder="Enter Value" onChange={(e) => this.setState({value:e.target.value}) } />
        <button onClick={() => this.add_todo()}>Add</button>
        <button onClick={() => this.deleteAll_todo()}>Delete_All</button>
        <ul>
          {todos.map((v,i) => {
            return<li key={i}>
            {v.edit? <input onChange={(e) => {this.setState ({update_value: e.target.value})}} type="text" placeholder="Enter updated value"></input> : v.title}
              {
                v.edit?
                <button onClick={() => this.update_todo(i)}>update</button>:
                <button onClick={(e) => this.edit_todo(e,i)}>Edit</button>

              }
            
            
            <button onClick={(i) => this.delete_todo(i)}>Delete</button>
            </li>
            
          })}
        </ul>
      </div>
    )
  }
}

export default App;
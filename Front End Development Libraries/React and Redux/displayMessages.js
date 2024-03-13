class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  
    submitMessage() {
      this.setState({
        messages: [...this.state.messages, this.state.input],
        input: ""
      });
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange.bind(this)}></input>
          <button onClick={this.submitMessage.bind(this)}>Add message</button>
          <ul>
            {this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}
          </ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
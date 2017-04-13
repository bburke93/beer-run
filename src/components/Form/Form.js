import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onEnter = this.onEnter.bind(this);

      this.state = {
        value: 'city,st'
      };
  }

  onChange(event){
    this.setState({
      value: event.target.value
    });
  }

  onEnter(event){
    if(event.keyCode === 13){
      this.onSubmit();
    }
  }

  onSubmit(){
    this.props.submitAction(this.state);
    this.setState({value:'city,st'});
  }

  render(){
    return(
      <div>
        <input
          type="text"
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          value={this.state.value}
          />
          <button onClick={this.onSubmit}>Find Beer!</button>
        </div>
    )
  }
}

export default Form;
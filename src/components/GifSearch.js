import React,{Component} from 'react';

export default class GifSearch extends Component {
  state = {
    query:""
  }
  
  handleQuery=(event)=>{
    this.setState({query:event.target.value})
  }
  
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.fetchGiphy(this.state.query)
  }

  render(){
    <form>
    <P> Enter a Search Term: </p>
    <input  type="text" onChange={handlequery} />
    <button type="submit">Find Giphy </button>
    </form>
  }
}
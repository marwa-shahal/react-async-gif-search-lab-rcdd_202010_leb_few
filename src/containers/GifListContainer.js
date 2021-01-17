import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
 
class GifListContainer extends Component {
 
  state = {
    gifs: []
  }

  fetchGiphy=(name="dolphin")=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=yUeU1bDBAjYPW93RpPP7vtDVGm0whFcI&rating=g`)
      .then(response => response.json())
      .then(({data}) => {this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
     })
  }

     
render() {
   return (
         <div>
     <GifSearch fetchGiphy={this.fetchGiphy} />
      <GifList gifs={this.state.gifs} />
         </div>
    )
  }
 
     
  componentDidMount() {
        this.fetchGiphy()
     }
}
 
export default GifListContainer
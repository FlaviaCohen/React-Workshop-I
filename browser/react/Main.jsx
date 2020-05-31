import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';

import axios from 'axios';

class Main extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
     albums: []
  }


  componentDidMount(){
    axios.get('/api/albums')
    .then((dataDeAlbums)=>{
      this.setState({albums: dataDeAlbums.data})
    })

  }


    render(){

       return <div id="main" className="container-fluid">
                <h1>Hello world!</h1>
                
                < Sidebar/>
                < Albums/ albums = {this.state.albums}>
                < Footer/>
                </div>

    }

} 
}

export default Main


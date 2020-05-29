import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
         albums: [
            {
              name: 'Abbey Road',
              id: 1,
              imageUrl: 'https://i.imgur.com/xenXaEw.jpg',
              songs: [
                {
                  id: 1,
                  name: 'Romeo & Juliette',
                  artists: [ 
                    { name: 'Bill' } 
                  ],
                  genre: 'Funk',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }, 
                {
                  id: 2,
                  name: 'White Rabbit',
                  artists: [
                    { name: 'Bill' }, 
                    { name: 'Alice' }
                  ],
                  genre: 'Fantasy',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }, 
                {
                  id: 3,
                  name: 'Lucy in the Sky with Diamonds',
                  artists: [ 
                    { name: 'Bob' } 
                  ],
                  genre: 'Space',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }
              ]
            },
            {
              name: 'Yellow Submarine',
              id: 2,
              imageUrl: 'https://i.imgur.com/EGplCHK.jpg',
              songs: [
                {
                  id: 4,
                  name: 'London Calling',
                  artists: [ 
                    { name: 'Bill' } 
                  ],
                  genre: 'Punk',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }
              ]
            }
          ]
        }
    
      }
   
    render(){

       return <div id="main" className="container-fluid">
                <h1>Hello world!</h1>
                <ul>{this.state.albums.map(function (album) {return <li>{album.name}</li> })} </ul> 


                < Sidebar/>
                < Footer/>
                </div>
                
            

    }

} 

export default Main


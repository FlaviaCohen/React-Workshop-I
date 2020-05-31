import React from 'react'

class Albums extends React.Component{

constructor(props) {
    super(props);
    this.state = {
     albums: albumsData
    }
  }

  render(){

    return <div className="col-xs-10">
              <div className="albums">
              <h3>Albums</h3>
              <div className="row">
                  {albumsData.map(function (album) {return <div key= {album.id} className="col-xs-4">
                                                              <a className="thumbnail" href="#">
                                                              <img src= {album.imageUrl} />
                                                              <div className="caption">
                                                              <h5>
                                                              <span> {album.name} </span>
                                                              </h5>
                                                              <small>{album.songs.length + ' songs'} </small>
                                                              </div>
                                                              </a>
                                                          </div>})}
              </div>
              </div>
          </div>
    }

}

const albumsData = [
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

  

export default Albums;

//<ul> {albumsData.map(function(album){return <li key= {album.id}>{album.name}</li>})} </ul> 
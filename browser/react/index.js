import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import axios from 'axios';


ReactDOM.render(

    <Main />,
    document.getElementById('app') 
    );


axios.get('/api/albums')
    .then(response => {
    return response.data;
    })
    .then(data => {
    console.log('success');
    console.log(data);
    })
    .catch(err => {
    console.error('error');
    console.error(err);
    });

console.log('Hello React');

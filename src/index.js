import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Product';
import * as serviceWorker from './serviceWorker';

// const element = <h1>Hello World</h1>
/*
function getMahasiswa (mahasiswa){
    return 'Nama : ' + mahasiswa.nama + ' NIM : ' + mahasiswa.nim;
}

function getStatus (mahasiswa){
    if(mahasiswa.angkatan < 2019){
        return 'mahasiswa baru';
    } else {
        return 'mahasiswa lama';
    }
}

const mahasiswi = {
    nama : 'Lorem Ipsum',
    nim : '123456',
    angkatan : 2017
}

const element = <h1>Halo, {getMahasiswa(mahasiswi)}, anda adalah {getStatus(mahasiswi)} </h1>


function tick(){
    const element = (
        <div>
            <h1>Hello Bitches</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
};

setInterval(tick, 1000);
*/

    /**
     * Components and Props
     */
    /*
     function Product (props){
         return (<div><h1>{props.judul}</h1><h3>Harga : {props.harga}</h3></div>);
     }

     const element = <Product judul = "Koleksi Naruto" harga = "100.000"/>

     ReactDOM.render(element, document.getElementById('root'));
     */
    /*
    class Product extends React.Component {
        render(){
            return (<div><h1>{this.props.judul}</h1><h3>Harga : {this.props.harga}</h3></div>)
        }
    }     

    const element = <Product judul = "Koleksi Naruto Menggunakan Class Component" harga = "100.000 Menggunakan Class Component"/>
    */ 

    const element = <Product judul = "Koleksi Naruto menggunakan class component dalam file sendiri " harga = "100.000 menggunakan class component dalam file sendiri"/>

    ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

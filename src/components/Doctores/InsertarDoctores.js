import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class InsertarDoctores extends Component {


    idDocRef = React.createRef();
    idHosRef = React.createRef();
    apeRef = React.createRef();
    espRef = React.createRef();
    salRef = React.createRef();

    state = {
        status: false,

    }

    insertarDoctor = (e) => {
        e.preventDefault();

        var iddoc = parseInt(this.idDocRef.current.value);
        var idhos = parseInt(this.idHosRef.current.value);
        var ape = this.apeRef.current.value;
        var esp = this.espRef.current.value;
        var sal = parseInt(this.salRef.current.value);

        var doc = {
            idDoctor: iddoc,
            idHospital: idhos,
            apellido: ape,
            especialidad: esp,
            salario: sal
        }

        var request = '/api/Doctores';
        var url = Global.urldoctores + request;
        axios.post(url, doc).then(res => {

            this.setState({
                status: true,

            })
        });

    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to='/'></Redirect>);
        }
        return (
            <div>
                <h1 className='m-5'>Insertar Doctores</h1>
                <form onSubmit={this.insertarDoctor} style={{ width: '500px', display: 'table', margin: 'auto' }}>
                    <div className='mb-3 form-group row'>
                        <label>Introducir Id de doctor: </label>
                        <input type='number' className='form-control' ref={this.idDocRef} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir Id de hospital: </label>
                        <input type='number' className='form-control' ref={this.idHosRef} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir apellido: </label>
                        <input type='text' className='form-control' ref={this.apeRef} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir especialidad: </label>
                        <input type='text' className='form-control' ref={this.espRef} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir salario: </label>
                        <input type='number' className='form-control' ref={this.salRef} />
                    </div>
                    <button className='btn btn-success'>Agregar doctor</button>
                </form>
            </div >
        )
    }
}

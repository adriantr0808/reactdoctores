import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class ModificarDoctores extends Component {


    idDocRef = React.createRef();
    idHosRef = React.createRef();
    apeRef = React.createRef();
    espRef = React.createRef();
    salRef = React.createRef();

    //doctor para los values de los input
    state = {
        doctor: [],
        status: false
    }

    buscarDoctor = () => {
        var id = this.props.iddoc;
        var request = '/api/Doctores/' + id;
        var url = Global.urldoctores + request;
        axios.get(url).then(res => {
            this.setState({
                doctor: res.data,
                status: true
            })
        });
    }

    updateDoctor = (e) => {
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
        axios.put(url, doc).then(res => {
            this.setState({
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.buscarDoctor();
    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to='/'></Redirect>)
        }
        return (

            <div>
                <h1 className='m-4'>Modific Doctores</h1>
                <form onSubmit={this.updateDoctor} style={{ width: '500px', display: 'table', margin: 'auto' }}>
                    <div className='mb-3 form-group row'>
                        <label>Introducir Id de doctor: </label>
                        <input type='number' className='form-control' defaultValue={this.state.doctor.idDoctor} ref={this.idDocRef} disabled />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir Id de hospital: </label>
                        <input type='number' className='form-control' ref={this.idHosRef} defaultValue={this.state.doctor.idHospital} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir apellido: </label>
                        <input type='text' className='form-control' ref={this.apeRef} defaultValue={this.state.doctor.apellido} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir especialidad: </label>
                        <input type='text' className='form-control' ref={this.espRef} defaultValue={this.state.doctor.especialidad} />
                    </div>
                    <div className='mb-3 form-group row'>
                        <label>Introducir salario: </label>
                        <input type='number' className='form-control' ref={this.salRef} defaultValue={this.state.doctor.salario} />
                    </div>
                    <button className='btn btn-warning'>Modificar doctor</button>
                </form>
            </div >

        )
    }
}

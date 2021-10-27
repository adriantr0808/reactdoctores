import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class EliminarDoctores extends Component {

    //Para capturar el doctor que me llega y coger el apellido para pintarlo
    state = {
        doctor:[],
        status: false
    }

    cargarDoctor = () => {
        var request = '/api/Doctores/'+this.props.iddoc;
        var url = Global.urldoctores+request;
        axios.get(url).then(res => {
            this.setState({
                doctor: res.data
            })
        });
    }

    eliminarDoctor = (e) =>{
        e.preventDefault();
        var request= '/api/Doctores/'+this.props.iddoc;
        var url = Global.urldoctores+request;
        axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        })
    }

    componentDidMount = () =>{
        this.cargarDoctor();
    }
    render() {
        if(this.state.status == true){
            return(<Redirect to='/'></Redirect>);
        }
        return (
            <div>
                <h1 className='m-5'>Eliminar Doctor</h1>
                <h2>¿Estas seguro de que quieres eleminar el/la doctor/doctora {this.state.doctor.apellido}</h2>
                
                <form onSubmit={this.eliminarDoctor}>
                   <button className='btn btn-danger m-5'>Si, eliminar</button>
                   <NavLink className='btn btn-primary' to={"/"}>Cancelar</NavLink>
                </form>
               
            </div>
        )
    }
}

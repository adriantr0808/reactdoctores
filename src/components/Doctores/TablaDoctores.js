import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../../../reactdoctores/src/Global';
import { NavLink } from 'react-router-dom';
export default class TablaDoctores extends Component {


    state = {
        doctores: [],
        status: false
    }

    cargarDoctores = () => {
        var request = '/api/Doctores'
        var url = Global.urldoctores + request;

        axios.get(url).then(res => {
            this.setState({
                doctores: res.data,
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }
   
    render() {
        return (
            <div className='container'>
                <h1 className='m-5'>Tabla doctores</h1>
                <table className='table table-dark table-stripped'>
                    <thead>
                        <tr>
                            <th>ID DOCTOR</th>
                            <th>ID HOSPITAL</th>
                            <th>APELLIDO</th>
                            <th>ESPECIALIDAD</th>
                            <th>SALARIO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctores.map((doc, index) => {
                            return (<tr key={index}>
                                <td>{doc.idDoctor}</td>
                                <td>{doc.idHospital}</td>
                                <td>{doc.apellido}</td>
                                <td>{doc.especialidad}</td>
                                <td>{doc.salario}</td>
                                <td>
                                    <NavLink className='btn btn-warning m-2' to={'/modificardoctores/' + doc.idDoctor}>Modificar</NavLink>
                                    <NavLink  className='btn btn-danger m-2' to={'/eliminardoctores/'+doc.idDoctor}>X</NavLink>
                                    <NavLink  className='btn btn-success m-2' to={'/aumentarsalario/'+doc.especialidad}>+</NavLink>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

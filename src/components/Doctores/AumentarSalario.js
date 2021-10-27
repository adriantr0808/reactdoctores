import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class AumentarSalario extends Component {

    //Para comprobar si ha habido un cambio
    state = {
        status: false
    }
    aumentoRef = React.createRef();

    aumentoSalarioCat = (e) => {
        e.preventDefault();
        var esp = this.props.especialidad;
        var aumento = this.aumentoRef.current.value;

    var request = '/api/Doctores/'+esp+'/'+aumento;
    var url = Global.urldoctores+request;

    axios.put(url).then(res => {
        this.setState({
            status:true
        });
    });

    }

    render() {
        if(this.state.status==true){
            return(<Redirect to='/'></Redirect>)
        }
        return (
            <div>
                <h1 className='m-5'>Aumentar Salario</h1>
                <form onSubmit={this.aumentoSalarioCat} style={{ width: '500px', display: 'table', margin: 'auto' }}>
                    <div className='mb-3 form-group row'>
                    <label>Introducir aumento de salario a la especialidad: </label>
                    <input type='number' className='form-control' ref={this.aumentoRef} />
                    </div>
                    <button className='btn btn-success m-1'>Aumentar Salario</button>
                    <NavLink to='/' className='btn btn-primary'>Volver</NavLink>
                </form>
            </div>
        )
    }
}

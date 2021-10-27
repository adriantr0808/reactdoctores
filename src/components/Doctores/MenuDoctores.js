import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDoctores extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Menu Doctores</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={'/doctores'} className="nav-link ">Doctores</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/insertardoctores'} className="nav-link">Insertar Doctor</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

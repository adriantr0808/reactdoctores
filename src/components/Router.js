import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuDoctores from './Doctores/MenuDoctores';
import TablaDoctores from './Doctores/TablaDoctores';
import InsertarDoctores from './Doctores/InsertarDoctores';
import ModificarDoctores from './Doctores/ModificarDoctores';
import EliminarDoctores from './Doctores/EliminarDoctores';
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDoctores />
                <Switch>
                    <Route exact path='/' component={TablaDoctores} />
                    <Route exact path='/doctores' component={TablaDoctores} />
                    <Route exact path='/insertardoctores' component={InsertarDoctores} />
                    <Route exact path='/modificardoctores/:id'
                        render={props => {
                            var id = props.match.params.id;
                            return (<ModificarDoctores iddoc={id} />)
                        }}
                    />
                    <Route exact path='/eliminardoctores/:id'
                        render={props => {
                            var id = props.match.params.id;
                            return (<EliminarDoctores iddoc={id} />)
                        }}
                    />
                </Switch>

            </BrowserRouter>

        )
    }
}

import React from 'react';
import './App.css';
import Client from "./components/Client";
import ClientForm from "./components/ClientForm";

class App extends React.Component {

    state = {
        clients: [
            {id: 1, nom: "Damien"},
            {id: 2, nom: "Mounga"},
            {id: 3, nom: "Laurent"}
        ]
    };

    handleDelete = (id) => {
        const CLIENTS = [...this.state.clients];
        const INDEX   = CLIENTS.findIndex((client) => {
            return client.id === id;
        });
        CLIENTS.splice(INDEX, 1);
        this.setState({clients: CLIENTS});
    };

    handleAdd = (client) => {
        const CLIENTS = [...this.state.clients];
        CLIENTS.push(client);
        this.setState({clients: CLIENTS});
    };


    render() {
        const TITLE = "Liste des clients";

        return (
            <div>
                <h1>{TITLE}</h1>
                <ul>
                    {this.state.clients.map((client) => (
                        <Client details={client} onDelete={this.handleDelete}/>
                    ))}
                </ul>
                <ClientForm onClientAdd={this.handleAdd}/>
            </div>
        )
    }
}

export default App;

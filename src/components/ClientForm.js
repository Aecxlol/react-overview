import React from "react";

class ClientForm extends React.Component {

    state = {
        newClient: ''
    };

    handleChange = (e) => {
        const INPUT_VALUE = e.currentTarget.value;
        this.setState({newClient: INPUT_VALUE});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const ID   = new Date().getTime();
        const NAME = this.state.newClient;

        this.props.onClientAdd({id: ID, nom: NAME});
        this.setState({newClient: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="Ajouter un client" value={this.state.newClient}/>
                <button>Confirmer</button>
            </form>
        )
    }
}

export default ClientForm;
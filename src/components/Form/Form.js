import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();

    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (<div>
            <section>Phonebook
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type='submit' disabled={!this.state.name || !this.state.number}>Add</button>
                </form>
            </section>
            <section>Contacts
            </section>
        </div >
        )
    }
}
export default Form;


Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

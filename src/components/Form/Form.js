
import PropTypes from 'prop-types';
import { useState } from 'react';

function Form(props) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit({ name, number });
        clearForm();

    }

    const clearForm = () => {
        setName('');
        setNumber('');
    }


    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                    </label>
                    <button className="btnSubmit" type='submit' disabled={!name || !number}>Add</button>
                </form>
            </section>
            <section>Contacts
            </section>
        </div>
    )
}

export default Form;


Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {
                contacts.map(({ id, name, number }) =>
                (
                    <li key={id}>
                        {name}:{number}
                        <button type="button"
                            onClick={() => { deleteContact(id) }}
                        >Delete
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}


export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired
}
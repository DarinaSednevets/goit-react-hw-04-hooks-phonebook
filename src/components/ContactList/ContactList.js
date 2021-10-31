
const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) =>
            (<li key={id} id={id}>
                {name}:{number}
                <button type="button"
                    onClick={() => { deleteContact(id) }}
                >Delete
                </button>
            </li>))
            }
        </ul>
    )
}


export default ContactList;


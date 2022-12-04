/* import { nanoid } from 'nanoid'; */
import { Component } from 'react';
import { ContactForm } from '../components/form/Form.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      
    <ContactForm></ContactForm>

    )
  }
}

/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */

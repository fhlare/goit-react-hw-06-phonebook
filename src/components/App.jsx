import { useSelector } from 'react-redux';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const viewContacts = useSelector(state => state.contacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {viewContacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </Container>
  );
};

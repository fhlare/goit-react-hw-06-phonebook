import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteButton,
  Text,
  NumberText,
} from './ContactCard.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { List, ListItem } from './ContactList.styled';


export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const visibleContatcs = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <List>
      {visibleContatcs.map(item => (
        <ListItem key={item.id}>
          <Text>
            {item.name}
            <NumberText>{item.number}</NumberText>
          </Text>
          <DeleteButton onClick={() => dispatch(deleteContact(item.id))}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

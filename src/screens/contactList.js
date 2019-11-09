import React, {
  useState,
  useEffect,
} from 'react';
import { Container, Content, ListItem, List, Thumbnail, Text, Body, Left, } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';

export default ContactList = () => {
  let { navigate } = useNavigation();
  const [contactsArray, setContactsArray] = useState([
    { image: require('../images/hall1.jpg'), name: 'Lovely', message: 'Hello nice to meet you' },
    { image: require('../images/hall1.jpg'), name: 'Lovely', message: 'Hello nice to meet you' },
    { image: require('../images/hall1.jpg'), name: 'Lovely', message: 'Hello nice to meet you' },
    { image: require('../images/hall1.jpg'), name: 'Lovely', message: 'Hello nice to meet you' },
  ]);

  return (
    <Container>
      <Content>
        {contactsArray.map((val, ind) => {
          return (
            <List>
              <ListItem avatar onPress={() => navigate('Messenger')}>
                <Left>
                  <Thumbnail source={val.image} />
                </Left>
                <Body>
                  <Text>{val.name}</Text>
                  <Text note>{val.message}</Text>
                </Body>

              </ListItem>
            </List>
          )
        })}
      </Content>
    </Container>
  )
};
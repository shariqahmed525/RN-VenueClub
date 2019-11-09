import React, {
  useState,
  useEffect,
} from 'react';
import {
  View
} from 'react-native';
import {
  Container,
  Content,
  ListItem,
  List,
  Thumbnail,
  Text,
  Body,
  Left,
  Spinner,
} from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import store from '../store/';
import { OfficialColor } from '../constants/colors';
import { DATABASE } from '../config/firebase';

export default OwnerContactList = () => {
  let { navigate } = useNavigation();
  const [uid, setUid] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { reducer } = store.getState();
    const { uid } = reducer;
    setUid(uid);
    getChatList(uid);
  }, []);

  const getChatList = (id) => {
    DATABASE
      .ref('users')
      .child(id)
      .child("chatMobList")
      .on('value', snap => {
        if (snap.exists()) {
          let arry = [];
          let keys = Object.keys(snap.val());
          keys.map(v => {
            DATABASE.ref('users').child(v).once('value', snapshot => {
              arry.push(snapshot.val());
              if (arry.length === keys.length) {
                setList([...arry]);
                setLoading(false);
              }
            });
          })
        }
        else {
          setLoading(false);
        }
      })
  }

  return (
    <Container>
      <Content contentContainerStyle={{ paddingTop: 15, paddingBottom: 20, paddingRight: 10, flexGrow: 1, }}>
        {loading ? (
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}>
            <Spinner color={OfficialColor} />
          </View>
        ) : (
            list.length > 0 ? (
              list.map((val, i) => {
                return (
                  <List key={i}>
                    <ListItem avatar onPress={() => navigate('Messenger', {
                      receiverId: val.uid,
                    })}>
                      <Left>
                        <Thumbnail source={require('../images/user.png')} />
                      </Left>
                      <Body>
                        <Text>{`${val.fName.trim()} ${val.lName.trim()}`}</Text>
                      </Body>
                    </ListItem>
                  </List>
                )
              })
            ) : (
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}>
                  <Text>Message Box Empty</Text>
                </View>
              )
          )}
      </Content>
    </Container>
  )
}

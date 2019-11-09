import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Item,
  Input,
  FooterTab,
  Text,
  Footer,
  Spinner,
} from 'native-base';
import { OfficialColor } from '../constants/colors';
import { useNavigationParam } from 'react-navigation-hooks';
import { DATABASE } from '../config/firebase';
import firebase from 'react-native-firebase';

let OwnerMessenger = () => {
  const receiverId = useNavigationParam('receiverId');
  const [uid, setUid] = useState("");
  const [txt, setTxt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { reducer } = store.getState();
    const { uid } = reducer;
    setUid(uid);
    getChat(uid);
  }, []);

  const getChat = (id) => {
    DATABASE
      .ref('users')
      .child(id)
      .child('chatMob')
      .child(receiverId)
      .on('value', snap => {
        if (snap.exists()) {
          let arry = [];
          snap.forEach(snapshot => {
            arry.push(snapshot.val())
          })
          setMessages([...arry]);
          setLoading(false);
        }
        else {
          setLoading(false);
        }
      })
  }

  const send = () => {
    console.log(receiverId, " receiver id that means booker Id");
    console.log(uid, " sender Id that means my id");
    const newPostKey = DATABASE.ref('users').push().key;
    var postMsg = {
      msg: txt,
      receiverId,
      senderId: uid,
      timeStamp: new Date().getTime(),
    };
    let updatesForMsg = {};
    updatesForMsg['/users/' + uid + '/chatMob/' + receiverId + '/' + newPostKey] = postMsg;
    updatesForMsg['/users/' + receiverId + '/chatMob/' + uid + '/' + newPostKey] = postMsg;


    let updatesForList = {};
    updatesForList['/users/' + uid + '/chatMobList/'] = {
      [receiverId]: receiverId,
    };
    updatesForList['/users/' + receiverId + '/chatMobList/'] = {
      [uid]: uid,
    };
    firebase.database().ref().update(updatesForMsg);
    firebase.database().ref().update(updatesForList);
    setTxt("");
  }

  return (
    <Container>
      <Content padder contentContainerStyle={{ flexGrow: 1, padding: 7, }}>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Spinner color={OfficialColor} />
          </View>
        ) : (
            messages.length > 0 ? (
              <View style={{ marginTop: 5, paddingHorizontal: 5, }}>
                {messages.map((v, i) => {
                  return (
                    v.senderId === uid ? (
                      <View style={styles.sender} key={i}>
                        <Text style={styles.senderText}>{v.msg}</Text>
                      </View>
                    ) : (
                        <View style={styles.receiver} key={i}>
                          <Text style={styles.receiverText}>{v.msg}</Text>
                        </View>
                      )
                  )
                })}
              </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                  <Text>No Chat</Text>
                </View>
              )
          )}
      </Content>
      <Footer>
        <FooterTab style={{ backgroundColor: '#ffffff' }}>
          <Item regular style={{ flex: 0.75 }}>
            <Input
              value={txt}
              onChangeText={text => setTxt(text)}
              placeholder='Type a message'
            />
          </Item>
          <Button
            block
            onPress={send}
            style={{ backgroundColor: '#28A745', flex: 0.25 }}
          >
            <Text style={{ color: '#ffffff' }}>Send</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  receiver: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
    width: "70%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    padding: 2,
    marginVertical: 5,
  },
  receiverText: {
    color: "rgba(0, 0, 0, 0.87)",
  },
  sender: {
    backgroundColor: OfficialColor,
    alignSelf: 'flex-end',
    width: "70%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: OfficialColor,
    marginVertical: 5,
    borderWidth: 1,
    padding: 2,
  },
  senderText: {
    color: "rgba(255, 255, 255, 0.87)",
  },
})


OwnerMessenger.navigationOptions = () => ({
  title: "Messenger",
  headerTitleStyle: {
    textAlign: 'center',
    color: "#fff",
  },
  headerTintColor: "#fff",
  headerTitleContainerStyle: {
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: OfficialColor,
  },
  headerRight: <></>,
});

export default OwnerMessenger;
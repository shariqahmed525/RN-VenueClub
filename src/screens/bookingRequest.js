import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  ListItem,
  List,
  Thumbnail,
  Text,
  Body,
  Right,
  Spinner,
} from 'native-base';
import {
  useNavigation
} from 'react-navigation-hooks';
import _ from 'lodash';
import { DATABASE } from '../config/firebase';
import { OfficialColor } from '../constants/colors';

export default BookingRequest = () => {
  let { navigate } = useNavigation();
  const [index, setIndex] = useState("");
  const [uid, setUid] = useState("");
  const [allHalls, setAllHalls] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStateFromStore();
    store.subscribe(getStateFromStore);
  }, []);

  const getStateFromStore = async () => {
    const { reducer } = store.getState();
    const { allHalls, uid } = reducer;
    setUid(uid);
    // For recent booking

    const newArr = [];
    allHalls.length > 0 && (
      allHalls.map(v => {
        if (v.userKey === uid && v.bookingsMob) {
          _.mapValues(v.bookingsMob, (o, key) => {
            if (o.status !== "REJECT") {
              newArr.push({
                hallName: v.hallName,
                date: `${o.day}/${o.month}/${o.year}`,
                hallDataKey: v.hallDataKey,
                userKey: v.userKey,
                bookId: o.bookId,
                bookKey: key,
                status: o.status,
              });
            }
          });
        }
      })
    );
    if (newArr.length > 0) {
      const arry = []
      for (let i = 0; i < newArr.length; i++) {
        const element = newArr[i];
        DATABASE.ref('users').child(element.bookId).once('value', snap => {
          let d = snap.val();
          arry.push({
            ...element,
            name: `${d.fName.trim()} ${d.lName.trim()}`,
          })
          if (newArr.length === arry.length) {
            setRequests([...arry]);
            setAllHalls([...allHalls]);
          }
        })
      }
    }
    else {
      setAllHalls([...allHalls]);
    }
  }

  const accept = (param, index) => {
    const { userKey, hallDataKey, bookKey } = param;
    setIndex(index);
    setLoading(true);
    DATABASE
      .ref("allHallData")
      .child(userKey)
      .child(hallDataKey)
      .child("bookingsMob")
      .child(bookKey)
      .update({
        status: "ACCEPT",
      })
      .then(() => {
        alert("Customer Request Accepted!");
        setIndex("");
        setLoading(false);
      })
      .catch(err => {
        alert("Something went wrong please try again!");
        console.log(err, " error in accept");
        setLoading(false);
      })
  }

  const reject = (param, index) => {
    const { userKey, hallDataKey, bookKey, bookId } = param;
    setIndex(index);
    setLoading(true);

    /* Add my rejected node */
    DATABASE
      .ref('users')
      .child(uid)
      .child('rejected')
      .push({
        ...param,
        status: "REJECT"
      });

    /* Add user rejected node */
    DATABASE
      .ref('users')
      .child(bookId)
      .child('rejected')
      .push({
        ...param,
        status: "REJECT"
      })
      .then(() => {

        /* reject booking node */
        DATABASE
          .ref("allHallData")
          .child(userKey)
          .child(hallDataKey)
          .child("bookingsMob")
          .child(bookKey)
          .update({
            status: "REJECT",
          })
          .then(() => {
            alert("Customer Request Rejected!");
            setIndex("");
            setLoading(false);
          })
          .catch(err => {
            alert("Something went wrong please try again!");
            console.log(err, " error in accept");
            setLoading(false);
          })
      })
  }

  return (
    <Container>
      <Content style={{ paddingRight: 10 }}>
        <Text style={styles.title}>Customer Requests</Text>
        {allHalls.length > 0 ? (
          requests.length > 0 ? (
            requests.map((v, i) => {
              return (
                <List style={{ marginBottom: 10 }} key={i}>
                  <ListItem avatar>
                    <Body>
                      <Text style={{ fontWeight: 'bold' }}>Customer Name:
                        <Text style={{ fontWeight: 'normal' }}> {v.name}</Text>
                      </Text>
                      <Text style={{ fontWeight: 'bold' }}>Hall Name:
                        <Text style={{ fontWeight: 'normal' }}>  {v.hallName}</Text>
                      </Text>
                      <Text style={{ fontWeight: 'bold' }}>Date:
                        <Text style={{ fontWeight: 'normal' }}> {v.date}</Text>
                      </Text>
                      {v.status === "ACCEPT" ? (
                        <Text style={{ fontWeight: 'bold' }}>Status:
                          <Text style={{ color: '#28A745' }}> Accepted</Text>
                        </Text>
                      ) : (
                          <View style={{ flex: 1, flexDirection: "row", height: 40, alignItems: "center" }}>
                            {loading && index === i ? (
                              <Spinner color={OfficialColor} size={20} />
                            ) : (
                                <>
                                  <TouchableOpacity activeOpacity={.5} onPress={() => accept(v, i)}>
                                    <Text style={{ color: '#28A745' }}> Accept</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity activeOpacity={.5} onPress={() => reject(v, i)}>
                                    <Text style={{ color: '#f60606' }}> Reject</Text>
                                  </TouchableOpacity>
                                </>
                              )}
                          </View>
                        )}
                    </Body>
                    {v.status === "ACCEPT" && (
                      <Right>
                        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('OwnerMessenger', {
                          receiverId: v.bookId,
                        })}>
                          <Thumbnail
                            style={styles.thumbnail}
                            source={require('../images/customerMessage.png')} />
                        </TouchableOpacity>
                      </Right>
                    )}
                  </ListItem>
                </List>
              )
            })
          ) : (
              <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginTop: 20, }}>
                <Text style={{ color: "red" }}>You have no request yet!</Text>
              </View>
            )
        ) : (
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginTop: 20, }}>
              <Spinner color={OfficialColor} />
            </View>
          )}
      </Content>
    </Container>
  )
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontFamily: 'cursive',
    fontSize: 40,
    margin: 10,
    fontWeight: 'bold'
  },
  thumbnail: {
    width: 30,
    height: 30,
    marginTop: 25,
  },
})

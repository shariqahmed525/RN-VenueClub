import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Button,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Spinner,
  Container,
} from 'native-base';
import {
  useNavigation
} from 'react-navigation-hooks';
import store from '../store';
import { OfficialColor } from '../constants/colors';
import _ from 'lodash';

export default MyVenues = props => {
  let { navigate } = useNavigation();
  const [allHalls, setAllHalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStateFromStore();
    store.subscribe(getStateFromStore);
  }, []);

  const getStateFromStore = () => {
    const { reducer } = store.getState();
    const { allHalls, uid } = reducer;

    // For recent booking
    const newArr = [];
    allHalls.length > 0 && (
      allHalls.map(v => {
        if (v.userKey == uid) {
          newArr.push(v);
        }
      })
    );
    setLoading(false);
    setAllHalls([...newArr]);
  }

  const Cards = () => {
    return (
      <Container>
        {loading ? (
          <View style={{ justifyContent: "center", alignItems: 'center', flex: 1, width: "100%", }}>
            <Spinner color={OfficialColor} />
          </View>
        ) : (
            allHalls.length > 0 ? (
              <Content style={{ paddingHorizontal: 7, }}>
                {allHalls.map((val, ind) => {
                  return (
                    <TouchableOpacity
                      key={ind}
                      activeOpacity={.9}
                      style={{ paddingVertical: 10 }}
                      onPress={() => navigate('UserViewTopDeals', {
                        data: val
                      })}
                    >
                      <Card>
                        <CardItem>
                          <Left>
                            <Body>
                              <Text>
                                {val.hallName}
                              </Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image
                            source={{ uri: val.picture ? val.picture[0] : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png" }}
                            style={{ height: 200, width: null, flex: 1 }}
                          />
                        </CardItem>
                        <CardItem style={styles.cardBottom}>
                          <Body>
                            <Text style={{ fontWeight: 'bold' }}>Venue Type
                            <Text style={{ fontWeight: 'normal' }}> {val.venueType}</Text>
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>Capacity
                            <Text style={{ fontWeight: 'normal' }}> {val.capacity}</Text>
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>Price
                            <Text style={{ fontWeight: 'normal' }}> {val.price}</Text>
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>Location
                            <Text style={{ fontWeight: 'normal' }}> {val.venueLocation}</Text>
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>Address
                            <Text style={{ fontWeight: 'normal' }}> {val.address}</Text>
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>Description
                            <Text style={{ fontWeight: 'normal' }}> {val.description}</Text>
                            </Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  )
                })}
              </Content>
            )
              : (
                <View style={{ justifyContent: "center", alignItems: 'center', flex: 1, }}>
                  <Text>No Venues Found</Text>
                </View>
              )
          )}
      </Container>
    )
  }

  return (
    <Container>
      <Cards />
    </Container>
  );
}


const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: {
    height: 40,
    backgroundColor: "rgba(115, 222, 128, 0.3)",
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
  cardBottom: {
    alignItems: 'center',
    justifyContent: "center",
  },
  noFound: {
    textAlign: 'center',
    color: 'red',
    fontSize: 15,
    marginTop: 20,
  },
})

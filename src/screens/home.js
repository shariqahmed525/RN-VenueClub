import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Image,
  ScrollView,
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
  Tabs,
  Tab,
  ScrollableTab,
  CardItem,
  Spinner,
  Container,
} from 'native-base';
import {
  useNavigation
} from 'react-navigation-hooks';
import store from '../store';
import { Table, Row, Rows } from 'react-native-table-component';
import { OfficialColor } from '../constants/colors';
import _ from 'lodash';

const tableHead = ['Hall Name', 'Date', 'Status'];

export default Home = () => {
  let { navigate } = useNavigation();
  const [allHalls, setAllHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setLoading(false);
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
        if (v.bookingsMob) {
          _.mapValues(v.bookingsMob, (o) => {
            if (o.bookId === uid) {
              newArr.push([v.hallName, `${o.day}/${o.month}/${o.year}`, o.status]);
            }
          });
        }
      })
    );
    setTableData([...newArr])
    setAllHalls(allHalls);
  }

  return (
    <Container>
      <Tabs
        tabBarBackgroundColor="#28A745"
        renderTabBar={() => <ScrollableTab />}
      >
        <Tab
          tabStyle={{ backgroundColor: '#28A745' }}
          textStyle={{ color: '#ffffff' }}
          activeTextStyle={{ color: '#ffffff' }}
          activeTabStyle={{ backgroundColor: '#28A745' }}
          heading="Venues"
        >
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
                                <Text note>
                                  {val.address}
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
                            <Button
                              block
                              onPress={() => navigate('Register', {
                                data: val
                              })}
                              style={{ backgroundColor: OfficialColor, width: "100%" }}
                            >
                              <Text>Register Venue</Text>
                            </Button>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    )
                  })}
                </Content>
              )
                : (
                  <View style={{ justifyContent: "center", alignItems: 'center', flex: 1, }}>
                    <Spinner color={OfficialColor} />
                  </View>
                )
            )}
        </Tab>
        <Tab
          tabStyle={{ backgroundColor: '#28A745' }}
          textStyle={{ color: '#ffffff' }}
          activeTextStyle={{ color: '#ffffff' }}
          activeTabStyle={{ backgroundColor: '#28A745' }}
          heading="Recent Bookings"
        >
          <View style={styles.tableContainer}>
            <Table borderStyle={{ borderWidth: 1, borderColor: OfficialColor }}>
              <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            </Table>
            <ScrollView
              style={{ marginTop: -1 }}
              showsVerticalScrollIndicator={false}
            >
              {allHalls.length > 0 ? (
                tableData.length > 0 ?
                  <Table borderStyle={{ borderWidth: 1, borderColor: OfficialColor }}>
                    <Rows data={tableData} textStyle={styles.text} />
                  </Table>
                  :
                  <Text style={styles.noFound}>You have no recent booking yet!</Text>
              ) : (
                  <Spinner color={OfficialColor} />
                )}
            </ScrollView>
          </View>
        </Tab>
      </Tabs>
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

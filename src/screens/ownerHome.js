import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Container,
  Spinner,
} from 'native-base';
import {
  useNavigation
} from 'react-navigation-hooks';
import { Table, Row, Rows } from 'react-native-table-component';
import { OfficialColor } from '../constants/colors';
import _ from 'lodash';

const tableHead = ['Hall Name', 'Date', 'Status'];

export default OwnerHome = () => {
  let { navigate } = useNavigation();
  const [allHalls, setAllHalls] = useState([]);
  const [tableData, setTableData] = useState([]);

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
        if (v.userKey === uid && v.bookingsMob) {
          _.mapValues(v.bookingsMob, (o) => {
            newArr.push([v.hallName, `${o.day}/${o.month}/${o.year}`, o.status]);
            // if (o.status === "PENDING") {
            // }
          });
        }
      })
    );
    setTableData([...newArr])
    setAllHalls(allHalls);
  }

  return (
    <Container padder style={styles.container}>

      <Button
        block
        style={styles.addVenue}
        onPress={() => navigate('OwnerRegistration')}
      >
        <Text>
          Add Venue
        </Text>
      </Button>
      <Text style={styles.title}>
        Recent Bookings
      </Text>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  constainer: {
    padding: 7
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  addVenue: {
    width: 200,
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: '#28A745',
  },
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
  noFound: {
    textAlign: 'center',
    color: 'red',
    fontSize: 15,
    marginTop: 20,
  },
})

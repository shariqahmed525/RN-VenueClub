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
} from 'native-base';
import {
  useNavigation
} from 'react-navigation-hooks'
import { Table, Row, Rows } from 'react-native-table-component';
import { OfficialColor } from '../constants/colors';

const tableHead = ['Hall Name', 'Date', 'Status'];
const tableData = [
  ['Shadman Banquet', '02/12/2019', 'PENDING'],
  ['Shadman Banquet', '02/12/2019', 'PENDING'],
  ['Shadman Banquet', '02/12/2019', 'PENDING'],
  ['Shadman Banquet', '02/12/2019', 'PENDING'],
  ['Shadman Banquet', '02/12/2019', 'PENDING'],
  ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
  // ['Shadman Banquet', '02/12/2019', 'PENDING'],
];

export default OwnerHome = () => {
  let { navigate } = useNavigation();

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
          <Table borderStyle={{ borderWidth: 1, borderColor: OfficialColor }}>
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
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
  }
})

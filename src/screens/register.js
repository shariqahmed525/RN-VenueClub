import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  useNavigationParam
} from 'react-navigation-hooks';
import {
  Button,
  Container,
  Content,
  ListItem,
  List,
  Text,
  Body,
  Spinner,
} from 'native-base';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import { OfficialColor } from '../constants/colors';
import Modal from 'react-native-modal';
import store from '../store';
import { DATABASE } from '../config/firebase';
import _ from 'lodash';

const RenderList = props => {
  return (
    <List>
      <ListItem onPress={props.onPress}>
        <Body>
          <Text>{props.name}</Text>
          <Text note>{props.desc}</Text>
        </Body>
      </ListItem>
    </List>
  )
}

export default Register = () => {
  const data = useNavigationParam('data');
  const [date, setDate] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = moment().format("YYYY-MM-DD");
  const bookedDate = data && data.bookingsMob;
  // console.log(data);

  const handleDatePicker = d => {
    setDate(d);
    console.log(d, " selected date");
    setVisible(false);
  }

  const modal = () => {
    let obj = {};
    const newArr = [];
    bookedDate && _.mapValues(bookedDate, (o, k) => {
      if (o.status === "ACCEPT") {
        newArr.push(k);
      }
    });
    // const keys = bookedDate && Object.keys(bookedDate);
    newArr && newArr.length > 0 && newArr.map(v => {
      obj = {
        ...obj,
        [v]: { disabled: true, disableTouchEvent: true },
      }
    });
    return (
      <View style={{ flex: 1 }}>
        <Modal
          useNativeDriver={true}
          isVisible={visible}
          animationInTiming={500}
          onBackdropPress={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.calendarWrapper}>
              <Calendar
                theme={calendarTheme}
                current={today}
                minDate={today}
                hideExtraDays={true}
                markedDates={{
                  [`${date && date.dateString}`]: { selected: true, marked: true },
                  ...obj,
                  // '2019-11-19': { disabled: true, disableTouchEvent: true }
                }}
                onDayPress={handleDatePicker}
                onDayLongPress={handleDatePicker}
              />
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  const book = () => {
    if (!date) {
      alert("Please select Event date");
      return;
    }
    setLoading(true);
    const { reducer } = store.getState();
    const { uid } = reducer;
    const venueOwnerKey = data.userKey;
    const hallDataKey = data.hallDataKey;
    const newDate = date.dateString;
    DATABASE
      .ref('allHallData')
      .child(venueOwnerKey)
      .child(hallDataKey)
      .child('bookingsMob')
      .child(newDate)
      .set({
        bookId: uid,
        date: newDate,
        day: date.day,
        month: date.month,
        year: date.year,
        status: "PENDING",
      })
      .then(() => {
        alert(`${data.hallName} successfully booked on ${date.day}/${date.month}/${date.year}`);
        setDate(null);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err, " error in book Venue");
        alert("Something went wrong please try again!");
      })
  }

  return (
    <Container>
      <Content>
        {data !== undefined ? (
          <View style={{ paddingVertical: 20, paddingRight: 7, }}>
            <RenderList name="Venue Name" desc={data.hallName} />
            <RenderList name="Venue Type" desc={data.venueType} />
            <RenderList name="Capacity" desc={data.capacity} />
            <RenderList name="Location" desc={data.venueLocation} />
            <RenderList name="Address" desc={data.address} />
            <RenderList name="Price" desc={data.address} />
            <RenderList name="Description" desc={data.description} />
            <RenderList
              name="Date"
              onPress={() => !loading && setVisible(true)}
              desc={date ? `${date.day}/${date.month}/${date.year}` : "Select Date"}
            />
            {modal()}

            <View style={{
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              paddingLeft: 7,
            }}>
              {loading ? (
                <Spinner color={OfficialColor} />
              ) : (
                  <Button
                    block
                    onPress={book}
                    style={styles.btn}
                  >
                    <Text>Book Now!</Text>
                  </Button>
                )}
            </View>
          </View>
        ) : (
            <Text>No record found</Text>
          )}
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    margin: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  calendarWrapper: {
    justifyContent: "center",
    alignItems: 'center',
    zIndex: 100,
  },
  btn: {
    width: "80%",
    alignSelf: 'center',
    backgroundColor: OfficialColor,
  },
})

const calendarTheme = {
  backgroundColor: '#fff',
  calendarBackground: '#fff',
  textSectionTitleColor: OfficialColor,
  selectedDayBackgroundColor: OfficialColor,
  selectedDayTextColor: '#fff',
  todayTextColor: OfficialColor,
  dayTextColor: 'grey',
  textDisabledColor: '#d9e1e8',
  selectedDotColor: '#ffffff',
  arrowColor: '#000',
  monthTextColor: OfficialColor,
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 12,
  textMonthFontSize: 12,
  textDayHeaderFontSize: 12,
}
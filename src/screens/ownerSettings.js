import { withNavigation } from 'react-navigation';
import React, {
  useState,
  useEffect,
} from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  Content,
  Input,
  Label,
  Container,
  Form,
  Item,
  Spinner,
  Button,
} from 'native-base';
import { OfficialColor } from '../constants/colors';
import store from '../store';
import { DATABASE } from '../config/firebase';
import { user } from '../store/action/action';

const OwnerSettings = () => {

  const [fName, setFName] = useState("");
  const [userD, setUser] = useState(null);
  const [lName, setLName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStateFromStore();
    store.subscribe(getStateFromStore);
  }, [])

  const getStateFromStore = () => {
    const { reducer } = store.getState();
    const { user } = reducer;
    setUser(user);
    setLName(user.lName);
    setFName(user.fName);
    setPhoneNumber(user.phoneNumber);
  }

  const updateDetails = () => {
    setLoading(true);
    DATABASE.ref('users').child(userD.uid).update({
      lName,
      fName,
      phoneNumber,
    }).then(res => {
      setLoading(false);
      store.dispatch(user({
        ...userD,
        lName,
        fName,
        phoneNumber,
      }));
    }).catch(err => {
      setLoading(false);
      console.log(err, " error in update user details");
    })
  }

  const changePassword = () => {

  }

  return (
    <Container>
      <Content style={styles.container}>
        <Text style={styles.title}>
          Edit Contact Information
        </Text>
        <Form>
          <Item floatingLabel last>
            <Label >First Name</Label>
            <Input
              value={fName}
              onChangeText={(txt) => setFName(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Last Name</Label>
            <Input
              value={lName}
              onChangeText={(txt) => setLName(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Phone</Label>
            <Input
              value={phoneNumber}
              onChangeText={(txt) => setPhoneNumber(txt)}
            />
          </Item>
        </Form>
        {loading ? (
          <Spinner color='green' />
        ) : (
            <Button
              block
              style={styles.btn}
              onPress={updateDetails}
            >
              <Text style={{ color: '#ffffff' }}>Update</Text>
            </Button>
          )}

        <Text style={styles.title}>
          Change Password
        </Text>

        <Form>
          <Item floatingLabel last>
            <Label >New Password</Label>
            <Input
              secureTextEntry
              value={password}
              onChangeText={(txt) => setPassword(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Confirm Password</Label>
            <Input
              secureTextEntry
              value={cPassword}
              onChangeText={(txt) => setCPassword(txt)}
            />
          </Item>
        </Form>

        {loading ? (
          <Spinner color='green' />
        ) : (
            <Button
              block
              style={styles.btn}
              onPress={changePassword}
            >
              <Text style={{ color: '#ffffff' }}>Change Password</Text>
            </Button>
          )}

        <Text style={styles.title}>
          Delete Account
        </Text>
        {loading ? (
          <Spinner color='green' />
        ) : (
            <Button
              block
              style={{ ...styles.btn, backgroundColor: "#FF0000", marginBottom: 40, }}
            >
              <Text style={{ color: '#ffffff' }}>
                Delete Account
              </Text>
            </Button>
          )}
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#28A745',
  },
})

OwnerSettings.navigationOptions = () => ({
  title: "SETTINGS",
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

export default withNavigation(OwnerSettings);
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
import { DATABASE, AUTH } from '../config/firebase';
import { user } from '../store/action/action';
import Axios from 'axios';
import { FIREBASE_URL, CHANGE_PASS, DELETE_USER } from '../constants/constant';
import { useNavigation } from 'react-navigation-hooks';

const OwnerSettings = () => {
  let { navigate } = useNavigation();
  const [fName, setFName] = useState("");
  const [userD, setUser] = useState(null);
  const [uid, setUid] = useState("");
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
    const { user, uid } = reducer;
    setUid(uid);
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

  const changePassword = async () => {
    if (password.trim().length < 6) {
      alert("Password must be atleast 6 characters");
      return;
    }
    if (password.trim() !== cPassword.trim()) {
      alert("Password not matched");
      return;
    }
    else {
      try {
        setLoading(true);
        await Axios.post(`${FIREBASE_URL}${CHANGE_PASS}`, {
          userId: uid,
          newPassword: password,
        });
        alert("Password update successfully!");
        setPassword("");
        setCPassword("");
        setLoading(false);
      }
      catch (e) {
        setLoading(false);
        alert("Something went wrong try again!");
        console.log(e, " error in change password");
      }
    }
  }

  const deleteUser = async () => {
    try {
      setLoading(true);
      await Axios.post(`${FIREBASE_URL}${DELETE_USER}`, {
        userId: uid,
      });
      AUTH.signOut().then(() => navigate('Login'));
      setLoading(false);
    }
    catch (e) {
      setLoading(false);
      alert("Something went wrong try again!");
      console.log(e, " error in delete user");
    }
  }

  return (
    <Container>
      <Content style={styles.container}>
        <Text style={styles.title}>
          Edit Contact Information
        </Text>
        <Form>
          <Item>
            <Input
              value={fName}
              placeholder="Fist Name"
              placeholderTextColor="#d5d5d5"
              onChangeText={(txt) => setFName(txt)}
            />
          </Item>
          <Item>
            <Input
              value={lName}
              placeholder="Last Name"
              placeholderTextColor="#d5d5d5"
              onChangeText={(txt) => setLName(txt)}
            />
          </Item>
          <Item>
            <Input
              value={phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor="#d5d5d5"
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
              onPress={deleteUser}
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
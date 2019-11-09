import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  Content,
  Spinner,
  Container,
} from 'native-base';
import {
  useNavigation
} from 'react-navigation-hooks'

import store from '../store';
import {
  AUTH,
  DATABASE,
} from '../config/firebase.js';
import {
  LinkColor,
  OfficialColor,
} from '../constants/colors.js';
import { user, uid, getAllHalls } from '../store/action/action';

export default Login = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkUserFromDB = (id) => {
    DATABASE.ref('users').child(id).once('value', (childsnap) => {
      const val = childsnap.val();
      store.dispatch(uid(id));
      store.dispatch(user(val));
      store.dispatch(getAllHalls());
      navigate('MainScreen');
    })
      .then(() => {
        setEmail("");
        setPassword("");
        setDisable(false);
        setLoading(false);
      })
      .catch((error) => {
        setDisable(false);
        console.log(error, " error in login check database user");
      });
  }

  useEffect(() => {
    AUTH.onAuthStateChanged(user => {
      if (user) {
        checkUserFromDB(user.uid);
      }
      else {
        setLoading(false);
      }
    })
  }, [])

  const login = () => {
    if (email === '' || password === '') {
      alert('Enter both textfield(s)')
    }
    else if (email != email || password != password) {
      alert('Please Enter correct Email or Password')
    }
    else {
      setDisable(true);
      AUTH.signInWithEmailAndPassword(email, password)
        .then(({ user: resUser }) => {
          const id = resUser.uid;
          console.log(id);
          checkUserFromDB(id);
        })
        .catch((error) => {
          setDisable(false);
          alert(error.message)
          console.log(error, " error in login");
        });
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={loading ? "#000" : OfficialColor}
      />
      {loading ?
        (<Image
          style={styles.splash}
          source={require('../images/launch_screen.png')}
        />)
        :
        (<Container>
          <Content padder style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../images/final_logo.png')}
            />
            <Form>
              <Item floatingLabel last>
                <Label >Enter Email</Label>
                <Input
                  value={email}
                  keyboardType="email-address"
                  onChangeText={(txt) => setEmail(txt)}
                />
              </Item>
              <Item floatingLabel last>
                <Label >Enter Password</Label>
                <Input
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(txt) => setPassword(txt)}
                />
              </Item>
            </Form>

            <Text
              style={styles.forgotPwd}
              onPress={() => navigate('ForgetPassword')}
            >
              Forget Password ?
            </Text>

            {disable ? (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Spinner color={OfficialColor} />
              </View>
            ) : (
                <Button
                  block
                  onPress={login}
                  disabled={disable}
                  style={styles.btn}>
                  <Text>Login</Text>
                </Button>
              )}

            <Text
              style={{ alignSelf: "center" }}
            >
              {"Don't have an account yet ? "}
              <Text
                style={{ color: LinkColor }}
                onPress={() => navigate('Signup')}
              >
                Click Here
          </Text>
            </Text>
          </Content>
        </Container>)
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  logo: {
    width: 170,
    height: 250,
    marginVertical: 10,
    alignSelf: "center",
  },
  forgotPwd: {
    color: LinkColor,
    alignSelf: 'flex-end',
  },
  btn: {
    width: 200,
    marginVertical: 30,
    alignSelf: 'center',
    backgroundColor: OfficialColor,
  },
  splash: {
    width: "100%",
    height: "100%",
  }
})
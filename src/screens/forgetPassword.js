import React, {
  useState,
} from 'react';
import {
  View,
  Image,
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
  AUTH,
} from '../config/firebase.js';
import {
  OfficialColor,
} from '../constants/colors.js';
import { useNavigation } from 'react-navigation-hooks';

export default Login = () => {
  let { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);

  const sentMail = () => {
    setDisable(true);
    AUTH.sendPasswordResetEmail(email)
      .then(() => {
        alert("Reset password mail sent you");
        navigate('Login');
        setDisable(false);
      }).catch((error) => {
        alert(error.message);
      });
  }

  return (
    <Container>
      <Content padder style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/final_logo.png')}
        />
        <Form style={{ marginTop: 40 }}>
          <Item floatingLabel last>
            <Label >Search Here</Label>
            <Input
              value={email}
              disabled={disable}
              keyboardType="email-address"
              onChangeText={(txt) => setEmail(txt)}
            />
          </Item>
        </Form>

        {disable ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Spinner color={OfficialColor} />
          </View>
        ) : (
            <Button
              block
              onPress={sentMail}
              disabled={disable}
              style={styles.btn}>
              <Text>Search</Text>
            </Button>
          )}
      </Content>
    </Container>
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
  btn: {
    width: 200,
    marginVertical: 30,
    alignSelf: 'center',
    backgroundColor: OfficialColor,
  }
})
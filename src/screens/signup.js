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
  Icon,
  Item,
  Label,
  Input,
  Button,
  Picker,
  Content,
  Container,
  Spinner,
} from 'native-base';

import {
  AUTH,
  DATABASE,
} from '../config/firebase.js';
import {
  LinkColor,
  OfficialColor,
} from '../constants/colors.js';

export default Signup = () => {
  const [disable, setDisable] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [numberType, setNumberType] = useState("");
  const [secQuestion, setSecQuestion] = useState("");
  const [secAnswer, setSecAnswer] = useState("");
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

  const updateAccount = v => {
    if (v == 2) {
      setAccountType(v);
      setDropdownIsVisible(true);
    }
    else if (v == 1) {
      setAccountType(v);
      setDropdownIsVisible(false);
    }
  }

  const signup = () => {
    if (email.length < 1 || password.length < 1 || fName.length < 1 || lName.length < 1 || phoneNumber.length < 1 || confirmPassword.length < 1 || secQuestion.length < 1 || secAnswer.length < 1) {
      alert('Fill All textfield(s)');
      return;
    }
    if (accountType === 2 && (paymentType.length < 1 || numberType.length < 1)) {
      alert('Fill both textfield(s)');
      return;
    }

    setDisable(true);
    console.log(fName, " fName");
    console.log(lName, " lName");
    console.log(secAnswer, " secAnswer");
    console.log(password, " password");
    console.log(numberType, " numberType");
    console.log(accountType, " accountType");
    console.log(phoneNumber, " phoneNumber");
    console.log(paymentType, " paymentType");
    console.log(secQuestion, " secQuestion");
    console.log(confirmPassword, " confirmPassword");
    AUTH.createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        let getKey = DATABASE.ref('users').child(user.uid);
        const obj = {
          fName,
          lName,
          email,
          secAnswer,
          password,
          numberType,
          accountType,
          phoneNumber,
          paymentType,
          secQuestion,
          uid: getKey.key,
          confirmPassword,
        };
        getKey.set(obj)
        setDisable(false);
        alert('signup successfully');
      })
      .catch(err => {
        setDisable(false);
        alert(err.message)
        console.log(err, " error in create user");
      })
  }

  return (
    <Container>
      <Content padder style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/final_logo.png')}
        />
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
            <Label >Enter Email</Label>
            <Input
              value={email}
              keyboardType="email-address"
              onChangeText={(txt) => setEmail(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Phone Number</Label>
            <Input
              value={phoneNumber}
              keyboardType="name-phone-pad"
              onChangeText={(txt) => setPhoneNumber(txt)}
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
          <Item floatingLabel last>
            <Label >Confirm Password</Label>
            <Input
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(txt) => setConfirmPassword(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Security Question</Label>
            <Input
              value={secQuestion}
              onChangeText={(txt) => setSecQuestion(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Security Answer</Label>
            <Input
              value={secAnswer}
              onChangeText={(txt) => setSecAnswer(txt)}
            />
          </Item>


          <Item style={{ marginTop: 20 }} picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your Account"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={accountType}
              onValueChange={(value) => updateAccount(value)}  >

              <Picker.Item label="Select Your Account Type" />
              <Picker.Item label="User" value="1" />
              <Picker.Item label="Hall Owner" value="2" />

            </Picker>
          </Item>
          {dropdownIsVisible && (
            <Form style={{ marginTop: 20 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Select your Account"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={paymentType}
                  onValueChange={(value) => setPaymentType(value)}
                >
                  <Picker.Item label="Select Your Payment Type" />
                  <Picker.Item label="Jazz Cash" value="Jazz Cash" />
                  <Picker.Item label="Easy Paisa" value="Easy Paisa" />
                </Picker>
              </Item>

              <Item floatingLabel last>
                <Label >Enter Your Account Phone Number</Label>
                <Input
                  value={numberType}
                  keyboardType="name-phone-pad"
                  onChangeText={(txt) => setNumberType(txt)}
                />
              </Item>
            </Form>
          )}
        </Form>

        <Text style={styles.bottomText}>
          By signing up, I agree to Venue Club's Terms of Service, Privacy Policy, Guest Refund Policy, and Host Guarantee Terms.
        </Text>


        {disable ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Spinner color={OfficialColor} />
          </View>
        ) : (
            <Button
              block
              onPress={signup}
              disabled={disable}
              style={styles.btn}
            >
              <Text>Sign up</Text>
            </Button>
          )}

      </Content>
    </Container>
  );
};

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
  bottomText: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
    color: "#a8a8a8",
  },
})
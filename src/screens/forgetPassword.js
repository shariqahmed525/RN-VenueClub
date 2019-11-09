import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Container, Header, Content, Item, Label, Input, Text, Form, Body, Title, Left, Icon, Right } from 'native-base';


class ForgetPassword extends Component {

    constructor() {
        super();

        this.state = {
            emailsent: false,
            searchemail: true,
            verifysecurityanswer: false

        }

    }

    //   resetPassword(val){
    //       if()
    //   }

    render() {

        const { emailsent, verifysecurityanswer, searchemail } = this.state
        return (

            <Container >

                <Content padder style={{ padding: 7 }}>



                    <Image

                        style={{ width: 190, height: 280, alignSelf: "center" }}
                        source={require('../images/final_logo.png')} />



                    <Text>{"\n"}</Text>
                    <Text>{'\n'}</Text>

                    {this.state.searchemail &&
                        <Content>
                            <Item floatingLabel last>
                                <Label >Search by Email</Label>
                                <Input />

                            </Item>


                            <Button block style={{ width: 200, backgroundColor: '#28A745', alignSelf: 'center', marginTop: 40 }} onPress={() => { this.setState({ searchemail: false, verifysecurityanswer: true, emailsent: false }) }} ><Text>Search</Text></Button>

                        </Content>
                    }



                    {this.state.verifysecurityanswer &&
                        <Content>

                            <Text style={{ alignSelf: "center" }}>Security Question</Text>

                            <Text>{"\n"}</Text>

                            <Item floatingLabel last>
                                <Label >Security Answer</Label>
                                <Input />

                            </Item>

                            <Button block style={{ width: 200, backgroundColor: '#28A745', alignSelf: 'center', marginTop: 40 }} onPress={() => { this.setState({ searchemail: false, verifysecurityanswer: false, emailsent: true }) }}><Text>Submit</Text></Button>
                        </Content>
                    }


                    {this.state.emailsent &&

                        <Text style={{ alignSelf: "center" }}>Your new Password has been sent to your email</Text>

                    }


                </Content>


            </Container>


        )
    }




}

export default ForgetPassword;
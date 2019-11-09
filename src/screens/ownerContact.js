import React, { Component } from 'react';
import { Textarea, Button, Container, Header, Content, Item, Label, Input, Picker, Icon, Text, Form, Body, Title, Left, Right } from 'native-base';
import { DATABASE } from '../config/firebase.js'

class OwnerContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Email: '',
            Subject: '',
            Message: ''

        }
    }
    sendMessage() {

        const { Name, Email, Subject, Message } = this.state;
        if (Name === '' || Email === '' || Subject === '' || Message === '') {
            alert('Please fill All textfield(s)')
        }
        else {


            var skey = DATABASE.ref('Message/Users').push();

            var obj = {
                id: skey.key,
                name: Name,
                email: Email,
                subject: Subject,
                message: Message
            }

            skey.set(obj)
            alert('Your Message send Successfully, we will contact you soon.')

        }
    }

    render() {
        return (

            <Container>

                <Content style={{ paddingVertical: 20, paddingHorizontal: 10 }}>

                    <Text style={{ alignSelf: 'center', fontSize: 35, fontWeight: 'bold', fontFamily: 'cursive' }}>Contact Us</Text>

                    <Form>

                        <Item floatingLabel last>
                            <Label >Your Name</Label>
                            <Input onChangeText={(txt) => this.setState({ Name: txt })} value={this.state.Name} />

                        </Item>


                        <Item floatingLabel last>
                            <Label >Your Email</Label>
                            <Input onChangeText={(txt) => this.setState({ Email: txt })} value={this.state.Email} />

                        </Item>


                        <Item floatingLabel last>
                            <Label >Subject</Label>
                            <Input keyboardType="email-address" onChangeText={(txt) => this.setState({ Subject: txt })} value={this.state.Subject} />

                        </Item>

                        <Text>{'\n'}</Text>

                        <Textarea style={{ margin: 10 }} rowSpan={5} bordered placeholder="Your Message" onChangeText={(txt) => this.setState({ Message: txt })} value={this.state.Message} />
                    </Form>

                    <Button block onPress={() => this.sendMessage()} style={{ width: 200, backgroundColor: '#28A745', alignSelf: 'center', marginTop: 10, marginBottom: 20 }}><Text>Send</Text></Button>



                </Content>
            </Container>

        )
    }
}

export default OwnerContact;
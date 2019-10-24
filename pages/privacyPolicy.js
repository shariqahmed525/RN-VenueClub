import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';

class PrivacyPolicy extends Component {
    render() {
        return(

            

        <Container>
        
            <Header style={{backgroundColor:'#28A745'}}>
 
            <Left/>
            <Body>
            <Title>Venue Club</Title>
            </Body>
            <Right/>
            </Header>
            
            <Content>
            <Text style={{alignSelf:"center", fontSize:50, fontFamily:'cursive'}}>Privacy Policy</Text>
            <Text style={{alignSelf:'center', fontSize:15, margin:10, fontFamily:'sans-serif' }}>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from www.venueclub.pk</Text>
            <Text style={{alignSelf:'flex-start', fontSize:40, marginLeft:10,fontFamily:'cursive'}}>Service</Text>
            <Text style={{alignSelf:'center', fontSize:15, marginLeft:10,fontFamily:'sans-serif'}}>Service is the www.venueclub.pk website operated by venueclub</Text>
            <Text style={{alignSelf:'flex-start', fontSize:40, marginLeft:10,fontFamily:'cursive'}}>Personal Data</Text>
            <Text style={{alignSelf:'flex-start', fontSize:15, marginLeft:10}}>Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</Text>
            <Text style={{alignSelf:'flex-start', fontSize:40, marginLeft:10,fontFamily:'cursive'}}>Types of Data Collected:</Text>
            <Text style={{alignSelf:'flex-start', fontSize:35, marginLeft:10,fontFamily:'cursive'}}>Tracking Cookies Data</Text>
            <Text style={{alignSelf:'flex-start', fontSize:15, marginLeft:10,fontFamily:'sans-serif'}}>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</Text>
            <Text style={{alignSelf:'flex-start', fontSize:35, marginLeft:10,fontFamily:'cursive'}}>Examples of Cookies we use</Text>
            <Text style={{alignSelf:'flex-start', fontSize:15, marginLeft:40,fontFamily:'sans-serif'}}>{'\n'}Session Cookies. We use Session Cookies to operate our Service.
            {'\n'}Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
            {'\n'}Security Cookies. We use Security Cookies for security purposes.</Text>
            <Text style={{alignSelf:'flex-start', fontSize:35, marginLeft:10,fontFamily:'cursive'}}>Security of Data</Text>
            <Text style={{alignSelf:'flex-start', fontSize:15, marginLeft:10,fontFamily:'sans-serif'}}>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</Text>
            <Text style={{alignSelf:'flex-start', fontSize:35, marginLeft:10,fontFamily:'cursive'}}>Children's Privacy</Text>
            <Text style={{alignSelf:'flex-start', fontSize:15, marginLeft:10,fontFamily:'sans-serif'}}>Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</Text>
            <Text style={{alignSelf:'flex-start', fontSize:35, marginLeft:10,fontFamily:'cursive'}}>Contact Us</Text>
            <Text style={{alignSelf:'flex-start', fontSize:15, marginLeft:10,fontFamily:'sans-serif'}}>If you have any questions about this Privacy Policy, please contact us</Text>
            <Text style={{alignSelf:'center', fontSize:35, marginLeft:10,fontFamily:'cursive'}}>Stay up to date !
            </Text>
            
            </Content>
            
            </Container>
        )

    }
}

export default PrivacyPolicy;
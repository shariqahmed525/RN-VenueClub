import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Content, DeckSwiper,Button,Card, CardItem, Left, Right,Thumbnail,Body,Title, Icon,List, Container,Header} from 'native-base';


const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../images/hall1.jpg'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../images/hall2.jpg'),
        },
        {
        text: 'Card Three',
        name: 'Three',
        image: require('../images/hall3.jpg'),
        }]

class UserViewTopDeals extends Component {

  constructor(props){
    super(props);
}
 

    render() {
        return(
            <Container>
            <Header style={{backgroundColor:'#28A745'}}>

            <Left>
            <Button iconLeft transparent onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='arrow-back' />
            
            </Button>
            </Left>
          
            <Body>
            <Title>Venue Club</Title>
            </Body>
            <Right/>
            </Header>
            <Content>
            <View style={{height:500}}>
            <Text>{'\n'}</Text>
            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20}}>Lovely Hall</Text>
            <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                  
                </CardItem >
                <Right style={{alignSelf:'flex-end',flexDirection:'row',margin:10}}>
                <Thumbnail square style={{width: 30, height: 25}} source={require('../images/chair.jpg')}/>
                <Text style={{fontSize:10}}> 36</Text>
                
                <Thumbnail square style={{width: 30, height: 28 }} source={require('../images/person.png')}/>
                <Text style={{fontSize:10}}>80</Text>
                </Right>
                <CardItem>
                
                </CardItem>
               
              </Card>
             
            } />
           
            
            </View>
            </Content>
           
            </Container>

            
        )
    }}

export default withNavigation(UserViewTopDeals);
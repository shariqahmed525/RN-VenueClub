import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Content, DeckSwiper, Card, CardItem, Left, Right,Thumbnail,Body, Icon,List, Container} from 'native-base';


const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../images/final_logo.png'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../images/final_logo.png'),
        },
        {
        text: 'Card Three',
        name: 'Three',
        image: require('../images/final_logo.png'),
        }]

class UserViewTopDeals extends Component {

  constructor(props){
    super(props);
}
 

    render() {
        return(
            <Container>
            <Content>
            <View style={{height:500}}>
            <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source= {item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            } />
            
            </View>
            </Content>
            <Container>
            
            <Text>Swipe Left and Right to see images</Text>
            </Container>
            </Container>

            
        )
    }}

export default withNavigation(UserViewTopDeals);
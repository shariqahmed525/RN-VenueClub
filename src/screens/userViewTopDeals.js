import { withNavigation } from 'react-navigation';
import React from 'react';
import {
  useNavigationParam
} from 'react-navigation-hooks';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Content, DeckSwiper, Card, CardItem, Left, Right, Thumbnail, Body, Title, Icon, List, Container, Header } from 'native-base';


const UserViewTopDeals = () => {
  const data = useNavigationParam('data');
  return (
    <Container>
      <Content>
        <View style={{ height: 500, marginTop: 20, paddingHorizontal: 7 }}>
          <Text style={styles.title}>{data ? data.hallName : "Hall Name"}</Text>
          {(data && data.picture && data.picture.length > 0) && (
            <DeckSwiper
              dataSource={data.picture}
              renderItem={item =>
                <Card style={{ elevation: 3 }}>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={{ uri: item }}
                    />
                  </CardItem >
                  <Right
                    style={styles.right}
                  >
                    <Thumbnail
                      square
                      style={styles.thumbnail}
                      source={require('../images/chair.jpg')}
                    />
                    <Text style={{ fontSize: 10 }}> 36</Text>
                    <Thumbnail
                      square
                      style={styles.thumbnail}
                      source={require('../images/person.png')}
                    />
                    <Text style={{ fontSize: 10 }}>80</Text>
                  </Right>
                  <CardItem>
                  </CardItem>
                </Card>
              } />
          )}
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  right: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    margin: 10,
  },
  thumbnail: {
    width: 30,
    height: 25
  },
})


export default withNavigation(UserViewTopDeals);
import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import store from '../store';
import {
  useNavigation,
  useNavigationParam
} from 'react-navigation-hooks';
import {
  Text,
  Button,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Spinner,
  Container,
  Input,
  Item,
} from 'native-base';
import { OfficialColor } from '../constants/colors';

let Search = () => {
  let { navigate } = useNavigation();
  let param = useNavigationParam('text');
  const [allHalls, setAllHalls] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [txt, setTxt] = useState("");

  useEffect(() => {
    setLoading(false);
    getStateFromStore();
    store.subscribe(getStateFromStore);
  }, []);

  useEffect(() => {
    const text = param ? param : "";
    setLoading(true);
    const result = allHalls.filter(item => {
      const lowerItem = item.hallName.toString().toLowerCase();
      const lowerText = text.toLowerCase();
      return lowerItem.indexOf(lowerText) !== -1;
    });
    setResults(text === "" ? [] : result);
    setTxt(text);
    setLoading(false);
  }, [param])

  const getStateFromStore = () => {
    const { reducer } = store.getState();
    const { allHalls } = reducer;
    setAllHalls(allHalls);
  }

  return (
    <Container>
      <Content>
        {txt !== "" && !loading && (
          <Text style={{ ...styles.title, color: results.length > 0 ? "#000" : "red" }}>
            {results.length > 0 ? "Search Result" : "No Result Found"}
          </Text>
        )}
        {loading ? (
          <View style={styles.loader}>
            <Spinner color={OfficialColor} />
          </View>
        ) : (
            results.length > 0 && (
              <Content style={{ paddingHorizontal: 7, }}>
                {results.map((val, ind) => {
                  return (
                    <TouchableOpacity
                      key={ind}
                      activeOpacity={.9}
                      style={{ paddingVertical: 10 }}
                      onPress={() => navigate('UserViewTopDeals', {
                        data: val
                      })}
                    >
                      <Card>
                        <CardItem>
                          <Left>
                            <Body>
                              <Text>
                                {val.hallName}
                              </Text>
                              <Text note>
                                {val.address}
                              </Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image
                            source={{ uri: val.picture[0] }}
                            style={{ height: 200, width: null, flex: 1 }}
                          />
                        </CardItem>
                        <CardItem style={styles.cardBottom}>
                          <Button
                            block
                            onPress={() => navigate('Register', {
                              data: val
                            })}
                            style={{ backgroundColor: OfficialColor, width: "100%" }}
                          >
                            <Text>Register Hall</Text>
                          </Button>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  )
                })}
              </Content>
            )
          )}
      </Content>
    </Container>
  )
}

Search.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: (
      <Item style={{ width: "90%" }}>
        <Input
          style={{
            color: "#fff",
          }}
          onChangeText={text => navigation.setParams({ text })}
          placeholder="Search Venues"
          placeholderTextColor="#d5d5d5"
        />
      </Item>
    ),
    headerTitleStyle: {
      textAlign: 'center',
      color: "#fff",
    },
    headerTintColor: "#fff",
    headerTitleContainerStyle: {
      justifyContent: 'flex-start',
    },
    headerStyle: {
      backgroundColor: OfficialColor,
    },
  }
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
  loader: {
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    width: "100%",
  },
})


export default Search;
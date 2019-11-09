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
import {
  Form,
  Item,
  Icon,
  Text,
  Label,
  Input,
  Picker,
  Button,
  Content,
  Spinner,
  Textarea,
  Container,
} from 'native-base';
import {
  OfficialColor
} from '../constants/colors';
import uuid from 'uuid';
import ImagePicker from 'react-native-image-crop-picker';
import store from '../store';
import { DATABASE, STORAGE } from '../config/firebase';

const RenderImage = props => {
  return (
    <View
      style={styles.selectedPhotoWrapper}
    >
      <TouchableOpacity
        style={styles.cancelIconWrapper}
        onPress={props.onCancelPress}
      >
        <Image
          style={{ width: 10, height: 10 }}
          source={require('../images/multiply.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.selectedPhoto}
        source={{ uri: props.image }}
      />
    </View>
  )
}

let OwnerRegistration = () => {
  const [price, setPrice] = useState('');
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState('');
  const [capacity, setCapacity] = useState('');
  const [hallName, setHallName] = useState('');
  const [venueType, setVenueType] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [description, setDescription] = useState('');
  const [venueLocation, setVenueLocation] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const register = () => {
    if (!price.trim() || !address.trim() || !capacity.trim() || !hallName.trim() || !venueType || !description.trim() || !venueLocation || selectedPhotos.length < 1) {
      alert("all fields are required");
      return;
    }
    setDisabled(true);
    const { uid } = user;
    const key = DATABASE.ref('allHallData').child(uid).push().key;
    uploadPhotos(uid, key);
  }

  const saveInDB = (images, uid, key) => {
    DATABASE.ref('allHallData').child(uid).child(key).set({
      price,
      address,
      capacity,
      hallName,
      venueType,
      venueLocation,
      picture: images,
      description,
    }).then(() => {
      setPrice("");
      setAddress("");
      setHallName("");
      setCapacity("");
      setVenueType("");
      setDescription("");
      setDisabled(false);
      setVenueLocation("");
      setSelectedPhotos([]);
      alert("Data add successfully!");
    }).catch(err => {
      console.log(err, " error in add hall data");
    })
  }

  const uploadPhotos = async (uid, key) => {
    let arry = [];
    let length = selectedPhotos.length;
    for (let i = 0; i < length; i++) {
      const ext = selectedPhotos[i].path.split('.').pop();
      const filename = `${uuid()}.${ext}`;
      const destinationPath = `${uid}/${key}/${filename}`;
      try {
        await STORAGE
          .ref(destinationPath)
          .putFile(selectedPhotos[i].path);
        STORAGE
          .ref(destinationPath)
          .getDownloadURL()
          .then(url => {
            // arry.push({
            //   url,
            //   filename,
            //   ...selectedPhotos[i],
            // })
            arry.push(url);
            console.log(arry);
            (length === arry.length) && saveInDB(arry, uid, key);
          })
      }
      catch (err) {
        console.log("error in image upload");
      }
    }
  }

  useEffect(() => {
    const { reducer } = store.getState();
    const { user } = reducer;
    setUser(user);
  }, [])

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: "photo",
      maxFiles: 5,
    }).then((photo) => {
      const newImageArr = photo.length > 5 ? photo.slice(0, 5) : photo;
      setSelectedPhotos(newImageArr);
    }).catch(err => {
      console.log(err.message);
    });
  }

  return (
    <Container>
      <Content padder style={styles.conatiner}>
        {/* <Text style={styles.title}>
          Registration Form
        </Text> */}
        <Form>
          <Item floatingLabel last>
            <Label >Hall Name</Label>
            <Input
              value={hallName}
              disabled={disabled}
              onChangeText={(txt) => setHallName(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Address</Label>
            <Input
              value={address}
              disabled={disabled}
              onChangeText={(txt) => setAddress(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label >Capacity</Label>
            <Input
              value={capacity}
              disabled={disabled}
              onChangeText={(txt) => setCapacity(txt)}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Price</Label>
            <Input
              value={price}
              disabled={disabled}
              keyboardType="number-pad"
              onChangeText={(txt) => setPrice(txt)}
            />
          </Item>
          <Item disabled={disabled} style={{ marginTop: 15 }} picker>
            <Picker
              mode="dropdown"
              disabled={disabled}
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your Account"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={venueType}
              onValueChange={(value) => setVenueType(value)}
            >
              <Picker.Item label="Select Venue Type" />
              <Picker.Item label="Hall" value="Hall" />
              <Picker.Item label="Lawn" value="Lawn" />
              <Picker.Item label="Banquet" value="Banquet" />
            </Picker>
          </Item>
          <Item disabled={disabled} style={{ marginTop: 15 }} picker>
            <Picker
              mode="dropdown"
              disabled={disabled}
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your Account"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={venueLocation}
              onValueChange={(value) => setVenueLocation(value)}
            >
              <Picker.Item label="Select Venue Location" />
              <Picker.Item label="Nazimabad" value="Nazimabad" />
              <Picker.Item label="North Nazimabad" value="North Nazimabad" />
              <Picker.Item label="Gulshan" value="Gulshan" />
            </Picker>
          </Item>
          <Textarea
            bordered
            rowSpan={5}
            value={description}
            disabled={disabled}
            placeholder="Add Description"
            style={{ margin: 5, marginTop: 20 }}
            onChangeText={(txt) => setDescription(txt)}
          />
          <View style={styles.imagesWrapper}>
            {selectedPhotos.map((v, i) => {
              return (
                <RenderImage
                  key={i}
                  image={v.path}
                  onCancelPress={() => {
                    selectedPhotos.splice(i, 1);
                    setSelectedPhotos([...selectedPhotos])
                  }}
                />
              )
            })}
          </View>
        </Form>
        {disabled ? (
          <View style={{ marginBottom: 10 }}>
            <Spinner color='green' />
          </View>
        ) : (
            <>
              <Button
                block
                disabled={disabled}
                style={styles.picker}
                onPress={handleImagePicker}
              >
                <Text>Choose File</Text>
              </Button>
              <Button
                block
                onPress={register}
                disabled={disabled}
                style={styles.register}
              >
                <Text>Register</Text>
              </Button>
            </>
          )}
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 7
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  picker: {
    width: 200,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#d3d3d3',
  },
  register: {
    width: 200,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#28A745',
  },
  selectedPhotoWrapper: {
    width: 90,
    height: 90,
    margin: 5,
  },
  selectedPhoto: {
    width: 90,
    height: 90,
  },
  cancelIconWrapper: {
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    zIndex: 10000,
    alignItems: 'center',
    position: "absolute",
    justifyContent: "center",
  },
  imagesWrapper: {
    flex: 1,
    flexWrap: "wrap",
    marginVertical: 10,
    flexDirection: 'row',
  },
})

OwnerRegistration.navigationOptions = () => ({
  title: "ADD VENUE",
  headerTitleStyle: {
    textAlign: 'center',
    color: "#fff",
  },
  headerTintColor: "#fff",
  headerTitleContainerStyle: {
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: OfficialColor,
  },
  headerRight: <></>,
});

export default OwnerRegistration;
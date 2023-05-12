import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;

  const openMap = () => {
    Linking.openURL(place.map);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={openMap}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.primary,
              paddingVertical: 10,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Icon name="map" size={28} color={COLORS.white} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Open Map
            </Text>
          </View>
        </TouchableOpacity>
      </View>
</SafeAreaView>
);
};

const style = StyleSheet.create({
header: {
marginTop: 50,
flexDirection: 'row',
justifyContent: 'space-between',
paddingHorizontal: 20,
},
imageDetails: {
flex: 1,
justifyContent: 'flex-end',
marginBottom: 30,
marginHorizontal: 20,
},
detailsContainer: {
flex: 0.6,
backgroundColor: COLORS.white,
marginTop: -40,
borderTopLeftRadius: 40,
borderTopRightRadius: 40,
paddingHorizontal: 20,
paddingTop: 40,
},
iconContainer: {
backgroundColor: COLORS.light,
width: 50,
height: 50,
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center',
marginTop: -25,
},
footer: {
height: 70,
backgroundColor: COLORS.primary,
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
paddingHorizontal: 20,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
},
bookNowBtn: {
width: 130,
height: 50,
backgroundColor: COLORS.orange,
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
},
});

export default DetailsScreen;





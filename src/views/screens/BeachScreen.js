import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import places from '../../consts/places';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const categoryIcons = [
    <Icon name="camera-front" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="mountains" size={25} color={COLORS.primary} />,
    <Icon name="phone" size={25} color={COLORS.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({place}) => {
  const cardWidth = (width - 50) / 2; // 50 = 2 * (card margin + padding)
  const cardHeight = cardWidth * 1.2; // maintain 1.2 aspect ratio

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', place)}>
      <ImageBackground style={[style.cardImage, {width: cardWidth, height: cardHeight}]} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>
              {place.location}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Explore the</Text>
            <Text style={style.headerTitle}>beautiful places</Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{color: COLORS.grey}}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}>Places</Text>
        <View>
<ScrollView style={{flexGrow: 1}}>
<FlatList
  contentContainerStyle={{paddingLeft: 20}}
  horizontal={false}
  showsVerticalScrollIndicator={false}
  numColumns={2}
  data={places.filter(place => place.id === 2).slice(0, 2)}
  keyExtractor={item => item.id.toString()}
  renderItem={({item}) => <Card place={item} />}
/>
</ScrollView>
</View>
</ScrollView>
</SafeAreaView>
);
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  cardImage: {
    height: 220,
    width: width / 2 - 30, // adjust card width to leave space between them
    marginRight: 20,
    marginBottom: 20, // add margin to create space between cards
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
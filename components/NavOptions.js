import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { FlatList, Text, Touchable, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  }
]

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    // https://reactnative.dev/docs/flatlist
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem = {({ item }) => (
        // https://reactnative.dev/docs/touchableopacity
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 ml-1 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-3 ml-3 text-lg font-semibold`}>{item.title}</Text>
            <Icon type='antdesign' name='arrowright' color='white' style={tw`p-2 bg-black rounded-full w-10 mt-3 ml-3`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
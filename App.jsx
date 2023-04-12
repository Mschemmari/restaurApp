import React, { useState, useEffect } from 'react';
import { useSearch } from './lib/hooks/useSearch'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { SplashScreen } from './lib/components/SplashScreen'
import restaurants from './lib/mocks/results.json'
// const API_KEY = 'AIzaSyBuwvMIUfuI5y4RBYDE1W2lvgbsgR0jJV4'
// const getIcon = ({ name, icon_mask_base_uri, icon_background_color, }) =>
//   `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=skog%20haus&inputtype=textquery&fields=${name},${icon_mask_base_uri},${icon_background_color}&key=${API_KEY}`
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const App = () => {
  const [loading, setLoading] = useState(true);
  const [search, updateSearch, error] = useSearch()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  const handleChange = (search) => {
    // const newQuery = search
    console.log(search, 'aaaaa');
    // if (newQuery.startsWith(' ')) return
    updateSearch(search)
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading
        ? <SplashScreen />
        : <>
          <Text style={styles.sectionTitle}>RestaurApp</Text>
          <ScrollView>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.input}
                placeholder='Don Julio, El preferido, Kansas...'
                value={search}
                placeholderTextColor='white'
                onChange={handleChange}
                name='search'
              />
              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Buscar</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.itemContainer}>
              {restaurants.results.map(rest =>
                <>
                  <View style={styles.item} >
                    <Text style={styles.itemText}>{rest.name}</Text>
                    <Text style={styles.itemText}>{rest.formatted_address}</Text>
                  </View>
                  {/* {console.log(getIcon(
                    rest.icon,
                    rest.icon_background_color,
                    rest.icon_mask_base_uri,
                    rest.name,
                  ))} */}
                  {/* <Image
                    style={styles.icon}
                    source={{
                      uri: getIcon(
                        rest.icon,
                        rest.icon_background_color,
                        rest.icon_mask_base_uri,
                        rest.name,
                      )
                    }}
                  /> */}

                </>
              )}
            </View>
          </ScrollView>
        </>
      }
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202b38',
    height: windowHeight,
    width: windowWidth,

  },
  sectionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 15,
    gap: 10,
  },

  sectionTitle: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 35,
    fontWeight: '600',
    color: 'white'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#0c151c',
    padding: 10,
    color: 'white',
    fontSize: 15,
    borderRadius: 10,
    minWidth: 240,
  },
  button: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: 'black',
    width: 100,
  },

  //item styles
  itemContainer: {
    marginHorizontal: 20,
  },
  item: {
    marginVertical: 10
  },
  icon: {
    width: 50,
    height: 50
  },
  itemText: {
    color: 'white',
  },

});
export default App;

import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import images from '../theme/images'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SplashScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={images.SPLASH_SCREEN} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>RestaurApp</Text>
                <Text style={styles.text}>Loading</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#000000c0',
    },
});

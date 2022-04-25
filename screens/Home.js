import React from 'react'
import {View, Button, Text} from 'react-native'

const Home  = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black'}}>Home View</Text>
            <Button title='Click' onPress={() => navigation.navigate('Details')}></Button>
        </View>
    )
}

export default Home
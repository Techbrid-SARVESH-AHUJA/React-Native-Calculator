import React from 'react'
import {View, Button, Text} from 'react-native'

const Details  = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black'}}>Details View</Text>
            <Button title='Back' onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

export default Details
import React from 'react'
import {View, Button, Text} from 'react-native'

// const ChangeBackground  = ({ navigation }) => {
//     return(
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text style={{color: 'black'}}>Details View</Text>
//             <Button title='Back' onPress={() => navigation.navigate('Calculator_Screen')}></Button>
//         </View>
//     )
// }

class ChangeBackground extends React.Component { 
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1}}></View>
                <Button onPress={() => this.props.navigation.navigate('Calculator_Screen')} title="Done"></Button>
                <View style={{flex: 1}}></View>
            </View>
        )
    }
}
export default ChangeBackground
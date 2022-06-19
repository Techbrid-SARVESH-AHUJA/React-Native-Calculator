import React from 'react';
import { Text, View, Pressable, ImageBackground} from "react-native";

const bgimg = require('../assets/001.webp');

class Main extends React.Component { 
    componentDidMount () {
        let self = this;
        setTimeout(() => {
            self.props.navigation.replace("Calculator_Screen"), {prop: 'value'};
        }, 0.7)
    }

    render() {
        return(
            <ImageBackground source={bgimg} style={[{flex: 1}]}>

                <View style={[{flex: 1}]}></View> 

                <View style={{flexDirection: 'row'}}>

                    <View style={[{flex: 1}]}></View> 

                    <Pressable style={{backgroundColor: 'rgba(175, 30, 70, 0.6)', height: 85, aspectRatio: 1/1, borderWidth: 2, borderColor: 'black', borderTopLeftRadius: 40, borderTopWidth: 6, borderLeftWidth: 6}}>
                        <Text style={{fontSize: 50, aspectRatio: 1/1, textAlign: 'center', textAlignVertical: 'center'}}>+</Text>
                    </Pressable>

                    <Pressable style={{backgroundColor: 'rgba(175, 30, 70, 0.6)', height: 85, aspectRatio: 1/1, borderWidth: 2, borderColor: 'black', borderTopRightRadius: 40, borderTopWidth: 6, borderRightWidth: 6}}>
                        <Text style={{fontSize: 50, aspectRatio: 1/1, textAlign: 'center', textAlignVertical: 'center'}}>-</Text>
                    </Pressable>

                    <View style={[{flex: 1}]}></View> 

                </View>

                <View style={{flexDirection: 'row'}}>

                    <View style={[{flex: 1}]}></View> 

                    <Pressable style={{backgroundColor: 'rgba(175, 30, 70, 0.6)', height: 85, aspectRatio: 1/1, borderWidth: 2, borderColor: 'black', borderBottomLeftRadius: 40, borderBottomWidth: 6, borderLeftWidth: 6}}>
                        <Text style={{fontSize: 50, aspectRatio: 1/1, textAlign: 'center', textAlignVertical: 'center'}}>×</Text>
                    </Pressable>

                    <Pressable style={{backgroundColor: 'rgba(175, 200, 70, 0.6)', height: 85, aspectRatio: 1/1, borderWidth: 2, borderColor: 'black', borderBottomRightRadius: 40, borderBottomWidth: 6, borderRightWidth: 6}}>
                        <Text style={{fontSize: 50, aspectRatio: 1/1, textAlign: 'center', textAlignVertical: 'center'}}>=</Text>
                    </Pressable>

                    <View style={[{flex: 1}]}></View> 

                </View>

                <View style={[{flex: 1}]}></View> 

            </ImageBackground>
        );
    }
};

export default Main
import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground, TextInput, ScrollView, ToastAndroid, Keyboard, Button, Image, Dimensions} from "react-native";
// import {StackNavigator,} from 'react-navigation';
// import { Icon } from 'react-native-elements'
// import { StackNavigator } from 'react-navigation';

// global current_equation
// global.currect_equation = '566621221112 × 22 × 3 - + 4316549 × 1326459 × 16551994 + 978645123 ÷ 12654 + 654899645444';
// global.currect_equation = '32+33-65×32÷6549+312654×22+24÷321-658×3256÷326156498+65456312×325555÷3×564589-654888';
// global.currect_equation = '32 + 33 - 65 × 32 ÷ 6549 + 312654 × 22 + 24 ÷ 321 - 658 × 3256 ÷ 326156498 + 65456312 × 325555 ÷ 3 × 564589 - 654888';
// global.currect_equation = '30 + 2 + 3456 + 9987'
global.currect_equation = '';
global.currect_equation1 = '';
global.prev_currect_equation = "";

// import Apps from './Appico'
// import MainActivity from './MainActivity' ;

// const va = "hello"

const bgimg = require('../assets/mybg.webp');
// const bgimg = require('../assets/my')
// const bgimg = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG/1200px-Salto_del_Angel-Canaima-Venezuela08.JPG" };
const img = require('../assets/mybg1.webp');
const img1 = require('../assets/mybg.webp');
const imgico = require('../assets/imageicon.png');

const windowHeight = Dimensions.get('window').height;

global.h = "0"
global.he = 0
global.bfr = "0"
global.aft = "0"
global.lenbfr = "0"
global.lenaft = "0"
global.before = ""
global.after = ""

global.equal_pressed = "0"

class Calculator extends React.Component { 
    constructor(){
        super()
        this.state = { 
            mainval: "" ,
            selection: {start: global.currect_equation.length, end: global.currect_equation.length},
        }
    }

    append_value(prop){
        global.currect_equation1 = global.currect_equation
        const gbl = global.currect_equation1.split("")

        console.log(gbl.slice(0, this.state.selection.start))
        console.log(gbl.slice(this.state.selection.end))

        global.bfr = gbl.slice(0, this.state.selection.start)
        global.aft = gbl.slice(this.state.selection.end)

        global.lenbfr = bfr.length;
        global.before = ""
        for (let i=0; i<=global.lenbfr-1; i++){
            global.before = global.before+global.bfr[i]
        }

        global.lenaft = aft.length;
        global.after = ""
        for (let i=0; i<=global.lenaft-1; i++){
            global.after = global.after+global.aft[i]
        }

        console.log(global.before)
        console.log(global.after)

        if (global.before == []){
            console.log('blank before')
            if (prop == " + " || prop == " - " || prop == " × " || prop == " ÷ "){
                ToastAndroid.show("Cannot add an operator in starting", ToastAndroid.SHORT);
            }
            else{
                global.currect_equation = global.before + prop + global.after
                console.log(global.currect_equation)

                if (prop == " + " || prop == " - " || prop == " × " || prop == " ÷ "){
                    this.state.selection.start = this.state.selection.start+2
                    this.state.selection.end = this.state.selection.end+2
                }
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                
                this.setState({ mainval: global.currect_equation })
            }
        }
        else{
            global.currect_equation = global.before + prop + global.after
            console.log(global.currect_equation)

            if (prop == " + " || prop == " - " || prop == " × " || prop == " ÷ "){
                this.state.selection.start = this.state.selection.start+2
                this.state.selection.end = this.state.selection.end+2
            }
            this.state.selection.start = this.state.selection.start+1
            this.state.selection.end = this.state.selection.end+1
            
            this.setState({ mainval: global.currect_equation })
        }




        // global.currect_equation1 = global.currect_equation
        // const gbl = global.currect_equation1.split("")
        // // console.log("gbl last: " + gbl[gbl.length - 0])
        // console.log(gbl.slice(0, this.state.selection.start))
        // console.log(gbl.slice(this.state.selection.end))
        // global.bfr = gbl.slice(0, this.state.selection.start)
        // global.aft = gbl.slice(this.state.selection.end)
        // console.log()
        // if (gbl[gbl.length - 1] == "+" || gbl[gbl.length - 1] == "-" || gbl[gbl.length - 1] == "×" || gbl[gbl.length - 1] == "÷"){
        //     if (prop == " + " || prop == " - " || prop == " × " || prop == " ÷ "){
        //         // console.warn('same operator used')
        //         // global.currect_equation = global.currect_equation+"p"
        //         prop = ""
        //     }
        // }
        // global.currect_equation = global.currect_equation+prop
        // global.lenbfr = bfr.length;
        // global.before = ""
        // for (let i=0; i<=global.lenbfr-1; i++){
        //     global.before = global.before+global.bfr[i]
        // }

        // global.lenaft = aft.length;
        // global.after = ""
        // for (let i=0; i<=global.lenaft-1; i++){
        //     global.after = global.after+global.aft[i]
        // }
    }

    validate_value(entered_num){
        if (global.equal_pressed == "1"){
            global.equal_pressed = "0"
        }
        
        global.currect_equation1 = global.currect_equation
        const gbl = global.currect_equation1.split("")

        global.bfr = gbl.slice(0, this.state.selection.start)
        global.aft = gbl.slice(this.state.selection.end)
        
        global.lenbfr = bfr.length;
        global.before = ""
        for (let i=0; i<=global.lenbfr-1; i++){
            global.before = global.before+global.bfr[i]
        }

        global.lenaft = aft.length;
        global.after = ""
        for (let i=0; i<=global.lenaft-1; i++){
            global.after = global.after+global.aft[i]
        }

        // const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "", "undefined"]
        const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const operators = ["+", "-", "×", "÷"]

        console.log("global.before")
        console.log(global.bfr)
        console.log("global.after")
        console.log(global.aft)
        console.log("global.before[-1]")
        console.log(global.bfr.slice(-1).toString())
        console.log("global.aft.slice(0).toString()")
        console.log(global.aft[0])
        console.log("type")
        console.log(typeof global.aft[0])

        if (nums.includes(global.bfr.slice(-1).toString()) && global.aft[0] == " "){
            console.warn("case 1: num before, blank after")
            if (nums.includes(entered_num)){
                if (global.bfr.slice(-1).toString() ==  "0"){
                    this.validate_backspace()
                    this.append_value(entered_num)
                }
                else{
                    this.append_value(entered_num)
                }
            }
            else if (entered_num == "."){
                this.append_value(entered_num)
            }
            else{
                this.state.selection.start = this.state.selection.start+3
                this.state.selection.end = this.state.selection.end+3
                this.validate_backspace()
                this.validate_value(entered_num)
            }
        }
        else if (global.bfr.slice(-1).toString() == " " && operators.includes(global.aft[0])){
            console.warn("case 2: blank before, operator after")
            if (nums.includes(entered_num)){
                this.state.selection.start = this.state.selection.start-1
                this.state.selection.end = this.state.selection.end-1
                this.append_value(entered_num)
            }
            else if (entered_num == "."){
                this.state.selection.start = this.state.selection.start-1
                this.state.selection.end = this.state.selection.end-1
                this.append_value(entered_num)
            }
            else{
                this.state.selection.start = this.state.selection.start+2
                this.state.selection.end = this.state.selection.end+2
                this.validate_backspace()
                this.validate_value(entered_num)
            }
        }
        else if (operators.includes(global.bfr.slice(-1).toString()) && global.aft[0] == " "){
            console.warn("case 3: operator before, blank after")
            if (nums.includes(entered_num)){
                if (entered_num == "0"){
                    // this.state.selection.start = this.state.selection.start+1
                    // this.state.selection.end = this.state.selection.end+1
                    this.append_value("")
                }
                else{
                    this.state.selection.start = this.state.selection.start+1
                    this.state.selection.end = this.state.selection.end+1
                    this.append_value(entered_num)
                }
            }
            else if (entered_num == "."){
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                this.append_value("0.")
                // this.state.selection.start = this.state.selection.start+1
                // this.state.selection.end = this.state.selection.end+1
                this.append_value("")
                // console.log('here')
            }
            else{
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                this.validate_backspace()
                this.validate_value(entered_num)
            }
        }
        else if (global.bfr.slice(-1).toString() == " " && nums.includes(global.aft[0])){
            console.warn("case 4: blank before, num after")
            if (nums.includes(entered_num)){
                if (entered_num == "0"){}
                else{
                    this.append_value(entered_num)
                }
            }
            else if (entered_num == "."){
                this.append_value("0.")
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
            }
            else{
                this.state.selection.start = this.state.selection.start+0
                this.state.selection.end = this.state.selection.end+0
                this.validate_backspace()
                this.validate_value(entered_num)
            }
        }
        else if (global.bfr.slice(-1).toString() == " " && operators.includes(global.bfr[global.bfr.length - 2])){
            console.warn("case 5: blank before, operator before before")
            if (nums.includes(entered_num)){
                this.append_value(entered_num)
            }
            else if (entered_num == "."){
                this.append_value("0.")
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
            }
            else{
                this.state.selection.start = this.state.selection.start+0
                this.state.selection.end = this.state.selection.end+0
                this.validate_backspace()
                this.validate_value(entered_num)
            }
        }
        else if (global.bfr.length == 1 && global.bfr.slice(-1).toString() == "0"){
            console.warn("case 6: 0 before, cursor 2")
            if (entered_num == "." || entered_num == " + " || entered_num == " - " || entered_num == " × " || entered_num == " ÷ "){
                this.append_value(entered_num)
            }
            else{
                if (global.aft[0] == "."){
                    this.validate_backspace()
                    this.append_value(entered_num+".")
                }
                else{
                    this.validate_backspace()
                    this.append_value(entered_num)
                }
            }
        }
        else if (global.bfr.slice(-1).toString() == "0" && global.bfr[global.bfr.length - 2] == " "){
            console.warn("case 7: 0 before, blank before before")
            if (entered_num == "."){
                this.append_value(entered_num)
            }
            else if (entered_num == " + " || entered_num == " - " || entered_num == " × " || entered_num == " ÷ "){
                this.append_value(entered_num)
            }
            else{
                if (global.aft[0] == "."){
                    this.validate_backspace()
                    this.append_value(entered_num+".")
                }
                else{
                    this.validate_backspace()
                    this.append_value(entered_num)
                }
            }
        }
        else if (global.bfr.length === 0 &&  nums.includes(global.aft[0])){
            console.warn("case 8: null before, num after")
            if (entered_num == "0"){ }
            else if (entered_num == "."){
                this.append_value("0.")
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                // this.append_value("")
            }
            else {
                this.append_value(entered_num)
            }
        }
        else if (global.bfr.length === 0){
            console.warn("case 9: null before")
            if (entered_num == "."){
                this.append_value("0.")
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                this.append_value("")
            }
            else{
                this.append_value(entered_num)
            }
        }
        // else if (){
        //     console.warn("case 9: operator before, blank after")
        // }
        else{ 
            this.append_value(entered_num)
        }

        

    }

    clear_value(prop) {
        global.currect_equation = ''
        this.state.mainval = ''

        console.log(global.currect_equation)
        console.log(prop)

        this.setState({ mainval: this.state.mainval })
    }

    total_value(prop) {
        for (let i = 0; i<3; i++) {
            try {
                this.state.mainval = this.state.mainval.replace('×', '*')
                this.state.mainval = this.state.mainval.replace('÷', '/')

                console.log(this.state.mainval)
                console.log(eval(this.state.mainval))

                global.currect_equation = eval(this.state.mainval)

                const currect_equation_string = global.currect_equation.toString()
                global.currect_equation = currect_equation_string

                this.state.mainval = currect_equation_string

                console.log("currect_equation_string: " + currect_equation_string)

                this.setState({ mainval: this.state.mainval })
                // global.prev_currect_equation = "= "

                this.state.selection.start = global.currect_equation.length
                this.state.selection.end = global.currect_equation.length

                global.equal_pressed = "1"
            }
            catch(err){
                console.log(err)
            }
        }
    }

    evaluation_prev(){
        try {
            if (global.equal_pressed == "0"){
                this.state.mainval = this.state.mainval.replace('×', '*')
                this.state.mainval = this.state.mainval.replace('÷', '/')

                // console.log(this.state.mainval)
                // console.log(eval(this.state.mainval))

                global.prev_currect_equation = eval(this.state.mainval)

                try {
                    const prev_currect_equation_string = global.prev_currect_equation.toString()
                    global.prev_currect_equation = "= " + prev_currect_equation_string
                } catch (error) {}


            }
            else{
                console.log("eval prev blank")
                global.prev_currect_equation = ""
                // global.prev_currect_equation = "h"
                // global.equal_pressed = "0"
            }
        }
        catch (error) {
            console.warn(error)
            global.prev_currect_equation = ""
        }
        // global.prev_currect_equation = "hello1"
        // this.setState({ prevval: global.prev_currect_equation })
        console.log("eval prev")
    }

    validate_backspace(prop){
        if (global.equal_pressed == "1"){
            // console.log("vb")
            global.equal_pressed = "0"
        }
        
        global.currect_equation1 = global.currect_equation
        const gbl = global.currect_equation1.split("")

        console.log(gbl.slice(0, this.state.selection.start))
        console.log(gbl.slice(this.state.selection.end))

        global.bfr = gbl.slice(0, this.state.selection.start)
        global.aft = gbl.slice(this.state.selection.end)

        global.lenbfr = bfr.length;
        global.before = ""
        for (let i=0; i<=global.lenbfr-1; i++){
            global.before = global.before+global.bfr[i]
        }

        global.lenaft = aft.length;
        global.after = ""
        for (let i=0; i<=global.lenaft-1; i++){
            global.after = global.after+global.aft[i]
        }

        const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const operators = ["+", "-", "×", "÷"]

        if (global.bfr.slice(-1).toString() == " " && operators.includes(global.aft[0])){
            // console.warn("here")
            this.state.selection.start = this.state.selection.start-1
            this.state.selection.end = this.state.selection.end-1
            this.backspace("")
        }
        else if(operators.includes(global.bfr.slice(-1).toString()) && global.aft[0] == " "){
            this.state.selection.start = this.state.selection.start+1
            this.state.selection.end = this.state.selection.end+1
            this.backspace("")
            this.backspace("")
            this.backspace("")
        }
        else if (global.bfr.slice(-1).toString() == " " && nums.includes(global.aft[0])){
            this.backspace("")
            this.backspace("")
            this.backspace("")
        }
        else if (global.bfr.slice(-1).toString() == " " && operators.includes(global.bfr[global.bfr.length - 2])){
            this.backspace("")
            this.backspace("")
            this.backspace("")
        }
        else if (global.bfr.slice(-1).toString() == "." && global.bfr[global.bfr.length - 2] == "0"){
            console.log("this case")
            this.backspace("")
            this.backspace("")
        }
        else if (nums.includes(global.bfr.slice(-1).toString()) && global.aft[0] == "."){
            if (nums.includes(global.bfr[global.bfr.length - 2])){
                this.backspace("")
            }
            else{
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                this.backspace("")
                this.backspace("")
            }
        }
        else{
            this.backspace("")
        }
        console.warn(global.aft[0])
    }

    backspace(prop){
        try{
            global.currect_equation1 = global.currect_equation
            const gbl = global.currect_equation1.split("")

            console.log(gbl.slice(0, this.state.selection.start))
            console.log(gbl.slice(this.state.selection.end))

            global.bfr = gbl.slice(0, this.state.selection.start)
            global.aft = gbl.slice(this.state.selection.end)

            global.lenbfr = bfr.length;
            global.before = ""
            for (let i=0; i<=global.lenbfr-1; i++){
                global.before = global.before+global.bfr[i]
            }

            global.lenaft = aft.length;
            global.after = ""
            for (let i=0; i<=global.lenaft-1; i++){
                global.after = global.after+global.aft[i]
            }

            console.log("back: ")
            let str = global.before
            str = str.substring(0, str.length - 1)
            console.log(str)

            global.currect_equation = str + global.after
            this.setState({ mainval: global.currect_equation })

            console.log("current: ")
            console.log(global.currect_equation)

            if (this.state.selection.start == 0){
                this.state.selection.start = this.state.selection.start
            }
            else{
                this.state.selection.start = this.state.selection.start-1
            }
            
            if (this.state.selection.end == 0){
                this.state.selection.end = this.state.selection.end
            }
            else{
                this.state.selection.end = this.state.selection.end-1
            }

        }
        catch (err){
            console.log(err)
        }
    }
    
    find_dimesions(layout){
        const {x, y, width, height} = layout;
        console.log(height);
        global.h = height;
        global.w = width;
        global.he = global.h*58;
        global.he = global.he/100;
        this.forceUpdate();
    }

    check_operators(){
        // console.log('myfnc')
        console.log("global.currect_equation")
        console.log("2 here")
        console.log(global.currect_equation.split(""))

        const crr = global.currect_equation.split("")

        if (crr[0] == " " && crr[2] == " "){
            if (crr[1] == "+" || crr[1] == "-" || crr[1] == "×" || crr[1] == "÷"){
                console.log('opt at start')
                global.currect_equation = global.currect_equation.slice(3)
            }
        }
        

        // if (global.equal_pressed == "1"){
        //     global.prev_currect_equation = ""
        // }
    }

    check_zero(){
        // if (global.equal_pressed == "1"){
        //     global.equal_pressed = "0"
        // }
        
        global.currect_equation1 = global.currect_equation
        const gbl = global.currect_equation1.split("")

        global.bfr = gbl.slice(0, this.state.selection.start)
        global.aft = gbl.slice(this.state.selection.end)
        
        global.lenbfr = bfr.length;
        global.before = ""
        for (let i=0; i<=global.lenbfr-1; i++){
            global.before = global.before+global.bfr[i]
        }

        global.lenaft = aft.length;
        global.after = ""
        for (let i=0; i<=global.lenaft-1; i++){
            global.after = global.after+global.aft[i]
        }

        const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const operators = ["+", "-", "×", "÷"]

        if (global.bfr.slice(-1).toString() == "0" && global.bfr[global.bfr.length - 2] == " " &&  nums.includes(global.aft[0])){
            this.validate_backspace()
        }
    }

    render() {
        return(
            <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }} style={[styles.main, {}]}>

            {/* <Button title="Go to Profile Activity" onPress={() => this.props.navigation.navigate('Apps')} /> */}
            {/* <Text> */}
            {/* <Icon style={{ alignItems: "center", justifyContent: "center", textAlign: "right" }} name="keyboard-arrow-down" type="MaterialIcons" /> */}
            {/* <Icon name='rowing'></Icon>
            </Text> */}
            
            {/* <Text>{va}</Text> */}

                <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>

                    <View style={[{ flex: 1, flexWrap: 'nowrap'}]}>

                        {/* spacing */}
                        <View style={[{flex: 1}]}></View> 


                        {/* main text view set starts here */}
                            <View style={[{flexDirection: 'row', backgroundColor: 'rgba(135, 160, 190, 0.4)', borderWidth: 1}]}>
                                <ScrollView>
                                    <TextInput value={global.currect_equation} multiline selection={this.state.selection} autoFocus keyboardType="decimal-pad" showSoftInputOnFocus={false}  onSelectionChange={({ nativeEvent: { selection } }) => {this.setState({ selection })}}  onChangeText={(this.evaluation_prev(), this.check_operators(), this.check_zero())} style={[{fontSize: 28, textAlign: 'right', color: 'white', flexWrap: 'wrap', height: global.he*0.27}]} ></TextInput>
                                </ScrollView>
                            </View>
                        {/* main text view set ends here */}


                        {/* spacing */}
                        <View style={[{flex: 1, flexDirection: 'row'}]}></View>


                        {/* preview text view set starts here */}
                        <View style={[{flexDirection: 'row', backgroundColor: 'rgba(80, 50, 190, 0.4)', borderWidth: 1}]}>
                                <ScrollView>
                                    <TextInput value={global.prev_currect_equation} multiline editable={false}  style={[{fontSize: 22, textAlign: 'right', color: 'rgb(211, 211, 211)', flexWrap: 'wrap', height: global.he*0.12}]} ></TextInput>
                                </ScrollView>
                            </View>
                        {/* preview text view set ends here */}


                        {/* spacing */}
                        <View style={[{flex: 1, flexDirection: 'row'}]}></View>


                        {/* buttons view set starts here */}
                            <View style={[{justifyContent: 'center', flexDirection: 'row', justifyContent: 'flex-start'}]}>

                                {/* <Pressable onPress={() => this.props.navigation.navigate('Change_Background_Screen')} style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginLeft: '3%'}]}>
                                    <Text style={[{fontSize: 30, color: 'black', margin: 8.5, marginHorizontal: 12}]}>🖼️</Text>
                                </Pressable> */}

                                {/* <Pressable onPress={() => this.props.navigation.navigate('Change_Background_Screen')} style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginLeft: '3%'}]}>
                                    <Image source={imgico} style={[{flex:1, aspectRatio: 1/1, margin: 5}]}></Image>
                                </Pressable> */}
                                
                                <Pressable style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginLeft: '3%'}]}>
                                    <Image source={imgico} style={[{flex:1, aspectRatio: 1/1, margin: 5}]}></Image>
                                </Pressable>

                                {/* spacing */}
                                <View style={[{flex: 1}]}></View>
                                
                                <Pressable onPress={() => this.validate_backspace("")} style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginRight: '3%'}]}>
                                    <Text style={[{fontSize: 30, color: 'black', margin: 8.5, marginHorizontal: 12}]}>⌫</Text>
                                </Pressable>

                            </View>
                        {/* buttons view set ends here */}

                        
                        {/* spacing */}
                        <View style={[{flex: 1}]}></View>

                        
                        {/* main buttons coverage starts here */}
                            <View style={[{flexDirection: 'row'}]}>

                                {/* spacing */}
                                <View style={[{flex: 1}]}></View>


                                {/* main buttons view set starts here */}
                                    <View style={[{aspectRatio: 1/1.23, justifyContent: 'space-evenly', height: global.he}]}>

                                        {/* first view set starts here */}
                                            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("7")}>
                                                    <Text style={[styles.title , {}]}>7</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("8")}>
                                                    <Text style={[styles.title , {}]}>8</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("9")}>
                                                    <Text style={[styles.title , {}]}>9</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" ÷ ")}>
                                                    <Text style={[styles.title , {}]}>÷</Text>
                                                </Pressable>

                                            </View>
                                        {/* first view set ends here */}

                                        {/* second view set starts here */}
                                            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("4")}>
                                                    <Text style={[styles.title , {}]}>4</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("5")}>
                                                    <Text style={[styles.title , {}]}>5</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("6")}>
                                                    <Text style={[styles.title , {}]}>6</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" × ")}>
                                                    <Text style={[styles.title , {}]}>×</Text>
                                                </Pressable>

                                            </View>
                                        {/* second view set ends here */}

                                        {/* third view set starts here */}
                                            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("1")}>
                                                    <Text style={[styles.title , {}]}>1</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("2")}>
                                                    <Text style={[styles.title , {}]}>2</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("3")}>
                                                    <Text style={[styles.title , {}]}>3</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" - ")}>
                                                    <Text style={[styles.title , {}]}>-</Text>
                                                </Pressable>

                                            </View>
                                        {/* third view set ends here */}

                                        {/* fourth view set starts here */}
                                            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(255, 120, 65, 0.6)'}]} onPress={() => this.clear_value("C")}>
                                                    <Text style={[styles.title , {}]}>C</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("0")}>
                                                    <Text style={[styles.title , {}]}>0</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value(".")}>
                                                    <Text style={[styles.title , {}]}>.</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" + ")}>
                                                    <Text style={[styles.title , {}]}>+</Text>
                                                </Pressable>

                                            </View>
                                        {/* fourth view set ends here */}

                                        {/* fifth view set starts here */}
                                            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)', backgroundColor: 'rgba(175, 200, 70, 0.6)', width: "90.4%", aspectRatio: 1/0.2}]} onPress={() => this.total_value()}>
                                                    <Text style={[styles.title , {}]}>=</Text>
                                                </Pressable>

                                            </View>
                                        {/* fifth view set ends here */}

                                    </View>
                                {/* main buttons view set ends here */}


                                {/* spacing */}
                                <View style={[{flex: 1}]}></View>

                            </View>
                        {/* main buttons coverage ends here */}

                    {/* spacing */}
                    <View style={[{flex: 1}]}></View>
            
                    </View>

                </ImageBackground>

            </View>

        );
    }
};

export default Calculator

const styles = StyleSheet.create({
    container: {
        borderRadius: 60,
        width: "19%",
        aspectRatio: 1/1,
        justifyContent: 'center',
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(75, 150, 255, 0.6)',
    },

    image:{
        flex:1,
    },

    title: {
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 30,
        fontWeight: "bold"
    },

    main: {
        flex: 1,
        backgroundColor: "teal",
    }

});
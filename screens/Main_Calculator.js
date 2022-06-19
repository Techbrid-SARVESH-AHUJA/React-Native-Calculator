import React, {useRef} from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground, TextInput, ScrollView, ToastAndroid, Keyboard, Button, Image, Dimensions} from "react-native";
import Realm from "realm";

import { useRoute } from '@react-navigation/native';

// const MessageScreen = () => {
// const route = useRoute;

// global.lastNameRef = useRef();

// const lastNameRef = useRef();

global.currect_equation = "";
global.currect_equation1 = '';
global.prev_currect_equation = "";
global.tre = ""

global.main = ""
global.tbd = "false"
global.invalid = "false"

global.realm = ""

global.rrq = ["0"]

global.break = "False"

global.prev = ""


// const bgimg = require('../assets/010.webp');
const imgico_image = require('../assets/imageicon.png');
const imgico_backspace = require('../assets/backspace.png');
const imgico_clock = require('../assets/clock.png');

global.cmr = "1"

global.h = "0"
global.he = 0
global.bfr = "0"
global.aft = "0"
global.lenbfr = "0"
global.lenaft = "0"
global.before = ""
global.after = ""

global.numafter = ""
global.numbefore = ""
global.current_number = ""

global.equal_pressed = "0"

global.dby0 = "0"

global.runs = "0"


// console.log("")
// console.log("starts here")
// console.log("")


global.BIMG = {
    // schema: [Background_image.schema],
    name: "Background_image",
    properties: {
        _id: "int",
        name: "string",
    },
    primaryKey: "_id",
};

global.HIST = {
    // schema: [Background_image.schema],
    // schemaVersion: 1,
    name: "History_data",
    properties: {
        _id: "int",
        equation_value: "string",
    },
    primaryKey: "_id",
};


// Realm.open()
(async () => {
const realm = await Realm.open({
    path: "myrealm",
    schema: [global.BIMG],
});

const realm1 = await Realm.open({
    path: "myrealm1",
    schema: [global.HIST],
    // console.log('gtg')
});

// realm1.close()

            // console.log('enetered here in current sarvesh')
            const im = realm.objects("Background_image");

            try{
                const current_image = im.filtered("_id = '1'");
                // console.log('here1')
                // console.log( `Current image in main:  ${current_image.map((current_im) => current_im.name)}` );
                global.current_image_name = `${current_image.map((current_im) => current_im.name)}`
                // const tasks = realm.objects("Background_image");
                // console.log(`The lists of tasks in change bg are: ${tasks.map((task) => task.name)}`);
            }
            catch{console.log('catch')}

            realm1.write(() => {
                // Delete all objects from the realm.
                // realm.deleteAll();
                                                                                                                                                                    // realm1.deleteAll();
                // bg_image = null;
            });

        //     let task1;
        //     try{
        //     realm1.write(() => {
        //     task1 = realm1.create("History_data", {
        //         _id: 1,
        //         equation_value: "this is task 1",
        //         // status: "Open",
        //     });
        //     console.log(`created tasks: ${task1.equation_value}`);
        //     });
        // }
        // catch{console.log('already')}

        // realm1.deleteAll()
        const im1 = realm1.objects("History_data");
        const current_image1 = im1.filtered("_id = '1'");
        const cmn = `${current_image1.map((current_im1) => current_im1.equation_value)}`
        // console.log(cmn)


            // const gtg = realm1.objects("History_data");
            //     try{
            //         // console.log('ented')
            //     realm1.write(() => {
                    
            //         gtg = realm1.create("History_data", {
            //         _id: 1,
            //         equation_value: 'cool',
            //         // status: "Open",
            //     });
            //     console.log('p1')
            //     //   console.log(`Current image: ${bg_image.name}`);
            //     });
            //     }
            //     catch{console.log('beep')}
    
            // const crre = '../assets/'+global.current_image_name
            // console.log("crre in main")
            // console.log(crre)
            // if (global.current_image_name == "001"){
            //     this.setState({ image: require('../assets/001.webp') });
            // }
            // else if(global.current_image_name == "002"){
            //     this.setState({ image: require('../assets/002.webp') });
            // }
            // else if(global.current_image_name == "003"){
            //     this.setState({ image: require('../assets/003.webp') });
            // }
            // else if(global.current_image_name == "004"){
            //     this.setState({ image: require('../assets/004.webp') });
            // }
            // else if(global.current_image_name == "005"){
            //     this.setState({ image: require('../assets/005.webp') });
            // }
            // else if(global.current_image_name == "006"){
            //     this.setState({ image: require('../assets/006.webp') });
            // }
            // else if(global.current_image_name == "007"){
            //     this.setState({ image: require('../assets/007.webp') });
            // }
            // else if(global.current_image_name == "008"){
            //     this.setState({ image: require('../assets/008.webp') });
            // }
            // else if(global.current_image_name == "009"){
            //     this.setState({ image: require('../assets/009.webp') });
            // }
            // else if(global.current_image_name == "010"){
            //     this.setState({ image: require('../assets/010.webp') });
            // }
            // else if(global.current_image_name == "011"){
            //     this.setState({ image: require('../assets/011.webp') });
            // }
            // else if(global.current_image_name == "012"){
            //     this.setState({ image: require('../assets/012.webp') });
            // }
            // else if(global.current_image_name == "013"){
            //     this.setState({ image: require('../assets/013.webp') });
            // }
            // else if(global.current_image_name == "014"){
            //     this.setState({ image: require('../assets/014.webp') });
            // }
            // else if(global.current_image_name == "015"){
            //     this.setState({ image: require('../assets/015.webp') });
            // }
            // else{
            //     this.setState({ image: require('../assets/001.webp') });
            // }

            // this.state.myvalue = "hello"
            // global.myvalue = "hello"
            // global.myvalue = `The lists of tasks are: ${tasks.map((task) => task.name)}`
            // realm.close()


// React.useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       // The screen is focused
//       // Call any action
//       mymain()
//     });

//     // Return the function to unsubscribe from the event so it gets removed on unmount
//     mymain()
//     return unsubscribe;
//   }, [navigation]);

// Add a couple of Tasks in a single, atomic transaction
// let bg_image;
// try{
// realm.write(() => {
//     bg_image = realm.create("Background_image", {
//     _id: 1,
//     name: "mybg3.webp",
//     // status: "Open",
//   });
//   console.log(`Current image: ${bg_image.name}`);
// });
// }
// catch{}
// use task1 and task2


// realm.write(() => {
//     // Delete all objects from the realm.
//     realm.deleteAll();
// });

// const tasks = realm.objects("Background_image");
// global.tsks = tasks
// export {tasks}
// console.log("")
// console.log(`tasks are: ${tasks.map((task) => task.name)}`);

// try{
// const openTasks = tasks.filtered("_id = '9'");
// console.log(
//   `Last on id 2 is: : ${openTasks.map(
//     (openTask) => openTask.name
//   )}`
// );
// }
// catch{}


})();





// (async () => {
    // console.log('mp1')
    // const realm1 = await Realm.open({
    //     path: "myrealm1",
    //     schema: [global.HIST],
        // console.log('gtg')
    // });
    
                // console.log('enetered here in current sarvesh')
                // const im1 = realm1.objects("History_data");
    
                // try{
                //     const current_image1 = im1.filtered1("_id = '1'");
                //     // console.log('here1')
                //     // console.log( `Current image in main:  ${current_image.map((current_im) => current_im.name)}` );
                //     // global.current_image_name1 = `${current_image1.map((current_im1) => current_im1.equation_value)}`
                //     // const tasks = realm.objects("Background_image");
                //     // console.log(`The lists of tasks in change bg are: ${tasks.map((task) => task.name)}`);
                // }
                // catch{console.log('catch1')}

                

            // })();

class Calculator extends React.Component { 


    componentDidMount () {
        let self = this;
        setTimeout(() => {
            // self.props.navigation.replace("Calculator_Screen");
            // this.fnc()
            this.maintextinput.focus()
        }, 0.7)
    }
    
    constructor(){
        super()
        this.state = { 
            mainval: global.currect_equation ,
            selection: {start: global.currect_equation.length, end: global.currect_equation.length},
            // image: require('../assets/001.webp'),
            // image: {image}
        }
    }
    

    // componentDidMount(){
    //     this.mymain()
    // }
    // componentDidUpdate(){
    //     this.mymain()
    // }

    // componentDidUpdate(){
    //     alert('I 💚')
    // }


    // const [selected, setSelected] = useState(false);

    mymain1 () {
        (async () => {
            global.realm = await Realm.open({
                path: "myrealm",
                schema: [global.BIMG],
            });


            // console.log(global.currect_equation)
            // console.log(global.equal_pressed)
            
            // for (i in global.rrq){
            for (i in global.rrq){

            // console.log('me here')
            // console.log('enetered here')

            // global.realm = await Realm.open({
            //     path: "myrealm",
            //     schema: [global.BIMG],
            // });

            // console.log('bg im here')
            global.im = global.realm.objects("Background_image");
            // console.log('bg im here 2')

            try{
                const current_image = global.im.filtered("_id = '1'");
                // console.log('here1')
                // console.log( `Current image:  ${current_image.map((current_im) => current_im.name)}` );
                global.current_image_name = `${current_image.map((current_im) => current_im.name)}`
                // const tasks = realm.objects("Background_image");
                // console.log(`The lists of tasks in change bg are: ${tasks.map((task) => task.name)}`);
            }
            catch{console.log('catch')}

            // global.realm.close()

            // const ppq = ["0", "1", "2"]
            // for (i in ppq){
                // global.runs = "0"
            // if (global.runs == "1"){}
            // else{

            
    
            const crre = '../assets/'+global.current_image_name
            // console.log("crre in main")
            // console.log(crre)

            if (global.current_image_name == "001"){
                this.setState({ image: require('../assets/001.webp') });
            }
            else if(global.current_image_name == "002"){
                this.setState({ image: require('../assets/002.webp') });
            }
            else if(global.current_image_name == "003"){
                this.setState({ image: require('../assets/003.webp') });
            }
            else if(global.current_image_name == "004"){
                this.setState({ image: require('../assets/004.webp') });
            }
            else if(global.current_image_name == "005"){
                this.setState({ image: require('../assets/005.webp') });
            }
            else if(global.current_image_name == "006"){
                this.setState({ image: require('../assets/006.webp') });
            }
            else if(global.current_image_name == "007"){
                this.setState({ image: require('../assets/007.webp') });
            }
            else if(global.current_image_name == "008"){
                this.setState({ image: require('../assets/008.webp') });
            }
            else if(global.current_image_name == "009"){
                this.setState({ image: require('../assets/009.webp') });
            }
            else if(global.current_image_name == "010"){
                this.setState({ image: require('../assets/010.webp') });
            }
            else if(global.current_image_name == "011"){
                this.setState({ image: require('../assets/011.webp') });
            }
            else if(global.current_image_name == "012"){
                this.setState({ image: require('../assets/012.webp') });
            }
            else if(global.current_image_name == "013"){
                this.setState({ image: require('../assets/013.webp') });
            }
            else if(global.current_image_name == "014"){
                this.setState({ image: require('../assets/014.webp') });
            }
            else if(global.current_image_name == "015"){
                this.setState({ image: require('../assets/015.webp') });
            }


            else if(global.current_image_name == "016"){
                this.setState({ image: require('../assets/016.webp') });
            }
            else if(global.current_image_name == "017"){
                this.setState({ image: require('../assets/017.webp') });
            }
            else if(global.current_image_name == "018"){
                this.setState({ image: require('../assets/018.webp') });
            }
            else if(global.current_image_name == "019"){
                this.setState({ image: require('../assets/019.webp') });
            }
            else if(global.current_image_name == "020"){
                this.setState({ image: require('../assets/020.webp') });
            }
            else if(global.current_image_name == "021"){
                this.setState({ image: require('../assets/021.webp') });
            }
            else if(global.current_image_name == "022"){
                this.setState({ image: require('../assets/022.webp') });
            }
            else if(global.current_image_name == "023"){
                this.setState({ image: require('../assets/023.webp') });
            }
            else if(global.current_image_name == "024"){
                this.setState({ image: require('../assets/024.webp') });
            }
            else if(global.current_image_name == "025"){
                this.setState({ image: require('../assets/025.webp') });
            }
            else if(global.current_image_name == "026"){
                this.setState({ image: require('../assets/026.webp') });
            }
            else if(global.current_image_name == "027"){
                this.setState({ image: require('../assets/027.webp') });
            }
            
            else{
                this.setState({ image: require('../assets/001.webp') });
            }

            // global.runs = "1"
            global.realm.close()
        }

        global.rrq = []
        
            // }
            // global.realm.close()
            // break
            // this.state.myvalue = "hello"
            // global.myvalue = "hello"
            // global.myvalue = `The lists of tasks are: ${tasks.map((task) => task.name)}`
            
        })()
        // global.realm.close()
        // realm.close()
        // global.bgimg = require('../assets/mybg1.webp');
        
        // this.setState({ image: require('../assets/') });
    }

    append_value(prop){
        global.currect_equation1 = global.currect_equation
        const gbl = global.currect_equation1.split("")

        // console.log(gbl.slice(0, this.state.selection.start))
        // console.log(gbl.slice(this.state.selection.end))

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

        // console.log(global.before)
        // console.log(global.after)

        if (global.before == []){
            // console.log('blank before')
            if (prop == " + " || prop == " - " || prop == " × " || prop == " ÷ "){
            }
            else{
                global.currect_equation = global.before + prop + global.after
                // console.log(global.currect_equation)

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
            // console.log(global.currect_equation)

            if (prop == " + " || prop == " - " || prop == " × " || prop == " ÷ "){
                this.state.selection.start = this.state.selection.start+2
                this.state.selection.end = this.state.selection.end+2
            }
            this.state.selection.start = this.state.selection.start+1
            this.state.selection.end = this.state.selection.end+1
            
            this.setState({ mainval: global.currect_equation })
        }


        global.numafter = ""
        for (let i=0; i<=global.lenaft-1; i++){
            if (global.aft[i] != " "){
                global.numafter = global.numafter + global.aft[i]
            }
            else{
                break
            }
        }

        global.numbefore = ""
        for (let i=global.lenbfr-1; i>=0; i--){
            if (global.bfr[i] != " "){
                global.numbefore = global.numbefore + global.bfr[i]
            }
            else{
                break
            }
            global.numbefore = global.numbefore.split("").reverse().join("")
        }

        // console.warn(global.numafter)
        // console.warn(global.numbefore)
        global.current_number = global.numbefore+global.numafter
        // console.warn(global.current_number)

        if (global.current_number.split("").includes(".")){
            if (prop == "."){
                this.backspace()
            }
            else if (prop == "0."){
                this.validate_backspace()
                this.state.selection.start = this.state.selection.start-1
                this.state.selection.end = this.state.selection.end-1
            }
        }
    }

    validate_value(entered_num){
        if (global.equal_pressed == "1"){
            global.equal_pressed = "0"
            // global.currect_equation = ""
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

        // console.log("global.before")
        // console.log(global.bfr)
        // console.log("global.after")
        // console.log(global.aft)
        // console.log("global.before[-1]")
        // console.log(global.bfr.slice(-1).toString())
        // console.log("global.aft.slice(0).toString()")
        // console.log(global.aft[0])
        // console.log("type")
        // console.log(typeof global.aft[0])
        // console.log("len after")
        // console.log(global.lenaft)

        // console.log("")
        // console.log("global.numafter")
        // console.log(global.aft)//list format
        // console.log("")

        // console.log("")
        // console.log("global.numbefore")
        // console.log(global.bfr)//list format
        // console.log("")

        if (nums.includes(global.bfr.slice(-1).toString()) && global.aft[0] == " "){
            // console.warn("case 1: num before, blank after")
            if (nums.includes(entered_num)){
                if (global.bfr.slice(-1).toString() ==  "0"){
                    // this.validate_backspace()
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
            // console.warn("case 2: blank before, operator after")
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
            // console.warn("case 3: operator before, blank after")
            if (nums.includes(entered_num)){
                if (entered_num == "0"){
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
                this.append_value("")
            }
            else{
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
                this.validate_backspace()
                this.validate_value(entered_num)
            }
        }
        else if (global.bfr.slice(-1).toString() == " " && nums.includes(global.aft[0])){
            // console.warn("case 4: blank before, num after")
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
            // console.warn("case 5: blank before, operator before before")
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
            // console.warn("case 6: 0 before, cursor 2")
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
            // console.warn("case 7: 0 before, blank before before")
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
            // console.warn("case 8: null before, num after")
            if (entered_num == "0"){ }
            else if (entered_num == "."){
                this.append_value("0.")
                this.state.selection.start = this.state.selection.start+1
                this.state.selection.end = this.state.selection.end+1
            }
            else {
                this.append_value(entered_num)
            }
        }
        else if (global.bfr.length === 0){
            // console.warn("case 9: null before")
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
        else{ 
            this.append_value(entered_num)
        }
    }

    clear_value(prop) {
        global.currect_equation = ''
        this.state.mainval = ''

        // console.log(global.currect_equation)
        // console.log(prop)

        this.setState({ mainval: this.state.mainval })
    }

    total_value(prop) {
        // console.log(this.state.mainval)
        // console.log(prop)
        global.main = this.state.mainval
        for (let i = 0; i<3; i++) {
            try {
                while(this.state.mainval.includes("×") || this.state.mainval.includes("÷") || this.state.mainval.includes("%")){
                    this.state.mainval = this.state.mainval.replace('×', '*')
                    this.state.mainval = this.state.mainval.replace('÷', '/')
                    // this.state.mainval = this.state.mainval.replace('%', '/100')
                }

                // console.log(this.state.mainval)
                // console.log(eval(this.state.mainval))

                global.currect_equation = eval(this.state.mainval)

                const currect_equation_string = global.currect_equation.toString()
                // console.log(currect_equation_string)

                // this.validate_history()

                if (global.currect_equation == "Infinity" || global.currect_equation == "-Infinity"){
                    global.dby0 = "1"

                    while(this.state.mainval.includes("*") || this.state.mainval.includes("/")){
                        this.state.mainval = this.state.mainval.replace('*', '×')
                        this.state.mainval = this.state.mainval.replace('/', '÷')
                    }

                    global.currect_equation = this.state.mainval
                    this.state.mainval = this.state.mainval
                }
                else{
                    global.currect_equation = currect_equation_string
                    this.state.mainval = currect_equation_string

                    global.tbd = "true"

                    

                    // console.log("currect_equation_string: " + currect_equation_string)

                    this.setState({ mainval: this.state.mainval })

                    // console.log(global.currect_equation.length)

                    try{
                        this.state.selection.start = global.currect_equation.length
                        this.state.selection.end = global.currect_equation.length
                    }
                    catch{
                        // this.state.selection.start = 0
                        // this.state.selection.end = 0
                    }

                    global.equal_pressed = "1"
                }
            }
            catch(err){
                // console.log("err")
                global.invalid = "true"
                // global.currect_equation = ''
            }
        }
        if (global.dby0 == "1"){
            ToastAndroid.show("Division by 0 is not possible", ToastAndroid.SHORT);
            global.dby0 = "0"
        }

        // //async
        // (async () => {
        //     // const realm = await Realm.open({
        //     //     path: "myrealm",
        //     //     schema: [global.BIMG],
        //     // });

        //     const realm1 = await Realm.open({
        //         path: "myrealm1",
        //         schema: [global.HIST],
        //         // console.log('gtg')
        //     });


        if (global.tbd == "true"){
            this.validate_history()
            global.tbd = "false"
        }

        if (global.invalid == "true"){
            ToastAndroid.show("Invalid format used", ToastAndroid.SHORT);
            global.invalid = "false"
        }

        //     // realm1.write(() => {
        //     //     realm1.deleteAll();
        //     // });
        //     // let creation;
        //     global.break = "False"
        //     for (let i = 1; i <= 24; i++){
        //         if(global.break == "False"){
        //     try{
        //     realm1.write(() => {
        //         console.log('here')
        //         console.log(i)
        //         creation = realm1.create("History_data", {
        //         _id: i,
        //         equation_value: main+" = "+global.currect_equation,
        //       });
        //       console.log('saved')
        //       global.break = "True"
        //     });
        //     }
        //     catch{
        //         // console.log('already err')
        //         global.break = "False"
        //     }
        // }
        // }



        //     const im1 = realm1.objects("History_data");
        // const current_image1 = im1.filtered("_id = '1'");
        // const cmn = `${current_image1.map((current_im1) => current_im1.equation_value)}`
        // console.log(cmn)

        //     })();

    }


    validate_history(){
        // console.log('validation: ' + global.prev)
        const validation = global.prev
        const validation_1 = global.main+" = "+global.currect_equation
        // console.log('validation 1: ' + global.main+" = "+global.currect_equation)
        if (global.main == global.currect_equation){
            // console.log('random')
        }
        else if (validation == validation_1){
            // console.log('match')
        }
        // else if (global.prev == global.main+" = "+global.currect_equation){
        //     console.log('this')
        // }
        else{
            this.add_history()
        }

    }


    add_history(){
//async
(async () => {
    // const realm = await Realm.open({
    //     path: "myrealm",
    //     schema: [global.BIMG],
    // });

    const realm1 = await Realm.open({
        path: "myrealm1",
        schema: [global.HIST],
        // console.log('gtg')
    });


    // this.validate_history()

    // realm1.write(() => {
    //     realm1.deleteAll();
    // });
    let creation;
    global.break = "False"
    for (let i = 1; i <= 24; i++){
        if(global.break == "False"){
    try{
    realm1.write(() => {
        // console.log('here')
        // console.log(i)
        creation = realm1.create("History_data", {
        _id: i,
        equation_value: global.main+" = "+global.currect_equation,
      });
      global.prev = global.main+" = "+global.currect_equation
    //   console.log("global.prev:  " + global.prev)
      console.log('saved')
      global.break = "True"
    });
    }
    catch{
        // console.log('already err')
        if (i == 24){
            console.log('limit')
            const im1 = realm1.objects("History_data");
            for (let o = 1; o<= 24; o++){
                const tx = String("_id=" + o)
                const t1 = im1.filtered(tx);
                const c = parseInt(o)+1
                const tx1 = String("_id=" + c)
                // console.log("tx1: " + tx1)
                const cmn = `${im1.filtered(tx1).map((current_t1) => current_t1.equation_value)}`
                realm1.write(() => {
                    // Delete all objects from the realm.
                    // realm.deleteAll();
                                                                                                                                                                        realm1.delete(t1);
                    // t1.equation_value = "hey";
                    // console.log('deleted ' + o)
                    // console.log(o)
                    // console.log(cmn)
                    if (o != 24){
                        // const creation = ""
                        creation = realm1.create("History_data", {
                            _id: o,
                            equation_value: cmn,
                        });
                    }
                    else if (o == 24){
                        // const creation = ""
                        creation = realm1.create("History_data", {
                            _id: 24,
                            equation_value: global.main+" = "+global.currect_equation,
                        });
                        global.prev = global.main+" = "+global.currect_equation
                    }
                    // bg_image = null;
                    
                });
            }
        //     try{
        //     realm1.write(() => {
        //         // Delete all objects from the realm.
        //         // realm.deleteAll();
        //                                                                                                                                                             // realm1.delete(t1);
        //         // t1.equation_value = "hey";
        //         // console.log('deleted ' + o)
        //         // console.log(o)
        //         // console.log(cmn)
        //         creation = realm1.create("History_data", {
        //             _id: 24,
        //             equation_value: "cmn",
        //         });
        //     });
        // }
        // catch{}
            // this.validate_history()
        }
        global.break = "False"
    }
}
}



    const im1 = realm1.objects("History_data");
const current_image1 = im1.filtered("_id = '1'");
const cmn = `${current_image1.map((current_im1) => current_im1.equation_value)}`
// console.log(cmn)

    })();
    }

    evaluation_prev(){
        try {
            console.log('prev')
            console.log(global.equal_pressed)
            if (global.equal_pressed == "0"){

                // console.log("")
                // console.log("this.state.mainval")
                // console.log(this.state.mainval.length)
                console.log("hola: " + this.state.mainval)
                // console.log("")

                while(this.state.mainval.includes("×") || this.state.mainval.includes("÷") || this.state.mainval.includes("%")){
                    this.state.mainval = this.state.mainval.replace('×', '*')
                    this.state.mainval = this.state.mainval.replace('÷', '/')
                    this.state.mainval = this.state.mainval.replace('%', '*(2+3')
                }

                // console.log('this.state.mainval')
                console.log("this.state.mainval")
                global.prev_currect_equation = eval(this.state.mainval)
                // console.log(global.prev_currect_equation)

                try {
                    const prev_currect_equation_string = global.prev_currect_equation.toString()
                    global.prev_currect_equation = "= " + prev_currect_equation_string
                } catch (error) {console.log('berr')}


            }
            else{
                // console.log("eval prev blank")
                global.prev_currect_equation = ""
            }
        }
        catch (error) {
            // console.log("")
            // console.log("error")
            // console.warn(error)
            global.prev_currect_equation = ""
        }
        // console.log("eval prev")
    }

    validate_backspace(prop){
        if (global.equal_pressed == "1"){
            global.equal_pressed = "0"
        }
        
        global.currect_equation1 = global.currect_equation
        const gbl = global.currect_equation1.split("")

        // console.log(gbl.slice(0, this.state.selection.start))
        // console.log(gbl.slice(this.state.selection.end))

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
            // console.log("this case")
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
        // console.warn(global.aft[0])
    }

    backspace(prop){
        try{
            global.currect_equation1 = global.currect_equation
            const gbl = global.currect_equation1.split("")

            // console.log(gbl.slice(0, this.state.selection.start))
            // console.log(gbl.slice(this.state.selection.end))

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

            // console.log("back: ")
            let str = global.before
            str = str.substring(0, str.length - 1)
            // console.log(str)

            global.currect_equation = str + global.after
            this.setState({ mainval: global.currect_equation })

            // console.log("current: ")
            // console.log(global.currect_equation)

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
            // console.log(err)
        }
    }
    
    find_dimesions(layout){
        const {x, y, width, height} = layout;
        // console.log(height);
        global.h = height;
        global.w = width;
        global.he = global.h*58;
        global.he = global.he/100;
        this.forceUpdate();
    }

    check_operators(){
        try{
            const crr = global.currect_equation.split("")

            if (crr[0] == " " && crr[2] == " "){
                if (crr[1] == "+" || crr[1] == "-" || crr[1] == "×" || crr[1] == "÷"){
                    // console.log('opt at start')
                    global.currect_equation = global.currect_equation.slice(3)
                }
            }
        }
        catch{}
    }

    check_zero(){
        // console.log('check zero')
        try{
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
        catch{}
    }

    
    // componentDidUpdate(prevProps) {
    //     if (prevProps.isFocused !== this.props.isFocused) {
    //       // Use the `this.props.isFocused` boolean
    //       // Call any action
    //       console.warn('so we have started this ✨')
    //     }
    // }

    // state = {data : []};
    // componentWillMount(){
    //     this.setState({data : 'inputObject'});
    //     console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // }

    fnc(){
        try {
            // const text = this.props.navigation.navigate.getParam('prc', 'nothing sent')
            // console.log(text)
            if (global.num == " "){
                // console.log('here0: ' + global.num)
                // global.num = "hello"
                // global.currect_equation = global.num
                // this.state.mainval = global.num
                // useRef.current.focus()
                this.maintextinput.focus()
                // console.log('here1: ' + global.num)
                // this.setState({ mainval: global.num })
                // this.state.mainval = global.num
                this.state.selection.start = global.currect_equation.length
                this.state.selection.end = global.currect_equation.length
                // global.num = ""
                // this.validate_backspace()
            }
            else if (global.num != ""){
                console.log('here0: ' + global.num)
                // global.num = "hello"
                global.currect_equation = global.num
                this.state.mainval = global.num
                // useRef.current.focus()
                this.maintextinput.focus()
                // console.log('here1: ' + global.num)
                // this.setState({ mainval: global.num })
                // this.state.mainval = global.num
                this.state.selection.start = global.num.length
                this.state.selection.end = global.num.length
                global.num = ""
            }
            
            // console.log(global.num)
        } catch (error) {
            console.log("error")
        }
    }

    render() {
        global.rrq = ["0"]
        // const { params } = this.props.navigation.state;
        // const user= params ? params.user: null;
        this.mymain1()
        this.fnc()

        // const { navigation } = this.props;  
        // const user_name = this.props.navigation.navigate.getParam('prc', 'NO-User');  
        // console.log(route.params.prc)
        
        
        
        
        // console.log('main one here sarvesh looooong')
        // const lastNameRef = useRef;
        return(
            
            <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout)}} style={[styles.main, {}]}>
                {/* <View  onLayout={(event) => { console.log('loadedmain') }}></View> */}

                <ImageBackground source={this.state.image} resizeMode="cover" style={styles.image}>

                    <View style={[{ flex: 1, flexWrap: 'nowrap'}]}>

                        {/* spacing */}
                        <View style={[{flex: 1}]}></View> 


                        {/* main text view set starts here */}
                            <View style={[{flexDirection: 'row', backgroundColor: 'rgba(135, 160, 190, 0.7)', borderWidth: 1}]}>
                                <ScrollView>
                                    <TextInput value={global.currect_equation} ref={(input) => { this.maintextinput = input }} multiline selection={this.state.selection} autoFocus={true} caretHidden={false} keyboardType="decimal-pad" showSoftInputOnFocus={false} onSelectionChange={({ nativeEvent: { selection } }) => {this.setState({ selection })}}  onChangeText={(this.evaluation_prev(), this.check_operators(), this.check_zero())} style={[{fontSize: 28, textAlign: 'right', color: 'white', flexWrap: 'wrap', height: global.he*0.27}]} ></TextInput>
                                </ScrollView>
                            </View>
                        {/* main text view set ends here */}


                        {/* spacing */}
                        <View style={[{flex: 1, flexDirection: 'row'}]}></View>


                        {/* preview text view set starts here */}
                        <View style={[{flexDirection: 'row', backgroundColor: 'rgba(80, 50, 190, 0.6)', borderWidth: 1}]}>
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
                                    <Image source={imgico_image} style={[{aspectRatio: 1/1, height: global.h/15.9, margin: 5}]}></Image>
                                </Pressable> */}
                                
                                <Pressable onPress={() => this.props.navigation.navigate('Change_Background_Screen')} style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginLeft: '3%'}]}>
                                    <Image source={imgico_image} style={[{aspectRatio: 1/1, height: global.h/15.9, margin: 5}]}></Image>
                                </Pressable>

                                <Pressable onPress={() => this.props.navigation.navigate('History_Screen')} style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginLeft: '3%'}]}>
                                    <Image source={imgico_clock} style={[{aspectRatio: 1/1, height: global.h/15.9, margin: 5}]}></Image>
                                </Pressable>

                                {/* spacing */}
                                <View style={[{flex: 1}]}></View>
                                
                                <Pressable onPress={() => this.validate_backspace("")} style={[{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 50, justifyContent: 'center', marginRight: '3%'}]}>
                                    <Image source={imgico_backspace} style={[{aspectRatio: 1/1,  height: global.h/15.9, margin: 5}]}></Image>
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

                                        {/* f1 view set starts here */}
                                        <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                        <Pressable style={[styles.container, {backgroundColor: 'rgba(255, 120, 65, 0.6)'}]} onPress={() => this.clear_value("C")}>
                                            <Text style={[styles.title , {}]}>C</Text>
                                        </Pressable>

                                        <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]}>
                                            <Text style={[styles.title , {}]}>( )</Text>
                                        </Pressable>

                                        <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]}>
                                            <Text style={[styles.title , {}]}>%</Text>
                                        </Pressable>

                                        <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" ÷ ")}>
                                            <Text style={[styles.title , {}]}>÷</Text>
                                        </Pressable>

                                        </View>
                                        {/* f1 view set ends here */}

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

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" × ")}>
                                                    <Text style={[styles.title , {}]}>×</Text>
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

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" - ")}>
                                                    <Text style={[styles.title , {}]}>-</Text>
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

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" + ")}>
                                                    <Text style={[styles.title , {}]}>+</Text>
                                                </Pressable>

                                            </View>
                                        {/* third view set ends here */}

                                        {/* fourth view set starts here */}
                                            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {}]}>
                                                    <Text style={[styles.title , {}]}>+/-</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value("0")}>
                                                    <Text style={[styles.title , {}]}>0</Text>
                                                </Pressable>

                                                <Pressable style={[styles.container, {}]} onPress={() => this.validate_value(".")}>
                                                    <Text style={[styles.title , {}]}>.</Text>
                                                </Pressable>

                                                {/* <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)'}]} onPress={() => this.validate_value(" + ")}>
                                                    <Text style={[styles.title , {}]}>+</Text>
                                                </Pressable> */}

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)', backgroundColor: 'rgba(175, 200, 70, 0.6)'}]} onPress={() => this.total_value()}>
                                                    <Text style={[styles.title , {}]}>=</Text>
                                                </Pressable>

                                            </View>
                                        {/* fourth view set ends here */}

                                        {/* fifth view set starts here */}
                                            {/* <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>

                                                <Pressable style={[styles.container, {backgroundColor: 'rgba(175, 30, 70, 0.6)', backgroundColor: 'rgba(175, 200, 70, 0.6)'}]} onPress={() => this.total_value()}>
                                                    <Text style={[styles.title , {}]}>=</Text>
                                                </Pressable>

                                            </View> */}
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
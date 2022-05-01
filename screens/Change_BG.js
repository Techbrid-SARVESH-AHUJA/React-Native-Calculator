import React from 'react'
import {View, Button, Text, ImageBackground} from 'react-native'
import Realm from "realm";
// import TaskSchema  from './Main_Calculator'
// const ChangeBackground  = ({ navigation }) => {
//     return(
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text style={{color: 'black'}}>Details View</Text>
//             <Button title='Back' onPress={() => navigation.navigate('Calculator_Screen')}></Button>
//         </View>
//     )
// }
// console.log("")
// console.log("change bg  starts here")
// console.log("")


global.myvalue = "hi"
global.bgimg = require('../assets/mybg.webp');
global.current_image_name = ""

const BIMG = {
    name: "Background_image",
    properties: {
      _id: "int",
      name: "string",
    },
    primaryKey: "_id",
};



// (async () => {
//     const realm = await Realm.open({
//         path: "myrealm",
//         schema: [TaskSchema],
//     });
    
//     // Add a couple of Tasks in a single, atomic transaction
//     // let task1;
//     // try{
//     // realm.write(() => {
//     //   task1 = realm.create("Task", {
//     //     _id: 2,
//     //     name: "This is my task on id 2",
//     //     // status: "Open",
//     //   });
//     //   console.log(`created two tasks: ${task1.name}`);
//     // });
//     // }
//     // catch{}
//     // use task1 and task2
    
    
//     realm.write(() => {
//         // Delete all objects from the realm.
//         realm.deleteAll();
//     });
    
    // const tasks = realm.objects("Task");
    // export {tasks}
    // console.log("")
    // console.log(`The lists of tasks in change bg are: ${tasks.map((task) => task.name)}`);
    
    // try{
    // const openTasks = tasks.filtered("_id = '9'");
    // console.log(
    //   `Last on id 2 is: : ${openTasks.map(
    //     (openTask) => openTask.name
    //   )}`
    // );
    // }
    // catch{}
    
    
//     })();

class ChangeBackground extends React.Component { 
    
    constructor(){
        super()
        this.state = { 
            myvalue: "" ,
            image: require('../assets/mybg.webp'),
        }
    }

    mymain () {
        // console.log('here')
        (async () => {
            const realm = await Realm.open({
                path: "myrealm",
                schema: [BIMG],
            });
        
            console.log('enetered here')
            const im = realm.objects("Background_image");

            try{
                const current_image = im.filtered("_id = '1'");
                console.log( `Current image:  ${current_image.map((current_im) => current_im.name)}` );
                global.current_image_name = `${current_image.map((current_im) => current_im.name)}`
                // const tasks = realm.objects("Background_image");
                // console.log(`The lists of tasks in change bg are: ${tasks.map((task) => task.name)}`);
            }
            catch{console.log('catch')}

                // try{
    // const openTasks = tasks.filtered("_id = '9'");
    // console.log(
    //   `Last on id 2 is: : ${openTasks.map(
    //     (openTask) => openTask.name
    //   )}`
    // );
    // }
    // catch{}

            const crre = '../assets/'+global.current_image_name
            console.log(crre)
            if (global.current_image_name == "mybg1.webp"){
                this.setState({ image: require('../assets/mybg1.webp') });
            }
            else if(global.current_image_name == "mybg2.webp"){
                this.setState({ image: require('../assets/mybg2.webp') });
            }
            else{
                this.setState({ image: require('../assets/mybg.webp') });
            }

            // this.state.myvalue = "hello"
            // global.myvalue = "hello"
            // global.myvalue = `The lists of tasks are: ${tasks.map((task) => task.name)}`
        })()
        // global.bgimg = require('../assets/mybg1.webp');
        
        // this.setState({ image: require('../assets/') });
    }
    refresh(){
        this.setState({ image: require('../assets/mybg.webp') });
    }
    render() {
        return(

            <View style={{flex: 1}} onLayout={(event) => { this.mymain() }}>
                <ImageBackground source={this.state.image} resizeMode="cover" style={{flex: 1}}>
                <View style={{flex: 1}}></View>
                <Button onPress={() => this.props.navigation.navigate('Calculator_Screen')} title="Done"></Button>
                <Button title='refresh' onPress={() => this.refresh()}></Button>
                {/* <Text style={[{color: 'black'}]}>{global.myvalue}</Text> */}
                <View style={{flex: 1}}></View>
                </ImageBackground>
            </View>

        )
    }
}
export default ChangeBackground
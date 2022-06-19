import React from 'react'
import {View, Button, Text, ImageBackground, Pressable, StyleSheet, Image, ScrollView} from 'react-native'
import Realm from "realm";


global.myvalue = "hi"
global.bgimg = require('../assets/001.webp');
global.current_image_name = ""
global.realm = ""

global.BIMG = {
    name: "Background_image",
    properties: {
        _id: "int",
        name: "string",
    },
    primaryKey: "_id",
};

// console.log('hi')


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

(async () => {
    // console.log('enetered in bg')
    global.realm = await Realm.open({
        path: "myrealm",
        schema: [global.BIMG],
    });
    
    // Add a couple of Tasks in a single, atomic transaction
    let bg_image;
    // console.log('bg let')
    try{
    global.realm.write(() => {
        bg_image = global.realm.create("Background_image", {
        _id: 1,
        name: "mybg3.webp",
        // status: "Open",
    });
    // console.log(`Current image: ${bg_image.name}`);
    });
    }
    catch{}

    // use task1 and task2
    
    
    // realm.write(() => {
    //     realm.deleteAll();
    // });
    
    // const tasks = global.realm.objects("Background_image");
    // console.log("")
    // console.log(`tasks are: ${tasks.map((task) => task.name)}`);
    // console.log('tasks are here')

    
    })();
    
// console.log('end here')
    

class ChangeBackground extends React.Component { 
    
    
    constructor(){
        super()
        this.state = { 
            myvalue: "" ,
            image: require('../assets/001.webp'),
        }
    }


    componentWillUnmount(){
        // this.mymain()
        this.props.navigation.navigate('Main_Screen')
    }

    // componentWillUnmount()
    // {
    //     const {params} = this.props.navigation.state;
    //     params.callHome();

    //     // const {params} = this.props.navigation.state;
    //     // params.callHome();
    // }

    // componentDidMount(){
    //     alert('hey')
    // }   
    // componentDidUpdate(){
    //     alert('I 💚')
    // }
    
    mymain () {
        // if ({loadedfirst} == "1"){
        //     console.log('pppppppppp')
        // }

       
    // console.log(global.lmn['loadedfirst'])

        (async () => {
            try{
            global.realm = await Realm.open({
                path: "myrealm",
                schema: [global.BIMG],
            });
        }
        catch{}
            
            // console.log('me there')
            // console.log('enetered here')
            const im = global.realm.objects("Background_image");

            try{
                const current_image = im.filtered("_id = '1'");
                // console.log('here1')
                // console.log( `Current image:  ${current_image.map((current_im) => current_im.name)}` );
                global.current_image_name = `${current_image.map((current_im) => current_im.name)}`
                // const tasks = realm.objects("Background_image");
                // console.log(`The lists of tasks in change bg are: ${tasks.map((task) => task.name)}`);
            }
            catch{console.log('catch')}
    
            // const crre = '../assets/'+global.current_image_name
            // console.log("crre")
            // console.log(crre)

            try{
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
                this.State({ image: require('../assets/001.webp') });
            }

        }
        catch{}

            // this.state.myvalue = "hello"
            // global.myvalue = "hello"
            // global.myvalue = `The lists of tasks are: ${tasks.map((task) => task.name)}`
        })()

        // global.lmn = {loadedfirst}
        // // console.log(global.lmn['loadedfirst'])
        // if (global.lmn['loadedfirst'] === '1'){
        //     // console.log('ppppppppppppppppppppptttttttttttttttttttttttttttt')
        //     this.props.navigation.navigate('Calculator_Screen')
        //     global.lmn['loadedfirst'] = "0"
        // }
        // global.bgimg = require('../assets/mybg1.webp');
        
        // this.setState({ image: require('../assets/') });
    }
    refresh(prop){
        // this.setState({ image: require('../assets/001.webp') });
        (async () => {
            const realm = await Realm.open({
                path: "myrealm",
                schema: [global.BIMG],
            });



            realm.write(() => {
                // Delete all objects from the realm.
                // realm.deleteAll();
                realm.deleteAll();
                // bg_image = null;
            });
            
            // Add a couple of Tasks in a single, atomic transaction
            let bg_image;
            try{
            realm.write(() => {
                bg_image = realm.create("Background_image", {
                _id: 1,
                name: prop,
                // status: "Open",
              });
            //   console.log(`Current image: ${bg_image.name}`);
            });
            }
            catch{console.log('beep')}

            this.mymain()
            // use task1 and task2
            
            
            
            
            // const tasks = realm.objects("Task");
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
            
            
            })();
    }
    render() {
        return(

            <View style={{flex: 1, backgroundColor: 'teal'}} onLayout={(event) => { this.mymain() }}>
                <ImageBackground source={this.state.image} resizeMode="cover" style={{flex: 1}}>

                    

                <View style={{flex: 1, marginTop: '3.5%'}}></View>

                <ScrollView>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("001")}>
                    <Image source={require('../assets/001.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("002")}>
                    <Image source={require('../assets/002.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("003")}>
                    <Image source={require('../assets/003.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("004")}>
                    <Image source={require('../assets/004.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("005")}>
                    <Image source={require('../assets/005.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("006")}>
                    <Image source={require('../assets/006.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>



                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("007")}>
                    <Image source={require('../assets/007.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("008")}>
                    <Image source={require('../assets/008.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("009")}>
                    <Image source={require('../assets/009.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("010")}>
                    <Image source={require('../assets/010.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("011")}>
                    <Image source={require('../assets/011.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("012")}>
                    <Image source={require('../assets/012.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>



                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("013")}>
                    <Image source={require('../assets/013.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("014")}>
                    <Image source={require('../assets/014.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("015")}>
                    <Image source={require('../assets/015.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>









                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("016")}>
                    <Image source={require('../assets/016.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("017")}>
                    <Image source={require('../assets/017.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("018")}>
                    <Image source={require('../assets/018.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("019")}>
                    <Image source={require('../assets/019.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("020")}>
                    <Image source={require('../assets/020.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("021")}>
                    <Image source={require('../assets/021.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("022")}>
                    <Image source={require('../assets/022.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("023")}>
                    <Image source={require('../assets/023.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("024")}>
                    <Image source={require('../assets/024.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20}}>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("025")}>
                    <Image source={require('../assets/025.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("026")}>
                    <Image source={require('../assets/026.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                <Pressable style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]} onPress={() => this.refresh("027")}>
                    <Image source={require('../assets/027.webp')} style={{width: "92%", height: "92%", borderRadius: 25}}></Image>
                </Pressable>

                </View>

                </ScrollView>


                <View style={{flex: 1, marginBottom: '3.5%'}}></View>


                {/* <Button onPress={() => this.props.navigation.navigate('Calculator_Screen')} title="Done"></Button> */}

                {/* <Pressable onPress={() => this.props.navigation.navigate('Main_Screen')} style={{height: 200, backgroundColor: 'black'}}>
                    <Text>Done</Text>
                    {/* const runs = "0" */}
                    {/* export {runs} */}
                    {/* <Button title='hello'></Button> */}
                {/* </Pressable> */}

                <View style={{alignItems: 'center'}}>

                <Pressable style={[{backgroundColor: 'rgba(20, 80, 230, 0.6)', width: "93%", aspectRatio: 1/0.18, borderRadius: 60, justifyContent: 'center', color: 'white', borderColor: 'white', borderWidth: 5}]} onPress={() => this.props.navigation.navigate('Main_Screen')}>
                    <Text style={[{color: "white", textAlign: "center", textAlignVertical: "center", fontSize: 30, fontWeight: 'bold'}]}>~ D O N E ~</Text>
                </Pressable>

                </View>

                {/* <Button onPress={() => this.props.navigation.navigate('Main_Screen')} title='my crr'></Button> */}
                {/* <Button title='refresh' onPress={() => this.refresh()}></Button> */}
                {/* <Text style={[{color: 'black'}]}>{global.myvalue}</Text> */}
                <View style={{flex: 1, marginBottom: '3.5%'}}></View>
                </ImageBackground>
            </View>

        )
    }
}
export default ChangeBackground


const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: "30%",
        aspectRatio: 1/1,
        justifyContent: 'center',
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(75, 150, 255, 0.6)',
    },

    title: {
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
});
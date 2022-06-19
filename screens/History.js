import React from 'react'
import {View, Button, Text, TextInput, ScrollView, Pressable} from 'react-native'
import Realm from "realm";


global.dtd = ""
global.current = ""
global.check = "0"
global.num = ""

// const request = require("request-promise");
// const cheerio = require("cheerio");

const request = require("request-promise");
const cheerio = require("cheerio");

global.state_1 = global.state_2 = global.state_3 = global.state_4 = global.state_5 = global.state_6= global.state_7 = global.state_8 = global.state_9 = 
global.state_10 = global.state_11 = global.state_12 = global.state_13 = global.state_14 = global.state_15 = global.state_16 = global.state_17 = global.state_18 = 
global.state_19 = global.state_20 = global.state_21 = global.state_22 = global.state_23 = global.state_24 = 'auto'

// global.state_1 = '0%'

global.current_1 = global.current_2 = global.current_3 = global.current_4 = global.current_5 = global.current_6 = global.current_7 = global.current_8 = 
global.current_9 = global.current_10 = global.current_11 = global.current_12 = global.current_13 = global.current_14 = global.current_15 = global.current_16 = 
global.current_17 = global.current_18 = global.current_19 = global.current_20 = global.current_21 = global.current_22 = global.current_23 = global.current_24 = ""


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


// request("https://smartachievers.online/today-schedule", (error, response, html) => {
//    if (!error && response.statusCode==200){
//       const $= cheerio.load(html)
//    }
   
// })

class History extends React.Component {


    

    

    constructor(){
        super()
        this.state = { 
            ttvl: "",
        }
    }


    
    // some(){

    //     const request = require("request-promise");
    //     const cheerio = require("cheerio");


    //     request("https://smartachievers.online/today-schedule", (error, response, html) => {
    //     if (!error && response.statusCode==200){
    //         const $= cheerio.load(html)

    //         const div_block_1 = $('.heading_s1');
    //         // for (let i = 0; i<=2; i++){
    //     const date = div_block_1.find("h6").text();
    //         // }
    //         const date1 = date.replaceAll(' ','')
    //     console.log("Date: "+date1)
    //     global.dtd = "Date: "+date1
    //     }
        
    //     })
    // }


    // componentDidMount(){
    //     this.main()
    //     // console.log('hello')
    // }

    componentDidMount () {
        let self = this;
        setTimeout(() => {
            // self.props.navigation.replace("Calculator_Screen");
            this.main()
            // this.main()
            // this.nwc('32000')
        }, 0.7)
    }


    // componentDidUpdate(){
    //     this.main()
    // }


    
    back(num){
        // self.props.navigation.replace("Calculator_Screen");
        try{
            global.num = num.split(/=/)[0].slice(0, -1)
            console.log(global.num)
            global.equal_pressed = "0"
        }
        catch{}
        // console.log('spcl: ' + num.split(/=/)[0])
        this.props.navigation.navigate('Calculator_Screen', {prop: 'value'})
        // console.log('num: ' + num)
    }


    main(){
        this.setState({ ttvl: "hey" })
    }

    

    clearhist(){
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


            realm1.write(() => {
                // Delete all objects from the realm.
                // realm.deleteAll();
                                                                                                                                                                    realm1.deleteAll();
                // bg_image = null;
                
            });

            

        })();

        global.current = ""
        global.current_1 = global.current_2 = global.current_3 = global.current_4 = global.current_5 = global.current_6 = global.current_7 = global.current_8 = 
global.current_9 = global.current_10 = global.current_11 = global.current_12 = global.current_13 = global.current_14 = global.current_15 = global.current_16 = 
global.current_17 = global.current_18 = global.current_19 = global.current_20 = global.current_21 = global.current_22 = global.current_23 = global.current_24 = ""
        // for (let i = 1; i <= 24; i++){
            // global.current = global.current + "\r\n" + "History " + i + ": "
            // global.current = ""
        // }
        this.main()
    }



    nwc(x) {
        // console.log(x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))
        console.log(x.toLocaleString())
    }
    

    // nwc('32000')

    render() {

        // this.numberWithCommas("32000")
        
        
        
        // this.main()
        
        // console.log('me here in hostoryyyyyyyyyyyyyyyyyyyyyyyyyyy')
        // this.setState({ total_val: global.dtd })

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



            // realm1.write(() => {
            //     realm1.deleteAll();
            // });
            // let creation;
            // try{
            // realm1.write(() => {
            //     // console.log('here')
            //     creation = realm1.create("History_data", {
            //     _id: 1,
            //     equation_value: main+" = "+global.currect_equation,
            //   });
            // });
            // }
            // catch{console.log('already err')}



            // global.given = 2
            global.current = ""
            
            for (let i = 1; i <= 24; i++){
            const im1 = realm1.objects("History_data");
            // // const txt = String(_id = global.given)
            const tx = String("_id=" + i)
            // console.log("tx" + tx )
            const current_image1 = im1.filtered(tx);
            const cmn = `${current_image1.map((current_im1) => current_im1.equation_value)}`
            // console.log("History " + i + ": " + cmn)

            if (i == 1){
                if (cmn != ""){
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    global.current_24 = cmn
                    global.state_24 = 'auto'
                }
                else{
                    global.state_24 = '0%'
                }
            }

            else if (i == 2){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_23 = "\r\n" + cmn + "\r\n"
                    global.current_23 = cmn
                    global.state_23 = 'auto'
                }
                else{
                    global.state_23 = '0%'
                }
            }

            else if (i == 3){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_23 = "\r\n" + cmn + "\r\n"
                    global.current_22 = cmn
                    global.state_22 = 'auto'
                }
                else{
                    global.state_22 = '0%'
                }
            }

            else if (i == 4){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_21 = cmn
                    global.state_21 = 'auto'
                }
                else{
                    global.state_21 = '0%'
                }
            }

            else if (i == 5){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_20 = cmn
                    global.state_20 = 'auto'
                }
                else{
                    global.state_20 = '0%'
                }
            }

            else if (i == 6){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_19 = cmn
                    global.state_19 = 'auto'
                }
                else{
                    global.state_19 = '0%'
                }
            }

            else if (i == 7){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_18 = cmn
                    global.state_18 = 'auto'
                }
                else{
                    global.state_18 = '0%'
                }
            }

            else if (i == 8){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_17 = cmn
                    global.state_17 = 'auto'
                }
                else{
                    global.state_17 = '0%'
                }
            }

            else if (i == 9){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_16 = cmn
                    global.state_16 = 'auto'
                }
                else{
                    global.state_16 = '0%'
                }
            }

            else if (i == 10){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_15 = cmn
                    global.state_15 = 'auto'
                }
                else{
                    global.state_15 = '0%'
                }
            }

            else if (i == 11){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_14 = cmn
                    global.state_14 = 'auto'
                }
                else{
                    global.state_14 = '0%'
                }
            }

            else if (i == 12){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_13 = cmn
                    global.state_13 = 'auto'
                }
                else{
                    global.state_13 = '0%'
                }
            }

            else if (i == 13){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_12 = cmn
                    global.state_12 = 'auto'
                }
                else{
                    global.state_12 = '0%'
                }
            }

            else if (i == 14){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_11 = cmn
                    global.state_11 = 'auto'
                }
                else{
                    global.state_11 = '0%'
                }
            }

            else if (i == 15){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_10 = cmn
                    global.state_10 = 'auto'
                }
                else{
                    global.state_10 = '0%'
                }
            }

            else if (i == 16){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_9 = cmn
                    global.state_9 = 'auto'
                }
                else{
                    global.state_9 = '0%'
                }
            }

            else if (i == 17){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_8 = cmn
                    global.state_8 = 'auto'
                }
                else{
                    global.state_8 = '0%'
                }
            }

            else if (i == 18){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_7 = cmn
                    global.state_7 = 'auto'
                }
                else{
                    global.state_7 = '0%'
                }
            }

            else if (i == 19){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_6 = cmn
                    global.state_6 = 'auto'
                }
                else{
                    global.state_6 = '0%'
                }
            }

            else if (i == 20){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_5 = cmn
                    global.state_5 = 'auto'
                }
                else{
                    global.state_5 = '0%'
                }
            }

            else if (i == 21){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_4 = cmn
                    global.state_4 = 'auto'
                }
                else{
                    global.state_4 = '0%'
                }
            }

            else if (i == 22){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_3 = cmn
                    global.state_3 = 'auto'
                }
                else{
                    global.state_3 = '0%'
                }
            }

            else if (i == 23){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_2 = cmn
                    global.state_2 = 'auto'
                }
                else{
                    global.state_2 = '0%'
                }
            }

            else if (i == 24){
                if (cmn != ""){
                    while(cmn.includes("*") || cmn.includes("/")){
                        cmn = cmn.replace('*', '×')
                        cmn = cmn.replace('/', '÷')
                    }
                    // global.current_1 = "\r\n" + cmn + "\r\n"
                    global.current_1 = cmn
                    global.state_1 = 'auto'
                }
                else{
                    global.state_1 = '0%'
                }
            }
            
            }

            // console.log(global.current)
            console.log(global.current_1)

            

            // this.setState({ ttvl: global.current })
            // this.main()
            

            // const tasks = realm1.objects("History_data").filtered("_id=1");
            // console.log('taks: ' + cmn)

            })();

            

            
        console.log("main" + global.current_1)
        console.log("main2" + global.current_2)
        console.log("main3" + global.current_3)
            // this.main()
            // 
            // global.dtd = "hno"

        return(

            
            <View style={{flex: 1, backgroundColor: 'rgb(65, 179, 247)', alignItems: 'center', justifyContent: 'center'}}>
                
                    {/* <Text style={{color: 'black', fontSize: 40}}>History</Text> */}
                    <Pressable style={[{backgroundColor: '#ffb703', width: "100%", aspectRatio: 1/0.16, borderRadius: 0, justifyContent: 'center', color: 'black', borderColor: 'white', borderWidth: 5}]}>
                        <Text style={[{color: "black", textAlign: "center", textAlignVertical: "center", fontSize: 28, fontWeight: 'bold'}]}>~ H I S T O R Y ~</Text>
                    </Pressable>
                    {/* <Text style={{color: 'black', fontSize: 40}}>{global.dtd}</Text> */}
                    <ScrollView style={{width: '100%', marginTop: '4%', marginLeft: '4%'}}>

                        <Pressable onPress={() => this.back(global.current_1)} style={{height: global.state_1}}>
                            {global.state_1 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_1}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_2)} style={{height: global.state_2}}>
                            {global.state_2 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_2}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_3)} style={{height: global.state_3}}>
                            {global.state_3 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_3}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_4)} style={{height: global.state_4}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_4}></TextInput> */}
                            {global.state_4 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_4}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_5)} style={{height: global.state_5}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_5}></TextInput> */}
                            {global.state_5 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_5}></TextInput>: null }
                        </Pressable>
                    
                        <Pressable onPress={() => this.back(global.current_6)} style={{height: global.state_6}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_6}></TextInput> */}
                            {global.state_6 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_6}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_7)} style={{height: global.state_7}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_7}></TextInput> */}
                            {global.state_7 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_7}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_8)} style={{height: global.state_8}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_8}></TextInput> */}
                            {global.state_8 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_8}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_9)} style={{height: global.state_9}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_9}></TextInput> */}
                            {global.state_9 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_9}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_10)} style={{height: global.state_10}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_10}></TextInput> */}
                            {global.state_10 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_10}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_11)} style={{height: global.state_11}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_11}></TextInput> */}
                            {global.state_11 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_11}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_12)} style={{height: global.state_12}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_12}></TextInput> */}
                            {global.state_12 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_12}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_13)} style={{height: global.state_13}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_13}></TextInput> */}
                            {global.state_13 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_13}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_14)} style={{height: global.state_14}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_14}></TextInput> */}
                            {global.state_14 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_14}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_15)} style={{height: global.state_15}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_15}></TextInput> */}
                            {global.state_15 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_15}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_16)} style={{height: global.state_16}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_16}></TextInput> */}
                            {global.state_16 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_16}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_17)} style={{height: global.state_17}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_17}></TextInput> */}
                            {global.state_17 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_17}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_18)} style={{height: global.state_18}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_18}></TextInput> */}
                            {global.state_18 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_18}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_19)} style={{height: global.state_19}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_19}></TextInput> */}
                            {global.state_19 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_19}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_20)} style={{height: global.state_20}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_20}></TextInput> */}
                            {global.state_20 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_20}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_21)} style={{height: global.state_21}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_21}></TextInput> */}
                            {global.state_21 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_21}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_22)} style={{height: global.state_22}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_22}></TextInput> */}
                            {global.state_22 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_22}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_23)} style={{height: global.state_23}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_23}></TextInput> */}
                            {global.state_23 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_23}></TextInput>: null }
                        </Pressable>

                        <Pressable onPress={() => this.back(global.current_24)} style={{height: global.state_24}}>
                            {/* <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_23}></TextInput> */}
                            {global.state_24 == 'auto'? <TextInput style={{color: 'black', fontSize: 27}}multiline editable={false} value = {global.current_24}></TextInput>: null }
                        </Pressable>

                    </ScrollView>
                    {/* <Text style={{color: 'black', fontSize: 20, marginBottom: 40}}>Coming Soon 🎉</Text> */}
                    {/* <Button title='BACK' onPress={() => this.props.navigation.navigate('Calculator_Screen')}></Button> */}

                    <Pressable style={[{backgroundColor: '#fb8500', width: "93%", marginBottom: '5%', marginTop: '5%', aspectRatio: 1/0.15, borderRadius: 60, justifyContent: 'center', color: 'white', borderColor: 'white', borderWidth: 5}]} onPress={() => this.clearhist()}>
                        <Text style={[{color: "white", textAlign: "center", textAlignVertical: "center", fontSize: 26, fontWeight: 'bold'}]}>~ C L E A R ~</Text>
                    </Pressable>

                    <Pressable style={[{backgroundColor: '#fb8500', width: "93%", marginBottom: '5%',  aspectRatio: 1/0.15, borderRadius: 60, justifyContent: 'center', color: 'white', borderColor: 'white', borderWidth: 5}]} onPress={() => this.back("  ")}>
                        <Text style={[{color: "white", textAlign: "center", textAlignVertical: "center", fontSize: 26, fontWeight: 'bold'}]}>~ D O N E ~</Text>
                    </Pressable>

                    {/* <Button title='~ REFRESH ~' onPress={() => this.main()}></Button> */}
                
            </View>
        )
    }
}

export default History
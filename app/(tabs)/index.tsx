import React ,{Component} from 'react' ;
import {Button,Text,TextInput,View} from 'react-native';

class Student extends Component {
 constructor() {
  super();
  this.state={
    name:"Yash",
  
  }
 }

 updateName(val)
 {
   this.setState({name:val})
 }
  render()
  {
    return(
      <View>
        <Text style={{fontSize:30,color:"green"}}>{this.state.name} </Text>
       <TextInput placeholder='enter your name'
        onChangeText={(text)=>this.updateName(text)}
         />
       <Button title='press me ' />
       <Student />
      </View>
    )
  }
}

export default Student ; 
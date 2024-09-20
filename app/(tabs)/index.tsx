import React ,{Component} from 'react' ;
import {Button,Text,TextInput,View} from 'react-native';

class Student extends Component {
  fruit =()=>
  {
    console.warn("apple");
  }
  render()
  {
    return(
      <View>
        <Text style={{fontSize:30,color:"green"}}>student component </Text>
       <TextInput placeholder='enter your name' />
       <Button title='press me ' onPress={this.fruit} />
       <Student />
      </View>
    )
  }
}
import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [Enable, setEnable] = useState('false');

  const handleSwitchToggle = () => {
    setEnable(!Enable);
  };

  return (
    <View style ={{backgroundColor: Enable ? "yellow":"black"}}>
    <Text style  = {{textAlign:'center', fontSize: 20, fontWeight: 'bold', marginTop:250, color: Enable ? "black":"white"}}>{Enable ?'AMC MP1': 'AMC MP1'}</Text>
     
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={Enable ? require('./on.jpg'):require('./off.jpg')}style={{height: 200, width: 145, marginTop: 15,marginBottom: 20}}/>
      
      
      <Switch value = {Enable} onValueChange = {handleSwitchToggle} style = {{marginTop: 15, marginBottom: 5}}/>
      <Text style  = {{textAlign:'center', fontSize: 20, fontWeight: 'bold', marginBottom:200, marginTop:20, color: Enable ? "black":"white"}}>{Enable ?'ON': 'OFF'}</Text>
    </View>
    
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

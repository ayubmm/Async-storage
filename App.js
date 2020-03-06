// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// export default class ModalExample extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22, backgroundColor:'blue'}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class BelajarAsyncStorage extends React.Component {
  constructor () {
    super ();
    this.state = {
      name: '',
      hobby: '',
      textName: '',
      textHobby: '',
    };

    AsyncStorage.getItem ('user', (error, result) => {
      if (result) {
        let resultParsed = JSON.parse (result);
        this.setState ({
          name: resultParsed.name,
          hobby: resultParsed.hobby,
        });
      }
    });
  }

  saveData () {
    let name = this.state.textName;
    let hobby = this.state.textHobby;
    let data = {
      name: name,
      hobby: hobby,
    };

    AsyncStorage.setItem ('user', JSON.stringify (data));

    this.setState ({
      name: name,
      hobby: hobby,
    });
    alert ('Data Tersimpan');
  }

  //ini step ke 1
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Biodata Santri Programmer</Text>
        <Text style={styles.instructions}>Nama : {this.state.name}</Text>
        <Text style={styles.instructions}>Hobi : {this.state.hobby}</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={textName => this.setState ({textName})}
          placeholder="Nama Santri"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={textHobby => this.setState ({textHobby})}
          placeholder="Hobi Santri"
        />
        <Button title="Simpan" onPress={this.saveData.bind (this)} />
      </View>
    );
  }
}

//ini step ke 1
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  textInput: {
    height: 35,
    width: '80%',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
  },
});

export default BelajarAsyncStorage;

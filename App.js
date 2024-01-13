import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import  {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [like, jumlahlike] = useState(0);
  const [dislike, jumlahdislike] = useState(0);
  return (
    <View style={styles.container}>
      <Image style= {styles.gambar}
           source={require('./assets/profile.png')} 
         />
      <Text style={styles.baseText}>
      Vicky Fareli
      </Text>
      <Text style={styles.subText}>
      XII RPL 5 / 28
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('WA: 08882484703')}>
          <Text style={styles.buttonText}>Contact Me</Text>
        </TouchableOpacity>
        <Text style={styles.projectText}>
      My Project
      </Text>
      <Image style= {styles.project1}
           source={require('./assets/project1.png')} 
         />
         <View style={styles.likeDislikeContainer}>
        <TouchableOpacity onPress={() => jumlahlike(like + 1)}>
          <AntDesign name="like1" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={styles.likeCount}>Likes: {like}</Text>

        <TouchableOpacity onPress={() => jumlahdislike(dislike + 1)}>
          <AntDesign name="dislike1" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.dislikeCount}>Dislikes: {dislike}</Text>
        <Text style={styles.jumlah}>total: {like + dislike}</Text>
      </View>
      <Image style= {styles.project1}
           source={require('./assets/project2.png')} 
         />
         <View style={styles.likeDislikeContainer}>
        <TouchableOpacity onPress={() => jumlahlike(like + 1)}>
          <AntDesign name="like1" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={styles.likeCount}>Likes: {like}</Text>

        <TouchableOpacity onPress={() => jumlahdislike(dislike + 1)}>
          <AntDesign name="dislike1" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.dislikeCount}>Dislikes: {dislike}</Text>
        <Text style={styles.jumlah}>total: {like + dislike}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  gambar: {
    width: 135,
    height: 133,
    left: 100,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },

  baseText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 130,
    marginTop: 50,
    fontWeight: 'bold'
  },

  subText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 125,
  },

  button: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "mintcream",
    padding: 10,
    borderRadius: 10,
    margin: 100,
  },

  projectText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 125,
    fontSize: 18,
    fontWeight: 'bold'
  },

  project1: {
    marginTop: 20,
    left: 10,
    width: 300,
    height: 140,
    textAlign: 'center',
    
  },
  likeDislikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    fontSize: 16,
    marginLeft: 5,
  },
  dislikeCount: {
    fontSize: 16,
    marginLeft: 10,
  },
});

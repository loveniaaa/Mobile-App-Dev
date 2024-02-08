import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.texkHead}>WELCOME</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Image Gallery</Text>
          <Text style={styles.text1}>You can see our Photo's</Text>
          <View style={styles.content}>
            <View style={styles.contentList}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE'}} style={styles.imageContent}/>
              <Text style={styles.textContent}>Shyamanta Baruah</Text>
            </View>

            <View style={styles.contentList1}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'}} style={styles.imageContent1}/>
              <Text style={styles.textContent}>Paul Jarvis</Text>
            </View>

            <View style={styles.contentList}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'}} style={styles.imageContent}/>
              <Text style={styles.textContent}>Jerry Adney</Text>
            </View>

            <View style={styles.contentList1}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g'}} style={styles.imageContent1}/>
              <Text style={styles.textContent}>Yoni Kaplan-Nadel</Text>
            </View>

            <View style={styles.contentList}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI'}} style={styles.imageContent}/>
              <Text style={styles.textContent}>Ryan Mcguire</Text>
            </View>

            <View style={styles.contentList1}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI'}} style={styles.imageContent1}/>
              <Text style={styles.textContent}>Oleg Chursin</Text>
            </View>

            <View style={styles.contentList}>
              <Image source={{uri: 'https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so'}} style={styles.imageContent}/>
              <Text style={styles.textContent}>Luke Chesser</Text>
            </View>
          </View>
          <TextInput placeholder='Komentar' style={styles.textKomen}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  header: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: 409,
    height: 70,
    marginBottom: 20,

  },

  texkHead: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  body: {
    padding: 20,
  },

  textKomen: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 15,
  },

  content: {
    display: 'flex',
    flexDirection: 'column',

  },

  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  text1: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 40,
  },

  contentList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
  },

  contentList1: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
  },

  imageContent: {
    width: 170,
    height: 120,
    marginRight: 30,
    borderRadius: 15,
  },

  imageContent1: {
    width: 170,
    height: 120,
    marginLeft: 30,
    borderRadius: 15,
  },

  textContent: {
    fontSize: 17,
  }
});

export default App;
import React, { Component } from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from '../../styles/_dashboard'

class Dashboard extends Component {
        render(){
            return (
        <ScrollView>
          <View style={styles.container}>
            {/*Header*/}
              <View style={styles.welcome}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textWelcome}>Welcome to My App</Text>          
                  <View style={styles.warning}>
                    <Image source={require('../../assets/icon/seru.png')} style={styles.imageWarn}/>
                    <Text style={{color: '#efdd39'}}>  warning if you are not human</Text>
                  </View>
                </View>
                    <Image source={require('../../assets/icon/people.png')} style={styles.imagePeople}/>
              </View>
            {/*PopUp Information*/}
            <View>
              <View style={styles.popContainer}>
                <Text style={styles.popTitle}>What is My App?</Text>
                <Text style={styles.popContent}>My App is aplication in android which we can control your live</Text>
              </View>
            </View>
            {/*Menu*/}
              <ScrollView horizontal>
              <View style={styles.menu}>
                <Text style={{marginLeft: 100,}}>Home</Text>
                <Text style={{marginLeft: 100,}}>Activity</Text>
                <Text style={{marginLeft: 100,}}>Task</Text>
                <Text style={{marginLeft: 100,}}>Achieve</Text>
              </View>
              </ScrollView>
            
            {/*Main*/}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.mainStudy}>
                  <View style={styles.mainStudyTitle}>
                    <Text style={styles.mainStudyText}>Study</Text>
                    <Image source={require('../../assets/icon/study.png')} style={styles.mainStudyImage}/>
                  </View>
                  <View style={styles.mainStudyKet}>
                    <Text style={styles.mainTextWarn}> 19 task not complete</Text>
                  </View>
                </View>
                <View style={styles.mainGarden}>
                  <View style={styles.mainGardenTitle}>
                    <Text style={styles.mainGardenText}>Gardening</Text>
                    <Image source={require('../../assets/icon/plant.png')} style={styles.mainGardenImage}/>
                  </View>
                  <View style={styles.mainGardenKet}>
                    <Text style={styles.mainTextWarn}> 9 task not complete</Text>
                  </View>
                </View>
            </View>
          </View>
        </ScrollView>
        )}
    }
export default Dashboard;
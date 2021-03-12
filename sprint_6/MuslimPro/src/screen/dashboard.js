import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Styles from '../styles/_dashboard';

function Dashboard () {
    return (
    <View style={{backgroundColor: '#808DF9'}}>
    <ScrollView>
        <View style={Styles.container}>
            <View style={Styles.topTabIcon}>
                <Image source={require('../assets/icon/list.png')} style={[Styles.topTabIconSize, {tintColor: 'white'}]}/>
                <Image source={require('../assets/icon/settings.png')} style={[Styles.topTabIconSize, {tintColor: 'white'}]}/>
            </View>
            <View>
                <Image source={require('../assets/icon/mosque.png')} style={Styles.logo}/>
            </View>
            <View style={{marginVertical: '10%'}}>
                <Text style={Styles.date}>Tuesday 4th December 2019</Text>
                <Text style={Styles.date}>6 Rabi al-Akhir 1441</Text>
            </View>
            <View style={Styles.timeContainer}>
                <View style={Styles.timePray}>
                    <Image source={require('../assets/icon/clock.png')} style={Styles.timeClock}/>
                    <Text>Fajr</Text>
                    <Text>05.45</Text>
                </View>
                <View style={Styles.timePray}>
                    <Image source={require('../assets/icon/clock.png')} style={Styles.timeClock}/>
                    <Text>Sunrise</Text>
                    <Text>05.45</Text>
                </View>
                <View style={Styles.timePray}>
                    <Image source={require('../assets/icon/clock.png')} style={Styles.timeClock}/>
                    <Text>Duhr</Text>
                    <Text>11.45</Text>
                </View>
                <View style={Styles.timePray}>
                    <Image source={require('../assets/icon/clock.png')} style={Styles.timeClock}/>
                    <Text>Asr</Text>
                    <Text>14.45</Text>
                </View>
                <View style={Styles.timePray}>
                    <Image source={require('../assets/icon/clock.png')} style={Styles.timeClock}/>
                    <Text>Maghrib</Text>
                    <Text>17.45</Text>
                </View>
                <View style={[Styles.timePray, {marginBottom: 12, borderBottomColor: 'white'}]}>
                    <Image source={require('../assets/icon/clock.png')} style={Styles.timeClock}/>
                    <Text>Isha</Text>
                    <Text>18.45</Text>
                </View>
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={[Styles.statusPrayerText, {fontSize: 15}]}>Current prayer time finishes in</Text>
                <Text style={[Styles.statusPrayerText, {fontSize: 20, fontWeight: 'bold'}]}>05 Hours and 44 Minutes</Text>
            </View>
            <View style={Styles.news}>
                <View style={Styles.newsText}>
                    <Text style={Styles.newsContentTitle}>Event</Text>
                    <Text style={Styles.newsContent}>Ramadan</Text>
                    <Text style={Styles.newsContent}>Kareem Taraweeh</Text>
                    <Text style={Styles.newsContent}>Prayer : 20:30</Text>
                    <Text style={Styles.newsDate}> 14:20 PM, Tuesday</Text>
                </View>
                <Image source={require('../assets/image/Masjid.jpg')} style={Styles.newsImage}/>
            </View>


        </View>
    </ScrollView>
    </View>
    )
}

export default Dashboard

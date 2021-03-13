import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from '../styles/_profile';

const Profile = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.profile}>
                <Image source={require('../assets/image/edward.jpg')} style={Styles.photoProfile}/>
                <View style={Styles.menuProfile}>
                    <Text style={Styles.nameProfile}>Floyd Hayes</Text>
                    <Text style={Styles.job}>Photographer</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Styles.followButton}>Follow</Text>
                        <Image source={require('../assets/icon/send.png')} style={Styles.sendMessageButton}/>
                    </View>
                </View>
            </View>

            <View style={Styles.status}>
                <View>
                    <Text style={Styles.statusNumb}>210</Text>
                    <Text style={{color: 'grey'}}>Photo</Text>
                </View>
                <View>
                    <Text style={Styles.statusNumb}>15k</Text>
                    <Text style={{color: 'grey'}}>Followers</Text>
                </View>
                <View>
                    <Text style={Styles.statusNumb}>605</Text>
                    <Text style={{color: 'grey'}}>Following</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Image source={require('../assets/image/photo1.jpg')} 
                    style={Styles.gambar}/>
                    <Image source={require('../assets/image/photo2.jpg')} 
                    style={Styles.gambar}/>
                </View>
                <View>
                    <Image source={require('../assets/image/photo3.png')} 
                    style={Styles.gambar}/>
                    <Image source={require('../assets/image/photo4.jpg')}
                    style={Styles.gambar}/>
                </View>
            </View>
        </View>
    )
}

export default Profile;

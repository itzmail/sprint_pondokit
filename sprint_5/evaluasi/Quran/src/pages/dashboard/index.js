import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableHighlight,  } from 'react-native'
import styles from '../../styles/_dashboard'

const Dashboard = () => {
    return(
        <View style={styles.container}>
        <ScrollView>
        {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Quran App</Text>
                <TouchableHighlight>
                    <Image source={require('../../assets/icons/search.png')} style={styles.headerImage}/>
                </TouchableHighlight>
            </View>
            <View>
                <Text style={{color: 'grey'}}>Assalamualaikum</Text>
                <Text style={{marginTop: 20, fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>Huniya Mughal</Text>
            </View>

        {/* popUp Box */}
            <View style={styles.popup}>
                <View style={styles.popupLastRead}>
                    <Image source={require('../../assets/icons/lastRead.png')} style={styles.popupLastReadImage}/>
                    <Text style={styles.popupLastReadText}>Last Read</Text>
                </View>
                <View style={styles.popupList}>
                    <View>
                        <Text style={styles.popupSurah}>Al-Fatiha</Text>
                        <Text style={styles.popupAyat}>Ayat No 1</Text>
                    </View>
                    <Image source={require('../../assets/icons/quranDashboard.png')} style={styles.popupImage}/>
                </View>
            </View>
        {/* menu */}
            <View>
                <ScrollView horizontal>
                    <Text style={styles.menuText}>Surah</Text>
                    <Text style={styles.menuText}>Para</Text>
                    <Text style={styles.menuText}>Page</Text>
                    <Text style={styles.menuText}>Hijb</Text>
                </ScrollView>
            </View>
        {/* List Quran */}
            <View>
                <View style={{borderTopWidth: 1, borderTopColor: 'grey', marginVertical: 20}} />
                    <View style={styles.list}>
                        <Text style={styles.listAyat}>  1</Text>
                        <View style={styles.listSurah}>
                            <Text>Al-Fatiha</Text>
                            <Text>Makkah -7 verse</Text>
                        </View>
                    </View>
                <View style={{borderTopWidth: 1, borderTopColor: 'grey', marginVertical: 20}} />
                    <View style={styles.list}>
                        <Text style={styles.listAyat}>  2</Text>
                        <View style={styles.listSurah}>
                            <Text>Al-Baqarah</Text>
                            <Text>Madinah -286 verse</Text>
                        </View>
                    </View>
                <View style={{borderTopWidth: 1, borderTopColor: 'grey', marginVertical: 20}} />
                    <View style={styles.list}>
                        <Text style={styles.listAyat}>  3</Text>
                        <View style={styles.listSurah}>
                            <Text>Ali 'Imran</Text>
                            <Text>Makkah -200 verse</Text>
                        </View>
                    </View>
                <View style={{borderTopWidth: 1, borderTopColor: 'grey', marginVertical: 20}} />
                    <View style={styles.list}>
                        <Text style={styles.listAyat}>  4</Text>
                        <View style={styles.listSurah}>
                            <Text>Al-Fatiha</Text>
                            <Text>Makkah -176 verse</Text>
                        </View>
                    </View>
            </View>

            {/* Button */}
            <View>
                <Image source={require('../../assets/icons/quranOpening.png')} style={styles.buttonImage}/>
            </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard;

import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../styles/_dashboard';
import Blank from '../screen/Blank'

const Dashboard = ({navigation}) => {
        return(
        <View style={Styles.container}>
            <View style={Styles.navbar}>
                <Text style={Styles.navTitle}> Actions </Text>
                <Image source={require('../assets/icon/man.png')} style={Styles.photoprofil}/>
            </View>
            <View>
                <ScrollView horizontal>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.topTab}>Toutes</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
            <View>
            <ScrollView>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={[Styles.option, {marginTop: 15}]}>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.option}>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.option}>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.option}>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.option}>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.option}>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Blank")}}>
                        <Text style={Styles.option}>Test</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
        )
}

export default Dashboard;
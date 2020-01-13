import React from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Button } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
import Colors from "../constants/Colors";

const NewPlaceScreen = props => {
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput />
        <Button title="Save Place" color={Colors.primary} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place"
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
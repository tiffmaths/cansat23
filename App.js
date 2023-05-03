import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from './components/Button';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

const MyBezierLineChart = () => {
  return (
    <>
      <Text style={styles.header}>CO2 concentration / ppm (York):</Text>
      <LineChart
        data={{
          labels: ['Time/s'],
          datasets: [
            {
              data: [
                538.0, 539.0, 538.0, 539.0, 542.0, 542.0, 543.0, 543.0, 568.0, 566.0, 569.0, 570.0, 578.0, 579.0, 574.0, 560.0, 556.0, 570.0, 578.0, 576.0, 575.0, 570.0, 560.0, 578.0, 578.0, 574.0, 562.0
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const PressureGraph1 = () => {
  return (
    <>
      <Text style={styles.header}>Pressure/Pa (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                1017.29, 1017.28, 1017.29, 1017.29, 1017.29, 1017.29, 1017.3, 1017.3, 1017.29, 1017.29, 1017.3, 1017.28, 1017.18, 1017.16, 1017.15, 1017.14, 1017.15, 1017.15, 1017.16, 1017.16, 1018.22, 1018.32, 1019.43, 1020.32, 1045.21, 1052.43, 1060.2
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        xAxisLabel={'Time/s '}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const AltGraph1 = () => {
  return (
    <>
      <Text style={styles.header}>Altitude/m (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                -33.25, -33.2, -33.25, -33.25, -33.25, -33.25, -33.33, -33.33, -33.28, -33.28, -33.25, -33.15, -32.65, -32.85, -32.8, -32.75, -32.8, -32.8, -32.75, -32.75, -27.45, -26.95, -21.4, -16.95, 108.05, 143.05, 178.55
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const TempGraph1 = () => {
  return (
    <>
      <Text style={styles.header}>Temperature/C (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                12.13, 12.16, 12.18, 12.01, 12.28, 11.76, 11.65, 11.12, 11.76, 11.87, 11.09, 11.07, 11.04, 11.02, 11.01, 10.98, 11.05, 11.07, 11.02, 11.05, 11.12, 11.13, 11.13, 11.14, 11.06, 11.05, 11.04
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const HumGraph1 = () => {
  return (
    <>
      <Text style={styles.header}>Humidity / % (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                45.83, 45.81, 45.79, 45.76, 45.75, 45.68, 45.66, 45.63, 45.62, 45.6, 45.6, 45.59, 45.57, 45.58, 45.56, 45.55, 45.55, 45.52, 44.5, 44.47, 44.43, 43.23, 42.09, 41.28, 40.16, 40.08, 39.76
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const CO2Graph1 = () => {
  return (
    <>
      <Text style={styles.header}>CO2 Concentration/ ppm (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                538.0, 539.0, 538.0, 539.0, 542.0, 542.0, 543.0, 543.0, 568.0, 566.0, 569.0, 570.0, 578.0, 579.0, 574.0, 560.0, 556.0, 570.0, 578.0, 576.0, 575.0, 570.0, 560.0, 578.0, 578.0, 574.0, 562.0
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const NO2Graph1 = () => {
  return (
    <>
      <Text style={styles.header}>NO2 Concentration/ ppm (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                19305.0, 17745.0, 20995.0, 18590.0, 17160.0, 16250.0, 15600.0, 14885.0, 14625.0, 14430.0, 14430.0, 14235.0, 14040.0, 13585.0, 13585.0, 13520.0, 13455.0, 13455.0, 13390.0, 13130.0, 13195.0, 13325.0, 13390.0, 13455.0, 13520.0, 13260.0, 28535.0
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const VGraph1 = () => {
  return (
    <>
      <Text style={styles.header}>Volatile Organic Compounds / ppm (York):</Text>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                6.3011578, 6.489656800000001, 6.6384718000000005, 6.798530600000001, 6.9493298, 7.3904836000000005, 7.4592692000000005, 7.5941948, 7.6768698, 7.7939376000000005, 7.913651000000001, 8.009554, 8.124637600000002, 8.1656444, 8.2555948, 8.3164436, 8.4282202, 8.504281200000001, 8.7589202, 8.812493600000002, 8.8779722, 8.9712296, 9.0426608, 8.9500648, 8.825060200000001, 8.820430400000001, 8.8118322
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};


const MyStackedBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Gas concentrations (York, Essex, London)</Text>
      <StackedBarChart
        data={{
          labels: ['CO2', ],
          legend: ['London', 'York', 'Chelmsford'],
          data: [
            [740, 561.7, 545],
            
          ],
          barColors: ['#999999', '#bfbfbf', '#e6e6e6'],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyProgressChart = () => {
  return (
    <>
      <Text style={styles.header}>CO2 concentration percentage (York, Essex, London)</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#cce6ff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 41, 102, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Pie Chart</Text>
      <PieChart
        data={[
          {
            name: 'Pressure',
            population: 0.2 ,
            color: 'rgb(51, 102, 0)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Altitude',
            population: 0.2  ,
            color: '#59b300',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Temperature',
            population: 0.2  ,
            color: '#73e600',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Humidity',
            population: 0.2  ,
            color: '#009900',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
         {name: 'CO2',
         population: 0.2 ,
          color: '#004d00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //For the absolute number else percentage
      />
    </>
  );
};

const pressuregraph = require('./assets/presspic.png')
const altgraph = require('./assets/altitudepic.png')
const tempgraph = require('./assets/temp-pic.png')
const humgraph = require('./assets/humidity-pic.png')
const map = require('./assets/map.png')
const astronaut = require('./assets/astronaut.png')
const skull = require('./assets/skull3.png')

function HomeScreen({ navigation }) {

  

  return (
    <View style={styles.menucontainer}>
      <Text style={{ color: '#002966' , fontSize: '50'}}>Welcome</Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "primary" label="Primary Mission" />
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "secondary" label="Secondary Mission" />
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "dashboard" label="Dashboard" />
    </View>
  );
}

function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={styles.graphcontainer}>

<MyBezierLineChart />
<MyStackedBarChart />
<MyProgressChart />
        
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}


function PrimaryMission({ navigation }) {
  return (
    <View style={styles.menucontainer}>
      <Text style={{ color: '#fff' , fontSize: '40'}}>P.A.T.H Sensors </Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 

      <Button theme = "pressure" label="Pressure" />
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "temp" label="Temperature" />
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "altitude" label="Altitude" />
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "humidity" label="Humidity" />
      {/*<Button
        title="Primary again?"
        onPress={() => navigation.push('PrimaryMission')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
  />*/}
    </View>
  );
}

function SecondaryMission({ navigation }) {
  return (
    <View style={styles.menucontainer}>
      <Text style={{ color: '#fff' , fontSize: '40'}}>Search for Habitability</Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "sensor" label="Sensor Data" />
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Button theme = "habitability" label="Habitability Check" />
    </View>
  );
}
function PressurePage({ navigation }) {
  return (
    <View style={styles.graphcontainer}>
      <Image source={pressuregraph} style={styles.graphimage} />
        <Text style={{ color: '#fff' , fontSize: '15'}}> 🫨The highest pressure recorded was</Text> 
        <Text style={{ color: '#ff0000' , fontSize: '15'}}> 500 Pa </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 😵‍💫 The lowest pressure recorded was</Text> 
        <Text style={{ color: '#99ccff' , fontSize: '15'}}> 600 Pa</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ✅ This Pressure could sustain long term human life </Text> 
  </View> 
    
  );
}

function AltitudePage({ navigation }) {
  return (
    <View style={styles.graphcontainer}>
      <Image source={altgraph} style={styles.graphimage} />
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 🏔️The highest altitude recorded was</Text> 
        <Text style={{ color: '#ff0000' , fontSize: '15'}}> 1 km </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 🕳️ The lowest altitude recorded was</Text> 
        <Text style={{ color: '#99ccff' , fontSize: '15'}}> 0.2 km</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ✅ Since none of our recordings exceeded the habitability parameters: </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> The altitude could sustain long term human life </Text>
  </View> 
    
  );
}


function TemperaturePage({ navigation }) {
  return (
    <View style={styles.graphcontainer}>
      <Image source={tempgraph} style={styles.graphimage} />
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 🔥 The highest temperature recorded was</Text> 
        <Text style={{ color: '#ff0000' , fontSize: '15'}}> 24.54 Degrees Celsius</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ❄️ The lowest temperature recorded was</Text> 
        <Text style={{ color: '#99ccff' , fontSize: '15'}}> 24.38 Degrees Celsius</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ✅ Since none of our recordings exceeded the habitability parameters: </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> Temperature could sustain long term human life </Text>
  </View> 
    
  );
}

function HumidityPage({ navigation }) {
  return (
    <View style={styles.graphcontainer}>
      <Image source={humgraph} style={styles.graphimage} />
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 💧The highest humidity recorded was</Text> 
        <Text style={{ color: '#ff0000' , fontSize: '15'}}> 5% </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 🌵The lowest humidity recorded was</Text> 
        <Text style={{ color: '#99ccff' , fontSize: '15'}}> 0.2% </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ✅ Since none of our recordings exceeded the habitability parameters: </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> The humidity could sustain long term human life </Text>
  </View> 
    
  );
}

function HabitabilityPage({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={styles.graphcontainer}>

      <MyPieChart/>
      <Text style={{ color: '#000000' , fontSize: '30'}}></Text> 
      <Text style={{ color: '#000000' , fontSize: '30'}}></Text> 
      <Text style={{ color: '#000000' , fontSize: '30'}}>This Planet is Habitable ✅ </Text> 
      <Image source={map} style={styles.graphimage} />
      
      
    
    </View>
    </ScrollView>
    </SafeAreaView>

    
  );
}

function PATHpage({navigation}) {
  return(
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={styles.graphcontainer}>
    <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <PressureGraph1 />
      <View style ={styles.MainContainer}>
        <Text style={ styles.TextComponentStyle}> Range: 42.8 HPa{"\n"} Maximum Pressure: 1060.2 HPa {"\n"} Minimum Pressure: 1017.4 HPa {"\n"} Mean: 1021.4 HPa</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        </View>
      <AltGraph1/>
      <Text style={ styles.TextComponentStyle}>Maximum Altitude: 178.6 m {"\n"} Mean: 12.0 m </Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <TempGraph1/>
      <Text style={ styles.TextComponentStyle}> Range: 1.3 degrees{"\n"} Maximum Temperature: 12.3 degrees {"\n"} Minimum Temperature: 10.98 degrees {"\n"} Mean: 11.4 degrees</Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
      <HumGraph1/>
      <Text style={ styles.TextComponentStyle}> Range: 6.07% {"\n"} Maximum Humidity: 45.83%  {"\n"} Minimum Humidity: 39.76% {"\n"} Mean: 44.5% </Text> 

    </View>
    </ScrollView>
    </SafeAreaView> 
    
  )
}

function SensorInfo({navigation}) {
  return(
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={styles.graphcontainer}>
      <CO2Graph1/>
      <NO2Graph1/>
      <VGraph1/>

    </View>
    </ScrollView>
    </SafeAreaView> 
    
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PrimaryMission" component={PrimaryMission} />
        <Stack.Screen name="SecondaryMission" component={SecondaryMission} />
        <Stack.Screen name="PATHpage" component={PATHpage} />
        <Stack.Screen name="SensorInfo" component={SensorInfo}/>
        <Stack.Screen name="PressurePage" component={PressurePage} />
        <Stack.Screen name="AltitudePage" component={AltitudePage} />
        <Stack.Screen name="TemperaturePage" component={TemperaturePage} />
        <Stack.Screen name="HumidityPage" component={HumidityPage} />
        <Stack.Screen name="HabitabilityPage" component={HabitabilityPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;






      
   {/*<View style={styles.container}>

{/*<View style={styles.imageContainer}>
       
       * } <Image source={PlaceholderImage} style={styles.image} />
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> 🔥 The highest temperature recorded was</Text> 
        <Text style={{ color: '#ff0000' , fontSize: '15'}}> 24.54 Degrees Celsius</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ❄️ The lowest temperature recorded was</Text> 
        <Text style={{ color: '#99ccff' , fontSize: '15'}}> 24.38 Degrees Celsius</Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> ✅ Since none of our recordings exceeded the habitability parameters: </Text> 
        <Text style={{ color: '#fff' , fontSize: '15'}}> </Text> 
  <Text style={{ color: '#003300' , fontSize: '15'}}> The temperature on this planet would be safe to sustain long term human life 😁 </Text>
  </View> 


  <Text style={{ color: '#fff' , fontSize: '50'}}>Welcome</Text> 
      <View style={styles.footerContainer}> 

     <Text style={{ color: '#fff' , fontSize: '50'}}></Text> 
     <Text style={{ color: '#fff' , fontSize: '50'}}></Text> 
     <Text style={{ color: '#fff' , fontSize: '50'}}></Text> 
     <Text style={{ color: '#fff' , fontSize: '50'}}></Text> 
        <Button theme = "primary" label="Primary Mission" />
        <Button theme = "primary" label="Secondary Mission"/>
      </View>
      </View>*/}
       


  

const styles = StyleSheet.create({
  menucontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  habcontainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  astroimage: {
    flex: 1,
    aspectRatio: 0.5, 
    resizeMode: 'contain',
    alignItems: 'top'
  },
  graphimage: {
    flex: 1,
    aspectRatio: 0.7, 
    resizeMode: 'flex',  
    alignItems: 'top'
  },
  TextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextComponentStyle: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#002966',
    color: '#000000',
    backgroundColor: '#CDDDC39',
    padding: 10,
    fontsize: 20,
    textAlign: 'center',
    margin: 10
  }
});

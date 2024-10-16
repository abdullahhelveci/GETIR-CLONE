import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'


const {width,height} = Dimensions.get('window')
const index = ({images}:{images:string[]}) => {
    
    const [activeIndex,setActiveIndex] = useState(0)

    const onViewRef = useRef((viewableItems) => {
        if(viewableItems.viewableItems.length > 0){
                setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })

    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold:50})
  return (
    <View style={{
        alignItems:'center',width:'100%',backgroundColor:'white',height:height*0.25,paddingTop:25
    }}>
    <FlatList
    style={{width:width*0.5,height:height*0.21}}
    data={images}
    renderItem={(item) => (
        <Image 
        source={{uri:item.item}}
        style={{width:width*0.5,height:height*0.21,resizeMode:'stretch'}}
        />
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    snapToInterval={width*0.5}
    snapToAlignment='center'
    decelerationRate={'fast'}
    viewabilityConfig={viewConfigRef.current}
    onViewableItemsChanged={onViewRef.current}
    ></FlatList>
    <View style={{flexDirection:'row',alignItems:'center',width:30,height:12,justifyContent:'space-around'}}>
        {images.map((image,index)=> (
            <View key={index} style={[styles.dot,{backgroundColor:activeIndex == index ? '#5d3ebd' : '#f2f0fd'}]} />
        ))}
    </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    dot:{
        width:8,
        height:8,
        borderRadius:20
    }
})
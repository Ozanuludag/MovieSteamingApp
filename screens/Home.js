import React, {useRef, useState, useEffect} from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet,
Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-anchor-carousel';


const Home = () => {
    
    const [background, setBackground] = useState ({
        uri: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
        name: ' Avatar',
        stat: '18 Dec 2009 - 162  min - Action, Adventure, Fantasy',
        desc: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    });

    const [list, setList] = useState ([
        {
            image: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
            title: ' Avatar',
            relased: '18 Dec 2009 - 162  min - Action, Adventure, Fantasy',
            key: 1, 
            desc: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
           },
           {
            image: 'https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            title: ' I am Legend',
            relased: '14 Dec 2007 - 101 min - Action, Adventure, Drama, Sci-Fi, Thriller',
            key: 2, 
            desc: " Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure in this post-apocalyptic action thriller."
           },
           {
            image: 'https://m.media-amazon.com/images/M/MV5BMGY4NzZlMDUtMzk2NC00OWEzLTkwMGUtYmFjN2E1YWZlNzRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            title: ' Unorthodox',
            relased: '26 Mar 2020 - 213 min - Drama',
            key: 3, 
            desc: " Story of a young ultra-Orthodox Jewish woman who flees her arranged marriage and religious community to start a new life abroad."
           },
           {
            image: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            title: ' The Avengers',
            relased: '04 May 2012 - 143 min - Action, Adventure, Sci-Fi',
            key: 4, 
            desc: " Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
           },
    ])

      const [gallery, setGallery] = useState ([
       {
        image: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
        title: ' Avatar',
        relased: '18 Dec 2009 - 162  min - Action, Adventure, Fantasy',
        key: 1, 
        desc: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
       },
       {
        image: 'https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        title: ' I am Legend',
        relased: '14 Dec 2007 - 101 min - Action, Adventure, Drama, Sci-Fi, Thriller',
        key: 2, 
        desc: " Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure in this post-apocalyptic action thriller."
       },
       {
        image: 'https://m.media-amazon.com/images/M/MV5BMGY4NzZlMDUtMzk2NC00OWEzLTkwMGUtYmFjN2E1YWZlNzRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        title: ' Unorthodox',
        relased: '26 Mar 2020 - 213 min - Drama',
        key: 3, 
        desc: " Story of a young ultra-Orthodox Jewish woman who flees her arranged marriage and religious community to start a new life abroad."
       },
       {
        image: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        title: ' The Avengers',
        relased: '04 May 2012 - 143 min - Action, Adventure, Sci-Fi',
        key: 4, 
        desc: " Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
       },
      
    ]);

    const carouselRef = useRef(null);
    const {width, height} = Dimensions.get('window');
    const renderItem = ({item, index}) => {
        return(
            <View>
                <TouchableOpacity
                 onPress={() => { 
                    carouselRef.current.scrollToIndex(index); 
                    setBackground({
                        uri: item.image,
                        name: item.title,
                        stat: item.released,
                        desc: item.desc,

                    })
                    }}
                >

                    <Image source={{uri: item.image}} style={styles.carouselImage} />
                    <Text style={styles.carouselText}>{item.title}</Text>
                    <MaterialIcons name= 'library-add' size={30} color = 'white'
                    style= {styles.carouselIcon}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    
    return (
        <ScrollView style={{backgroundColor:'#000'}}>
            <View style={styles.carouselContentContainer}>
                <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                    <ImageBackground
                    source={{uri: background.uri}}
                    style={styles.ImageBg}
                    blurRadius={10}
                    >
                        <View style={styles.searchBoxContainer}>
                            <TextInput 
                            placeholder='Search  Movies'
                            placeholderTextColor= '#666'
                            style={styles.SearchBox}
                            />
                            <Feather name='search' size={22} color='#666' 
                            style={styles.searchBoxIcon} />
                        </View>
                        <Text style ={{color: 'white', fontSize: 24, fontWeight: 'bold',
                                marginLeft: 10, marginVertical: 10}}> Top Pics This Week </Text>
                        <View style={styles.carouselContainerView}>
                            <Carousel style={styles.carousel} 
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={200}
                                containerWidth={ width-20}
                                separatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                                />

                        </View>
                            <View style={styles.movieInfoContainer}>
                                <View style={{justifyContent:'center',}}>
                                    <Text style={styles.movieName}>{background.name}</Text>
                                    <Text style={styles.movieStat}>{background.stat}</Text>
                                </View>
                                <TouchableOpacity style={styles.playIconContainer}>
                                    <FontAwesome5 name='play' size={22} color='#02ad94'
                                    style={{marginLeft:4}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingHorizontal: 14, marginTop: 14}}>
                                <Text style={{color:'white', opacity: 0.8, lineHeight:20, fontSize:16}} >{background.desc}</Text>
                            </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{ marginHorizontal: 14,}}>
                <Text style = {{color:'white', fontSize:24, fontWeight: 'bold', marginBottom: 24}}> Continue Watching...  </Text>
                <ImageBackground 
                source ={{uri: background.uri}}
                style={{height:250, width:'100%', backgroundColor: '#000'}}
                resizeMode='cover'
                >

                <Text style={{color:'white', padding:14, fontSize:18}}> {background.name} </Text>
                <TouchableOpacity style={{...styles.playIconContainer, position:'absolute', top: '40%', right:'40%'}}>
                                    <FontAwesome5 name='play' size={22} color='#02ad94'
                                    style={{marginLeft:4}}
                                    />
                                </TouchableOpacity>
                </ImageBackground>
                <View style={{flexDirection: 'row', marginBottom:24, marginTop:36, justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:24, color:'white', fontWeight:'bold'}}>My List</Text>
                    <Text style={{fontSize:14, color:'white', fontWeight:'normal'}}>View All</Text>
                </View>
                
                <FlatList
                style={{marginBottom: 30}}
                data={list}
                horizontal={true}
                keyExtractor={(item) => item.key.toString()}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={{marginRight: 20}}>
                            <Image 
                            source={{uri: item.image}}
                            style={{height:300, width:200}}
                            />
                          
                                <View style={{position:'absolute', height:5, width: '100%', backgroundColor: '#02ad94', opacity:0.8}} />
                      
                            <FontAwesome5 
                            name='play' 
                            size={38} 
                            color='#fff' 
                            style={{position:'absolute', top: '45%', left: '45%' }} />
                            
                        </TouchableOpacity>
                    )
                }}

                />

            </View>

        </ScrollView>
);
}
const styles= StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselContentContainer: {
        flex:1,
        backgroundColor: '#000',
        height: Dimensions.get('screen').height- 200,
        paddingHorizontal: 14, 
    },
    ImageBg: {
        flex:1,
        height: null,
        width: null,
        opacity: 1,
        justifyContent: 'flex-start'
    },
    searchBoxContainer: {
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 4,
        marginVertical:10,
        width:'95%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    SearchBox: {
        padding: 12,
        paddingLeft: 20,
        fontSize: 16,
    },
    searchBoxIcon : {
        position: 'absolute',
        right:20,
        top:14,
    },
    carouselContainerView: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    carousel: {
        flex:1,
        overflow: 'visible',
    },
    carouselImage: {
        width: 200,
        height: 320,
        borderRadius:10,
        alignSelf:'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    carouselText: {
        padding:14,
        color: 'white',
        position:'absolute',
        bottom :10,
        left: 2,
        fontWeight: 'bold',
    },
    carouselIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    movieInfoContainer: {
        flexDirection:'row',
        marginTop:16,
        justifyContent:'space-between',
        width: Dimensions.get('window').width-14
    },
    movieName: {
        paddingLeft:14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6, 
    },
    movieStat: {
        paddingLeft:14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        opacity: 0.8
    },
    playIconContainer: {
        backgroundColor: '#212121',
        padding: 18,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10, 
        borderWidth: 4,
        borderColor: 'rgba(2,173,148,0.2)',
        marginBottom: 14,

    }

  })
  

export default Home;

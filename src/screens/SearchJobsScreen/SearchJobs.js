import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/searchByService/SearchByService';
import SearchByLocation from '../../components/searchByLocation/SearchByLocation';
import PostsList from '../../components/postList/PostsList';

export default function SearchJobs() {
    const posts = [{
        _id: '1234',
        service: 'Junk Removal',
        postHeading: 'Bed, Sofa and Tv Stand to dispose',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    },
    {
        _id: '12345',
        service: 'Moving',
        postHeading: 'Bed, Sofa and Tv Stand to move',
        postDescription: ' MovingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        dropOffCity: 'Hope',
        dropOffProvince: 'BC',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    }]
    const [location, setLocation] = useState('')
    const [service, setService] = useState('')

    const onViewDetailsPress = () => {
        console.log("Details pressed")
    }

    return (
        <View style={styles.container}>
            <SearchByLocation
                location={location}
                setLocation={setLocation}
            />
            <SearchByService
                service={service}
                setService={setService}
            />
            <PostsList
                posts={posts}
                onViewDetailsPress={onViewDetailsPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '10%',
        width: '100%',
        height: '100%'
    },
    search: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 5
    },
    cardContainer: {
        width: '100%'
    },
    cardImage: {
        width: 250,
        height: 150,
        alignSelf: 'center'
    },
    cardText: {
        marginTop: 10,
        width: 300,
        textAlign: 'center'
    },
    cardTitle: {
        color: '#2EBCAC'
    }

})

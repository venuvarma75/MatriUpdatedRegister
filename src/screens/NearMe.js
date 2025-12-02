// // NearMe.js
// import React, { useEffect } from 'react';
// import { View, Text, ScrollView, ActivityIndicator, Alert, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import ProfileCard from './ProfileCard';

// // Mock functions - replace with your actual imports
// const fetchUserProfiles = () => ({ type: 'FETCH_PROFILES' });
// const fetchMyProfile = (id) => ({ type: 'FETCH_MY_PROFILE', payload: id });

// const NearMe = () => {
//     const profiles = useSelector((state) => state.profiles?.data || []);
//     const loading = useSelector((state) => state.profiles?.loading || false);
//     const error = useSelector((state) => state.profiles?.error || null);
//     const id = useSelector((state) => state.auth?.id);
//     const myProfile = useSelector((state) => state.auth?.myProfile);
    
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchUserProfiles());
//         if (id) {
//             dispatch(fetchMyProfile(id));
//         }
//     }, [dispatch, id]);

//     const handleSendRequest = (receiverId) => {
//         console.log('Sending request to:', receiverId);
//         Alert.alert('Success', 'Request sent successfully');
//     };

//     const handleViewProfile = (profile) => {
//         console.log('View profile:', profile.id);
//         Alert.alert('Profile', `Viewing ${profile.firstName}'s profile`);
//     };

//     const filteredProfiles = Array.isArray(profiles) ? profiles
//         .filter(p => p.id !== id)
//         .filter(p => p.gender !== myProfile?.gender) : [];

//     if (loading) {
//         return (
//             <View style={styles.center}>
//                 <ActivityIndicator size="large" color="#E94057" />
//                 <Text>Loading nearby matches...</Text>
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.center}>
//                 <Text style={styles.error}>Error loading profiles</Text>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Near Matches For You</Text>
            
//             <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
//                 {filteredProfiles.map((profile) => (
//                     <ProfileCard
//                         key={profile.id}
//                         profile={profile}
//                         onSendRequest={handleSendRequest}
//                         onViewProfile={() => handleViewProfile(profile)}
//                     />
//                 ))}
                
//                 {filteredProfiles.length === 0 && (
//                     <View style={styles.center}>
//                         <Text style={styles.noMatches}>No nearby matches found</Text>
//                     </View>
//                 )}
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F8F9FA',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginVertical: 16,
//         color: '#333',
//     },
//     scrollView: {
//         flex: 1,
//     },
//     scrollContent: {
//         paddingBottom: 20,
//     },
//     center: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     error: {
//         color: 'red',
//         fontSize: 16,
//         textAlign: 'center',
//     },
//     noMatches: {
//         fontSize: 16,
//         color: '#666',
//         textAlign: 'center',
//     },
// });

// export default NearMe;



// NearMe.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

const NearMe = ({ user, registeredUsers, navigation }) => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfiles = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Filter profiles for nearby matches
                const filteredProfiles = registeredUsers
                    .filter(p => p.id !== user?.id)
                    .filter(p => p.gender !== user?.gender);
                
                setProfiles(filteredProfiles);
                setLoading(false);
            } catch (err) {
                setError('Failed to load profiles');
                setLoading(false);
            }
        };

        loadProfiles();
    }, [user, registeredUsers]);

    const handleSendRequest = (receiverId) => {
        console.log('Sending request to:', receiverId);
        Alert.alert('Success', 'Request sent successfully');
    };

    const handleViewProfile = (profile) => {
        console.log('View profile:', profile.id);
        Alert.alert('Profile', `Viewing ${profile.firstName}'s profile`);
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#E94057" />
                <Text>Loading nearby matches...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Near Matches For You</Text>
            
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onSendRequest={handleSendRequest}
                        onViewProfile={() => handleViewProfile(profile)}
                    />
                ))}
                
                {profiles.length === 0 && (
                    <View style={styles.center}>
                        <Text style={styles.noMatches}>No nearby matches found</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#333',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    error: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
    noMatches: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});

export default NearMe;
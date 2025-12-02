// // NewMatches.js
// import React, { useEffect } from 'react';
// import { View, Text, ScrollView, ActivityIndicator, Alert, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import ProfileCard from './ProfileCard';

// // Mock functions - replace with your actual imports
// const fetchUserProfiles = () => ({ type: 'FETCH_PROFILES' });
// const fetchMyProfile = (id) => ({ type: 'FETCH_MY_PROFILE', payload: id });

// const NewMatches = () => {
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
//                 <Text>Loading new matches...</Text>
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
//             <Text style={styles.title}>New Matches For You</Text>
            
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
//                         <Text style={styles.noMatches}>No new matches found</Text>
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

// export default NewMatches;

// NewMatches.js
import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    ActivityIndicator, 
    Alert, 
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar 
} from 'react-native';
import ProfileCard from './ProfileCard';

const NewMatches = ({ user, registeredUsers, navigation }) => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfiles = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1000));
                
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

    const handleBackToDashboard = () => {
        navigation.navigate('dashboard');
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={handleBackToDashboard}
                    >
                        <Text style={styles.backIcon}>←</Text>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>New Matches</Text>
                    <View style={styles.headerPlaceholder} />
                </View>
                <View style={styles.center}>
                    <ActivityIndicator size="large" color="#E94057" />
                    <Text>Loading new matches...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={handleBackToDashboard}
                    >
                        <Text style={styles.backIcon}>←</Text>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>New Matches</Text>
                    <View style={styles.headerPlaceholder} />
                </View>
                <View style={styles.center}>
                    <Text style={styles.error}>{error}</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={handleBackToDashboard}
                >
                    <Text style={styles.backIcon}>←</Text>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>New Matches</Text>
                <View style={styles.headerPlaceholder} />
            </View>

            {/* Content */}
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>New Matches For You</Text>
                
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
                        <Text style={styles.noMatches}>No new matches found</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    backIcon: {
        fontSize: 20,
        color: '#E94057',
        marginRight: 6,
        fontWeight: 'bold',
    },
    backText: {
        fontSize: 14,
        color: '#E94057',
        fontWeight: '600',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        flex: 1,
    },
    headerPlaceholder: {
        width: 60,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#333',
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

export default NewMatches;
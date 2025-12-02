// // MyMatches.js
// import React, { useEffect } from 'react';
// import { View, Text, ScrollView, ActivityIndicator, Alert, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import ProfileCard from './ProfileCard';

// // Mock functions - replace with your actual imports
// const fetchUserProfiles = () => ({ type: 'FETCH_PROFILES' });
// const fetchMyProfile = (id) => ({ type: 'FETCH_MY_PROFILE', payload: id });

// const MyMatches = () => {
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
//                 <Text>Loading top matches...</Text>
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
//             <Text style={styles.title}>Top Matches For You</Text>
            
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
//                         <Text style={styles.noMatches}>No top matches found</Text>
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

// export default MyMatches;



import React from 'react';
import { View, ScrollView, Alert, Text, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

const MyMatches = () => {
    const profiles = [
        {
            id: 1,
            firstName: "Aarushi",
            lastName: "Sharma",
            age: 24,
            height: "5'4\"",
            occupation: "Software Engineer",
            highestEducation: "B.Tech",
            city: "Hyderabad",
            religion: "Hindu",
            subCaste: "Brahmin",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
        },
        {
            id: 2,
            firstName: "Arjun",
            lastName: "Reddy",
            age: 27,
            height: "5'9\"",
            occupation: "Business Analyst",
            highestEducation: "MBA",
            city: "Bangalore",
            religion: "Hindu",
            subCaste: "Reddy",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        },
        {
            id: 3,
            firstName: "Sneha",
            lastName: "Patil",
            age: 25,
            height: "5'5\"",
            occupation: "Doctor",
            highestEducation: "MBBS",
            city: "Pune",
            religion: "Hindu",
            subCaste: "Maratha",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        },
        {
            id: 4,
            firstName: "Rohit",
            lastName: "Verma",
            age: 29,
            height: "6'0\"",
            occupation: "Civil Engineer",
            highestEducation: "M.Tech",
            city: "Delhi",
            religion: "Hindu",
            subCaste: "Kayastha",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        },
        {
            id: 5,
            firstName: "Aditi",
            lastName: "Singh",
            age: 23,
            height: "5'3\"",
            occupation: "HR Manager",
            highestEducation: "MBA",
            city: "Lucknow",
            religion: "Hindu",
            subCaste: "Rajput",
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
        },
        {
            id: 6,
            firstName: "Vishal",
            lastName: "Kumar",
            age: 28,
            height: "5'10\"",
            occupation: "Software Developer",
            highestEducation: "B.Tech",
            city: "Chennai",
            religion: "Hindu",
            subCaste: "Yadav",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        },
        {
            id: 7,
            firstName: "Meera",
            lastName: "Nair",
            age: 26,
            height: "5'5\"",
            occupation: "Fashion Designer",
            highestEducation: "BA Fashion",
            city: "Kochi",
            religion: "Hindu",
            subCaste: "Nair",
            image: "https://tse3.mm.bing.net/th/id/OIP.6GF79-gQ_49Ze3nGrUrsyAHaLH?pid=Api&P=0&h=180"
        },
        {
            id: 8,
            firstName: "Karan",
            lastName: "Mehta",
            age: 30,
            height: "5'11\"",
            occupation: "Entrepreneur",
            highestEducation: "MBA",
            city: "Mumbai",
            religion: "Hindu",
            subCaste: "Jain",
            image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
        },
        {
            id: 9,
            firstName: "Priya",
            lastName: "Das",
            age: 24,
            height: "5'2\"",
            occupation: "Teacher",
            highestEducation: "B.Ed",
            city: "Kolkata",
            religion: "Hindu",
            subCaste: "Bengali",
            image: "https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?pid=Api&P=0&h=180"
        },
        {
            id: 10,
            firstName: "Sandeep",
            lastName: "Gupta",
            age: 27,
            height: "5'8\"",
            occupation: "Bank Officer",
            highestEducation: "B.Com",
            city: "Ahmedabad",
            religion: "Hindu",
            subCaste: "Vaishya",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        }
    ];

    const handleSendRequest = (profileId) => {
        Alert.alert('Success', `Request sent to profile ${profileId}`);
    };

    const handleViewProfile = (profile) => {
        Alert.alert(
            'Profile Details', 
            `Name: ${profile.firstName} ${profile.lastName}\nAge: ${profile.age}\nOccupation: ${profile.occupation}\nLocation: ${profile.city}`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Matches</Text>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onSendRequest={handleSendRequest}
                        onViewProfile={() => handleViewProfile(profile)}
                    />
                ))}
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
});

export default MyMatches;
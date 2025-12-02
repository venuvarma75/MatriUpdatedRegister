// // ProfileCard.js
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// const ProfileCard = ({ profile, onSendRequest, onViewProfile }) => {
//     // For now, using a simple placeholder - you'll need to add actual images to your assets
//     const placeholderImage = { uri: 'https://via.placeholder.com/100x120' };

//     return (
//         <View style={styles.card}>
//             <View style={styles.imageContainer}>
//                 <Image 
//                     source={profile.image ? { uri: profile.image } : placeholderImage}
//                     style={styles.profileImage}
//                     resizeMode="cover"
//                 />
//             </View>

//             <View style={styles.profileDetails}>
//                 <Text style={styles.name}>{profile.firstName} {profile.lastName}</Text>
//                 <Text style={styles.meta}>{profile.age} yrs • {profile.height}</Text>
//                 <Text style={styles.line}>{profile.occupation} • {profile.highestEducation}</Text>
//                 <Text style={styles.line}>{profile.city}</Text>
//                 <Text style={styles.line}>{profile.religion} | {profile.subCaste}</Text>

//                 <View style={styles.btnRow}>
//                     <TouchableOpacity 
//                         style={[styles.btn, styles.viewBtn]}
//                         onPress={onViewProfile}
//                     >
//                         <Text style={styles.btnText}>View Profile</Text>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity 
//                         style={[styles.btn, styles.sendBtn]}
//                         onPress={() => onSendRequest(profile.id)}
//                     >
//                         <Text style={styles.btnText}>Send Request</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 12,
//         marginHorizontal: 16,
//         marginVertical: 8,
//         padding: 16,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//         flexDirection: 'row',
//     },
//     imageContainer: {
//         marginRight: 16,
//     },
//     profileImage: {
//         width: 100,
//         height: 120,
//         borderRadius: 8,
//     },
//     profileDetails: {
//         flex: 1,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 4,
//     },
//     meta: {
//         fontSize: 14,
//         color: '#666',
//         marginBottom: 4,
//     },
//     line: {
//         fontSize: 12,
//         color: '#888',
//         marginBottom: 2,
//     },
//     btnRow: {
//         flexDirection: 'row',
//         marginTop: 12,
//         justifyContent: 'space-between',
//     },
//     btn: {
//         paddingHorizontal: 12,
//         paddingVertical: 8,
//         borderRadius: 6,
//         minWidth: 100,
//     },
//     viewBtn: {
//         backgroundColor: '#6C757D',
//     },
//     sendBtn: {
//         backgroundColor: '#E94057',
//     },
//     btnText: {
//         color: '#FFFFFF',
//         fontSize: 12,
//         fontWeight: '600',
//         textAlign: 'center',
//     },
// });

// export default ProfileCard;



import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileCard = ({ profile, onSendRequest, onViewProfile }) => {
    // For now, using a simple placeholder
    const placeholderImage = { uri: 'https://via.placeholder.com/100x120' };

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image 
                    source={profile.image ? { uri: profile.image } : placeholderImage}
                    style={styles.profileImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.profileDetails}>
                <Text style={styles.name}>{profile.firstName} {profile.lastName}</Text>
                <Text style={styles.meta}>{profile.age} yrs • {profile.height}</Text>
                <Text style={styles.line}>{profile.occupation} • {profile.highestEducation}</Text>
                <Text style={styles.line}>{profile.city}</Text>
                <Text style={styles.line}>{profile.religion} | {profile.subCaste}</Text>

                <View style={styles.btnRow}>
                    <TouchableOpacity 
                        style={[styles.btn, styles.viewBtn]}
                        onPress={onViewProfile}
                    >
                        <Text style={styles.btnText}>View Profile</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={[styles.btn, styles.sendBtn]}
                        onPress={() => onSendRequest(profile.id)}
                    >
                        <Text style={styles.btnText}>Send Request</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
    },
    imageContainer: {
        marginRight: 16,
    },
    profileImage: {
        width: 100,
        height: 120,
        borderRadius: 8,
    },
    profileDetails: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    meta: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    line: {
        fontSize: 12,
        color: '#888',
        marginBottom: 2,
    },
    btnRow: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'space-between',
    },
    btn: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        minWidth: 100,
    },
    viewBtn: {
        backgroundColor: '#6C757D',
    },
    sendBtn: {
        backgroundColor: '#E94057',
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default ProfileCard;
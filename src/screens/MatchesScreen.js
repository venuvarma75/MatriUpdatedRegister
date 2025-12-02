// // MatchesScreen.js
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   Image,
//   Modal,
//   SafeAreaView,
//   StatusBar,
//   Dimensions
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const { width } = Dimensions.get('window');

// // Bottom Navigation Item Component
// const NavItem = ({ icon, label, active, onPress }) => (
//   <TouchableOpacity style={styles.navItem} onPress={onPress}>
//     <Icon 
//       name={icon} 
//       size={20} 
//       color={active ? '#ff6b6b' : '#666'} 
//       style={styles.navIcon} 
//     />
//     <Text style={[styles.navLabel, active && styles.navLabelActive]}>
//       {label}
//     </Text>
//   </TouchableOpacity>
// );

// // Profile Card Component
// const ProfileCard = ({ profile, onInterested, onNotInterested, onViewProfile, onSendMessage }) => (
//   <View style={styles.profileCard}>
//     {/* Last Seen */}
//     <View style={styles.lastSeen}>
//       <Text style={styles.lastSeenText}>Last seen {profile.lastSeen}</Text>
//     </View>

//     {/* Profile Header */}
//     <View style={styles.profileHeader}>
//       <TouchableOpacity 
//         style={styles.imageContainer}
//         onPress={() => onViewProfile(profile)}
//       >
//         {profile.image ? (
//           <Image 
//             source={profile.image} 
//             style={styles.profileImage}
//             resizeMode="cover"
//           />
//         ) : (
//           <View style={styles.defaultImage}>
//             <Icon name="user" size={30} color="#999" />
//           </View>
//         )}
//       </TouchableOpacity>
//       <View style={styles.profileBasicInfo}>
//         <Text style={styles.profileName}>{profile.name}</Text>
//         <Text style={styles.profileAgeHeight}>{profile.age} • {profile.height}</Text>
//         <Text style={styles.profileEducation}>{profile.education}</Text>
//       </View>
//     </View>

//     {/* Profile Details */}
//     <View style={styles.profileDetails}>
//       <View style={styles.detailItem}>
//         <Icon name="map-marker-alt" size={12} color="#666" />
//         <Text style={styles.detailText}>{profile.location}</Text>
//       </View>
//       <View style={styles.detailItem}>
//         <Icon name="briefcase" size={12} color="#666" />
//         <Text style={styles.detailText}>{profile.profession}</Text>
//       </View>
//     </View>

//     {/* Bio */}
//     <View style={styles.bioSection}>
//       <Text style={styles.bioText} numberOfLines={2}>
//         {profile.bio}
//       </Text>
//     </View>

//     {/* Interests */}
//     <View style={styles.interestsSection}>
//       <Text style={styles.interestsTitle}>Interests:</Text>
//       <View style={styles.interestsContainer}>
//         {profile.interests.slice(0, 3).map((interest, index) => (
//           <View key={index} style={styles.interestTag}>
//             <Text style={styles.interestText}>{interest}</Text>
//           </View>
//         ))}
//         {profile.interests.length > 3 && (
//           <View style={styles.interestTag}>
//             <Text style={styles.interestText}>+{profile.interests.length - 3}</Text>
//           </View>
//         )}
//       </View>
//     </View>

//     {/* Action Buttons */}
//     <View style={styles.actionButtons}>
//       <TouchableOpacity 
//         style={[styles.actionButton, styles.viewProfileButton]}
//         onPress={() => onViewProfile(profile)}
//       >
//         <Icon name="eye" size={12} color="#666" />
//         <Text style={styles.viewProfileText}> View Profile</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity 
//         style={[styles.actionButton, styles.messageButton]}
//         onPress={() => onSendMessage(profile)}
//       >
//         <Icon name="comment" size={12} color="#666" />
//         <Text style={styles.messageText}> Message</Text>
//       </TouchableOpacity>
//     </View>

//     {/* Interest Question */}
//     <View style={styles.interestQuestionSection}>
//       <Text style={styles.interestQuestion}>Interested with this profile?</Text>
//       <View style={styles.interestActions}>
//         <TouchableOpacity 
//           style={[styles.interestButton, styles.interestedButton]} 
//           onPress={() => onInterested(profile)}
//         >
//           <Text style={styles.interestedButtonText}>Yes, Interested</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.interestButton, styles.notInterestedButton]} 
//           onPress={() => onNotInterested(profile)}
//         >
//           <Text style={styles.notInterestedButtonText}>No</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );

// const MatchesScreen = ({ user, onLogout, profileImages, navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProfiles, setFilteredProfiles] = useState([]);
//   const [interestedProfiles, setInterestedProfiles] = useState([]);
//   const [showInterestModal, setShowInterestModal] = useState(false);
//   const [currentInterestedProfile, setCurrentInterestedProfile] = useState(null);

//   const profiles = [
//     {
//       id: 1,
//       name: 'Srivalli',
//       age: '22 yrs',
//       height: '5\'0"',
//       education: 'B.Tech',
//       location: 'Hyderabad',
//       profession: 'Software Engineer',
//       lastSeen: '2m ago',
//       image: profileImages?.srivalli,
//       bio: 'Software engineer passionate about technology and innovation. Love traveling and exploring new cultures.',
//       interests: ['Coding', 'Travel', 'Music', 'Photography']
//     },
//     {
//       id: 2,
//       name: 'Vijay Kumar',
//       age: '24 yrs',
//       height: '5\'2"',
//       education: 'MBA',
//       location: 'Bangalore',
//       profession: 'Marketing Manager',
//       lastSeen: '5m ago',
//       image: profileImages?.vijay,
//       bio: 'Marketing professional with a creative mindset. Enjoy cooking and outdoor activities.',
//       interests: ['Marketing', 'Cooking', 'Yoga', 'Reading']
//     },
//     {
//       id: 3,
//       name: 'Anitha',
//       age: '23 yrs',
//       height: '5\'1"',
//       education: 'B.Tech',
//       location: 'Chennai',
//       profession: 'Data Scientist',
//       lastSeen: '10m ago',
//       image: profileImages?.anitha,
//       bio: 'Data scientist who loves solving complex problems. Passionate about AI and machine learning.',
//       interests: ['Data Science', 'AI', 'Chess', 'Dancing']
//     },
//     {
//       id: 4,
//       name: 'Rahul Kumar',
//       age: '25 yrs',
//       height: '5\'8"',
//       education: 'M.Tech',
//       location: 'Delhi',
//       profession: 'Product Manager',
//       lastSeen: '15m ago',
//       image: profileImages?.rahul,
//       bio: 'Product manager with expertise in tech products. Love sports and fitness activities.',
//       interests: ['Product Management', 'Cricket', 'Gym', 'Movies']
//     },
//   ];

//   // Initialize filtered profiles
//   useEffect(() => {
//     setFilteredProfiles(profiles);
//   }, []);

//   // Navigation handlers
//   const navigateToHome = () => {
//     if (navigation && navigation.navigate) {
//       navigation.navigate('dashboard');
//     }
//   };

//   const navigateToMatches = () => {
//     // Already on matches screen
//   };

//   const navigateToChat = (profile) => {
//     if (navigation && navigation.navigate) {
//       navigation.navigate('chat', { profile });
//     }
//   };

//   const navigateToProfile = () => {
//     Alert.alert('Coming Soon', 'Profile feature will be available soon!');
//   };

//   // Search functionality
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredProfiles(profiles);
//     } else {
//       const filtered = profiles.filter(profile =>
//         profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         profile.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         profile.education.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredProfiles(filtered);
//     }
//   }, [searchQuery]);

//   const handleInterested = (profile) => {
//     console.log('Interested in:', profile.name);
    
//     // Add to interested profiles if not already added
//     if (!interestedProfiles.find(p => p.id === profile.id)) {
//       setInterestedProfiles(prev => [...prev, profile]);
//     }
    
//     // Show interest confirmation modal
//     setCurrentInterestedProfile(profile);
//     setShowInterestModal(true);
    
//     // Navigate to chat after a delay
//     setTimeout(() => {
//       setShowInterestModal(false);
//       navigateToChat(profile);
//     }, 2000);
//   };

//   const handleNotInterested = (profile) => {
//     console.log('Not interested in:', profile.name);
//     Alert.alert(
//       'Profile Passed',
//       `You passed on ${profile.name}. We'll show you more matches.`,
//       [{ text: 'OK', style: 'default' }]
//     );
//   };

//   const handleSendMessage = (profile) => {
//     if (navigation && navigation.navigate) {
//       navigation.navigate('chat', { profile });
//     }
//   };

//   const handleViewProfile = (profile) => {
//     Alert.alert(
//       'Profile Details',
//       `${profile.name}\n\nAge: ${profile.age}\nHeight: ${profile.height}\nEducation: ${profile.education}\nLocation: ${profile.location}\nProfession: ${profile.profession}\n\nBio: ${profile.bio}\n\nInterests: ${profile.interests.join(', ')}`,
//       [
//         { text: 'OK', style: 'default' }
//       ]
//     );
//   };

//   const handleViewInterestedProfiles = () => {
//     if (interestedProfiles.length === 0) {
//       Alert.alert('No Interests', 'You haven\'t shown interest in any profiles yet.');
//       return;
//     }

//     Alert.alert(
//       'Your Interested Profiles',
//       `You have shown interest in ${interestedProfiles.length} profile(s):\n\n${interestedProfiles.map(p => `• ${p.name}`).join('\n')}`,
//       [
//         { 
//           text: 'OK', 
//           style: 'default' 
//         },
//         {
//           text: 'Chat with Latest',
//           onPress: () => {
//             if (interestedProfiles.length > 0) {
//               navigateToChat(interestedProfiles[interestedProfiles.length - 1]);
//             }
//           }
//         }
//       ]
//     );
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//   };

//   const handleLogout = () => {
//     Alert.alert(
//       "Logout",
//       "Are you sure you want to logout?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel"
//         },
//         {
//           text: "Logout",
//           onPress: () => {
//             if (onLogout) {
//               onLogout();
//             }
//           }
//         }
//       ]
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>matches</Text>
//         <View style={styles.headerRight}>
//           <TouchableOpacity 
//             style={styles.interestedButtonHeader}
//             onPress={handleViewInterestedProfiles}
//           >
//             <Icon name="heart" size={16} color="#ff6b6b" />
//             <Text style={styles.interestedCount}>{interestedProfiles.length}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Icon name="sign-out-alt" size={18} color="#ff6b6b" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Section */}
//       <View style={styles.searchSection}>
//         <View style={styles.searchBox}>
//           <Text style={styles.searchTitle}>search by criteria</Text>
//           <View style={styles.searchInputContainer}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search by name, location, profession, education..."
//               placeholderTextColor="#999"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//             {searchQuery.length > 0 && (
//               <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
//                 <Icon name="times" size={14} color="#666" />
//               </TouchableOpacity>
//             )}
//             <TouchableOpacity style={styles.searchButton}>
//               <Icon name="search" size={16} color="#666" />
//             </TouchableOpacity>
//           </View>
//           {searchQuery.length > 0 && (
//             <Text style={styles.searchResults}>
//               {filteredProfiles.length} profile(s) found
//             </Text>
//           )}
//         </View>
//       </View>

//       {/* Profiles List */}
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {filteredProfiles.length > 0 ? (
//           <View style={styles.profilesList}>
//             {filteredProfiles.map(profile => (
//               <ProfileCard
//                 key={profile.id}
//                 profile={profile}
//                 onInterested={handleInterested}
//                 onNotInterested={handleNotInterested}
//                 onViewProfile={handleViewProfile}
//                 onSendMessage={handleSendMessage}
//               />
//             ))}
//           </View>
//         ) : (
//           <View style={styles.noResults}>
//             <Icon name="search" size={50} color="#ccc" />
//             <Text style={styles.noResultsText}>No profiles found</Text>
//             <Text style={styles.noResultsSubText}>
//               Try adjusting your search criteria
//             </Text>
//             <TouchableOpacity style={styles.clearSearchButton} onPress={clearSearch}>
//               <Text style={styles.clearSearchButtonText}>Clear Search</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Extra space for bottom navigation */}
//         <View style={styles.bottomSpacer} />
//       </ScrollView>

//       {/* Interest Confirmation Modal */}
//       <Modal
//         visible={showInterestModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowInterestModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Icon name="heart" size={50} color="#ff6b6b" />
//             <Text style={styles.modalTitle}>Interest Sent!</Text>
//             <Text style={styles.modalText}>
//               You've shown interest in {currentInterestedProfile?.name}
//             </Text>
//             <Text style={styles.modalSubText}>
//               Taking you to chat...
//             </Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <NavItem 
//           icon="home" 
//           label="Home" 
//           active={false} 
//           onPress={navigateToHome}
//         />
//         <NavItem 
//           icon="heart" 
//           label="Matches" 
//           active={true} 
//           onPress={navigateToMatches}
//         />
//         <NavItem 
//           icon="comment" 
//           label="Chat" 
//           active={false} 
//           onPress={() => {
//             if (interestedProfiles.length > 0) {
//               navigateToChat(interestedProfiles[0]);
//             } else {
//               Alert.alert('No Chats', 'You need to show interest in profiles first to start chatting.');
//             }
//           }}
//         />
//         <NavItem 
//           icon="user" 
//           label="Profile" 
//           active={false} 
//           onPress={navigateToProfile}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: 'white',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '300',
//     color: '#333',
//     textTransform: 'lowercase',
//     letterSpacing: 0.5,
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   interestedButtonHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff5f5',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ff6b6b',
//   },
//   interestedCount: {
//     color: '#ff6b6b',
//     fontWeight: '600',
//     marginLeft: 4,
//     fontSize: 12,
//   },
//   logoutButton: {
//     padding: 8,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ff6b6b',
//   },
//   searchSection: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   searchBox: {
//     marginBottom: 10,
//   },
//   searchTitle: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#333',
//     marginBottom: 10,
//     textTransform: 'lowercase',
//     letterSpacing: 0.3,
//   },
//   searchInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     fontSize: 14,
//     color: '#333',
//   },
//   clearButton: {
//     padding: 8,
//     backgroundColor: '#f8f8f8',
//   },
//   searchButton: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderLeftWidth: 1,
//     borderLeftColor: '#ddd',
//   },
//   searchResults: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 8,
//     fontStyle: 'italic',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   profilesList: {
//     padding: 16,
//   },
//   profileCard: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   lastSeen: {
//     alignItems: 'flex-end',
//     marginBottom: 12,
//   },
//   lastSeenText: {
//     fontSize: 11,
//     color: '#666',
//     fontWeight: '300',
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   imageContainer: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     overflow: 'hidden',
//     marginRight: 12,
//     backgroundColor: '#f0f0f0',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//   },
//   defaultImage: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#e9ecef',
//   },
//   profileBasicInfo: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 2,
//   },
//   profileAgeHeight: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   profileEducation: {
//     fontSize: 13,
//     color: '#888',
//     fontWeight: '500',
//   },
//   profileDetails: {
//     flexDirection: 'row',
//     marginBottom: 12,
//     gap: 16,
//   },
//   detailItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   detailText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 4,
//   },
//   bioSection: {
//     marginBottom: 12,
//   },
//   bioText: {
//     fontSize: 13,
//     color: '#555',
//     lineHeight: 18,
//   },
//   interestsSection: {
//     marginBottom: 12,
//   },
//   interestsTitle: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 6,
//   },
//   interestsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 6,
//   },
//   interestTag: {
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#666',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flex: 1,
//     marginHorizontal: 4,
//     justifyContent: 'center',
//   },
//   viewProfileButton: {
//     backgroundColor: '#f8f8f8',
//   },
//   messageButton: {
//     backgroundColor: '#f0f8ff',
//   },
//   viewProfileText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 4,
//   },
//   messageText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 4,
//   },
//   interestQuestionSection: {
//     alignItems: 'center',
//   },
//   interestQuestion: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 12,
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   interestButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     marginHorizontal: 8,
//     minWidth: 120,
//     alignItems: 'center',
//   },
//   interestedButton: {
//     backgroundColor: '#ff6b6b',
//   },
//   notInterestedButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   interestedButtonText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   notInterestedButtonText: {
//     color: '#666',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   noResults: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 40,
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 12,
//   },
//   noResultsText: {
//     fontSize: 18,
//     color: '#666',
//     fontWeight: '500',
//     marginTop: 10,
//   },
//   noResultsSubText: {
//     fontSize: 14,
//     color: '#999',
//     marginTop: 5,
//     textAlign: 'center',
//   },
//   clearSearchButton: {
//     marginTop: 15,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     backgroundColor: '#ff6b6b',
//     borderRadius: 20,
//   },
//   clearSearchButtonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 30,
//     borderRadius: 15,
//     alignItems: 'center',
//     margin: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   modalSubText: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   bottomNav: {
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   navItem: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   navIcon: {
//     marginBottom: 4,
//   },
//   navLabel: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '400',
//     letterSpacing: 0.3,
//   },
//   navLabelActive: {
//     color: '#ff6b6b',
//   },
//   bottomSpacer: {
//     height: 20,
//   },
// });

// export default MatchesScreen;





// // MatchesScreen.js
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   Image,
//   Modal,
//   SafeAreaView,
//   StatusBar,
//   Dimensions
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const { width } = Dimensions.get('window');

// // Bottom Navigation Item Component
// const NavItem = ({ icon, label, active, onPress }) => (
//   <TouchableOpacity style={styles.navItem} onPress={onPress}>
//     <Icon 
//       name={icon} 
//       size={20} 
//       color={active ? '#ff6b6b' : '#666'} 
//       style={styles.navIcon} 
//     />
//     <Text style={[styles.navLabel, active && styles.navLabelActive]}>
//       {label}
//     </Text>
//   </TouchableOpacity>
// );

// // Profile Card Component
// const ProfileCard = ({ profile, onInterested, onNotInterested, onViewProfile, onSendMessage }) => (
//   <View style={styles.profileCard}>
//     {/* Last Seen */}
//     <View style={styles.lastSeen}>
//       <Text style={styles.lastSeenText}>Last seen {profile.lastSeen}</Text>
//     </View>

//     {/* Profile Header */}
//     <View style={styles.profileHeader}>
//       <TouchableOpacity 
//         style={styles.imageContainer}
//         onPress={() => onViewProfile(profile)}
//       >
//         {profile.image ? (
//           <Image 
//             source={profile.image} 
//             style={styles.profileImage}
//             resizeMode="cover"
//           />
//         ) : (
//           <View style={styles.defaultImage}>
//             <Icon name="user" size={30} color="#999" />
//           </View>
//         )}
//       </TouchableOpacity>
//       <View style={styles.profileBasicInfo}>
//         <Text style={styles.profileName}>{profile.name}</Text>
//         <Text style={styles.profileAgeHeight}>{profile.age} • {profile.height}</Text>
//         <Text style={styles.profileEducation}>{profile.education}</Text>
//       </View>
//     </View>

//     {/* Profile Details */}
//     <View style={styles.profileDetails}>
//       <View style={styles.detailItem}>
//         <Icon name="map-marker-alt" size={12} color="#666" />
//         <Text style={styles.detailText}>{profile.location}</Text>
//       </View>
//       <View style={styles.detailItem}>
//         <Icon name="briefcase" size={12} color="#666" />
//         <Text style={styles.detailText}>{profile.profession}</Text>
//       </View>
//     </View>

//     {/* Bio */}
//     <View style={styles.bioSection}>
//       <Text style={styles.bioText} numberOfLines={2}>
//         {profile.bio}
//       </Text>
//     </View>

//     {/* Interests */}
//     <View style={styles.interestsSection}>
//       <Text style={styles.interestsTitle}>Interests:</Text>
//       <View style={styles.interestsContainer}>
//         {profile.interests.slice(0, 3).map((interest, index) => (
//           <View key={index} style={styles.interestTag}>
//             <Text style={styles.interestText}>{interest}</Text>
//           </View>
//         ))}
//         {profile.interests.length > 3 && (
//           <View style={styles.interestTag}>
//             <Text style={styles.interestText}>+{profile.interests.length - 3}</Text>
//           </View>
//         )}
//       </View>
//     </View>

//     {/* Action Buttons */}
//     <View style={styles.actionButtons}>
//       <TouchableOpacity 
//         style={[styles.actionButton, styles.viewProfileButton]}
//         onPress={() => onViewProfile(profile)}
//       >
//         <Icon name="eye" size={12} color="#666" />
//         <Text style={styles.viewProfileText}> View Profile</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity 
//         style={[styles.actionButton, styles.messageButton]}
//         onPress={() => onSendMessage(profile)}
//       >
//         <Icon name="comment" size={12} color="#666" />
//         <Text style={styles.messageText}> Message</Text>
//       </TouchableOpacity>
//     </View>

//     {/* Interest Question */}
//     <View style={styles.interestQuestionSection}>
//       <Text style={styles.interestQuestion}>Interested with this profile?</Text>
//       <View style={styles.interestActions}>
//         <TouchableOpacity 
//           style={[styles.interestButton, styles.interestedButton]} 
//           onPress={() => onInterested(profile)}
//         >
//           <Text style={styles.interestedButtonText}>Yes, Interested</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.interestButton, styles.notInterestedButton]} 
//           onPress={() => onNotInterested(profile)}
//         >
//           <Text style={styles.notInterestedButtonText}>No</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );

// const MatchesScreen = ({ user, onLogout, profileImages, navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProfiles, setFilteredProfiles] = useState([]);
//   const [interestedProfiles, setInterestedProfiles] = useState([]);
//   const [showInterestModal, setShowInterestModal] = useState(false);
//   const [currentInterestedProfile, setCurrentInterestedProfile] = useState(null);

//   const profiles = [
//     {
//       id: 1,
//       name: 'Srivalli',
//       age: '22 yrs',
//       height: '5\'0"',
//       education: 'B.Tech',
//       location: 'Hyderabad',
//       profession: 'Software Engineer',
//       lastSeen: '2m ago',
//       image: profileImages?.srivalli,
//       bio: 'Software engineer passionate about technology and innovation. Love traveling and exploring new cultures.',
//       interests: ['Coding', 'Travel', 'Music', 'Photography']
//     },
//     {
//       id: 2,
//       name: 'Vijay Kumar',
//       age: '24 yrs',
//       height: '5\'2"',
//       education: 'MBA',
//       location: 'Bangalore',
//       profession: 'Marketing Manager',
//       lastSeen: '5m ago',
//       image: profileImages?.vijay,
//       bio: 'Marketing professional with a creative mindset. Enjoy cooking and outdoor activities.',
//       interests: ['Marketing', 'Cooking', 'Yoga', 'Reading']
//     },
//     {
//       id: 3,
//       name: 'Anitha',
//       age: '23 yrs',
//       height: '5\'1"',
//       education: 'B.Tech',
//       location: 'Chennai',
//       profession: 'Data Scientist',
//       lastSeen: '10m ago',
//       image: profileImages?.anitha,
//       bio: 'Data scientist who loves solving complex problems. Passionate about AI and machine learning.',
//       interests: ['Data Science', 'AI', 'Chess', 'Dancing']
//     },
//     {
//       id: 4,
//       name: 'Rahul Kumar',
//       age: '25 yrs',
//       height: '5\'8"',
//       education: 'M.Tech',
//       location: 'Delhi',
//       profession: 'Product Manager',
//       lastSeen: '15m ago',
//       image: profileImages?.rahul,
//       bio: 'Product manager with expertise in tech products. Love sports and fitness activities.',
//       interests: ['Product Management', 'Cricket', 'Gym', 'Movies']
//     },
//   ];

//   // Initialize filtered profiles
//   useEffect(() => {
//     setFilteredProfiles(profiles);
//   }, []);

//   // Navigation handlers
//   const navigateToHome = () => {
//     if (navigation && navigation.navigate) {
//       navigation.navigate('dashboard');
//     }
//   };

//   const navigateToMatches = () => {
//     // Already on matches screen
//   };

//   const navigateToChat = (profile) => {
//     if (navigation && navigation.navigate) {
//       navigation.navigate('chat', { profile });
//     }
//   };

//   const navigateToProfile = () => {
//     Alert.alert('Coming Soon', 'Profile feature will be available soon!');
//   };

//   // Search functionality
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredProfiles(profiles);
//     } else {
//       const filtered = profiles.filter(profile =>
//         profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         profile.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         profile.education.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredProfiles(filtered);
//     }
//   }, [searchQuery]);

//   const handleInterested = (profile) => {
//     console.log('Interested in:', profile.name);
    
//     // Add to interested profiles if not already added
//     if (!interestedProfiles.find(p => p.id === profile.id)) {
//       setInterestedProfiles(prev => [...prev, profile]);
//     }
    
//     // Show interest confirmation modal
//     setCurrentInterestedProfile(profile);
//     setShowInterestModal(true);
    
//     // Remove the automatic navigation to chat
//     // The modal will just show the confirmation and then close
//     setTimeout(() => {
//       setShowInterestModal(false);
//     }, 2000);
//   };

//   const handleNotInterested = (profile) => {
//     console.log('Not interested in:', profile.name);
//     Alert.alert(
//       'Profile Passed',
//       `You passed on ${profile.name}. We'll show you more matches.`,
//       [{ text: 'OK', style: 'default' }]
//     );
//   };

//   const handleSendMessage = (profile) => {
//     if (navigation && navigation.navigate) {
//       navigation.navigate('chat', { profile });
//     }
//   };

//   const handleViewProfile = (profile) => {
//     Alert.alert(
//       'Profile Details',
//       `${profile.name}\n\nAge: ${profile.age}\nHeight: ${profile.height}\nEducation: ${profile.education}\nLocation: ${profile.location}\nProfession: ${profile.profession}\n\nBio: ${profile.bio}\n\nInterests: ${profile.interests.join(', ')}`,
//       [
//         { text: 'OK', style: 'default' }
//       ]
//     );
//   };

//   const handleViewInterestedProfiles = () => {
//     if (interestedProfiles.length === 0) {
//       Alert.alert('No Interests', 'You haven\'t shown interest in any profiles yet.');
//       return;
//     }

//     Alert.alert(
//       'Your Interested Profiles',
//       `You have shown interest in ${interestedProfiles.length} profile(s):\n\n${interestedProfiles.map(p => `• ${p.name}`).join('\n')}`,
//       [
//         { 
//           text: 'OK', 
//           style: 'default' 
//         },
//         {
//           text: 'Chat with Latest',
//           onPress: () => {
//             if (interestedProfiles.length > 0) {
//               navigateToChat(interestedProfiles[interestedProfiles.length - 1]);
//             }
//           }
//         }
//       ]
//     );
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//   };

//   const handleLogout = () => {
//     Alert.alert(
//       "Logout",
//       "Are you sure you want to logout?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel"
//         },
//         {
//           text: "Logout",
//           onPress: () => {
//             if (onLogout) {
//               onLogout();
//             }
//           }
//         }
//       ]
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>matches</Text>
//         <View style={styles.headerRight}>
//           <TouchableOpacity 
//             style={styles.interestedButtonHeader}
//             onPress={handleViewInterestedProfiles}
//           >
//             <Icon name="heart" size={16} color="#ff6b6b" />
//             <Text style={styles.interestedCount}>{interestedProfiles.length}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Icon name="sign-out-alt" size={18} color="#ff6b6b" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Section */}
//       <View style={styles.searchSection}>
//         <View style={styles.searchBox}>
//           <Text style={styles.searchTitle}>search by criteria</Text>
//           <View style={styles.searchInputContainer}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search by name, location, profession, education..."
//               placeholderTextColor="#999"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//             {searchQuery.length > 0 && (
//               <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
//                 <Icon name="times" size={14} color="#666" />
//               </TouchableOpacity>
//             )}
//             <TouchableOpacity style={styles.searchButton}>
//               <Icon name="search" size={16} color="#666" />
//             </TouchableOpacity>
//           </View>
//           {searchQuery.length > 0 && (
//             <Text style={styles.searchResults}>
//               {filteredProfiles.length} profile(s) found
//             </Text>
//           )}
//         </View>
//       </View>

//       {/* Profiles List */}
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {filteredProfiles.length > 0 ? (
//           <View style={styles.profilesList}>
//             {filteredProfiles.map(profile => (
//               <ProfileCard
//                 key={profile.id}
//                 profile={profile}
//                 onInterested={handleInterested}
//                 onNotInterested={handleNotInterested}
//                 onViewProfile={handleViewProfile}
//                 onSendMessage={handleSendMessage}
//               />
//             ))}
//           </View>
//         ) : (
//           <View style={styles.noResults}>
//             <Icon name="search" size={50} color="#ccc" />
//             <Text style={styles.noResultsText}>No profiles found</Text>
//             <Text style={styles.noResultsSubText}>
//               Try adjusting your search criteria
//             </Text>
//             <TouchableOpacity style={styles.clearSearchButton} onPress={clearSearch}>
//               <Text style={styles.clearSearchButtonText}>Clear Search</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Extra space for bottom navigation */}
//         <View style={styles.bottomSpacer} />
//       </ScrollView>

//       {/* Interest Confirmation Modal */}
//       <Modal
//         visible={showInterestModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowInterestModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Icon name="heart" size={50} color="#ff6b6b" />
//             <Text style={styles.modalTitle}>Interest Sent!</Text>
//             <Text style={styles.modalText}>
//               You've shown interest in {currentInterestedProfile?.name}
//             </Text>
//             <Text style={styles.modalSubText}>
//               They'll be notified of your interest
//             </Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <NavItem 
//           icon="home" 
//           label="Home" 
//           active={false} 
//           onPress={navigateToHome}
//         />
//         <NavItem 
//           icon="heart" 
//           label="Matches" 
//           active={true} 
//           onPress={navigateToMatches}
//         />
//         <NavItem 
//           icon="comment" 
//           label="Chat" 
//           active={false} 
//           onPress={() => {
//             if (interestedProfiles.length > 0) {
//               navigateToChat(interestedProfiles[0]);
//             } else {
//               Alert.alert('No Chats', 'You need to show interest in profiles first to start chatting.');
//             }
//           }}
//         />
//         <NavItem 
//           icon="user" 
//           label="Profile" 
//           active={false} 
//           onPress={navigateToProfile}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: 'white',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '300',
//     color: '#333',
//     textTransform: 'lowercase',
//     letterSpacing: 0.5,
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   interestedButtonHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff5f5',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ff6b6b',
//   },
//   interestedCount: {
//     color: '#ff6b6b',
//     fontWeight: '600',
//     marginLeft: 4,
//     fontSize: 12,
//   },
//   logoutButton: {
//     padding: 8,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ff6b6b',
//   },
//   searchSection: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   searchBox: {
//     marginBottom: 10,
//   },
//   searchTitle: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#333',
//     marginBottom: 10,
//     textTransform: 'lowercase',
//     letterSpacing: 0.3,
//   },
//   searchInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     fontSize: 14,
//     color: '#333',
//   },
//   clearButton: {
//     padding: 8,
//     backgroundColor: '#f8f8f8',
//   },
//   searchButton: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderLeftWidth: 1,
//     borderLeftColor: '#ddd',
//   },
//   searchResults: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 8,
//     fontStyle: 'italic',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   profilesList: {
//     padding: 16,
//   },
//   profileCard: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   lastSeen: {
//     alignItems: 'flex-end',
//     marginBottom: 12,
//   },
//   lastSeenText: {
//     fontSize: 11,
//     color: '#666',
//     fontWeight: '300',
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   imageContainer: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     overflow: 'hidden',
//     marginRight: 12,
//     backgroundColor: '#f0f0f0',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//   },
//   defaultImage: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#e9ecef',
//   },
//   profileBasicInfo: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 2,
//   },
//   profileAgeHeight: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   profileEducation: {
//     fontSize: 13,
//     color: '#888',
//     fontWeight: '500',
//   },
//   profileDetails: {
//     flexDirection: 'row',
//     marginBottom: 12,
//     gap: 16,
//   },
//   detailItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   detailText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 4,
//   },
//   bioSection: {
//     marginBottom: 12,
//   },
//   bioText: {
//     fontSize: 13,
//     color: '#555',
//     lineHeight: 18,
//   },
//   interestsSection: {
//     marginBottom: 12,
//   },
//   interestsTitle: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 6,
//   },
//   interestsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 6,
//   },
//   interestTag: {
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#666',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flex: 1,
//     marginHorizontal: 4,
//     justifyContent: 'center',
//   },
//   viewProfileButton: {
//     backgroundColor: '#f8f8f8',
//   },
//   messageButton: {
//     backgroundColor: '#f0f8ff',
//   },
//   viewProfileText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 4,
//   },
//   messageText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 4,
//   },
//   interestQuestionSection: {
//     alignItems: 'center',
//   },
//   interestQuestion: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 12,
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   interestButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     marginHorizontal: 8,
//     minWidth: 120,
//     alignItems: 'center',
//   },
//   interestedButton: {
//     backgroundColor: '#ff6b6b',
//   },
//   notInterestedButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   interestedButtonText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   notInterestedButtonText: {
//     color: '#666',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   noResults: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 40,
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 12,
//   },
//   noResultsText: {
//     fontSize: 18,
//     color: '#666',
//     fontWeight: '500',
//     marginTop: 10,
//   },
//   noResultsSubText: {
//     fontSize: 14,
//     color: '#999',
//     marginTop: 5,
//     textAlign: 'center',
//   },
//   clearSearchButton: {
//     marginTop: 15,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     backgroundColor: '#ff6b6b',
//     borderRadius: 20,
//   },
//   clearSearchButtonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 30,
//     borderRadius: 15,
//     alignItems: 'center',
//     margin: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   modalSubText: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   bottomNav: {
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   navItem: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   navIcon: {
//     marginBottom: 4,
//   },
//   navLabel: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '400',
//     letterSpacing: 0.3,
//   },
//   navLabelActive: {
//     color: '#ff6b6b',
//   },
//   bottomSpacer: {
//     height: 20,
//   },
// });

// export default MatchesScreen;






// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, TouchableWithoutFeedback } from 'react-native';

// // Profile Cards Component
// const ProfileCards = ({ profiles, onProfilePress }) => {
//   return (
//     <View style={profileStyles.container}>
//       <Text style={profileStyles.title}>Top Matches For You</Text>
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={profileStyles.cardsContainer}
//       >
//         {profiles.map((profile) => (
//           <TouchableOpacity 
//             key={profile.id} 
//             style={profileStyles.card}
//             onPress={() => onProfilePress(profile)}
//           >
//             <View style={profileStyles.imageContainer}>
//               <Image 
//                 source={{ uri: profile.image }} 
//                 style={profileStyles.image}
//                 resizeMode="cover"
//               />
//             </View>
//             <View style={profileStyles.details}>
//               <Text style={profileStyles.name}>{profile.name}</Text>
//               <Text style={profileStyles.info}>{profile.age} yrs • {profile.height}</Text>
//               <Text style={profileStyles.info}>{profile.job} • {profile.education}</Text>
//               <Text style={profileStyles.info}>{profile.location}</Text>
//               <Text style={profileStyles.community}>{profile.community}</Text>
              
//               <TouchableOpacity 
//                 style={profileStyles.viewButton}
//                 onPress={() => onProfilePress(profile)}
//               >
//                 <Text style={profileStyles.buttonText}>View Profile</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={profileStyles.connectButton}>
//                 <Text style={profileStyles.buttonText}>Send Request</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// // Profile Modal Component
// const ProfileModal = ({ profile, visible, onClose }) => {
//   if (!profile) return null;

//   return (
//     <Modal
//       visible={visible}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={onClose}
//     >
//       <TouchableWithoutFeedback onPress={onClose}>
//         <View style={modalStyles.overlay}>
//           <TouchableWithoutFeedback>
//             <View style={modalStyles.modalContent}>
//               <Image 
//                 source={{ uri: profile.image }} 
//                 style={modalStyles.modalImage}
//                 resizeMode="cover"
//               />
//               <View style={modalStyles.modalDetails}>
//                 <Text style={modalStyles.modalName}>{profile.name}</Text>
//                 <Text style={modalStyles.modalInfo}>{profile.age} yrs • {profile.height}</Text>
//                 <Text style={modalStyles.modalInfo}>{profile.job} • {profile.education}</Text>
//                 <Text style={modalStyles.modalInfo}>{profile.location}</Text>
//                 <Text style={modalStyles.modalCommunity}>{profile.community}</Text>
                
//                 <View style={modalStyles.modalButtons}>
//                   <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
//                     <Text style={modalStyles.closeButtonText}>Close</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={modalStyles.connectButton}>
//                     <Text style={modalStyles.connectButtonText}>Send Request</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   );
// };

// // Main Matches Component
// const Matches = () => {
//   const [activeTab, setActiveTab] = useState('new_matches');
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const profiles = [
//     {
//       id: 1,
//       name: "Aarushi Sharma",
//       age: 24,
//       job: "Software Engineer",
//       education: "B.Tech",
//       location: "Hyderabad",
//       community: "Hindu | Brahmin",
//       height: "5'4\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     {
//       id: 2,
//       name: "Arjun Reddy",
//       age: 27,
//       job: "Business Analyst",
//       education: "MBA",
//       location: "Bangalore",
//       community: "Hindu | Reddy",
//       height: "5'9\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//     {
//       id: 3,
//       name: "Sneha Patil",
//       age: 25,
//       job: "Doctor",
//       education: "MBBS",
//       location: "Pune",
//       community: "Hindu | Maratha",
//       height: "5'5\"",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//     },
//     {
//       id: 4,
//       name: "Rohit Verma",
//       age: 29,
//       job: "Civil Engineer",
//       education: "M.Tech",
//       location: "Delhi",
//       community: "Hindu | Kayastha",
//       height: "6'0\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     {
//       id: 5,
//       name: "Aditi Singh",
//       age: 23,
//       job: "HR Manager",
//       education: "MBA",
//       location: "Lucknow",
//       community: "Hindu | Rajput",
//       height: "5'3\"",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
//     },
//      {
//     id: 6,
//     name: "Vishal Kumar",
//     age: 28,
//     job: "Software Developer",
//     education: "B.Tech",
//     location: "Chennai",
//     community: "Hindu | Yadav",
//     height: "5'10\"",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//   },
//   {
//     id: 7,
//     name: "Meera Nair",
//     age: 26,
//     job: "Fashion Designer",
//     education: "BA Fashion",
//     location: "Kochi",
//     community: "Hindu | Nair",
//     height: "5'5\"",
//     image: "https://tse3.mm.bing.net/th/id/OIP.6GF79-gQ_49Ze3nGrUrsyAHaLH?pid=Api&P=0&h=180"
//   },
//   {
//     id: 8,
//     name: "Karan Mehta",
//     age: 30,
//     job: "Entrepreneur",
//     education: "MBA",
//     location: "Mumbai",
//     community: "Hindu | Jain",
//     height: "5'11\"",
//     image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
//   },
//   {
//     id: 9,
//     name: "Priya Das",
//     age: 24,
//     job: "Teacher",
//     education: "B.Ed",
//     location: "Kolkata",
//     community: "Hindu | Bengali",
//     height: "5'2\"",
//     image: "https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?pid=Api&P=0&h=180"
//   },
//   {
//     id: 10,
//     name: "Sandeep Gupta",
//     age: 27,
//     job: "Bank Officer",
//     education: "B.Com",
//     location: "Ahmedabad",
//     community: "Hindu | Vaishya",
//     height: "5'8\"",
//     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//   }
//   ];

//   const handleProfilePress = (profile) => {
//     setSelectedProfile(profile);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//     setSelectedProfile(null);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'new_matches':
//         return (
//           <View style={styles.screen}>
//             <Text>New Matches Content</Text>
//           </View>
//         );
//       case 'my_matches':
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//       case 'near_me':
//         return (
//           <View style={styles.screen}>
//             <Text>Near Me Content</Text>
//           </View>
//         );
//       case 'more':
//         return (
//           <View style={styles.screen}>
//             <Text>More Matches Content</Text>
//           </View>
//         );
//       default:
//         return (
//           <View style={styles.screen}>
//             <Text>New Matches Content</Text>
//           </View>
//         );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Navigation Tabs */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false}
//         style={styles.tabContainer}
//         contentContainerStyle={styles.tabContentContainer}
//       >
//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'new_matches' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('new_matches')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'new_matches' && styles.activeTabText
//           ]}>
//             New Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'my_matches' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('my_matches')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'my_matches' && styles.activeTabText
//           ]}>
//             My Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'near_me' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('near_me')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'near_me' && styles.activeTabText
//           ]}>
//             Near Me
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'more' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('more')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'more' && styles.activeTabText
//           ]}>
//             More Matches
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Content Area */}
//       <View style={styles.contentContainer}>
//         {renderContent()}
//       </View>

//       {/* Profile Modal */}
//       <ProfileModal 
//         profile={selectedProfile}
//         visible={modalVisible}
//         onClose={handleCloseModal}
//       />
//     </View>
//   );
// };

// // Styles for main component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   tabContainer: {
//     maxHeight: 50,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   tabContentContainer: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   tabButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginHorizontal: 4,
//     borderRadius: 8,
//   },
//   activeTabButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

// // Styles for profile cards
// const profileStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   cardsContainer: {
//     paddingVertical: 8,
//   },
//   card: {
//     width: 280,
//     marginRight: 16,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   imageContainer: {
//     width: '100%',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   details: {
//     padding: 12,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   info: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   community: {
//     fontSize: 14,
//     color: '#888',
//     marginBottom: 12,
//     fontStyle: 'italic',
//   },
//   viewButton: {
//     backgroundColor: '#007AFF',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     padding: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// // Styles for modal
// const modalStyles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     width: '100%',
//     maxWidth: 400,
//     overflow: 'hidden',
//   },
//   modalImage: {
//     width: '100%',
//     height: 300,
//   },
//   modalDetails: {
//     padding: 20,
//   },
//   modalName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   modalInfo: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 4,
//   },
//   modalCommunity: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 20,
//     fontStyle: 'italic',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   closeButton: {
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     flex: 1,
//     marginRight: 8,
//   },
//   closeButtonText: {
//     color: '#007AFF',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     marginLeft: 8,
//   },
//   connectButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// export default Matches;




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, TouchableWithoutFeedback } from 'react-native';

// // Profile Cards Component - Updated for vertical layout
// const ProfileCards = ({ profiles, onProfilePress }) => {
//   return (
//     <View style={profileStyles.container}>
//       <Text style={profileStyles.title}>My Matches</Text>
//       <ScrollView 
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={profileStyles.cardsContainer}
//       >
//         {profiles.map((profile) => (
//           <TouchableOpacity 
//             key={profile.id} 
//             style={profileStyles.card}
//             onPress={() => onProfilePress(profile)}
//           >
//             <View style={profileStyles.cardContent}>
//               <Image 
//                 source={{ uri: profile.image }} 
//                 style={profileStyles.image}
//                 resizeMode="cover"
//               />
//               <View style={profileStyles.details}>
//                 <Text style={profileStyles.name}>{profile.name}</Text>
//                 <Text style={profileStyles.info}>{profile.age} yrs • {profile.height}</Text>
//                 <Text style={profileStyles.info}>{profile.job} • {profile.education}</Text>
//                 <Text style={profileStyles.info}>{profile.location}</Text>
//                 <Text style={profileStyles.community}>{profile.community}</Text>
                
//                 <View style={profileStyles.buttonContainer}>
//                   <TouchableOpacity 
//                     style={profileStyles.viewButton}
//                     onPress={() => onProfilePress(profile)}
//                   >
//                     <Text style={profileStyles.buttonText}>View Profile</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity style={profileStyles.connectButton}>
//                     <Text style={profileStyles.buttonText}>Send Request</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// // Profile Modal Component
// const ProfileModal = ({ profile, visible, onClose }) => {
//   if (!profile) return null;

//   return (
//     <Modal
//       visible={visible}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={onClose}
//     >
//       <TouchableWithoutFeedback onPress={onClose}>
//         <View style={modalStyles.overlay}>
//           <TouchableWithoutFeedback>
//             <View style={modalStyles.modalContent}>
//               <Image 
//                 source={{ uri: profile.image }} 
//                 style={modalStyles.modalImage}
//                 resizeMode="cover"
//               />
//               <View style={modalStyles.modalDetails}>
//                 <Text style={modalStyles.modalName}>{profile.name}</Text>
//                 <Text style={modalStyles.modalInfo}>{profile.age} yrs • {profile.height}</Text>
//                 <Text style={modalStyles.modalInfo}>{profile.job} • {profile.education}</Text>
//                 <Text style={modalStyles.modalInfo}>{profile.location}</Text>
//                 <Text style={modalStyles.modalCommunity}>{profile.community}</Text>
                
//                 <View style={modalStyles.modalButtons}>
//                   <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
//                     <Text style={modalStyles.closeButtonText}>Close</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={modalStyles.connectButton}>
//                     <Text style={modalStyles.connectButtonText}>Send Request</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   );
// };

// // Main Matches Component
// const Matches = () => {
//   const [activeTab, setActiveTab] = useState('new_matches');
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const profiles = [
//     {
//       id: 1,
//       name: "Aarushi Sharma",
//       age: 24,
//       job: "Software Engineer",
//       education: "B.Tech",
//       location: "Hyderabad",
//       community: "Hindu | Brahmin",
//       height: "5'4\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     {
//       id: 2,
//       name: "Arjun Reddy",
//       age: 27,
//       job: "Business Analyst",
//       education: "MBA",
//       location: "Bangalore",
//       community: "Hindu | Reddy",
//       height: "5'9\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//     {
//       id: 3,
//       name: "Sneha Patil",
//       age: 25,
//       job: "Doctor",
//       education: "MBBS",
//       location: "Pune",
//       community: "Hindu | Maratha",
//       height: "5'5\"",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//     },
//     {
//       id: 4,
//       name: "Rohit Verma",
//       age: 29,
//       job: "Civil Engineer",
//       education: "M.Tech",
//       location: "Delhi",
//       community: "Hindu | Kayastha",
//       height: "6'0\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     {
//       id: 5,
//       name: "Aditi Singh",
//       age: 23,
//       job: "HR Manager",
//       education: "MBA",
//       location: "Lucknow",
//       community: "Hindu | Rajput",
//       height: "5'3\"",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
//     },
//     {
//       id: 6,
//       name: "Vishal Kumar",
//       age: 28,
//       job: "Software Developer",
//       education: "B.Tech",
//       location: "Chennai",
//       community: "Hindu | Yadav",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     {
//       id: 7,
//       name: "Meera Nair",
//       age: 26,
//       job: "Fashion Designer",
//       education: "BA Fashion",
//       location: "Kochi",
//       community: "Hindu | Nair",
//       height: "5'5\"",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 8,
//       name: "Karan Mehta",
//       age: 30,
//       job: "Entrepreneur",
//       education: "MBA",
//       location: "Mumbai",
//       community: "Hindu | Jain",
//       height: "5'11\"",
//       image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
//     },
//     {
//       id: 9,
//       name: "Priya Das",
//       age: 24,
//       job: "Teacher",
//       education: "B.Ed",
//       location: "Kolkata",
//       community: "Hindu | Bengali",
//       height: "5'2\"",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 10,
//       name: "Sandeep Gupta",
//       age: 27,
//       job: "Bank Officer",
//       education: "B.Com",
//       location: "Ahmedabad",
//       community: "Hindu | Vaishya",
//       height: "5'8\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     }
//   ];

//   const handleProfilePress = (profile) => {
//     setSelectedProfile(profile);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//     setSelectedProfile(null);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'new_matches':
//         return (
//           <View style={styles.screen}>
//             <Text style={styles.placeholderText}>New Matches Coming Soon!</Text>
//             <Text style={styles.placeholderSubtext}>Check back later for new matches</Text>
//           </View>
//         );
//       case 'my_matches':
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//       case 'near_me':
//         return (
//           <View style={styles.screen}>
//             <Text style={styles.placeholderText}>Near Me Feature</Text>
//             <Text style={styles.placeholderSubtext}>Find matches in your area</Text>
//           </View>
//         );
//       case 'more':
//         return (
//           <View style={styles.screen}>
//             <Text style={styles.placeholderText}>More Matches</Text>
//             <Text style={styles.placeholderSubtext}>Discover additional matches</Text>
//           </View>
//         );
//       default:
//         return (
//           <View style={styles.screen}>
//             <Text style={styles.placeholderText}>Select a tab to view matches</Text>
//           </View>
//         );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Navigation Tabs */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false}
//         style={styles.tabContainer}
//         contentContainerStyle={styles.tabContentContainer}
//       >
//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'new_matches' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('new_matches')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'new_matches' && styles.activeTabText
//           ]}>
//             New Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'my_matches' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('my_matches')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'my_matches' && styles.activeTabText
//           ]}>
//             My Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'near_me' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('near_me')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'near_me' && styles.activeTabText
//           ]}>
//             Near Me
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[
//             styles.tabButton, 
//             activeTab === 'more' && styles.activeTabButton
//           ]}
//           onPress={() => setActiveTab('more')}
//         >
//           <Text style={[
//             styles.tabText,
//             activeTab === 'more' && styles.activeTabText
//           ]}>
//             More Matches
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Content Area */}
//       <View style={styles.contentContainer}>
//         {renderContent()}
//       </View>

//       {/* Profile Modal */}
//       <ProfileModal 
//         profile={selectedProfile}
//         visible={modalVisible}
//         onClose={handleCloseModal}
//       />
//     </View>
//   );
// };

// // Styles for main component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   tabContainer: {
//     maxHeight: 50,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   tabContentContainer: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   tabButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginHorizontal: 4,
//     borderRadius: 8,
//   },
//   activeTabButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     padding: 20,
//   },
//   placeholderText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   placeholderSubtext: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
// });

// // Updated Styles for vertical profile cards
// const profileStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//     color: '#333',
//   },
//   cardsContainer: {
//     padding: 16,
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   cardContent: {
//     flexDirection: 'row',
//     padding: 12,
//   },
//   image: {
//     width: 100,
//     height: 120,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   details: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#333',
//   },
//   info: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   community: {
//     fontSize: 13,
//     color: '#888',
//     marginBottom: 8,
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//   },
//   viewButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 6,
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//   },
// });

// // Styles for modal (unchanged)
// const modalStyles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     width: '100%',
//     maxWidth: 400,
//     overflow: 'hidden',
//   },
//   modalImage: {
//     width: '100%',
//     height: 300,
//   },
//   modalDetails: {
//     padding: 20,
//   },
//   modalName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   modalInfo: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 4,
//   },
//   modalCommunity: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 20,
//     fontStyle: 'italic',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   closeButton: {
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     flex: 1,
//     marginRight: 8,
//   },
//   closeButtonText: {
//     color: '#007AFF',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     marginLeft: 8,
//   },
//   connectButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// export default Matches;









// // src/screens/MatchesScreen.js
// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ScrollView, 
//   Image, 
//   Modal, 
//   Alert,
//   RefreshControl 
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const MatchesScreen = ({ route, navigation, user, chatManager }) => {
//   const [activeTab, setActiveTab] = useState('my_matches');
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [connectionStatuses, setConnectionStatuses] = useState({});
//   const [userChats, setUserChats] = useState([]);
//   const [userRequests, setUserRequests] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);

//   const profiles = [
//     {
//       id: 1,
//       name: "Aarushi Sharma",
//       age: 24,
//       job: "Software Engineer",
//       education: "B.Tech",
//       location: "Hyderabad",
//       community: "Hindu | Brahmin",
//       height: "5'4\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     {
//       id: 2,
//       name: "Arjun Reddy",
//       age: 27,
//       job: "Business Analyst",
//       education: "MBA",
//       location: "Bangalore",
//       community: "Hindu | Reddy",
//       height: "5'9\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//      {
//       id: 3,
//       name: "Sneha Patil",
//       age: 25,
//       job: "Doctor",
//       education: "MBBS",
//       location: "Pune",
//       community: "Hindu | Maratha",
//       height: "5'5\"",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//     },
//     {
//       id: 4,
//       name: "Rohit Verma",
//       age: 29,
//       job: "Civil Engineer",
//       education: "M.Tech",
//       location: "Delhi",
//       community: "Hindu | Kayastha",
//       height: "6'0\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     {
//       id: 5,
//       name: "Aditi Singh",
//       age: 23,
//       job: "HR Manager",
//       education: "MBA",
//       location: "Lucknow",
//       community: "Hindu | Rajput",
//       height: "5'3\"",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
//     },
//     {
//       id: 6,
//       name: "Vishal Kumar",
//       age: 28,
//       job: "Software Developer",
//       education: "B.Tech",
//       location: "Chennai",
//       community: "Hindu | Yadav",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     {
//       id: 7,
//       name: "Meera Nair",
//       age: 26,
//       job: "Fashion Designer",
//       education: "BA Fashion",
//       location: "Kochi",
//       community: "Hindu | Nair",
//       height: "5'5\"",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 8,
//       name: "Karan Mehta",
//       age: 30,
//       job: "Entrepreneur",
//       education: "MBA",
//       location: "Mumbai",
//       community: "Hindu | Jain",
//       height: "5'11\"",
//       image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
//     },
//     {
//       id: 9,
//       name: "Priya Das",
//       age: 24,
//       job: "Teacher",
//       education: "B.Ed",
//       location: "Kolkata",
//       community: "Hindu | Bengali",
//       height: "5'2\"",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 10,
//       name: "Sandeep Gupta",
//       age: 27,
//       job: "Bank Officer",
//       education: "B.Com",
//       location: "Ahmedabad",
//       community: "Hindu | Vaishya",
//       height: "5'8\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     }
//   ];

//   const loadData = () => {
//     if (user) {
//       updateConnectionStatuses();
//       loadUserChats();
//       loadUserRequests();
//     }
//   };

//   useEffect(() => {
//     // Set current user in chat manager
//     if (user) {
//       chatManager.setCurrentUser(user);
//     }
//     loadData();
//   }, [user]);

//   const onRefresh = () => {
//     setRefreshing(true);
//     loadData();
//     setTimeout(() => setRefreshing(false), 1000);
//   };

//   const updateConnectionStatuses = () => {
//     const statuses = {};
//     profiles.forEach(profile => {
//       const status = chatManager.getConnectionStatus(user?.id, profile.id);
//       statuses[profile.id] = status;
//     });
//     setConnectionStatuses(statuses);
//   };

//   const loadUserChats = () => {
//     const chats = chatManager.getUserChats(user?.id);
//     setUserChats(chats);
//   };

//   const loadUserRequests = () => {
//     const requests = chatManager.getUserChatRequests(user?.id);
//     setUserRequests(requests);
//   };

//   const handleSendRequest = (profileId) => {
//     if (!user) {
//       Alert.alert('Error', 'Please login to send requests');
//       return;
//     }

//     const result = chatManager.sendChatRequest(user.id, profileId);
    
//     if (result.success) {
//       if (result.chatRoom) {
//         // Mutual request - auto connected
//         Alert.alert(
//           'Connection Established!', 
//           'You both sent requests to each other! You can now chat.',
//           [
//             {
//               text: "Start Chatting",
//               onPress: () => {
//                 const profile = profiles.find(p => p.id === profileId);
//                 if (profile) {
//                   navigation.navigate('Chat', { 
//                     chatId: result.chatRoom.id,
//                     otherUser: profile 
//                   });
//                 }
//               }
//             },
//             {
//               text: "Later",
//               style: "cancel"
//             }
//           ]
//         );
//       } else {
//         Alert.alert('Success', 'Request sent successfully!');
//       }
//       loadData();
//     } else {
//       Alert.alert('Info', result.message);
//     }
//   };

//   const handleAcceptRequest = (requestId) => {
//     const result = chatManager.acceptChatRequest(requestId, user.id);
    
//     if (result.success) {
//       Alert.alert(
//         'Success', 
//         'Request accepted! You can now chat.',
//         [
//           {
//             text: "Start Chatting",
//             onPress: () => {
//               const request = chatManager.chatRequests.find(req => req.id === requestId);
//               if (request) {
//                 const profile = profiles.find(p => p.id === request.fromUserId);
//                 if (profile) {
//                   navigation.navigate('Chat', {
//                     chatId: result.chatRoom.id,
//                     otherUser: profile
//                   });
//                 }
//               }
//             }
//           },
//           {
//             text: "Later",
//             style: "cancel"
//           }
//         ]
//       );
//       loadData();
//     } else {
//       Alert.alert('Error', result.message);
//     }
//   };

//   const handleStartChat = (profile) => {
//     const status = connectionStatuses[profile.id];
    
//     if (status?.status === 'connected') {
//       navigation.navigate('Chat', { 
//         chatId: status.chat.id,
//         otherUser: profile 
//       });
//     } else {
//       Alert.alert('Info', 'You need to connect before chatting');
//     }
//   };

//   const handleProfilePress = (profile) => {
//     setSelectedProfile(profile);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//     setSelectedProfile(null);
//   };

//   const renderConnectionButton = (profile) => {
//     const status = connectionStatuses[profile.id];
    
//     switch (status?.status) {
//       case 'connected':
//         return (
//           <TouchableOpacity 
//             style={styles.chatButton}
//             onPress={() => handleStartChat(profile)}
//           >
//             <Icon name="chatbubble-ellipses" size={16} color="white" />
//             <Text style={styles.chatButtonText}>Start Chat</Text>
//           </TouchableOpacity>
//         );
      
//       case 'request_sent':
//         return (
//           <TouchableOpacity style={styles.pendingButton} disabled>
//             <Icon name="time" size={16} color="white" />
//             <Text style={styles.pendingButtonText}>Request Sent</Text>
//           </TouchableOpacity>
//         );
      
//       case 'request_received':
//         return (
//           <View style={styles.requestActions}>
//             <TouchableOpacity 
//               style={styles.acceptButton}
//               onPress={() => handleAcceptRequest(status.request.id)}
//             >
//               <Icon name="checkmark" size={16} color="white" />
//               <Text style={styles.acceptButtonText}>Accept</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.declineButton}>
//               <Icon name="close" size={16} color="white" />
//               <Text style={styles.declineButtonText}>Decline</Text>
//             </TouchableOpacity>
//           </View>
//         );
      
//       default:
//         return (
//           <TouchableOpacity 
//             style={styles.connectButton}
//             onPress={() => handleSendRequest(profile.id)}
//           >
//             <Icon name="person-add" size={16} color="white" />
//             <Text style={styles.connectButtonText}>Send Request</Text>
//           </TouchableOpacity>
//         );
//     }
//   };

//   // ProfileCards Component
//   const ProfileCards = ({ profiles, onProfilePress }) => {
//     return (
//       <View style={profileStyles.container}>
//         <Text style={profileStyles.title}>My Matches</Text>
//         <ScrollView 
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={profileStyles.cardsContainer}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         >
//           {profiles.map((profile) => (
//             <TouchableOpacity 
//               key={profile.id} 
//               style={profileStyles.card}
//               onPress={() => onProfilePress(profile)}
//             >
//               <View style={profileStyles.cardContent}>
//                 <Image 
//                   source={{ uri: profile.image }} 
//                   style={profileStyles.image}
//                   resizeMode="cover"
//                 />
//                 <View style={profileStyles.details}>
//                   <Text style={profileStyles.name}>{profile.name}</Text>
//                   <Text style={profileStyles.info}>{profile.age} yrs • {profile.height}</Text>
//                   <Text style={profileStyles.info}>{profile.job} • {profile.education}</Text>
//                   <Text style={profileStyles.info}>{profile.location}</Text>
//                   <Text style={profileStyles.community}>{profile.community}</Text>
                  
//                   <View style={profileStyles.buttonContainer}>
//                     <TouchableOpacity 
//                       style={profileStyles.viewButton}
//                       onPress={() => onProfilePress(profile)}
//                     >
//                       <Icon name="eye" size={14} color="white" />
//                       <Text style={profileStyles.buttonText}>View Profile</Text>
//                     </TouchableOpacity>
                    
//                     {renderConnectionButton(profile)}
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>
//     );
//   };

//   // Requests Tab Component
//   const RequestsTab = () => {
//     return (
//       <View style={styles.screen}>
//         <Text style={styles.sectionTitle}>Chat Requests</Text>
//         {userRequests.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Text style={styles.emptyStateText}>No pending requests</Text>
//           </View>
//         ) : (
//           <ScrollView 
//             style={styles.requestsContainer}
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//             }
//           >
//             {userRequests.map(request => {
//               const isIncoming = request.toUserId === user.id;
//               const profileId = isIncoming ? request.fromUserId : request.toUserId;
//               const profile = profiles.find(p => p.id === profileId);
              
//               if (!profile) return null;

//               return (
//                 <View key={request.id} style={styles.requestItem}>
//                   <Image source={{ uri: profile.image }} style={styles.requestAvatar} />
//                   <View style={styles.requestInfo}>
//                     <Text style={styles.requestName}>{profile.name}</Text>
//                     <Text style={styles.requestType}>
//                       {isIncoming ? 'Sent you a request' : 'You sent request'}
//                     </Text>
//                     <Text style={styles.requestTime}>
//                       {new Date(request.createdAt).toLocaleDateString()}
//                     </Text>
//                   </View>
//                   {isIncoming ? (
//                     <TouchableOpacity 
//                       style={styles.acceptRequestButton}
//                       onPress={() => handleAcceptRequest(request.id)}
//                     >
//                       <Icon name="checkmark" size={16} color="white" />
//                       <Text style={styles.acceptRequestText}>Accept</Text>
//                     </TouchableOpacity>
//                   ) : (
//                     <TouchableOpacity style={styles.pendingButton} disabled>
//                       <Text style={styles.pendingButtonText}>Pending</Text>
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               );
//             })}
//           </ScrollView>
//         )}
//       </View>
//     );
//   };

//   // Chats Tab Component
//   const ChatsTab = () => {
//     return (
//       <View style={styles.screen}>
//         <Text style={styles.sectionTitle}>My Chats</Text>
//         {userChats.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Text style={styles.emptyStateText}>No active chats</Text>
//             <Text style={styles.emptyStateSubtext}>
//               Connect with matches to start chatting
//             </Text>
//           </View>
//         ) : (
//           <ScrollView 
//             style={styles.chatsContainer}
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//             }
//           >
//             {userChats.map(chat => {
//               const otherUserId = chat.user1Id === user.id ? chat.user2Id : chat.user1Id;
//               const profile = profiles.find(p => p.id === otherUserId);
              
//               if (!profile) return null;

//               const lastMessage = chat.messages[chat.messages.length - 1];
//               const unreadCount = chat.messages.filter(
//                 msg => msg.senderId !== user.id && msg.status !== 'read'
//               ).length;

//               return (
//                 <TouchableOpacity 
//                   key={chat.id} 
//                   style={styles.chatItem}
//                   onPress={() => navigation.navigate('Chat', { 
//                     chatId: chat.id,
//                     otherUser: profile 
//                   })}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.chatAvatar} />
//                   <View style={styles.chatInfo}>
//                     <Text style={styles.chatName}>{profile.name}</Text>
//                     <Text style={styles.lastMessage} numberOfLines={1}>
//                       {lastMessage ? lastMessage.text : 'No messages yet'}
//                     </Text>
//                   </View>
//                   <View style={styles.chatMeta}>
//                     <Text style={styles.chatTime}>
//                       {lastMessage ? 
//                         new Date(lastMessage.timestamp).toLocaleTimeString([], { 
//                           hour: '2-digit', 
//                           minute: '2-digit' 
//                         }) : ''
//                       }
//                     </Text>
//                     {unreadCount > 0 && (
//                       <View style={styles.unreadBadge}>
//                         <Text style={styles.unreadText}>{unreadCount}</Text>
//                       </View>
//                     )}
//                   </View>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         )}
//       </View>
//     );
//   };

//   const renderContent = () => {
//     if (!user) {
//       return (
//         <View style={styles.screen}>
//           <Text style={styles.placeholderText}>Please login to view matches</Text>
//         </View>
//       );
//     }

//     switch (activeTab) {
//       case 'my_matches':
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//       case 'requests':
//         return <RequestsTab />;
//       case 'chats':
//         return <ChatsTab />;
//       default:
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Icon name="arrow-back" size={24} color="#007AFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Matches</Text>
//         <View style={styles.headerRight} />
//       </View>

//       {/* Tabs */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false} 
//         style={styles.tabContainer}
//         contentContainerStyle={styles.tabContentContainer}
//       >
//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'my_matches' && styles.activeTabButton]}
//           onPress={() => setActiveTab('my_matches')}
//         >
//           <Text style={[styles.tabText, activeTab === 'my_matches' && styles.activeTabText]}>
//             My Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'requests' && styles.activeTabButton]}
//           onPress={() => setActiveTab('requests')}
//         >
//           <Text style={[styles.tabText, activeTab === 'requests' && styles.activeTabText]}>
//             Requests ({userRequests.length})
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'chats' && styles.activeTabButton]}
//           onPress={() => setActiveTab('chats')}
//         >
//           <Text style={[styles.tabText, activeTab === 'chats' && styles.activeTabText]}>
//             My Chats ({userChats.length})
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <View style={styles.contentContainer}>
//         {renderContent()}
//       </View>

//       {/* Profile Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={handleCloseModal}
//       >
//         <View style={modalStyles.overlay}>
//           <View style={modalStyles.modalContent}>
//             {selectedProfile && (
//               <>
//                 <TouchableOpacity 
//                   style={modalStyles.closeIcon}
//                   onPress={handleCloseModal}
//                 >
//                   <Icon name="close" size={24} color="#333" />
//                 </TouchableOpacity>
                
//                 <Image 
//                   source={{ uri: selectedProfile.image }} 
//                   style={modalStyles.modalImage}
//                   resizeMode="cover"
//                 />
//                 <View style={modalStyles.modalDetails}>
//                   <Text style={modalStyles.modalName}>{selectedProfile.name}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.age} yrs • {selectedProfile.height}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.job} • {selectedProfile.education}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.location}</Text>
//                   <Text style={modalStyles.modalCommunity}>{selectedProfile.community}</Text>
                  
//                   <View style={modalStyles.modalButtons}>
//                     <TouchableOpacity style={modalStyles.closeButton} onPress={handleCloseModal}>
//                       <Text style={modalStyles.closeButtonText}>Close</Text>
//                     </TouchableOpacity>
//                     {renderConnectionButton(selectedProfile)}
//                   </View>
//                 </View>
//               </>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };



// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     backgroundColor: '#fff',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   headerRight: {
//     width: 24,
//   },
//   backButton: {
//     padding: 4,
//   },
//   tabContainer: {
//     maxHeight: 50,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   tabContentContainer: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   tabButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginHorizontal: 4,
//     borderRadius: 8,
//   },
//   activeTabButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   screen: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   chatButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chatButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   connectButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   pendingButton: {
//     backgroundColor: '#FF9500',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pendingButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   requestActions: {
//     flexDirection: 'row',
//     flex: 1,
//     marginLeft: 6,
//   },
//   acceptButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   acceptButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   declineButton: {
//     backgroundColor: '#FF3B30',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   declineButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   requestsContainer: {
//     flex: 1,
//   },
//   requestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     marginBottom: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   requestAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   requestInfo: {
//     flex: 1,
//   },
//   requestName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   requestType: {
//     fontSize: 14,
//     color: '#666',
//   },
//   requestTime: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 2,
//   },
//   acceptRequestButton: {
//     backgroundColor: '#34C759',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   acceptRequestText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 4,
//   },
//   chatsContainer: {
//     flex: 1,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     marginBottom: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   chatAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   chatInfo: {
//     flex: 1,
//   },
//   chatName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   lastMessage: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatMeta: {
//     alignItems: 'flex-end',
//   },
//   chatTime: {
//     fontSize: 12,
//     color: '#999',
//     marginBottom: 4,
//   },
//   unreadBadge: {
//     backgroundColor: '#007AFF',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   unreadText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emptyStateText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 8,
//   },
//   emptyStateSubtext: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
// });

// const profileStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//     color: '#333',
//   },
//   cardsContainer: {
//     padding: 16,
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   cardContent: {
//     flexDirection: 'row',
//     padding: 12,
//   },
//   image: {
//     width: 100,
//     height: 120,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   details: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#333',
//   },
//   info: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   community: {
//     fontSize: 13,
//     color: '#888',
//     marginBottom: 8,
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//   },
//   viewButton: {
//     backgroundColor: '#6C757D',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
// });

// const modalStyles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     width: '100%',
//     maxWidth: 400,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   closeIcon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 10,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 15,
//     padding: 4,
//   },
//   modalImage: {
//     width: '100%',
//     height: 300,
//   },
//   modalDetails: {
//     padding: 20,
//   },
//   modalName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   modalInfo: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 4,
//   },
//   modalCommunity: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 20,
//     fontStyle: 'italic',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   closeButton: {
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     flex: 1,
//     marginRight: 8,
//   },
//   closeButtonText: {
//     color: '#007AFF',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });


// export default MatchesScreen;





// // src/screens/MatchesScreen.js
// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ScrollView, 
//   Image, 
//   Modal, 
//   Alert,
//   RefreshControl 
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const MatchesScreen = ({ route, navigation, user, registeredUsers }) => {
//   const [activeTab, setActiveTab] = useState('my_matches');
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [userConnections, setUserConnections] = useState({});

//   const profiles = [
//     {
//       id: 1,
//       name: "Aarushi Sharma",
//       age: 24,
//       job: "Software Engineer",
//       education: "B.Tech",
//       location: "Hyderabad",
//       community: "Hindu | Brahmin",
//       height: "5'4\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     {
//       id: 2,
//       name: "Arjun Reddy",
//       age: 27,
//       job: "Business Analyst",
//       education: "MBA",
//       location: "Bangalore",
//       community: "Hindu | Reddy",
//       height: "5'9\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//     {
//       id: 3,
//       name: "Sneha Patil",
//       age: 25,
//       job: "Doctor",
//       education: "MBBS",
//       location: "Pune",
//       community: "Hindu | Maratha",
//       height: "5'5\"",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//     },
//     {
//       id: 4,
//       name: "Rohit Verma",
//       age: 29,
//       job: "Civil Engineer",
//       education: "M.Tech",
//       location: "Delhi",
//       community: "Hindu | Kayastha",
//       height: "6'0\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     {
//       id: 5,
//       name: "Aditi Singh",
//       age: 23,
//       job: "HR Manager",
//       education: "MBA",
//       location: "Lucknow",
//       community: "Hindu | Rajput",
//       height: "5'3\"",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
//     },
//     {
//       id: 6,
//       name: "Vishal Kumar",
//       age: 28,
//       job: "Software Developer",
//       education: "B.Tech",
//       location: "Chennai",
//       community: "Hindu | Yadav",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     {
//       id: 7,
//       name: "Meera Nair",
//       age: 26,
//       job: "Fashion Designer",
//       education: "BA Fashion",
//       location: "Kochi",
//       community: "Hindu | Nair",
//       height: "5'5\"",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 8,
//       name: "Karan Mehta",
//       age: 30,
//       job: "Entrepreneur",
//       education: "MBA",
//       location: "Mumbai",
//       community: "Hindu | Jain",
//       height: "5'11\"",
//       image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
//     },
//     {
//       id: 9,
//       name: "Priya Das",
//       age: 24,
//       job: "Teacher",
//       education: "B.Ed",
//       location: "Kolkata",
//       community: "Hindu | Bengali",
//       height: "5'2\"",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 10,
//       name: "Sandeep Gupta",
//       age: 27,
//       job: "Bank Officer",
//       education: "B.Com",
//       location: "Ahmedabad",
//       community: "Hindu | Vaishya",
//       height: "5'8\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     }
//   ];

//   // Initialize connections
//   useEffect(() => {
//     if (user) {
//       initializeConnections();
//     }
//   }, [user]);

//   const initializeConnections = () => {
//     // Initialize with some demo connections
//     const connections = {};
//     profiles.forEach(profile => {
//       // Demo: Some profiles are connected, some have pending requests
//       if (profile.id <= 3) {
//         connections[profile.id] = { status: 'connected' };
//       } else if (profile.id <= 6) {
//         connections[profile.id] = { status: 'request_sent' };
//       } else if (profile.id <= 8) {
//         connections[profile.id] = { status: 'request_received' };
//       } else {
//         connections[profile.id] = { status: 'not_connected' };
//       }
//     });
//     setUserConnections(connections);
//   };

//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => setRefreshing(false), 1000);
//   };

//   const handleSendRequest = (profileId) => {
//     if (!user) {
//       Alert.alert('Error', 'Please login to send requests');
//       return;
//     }

//     setUserConnections(prev => ({
//       ...prev,
//       [profileId]: { status: 'request_sent' }
//     }));

//     Alert.alert('Success', 'Request sent successfully!');
//   };

//   const handleAcceptRequest = (profileId) => {
//     setUserConnections(prev => ({
//       ...prev,
//       [profileId]: { status: 'connected' }
//     }));

//     Alert.alert('Success', 'Request accepted! You are now connected.');
//   };

//   const handleStartChat = (profile) => {
//     const status = userConnections[profile.id]?.status;
    
//     if (status === 'connected') {
//       navigation.navigate('Chat', { 
//         otherUser: profile 
//       });
//     } else {
//       Alert.alert('Info', 'You need to connect before chatting');
//     }
//   };

//   const handleProfilePress = (profile) => {
//     setSelectedProfile(profile);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//     setSelectedProfile(null);
//   };

//   const renderConnectionButton = (profile) => {
//     const status = userConnections[profile.id]?.status;
    
//     switch (status) {
//       case 'connected':
//         return (
//           <TouchableOpacity 
//             style={styles.chatButton}
//             onPress={() => handleStartChat(profile)}
//           >
//             <Icon name="chatbubble-ellipses" size={16} color="white" />
//             <Text style={styles.chatButtonText}>Start Chat</Text>
//           </TouchableOpacity>
//         );
      
//       case 'request_sent':
//         return (
//           <TouchableOpacity style={styles.pendingButton} disabled>
//             <Icon name="time" size={16} color="white" />
//             <Text style={styles.pendingButtonText}>Request Sent</Text>
//           </TouchableOpacity>
//         );
      
//       case 'request_received':
//         return (
//           <View style={styles.requestActions}>
//             <TouchableOpacity 
//               style={styles.acceptButton}
//               onPress={() => handleAcceptRequest(profile.id)}
//             >
//               <Icon name="checkmark" size={16} color="white" />
//               <Text style={styles.acceptButtonText}>Accept</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.declineButton}>
//               <Icon name="close" size={16} color="white" />
//               <Text style={styles.declineButtonText}>Decline</Text>
//             </TouchableOpacity>
//           </View>
//         );
  

//       default:
//         return (
//           <TouchableOpacity 
//             style={styles.connectButton}
//             onPress={() => handleSendRequest(profile.id)}
//           >
//             <Icon name="person-add" size={16} color="white" />
//             <Text style={styles.connectButtonText}>Send Request</Text>
//           </TouchableOpacity>
//         );
//     }
//   };

//   // ProfileCards Component
//   const ProfileCards = ({ profiles, onProfilePress }) => {
//     return (
//       <View style={profileStyles.container}>
//         <Text style={profileStyles.title}>My Matches</Text>
//         <ScrollView 
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={profileStyles.cardsContainer}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         >
//           {profiles.map((profile) => (
//             <TouchableOpacity 
//               key={profile.id} 
//               style={profileStyles.card}
//               onPress={() => onProfilePress(profile)}
//             >
//               <View style={profileStyles.cardContent}>
//                 <Image 
//                   source={{ uri: profile.image }} 
//                   style={profileStyles.image}
//                   resizeMode="cover"
//                 />
//                 <View style={profileStyles.details}>
//                   <Text style={profileStyles.name}>{profile.name}</Text>
//                   <Text style={profileStyles.info}>{profile.age} yrs • {profile.height}</Text>
//                   <Text style={profileStyles.info}>{profile.job} • {profile.education}</Text>
//                   <Text style={profileStyles.info}>{profile.location}</Text>
//                   <Text style={profileStyles.community}>{profile.community}</Text>
                  
//                   <View style={profileStyles.buttonContainer}>
//                     <TouchableOpacity 
//                       style={profileStyles.viewButton}
//                       onPress={() => onProfilePress(profile)}
//                     >
//                       <Icon name="eye" size={14} color="white" />
//                       <Text style={profileStyles.buttonText}>View Profile</Text>
//                     </TouchableOpacity>
                    
//                     {renderConnectionButton(profile)}
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>
//     );
//   };

//   // Requests Tab Component
//   const RequestsTab = () => {
//     const pendingRequests = profiles.filter(profile => 
//       userConnections[profile.id]?.status === 'request_received'
//     );

//     return (
//       <View style={styles.screen}>
//         <Text style={styles.sectionTitle}>Chat Requests</Text>
//         {pendingRequests.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Text style={styles.emptyStateText}>No pending requests</Text>
//           </View>
//         ) : (
//           <ScrollView 
//             style={styles.requestsContainer}
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//             }
//           >
//             {pendingRequests.map(profile => (
//               <View key={profile.id} style={styles.requestItem}>
//                 <Image source={{ uri: profile.image }} style={styles.requestAvatar} />
//                 <View style={styles.requestInfo}>
//                   <Text style={styles.requestName}>{profile.name}</Text>
//                   <Text style={styles.requestType}>Sent you a connection request</Text>
//                   <Text style={styles.requestInfoText}>{profile.age} yrs • {profile.job}</Text>
//                 </View>
//                 <TouchableOpacity 
//                   style={styles.acceptRequestButton}
//                   onPress={() => handleAcceptRequest(profile.id)}
//                 >
//                   <Icon name="checkmark" size={16} color="white" />
//                   <Text style={styles.acceptRequestText}>Accept</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </ScrollView>
//         )}
//       </View>
//     );
//   };

//   // Chats Tab Component
//   const ChatsTab = () => {
//     const connectedProfiles = profiles.filter(profile => 
//       userConnections[profile.id]?.status === 'connected'
//     );

//     return (
//       <View style={styles.screen}>
//         <Text style={styles.sectionTitle}>My Chats</Text>
//         {connectedProfiles.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Text style={styles.emptyStateText}>No active chats</Text>
//             <Text style={styles.emptyStateSubtext}>
//               Connect with matches to start chatting
//             </Text>
//           </View>
//         ) : (
//           <ScrollView 
//             style={styles.chatsContainer}
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//             }
//           >
//             {connectedProfiles.map(profile => (
//               <TouchableOpacity 
//                 key={profile.id} 
//                 style={styles.chatItem}
//                 onPress={() => navigation.navigate('Chat', { 
//                   otherUser: profile 
//                 })}
//               >
//                 <Image source={{ uri: profile.image }} style={styles.chatAvatar} />
//                 <View style={styles.chatInfo}>
//                   <Text style={styles.chatName}>{profile.name}</Text>
//                   <Text style={styles.lastMessage} numberOfLines={1}>
//                     Tap to start chatting
//                   </Text>
//                 </View>
//                 <View style={styles.chatMeta}>
//                   <Text style={styles.chatTime}>
//                     Now
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         )}
//       </View>
//     );
//   };

//   const renderContent = () => {
//     if (!user) {
//       return (
//         <View style={styles.screen}>
//           <Text style={styles.placeholderText}>Please login to view matches</Text>
//         </View>
//       );
//     }

//     switch (activeTab) {
//       case 'my_matches':
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//       case 'requests':
//         return <RequestsTab />;
//       case 'chats':
//         return <ChatsTab />;
//       default:
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Icon name="arrow-back" size={24} color="#007AFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Matches</Text>
//         <View style={styles.headerRight} />
//       </View>

//       {/* Tabs */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false} 
//         style={styles.tabContainer}
//         contentContainerStyle={styles.tabContentContainer}
//       >
//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'my_matches' && styles.activeTabButton]}
//           onPress={() => setActiveTab('my_matches')}
//         >
//           <Text style={[styles.tabText, activeTab === 'my_matches' && styles.activeTabText]}>
//             My Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'requests' && styles.activeTabButton]}
//           onPress={() => setActiveTab('requests')}
//         >
//           <Text style={[styles.tabText, activeTab === 'requests' && styles.activeTabText]}>
//             Requests ({profiles.filter(p => userConnections[p.id]?.status === 'request_received').length})
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'chats' && styles.activeTabButton]}
//           onPress={() => setActiveTab('chats')}
//         >
//           <Text style={[styles.tabText, activeTab === 'chats' && styles.activeTabText]}>
//             My Chats ({profiles.filter(p => userConnections[p.id]?.status === 'connected').length})
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <View style={styles.contentContainer}>
//         {renderContent()}
//       </View>

//       {/* Profile Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={handleCloseModal}
//       >
//         <View style={modalStyles.overlay}>
//           <View style={modalStyles.modalContent}>
//             {selectedProfile && (
//               <>
//                 <TouchableOpacity 
//                   style={modalStyles.closeIcon}
//                   onPress={handleCloseModal}
//                 >
//                   <Icon name="close" size={24} color="#333" />
//                 </TouchableOpacity>
                
//                 <Image 
//                   source={{ uri: selectedProfile.image }} 
//                   style={modalStyles.modalImage}
//                   resizeMode="cover"
//                 />
//                 <View style={modalStyles.modalDetails}>
//                   <Text style={modalStyles.modalName}>{selectedProfile.name}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.age} yrs • {selectedProfile.height}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.job} • {selectedProfile.education}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.location}</Text>
//                   <Text style={modalStyles.modalCommunity}>{selectedProfile.community}</Text>
                  
//                   <View style={modalStyles.modalButtons}>
//                     <TouchableOpacity style={modalStyles.closeButton} onPress={handleCloseModal}>
//                       <Text style={modalStyles.closeButtonText}>Close</Text>
//                     </TouchableOpacity>
//                     {renderConnectionButton(selectedProfile)}
//                   </View>
//                 </View>
//               </>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// // Styles (keep the same styles as before)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     backgroundColor: '#fff',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   headerRight: {
//     width: 24,
//   },
//   backButton: {
//     padding: 4,
//   },
//   tabContainer: {
//     maxHeight: 50,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   tabContentContainer: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   tabButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginHorizontal: 4,
//     borderRadius: 8,
//   },
//   activeTabButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   screen: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   chatButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chatButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   connectButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   pendingButton: {
//     backgroundColor: '#FF9500',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pendingButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   requestActions: {
//     flexDirection: 'row',
//     flex: 1,
//     marginLeft: 6,
//   },
//   acceptButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   acceptButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   declineButton: {
//     backgroundColor: '#FF3B30',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   declineButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   requestsContainer: {
//     flex: 1,
//   },
//   requestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     marginBottom: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   requestAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   requestInfo: {
//     flex: 1,
//   },
//   requestName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   requestType: {
//     fontSize: 14,
//     color: '#666',
//   },
//   requestInfoText: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 2,
//   },
//   acceptRequestButton: {
//     backgroundColor: '#34C759',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   acceptRequestText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 4,
//   },
//   chatsContainer: {
//     flex: 1,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     marginBottom: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   chatAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   chatInfo: {
//     flex: 1,
//   },
//   chatName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   lastMessage: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatMeta: {
//     alignItems: 'flex-end',
//   },
//   chatTime: {
//     fontSize: 12,
//     color: '#999',
//     marginBottom: 4,
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emptyStateText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 8,
//   },
//   emptyStateSubtext: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
// });

// const profileStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//     color: '#333',
//   },
//   cardsContainer: {
//     padding: 16,
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   cardContent: {
//     flexDirection: 'row',
//     padding: 12,
//   },
//   image: {
//     width: 100,
//     height: 120,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   details: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#333',
//   },
//   info: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   community: {
//     fontSize: 13,
//     color: '#888',
//     marginBottom: 8,
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//   },
//   viewButton: {
//     backgroundColor: '#6C757D',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
// });

// const modalStyles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     width: '100%',
//     maxWidth: 400,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   closeIcon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 10,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 15,
//     padding: 4,
//   },
//   modalImage: {
//     width: '100%',
//     height: 300,
//   },
//   modalDetails: {
//     padding: 20,
//   },
//   modalName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   modalInfo: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 4,
//   },
//   modalCommunity: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 20,
//     fontStyle: 'italic',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   closeButton: {
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     flex: 1,
//     marginRight: 8,
//   },
//   closeButtonText: {
//     color: '#007AFF',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// export default MatchesScreen;












// // src/screens/MatchesScreen.js
// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ScrollView, 
//   Image, 
//   Modal, 
//   Alert,
//   RefreshControl 
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const MatchesScreen = ({ route, navigation, user, registeredUsers }) => {
//   const [activeTab, setActiveTab] = useState('my_matches');
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [userConnections, setUserConnections] = useState({});

//   const profiles = [
//     {
//       id: 1,
//       name: "Aarushi Sharma",
//       age: 24,
//       job: "Software Engineer",
//       education: "B.Tech",
//       location: "Hyderabad",
//       community: "Hindu | Brahmin",
//       height: "5'4\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     {
//       id: 2,
//       name: "Arjun Reddy",
//       age: 27,
//       job: "Business Analyst",
//       education: "MBA",
//       location: "Bangalore",
//       community: "Hindu | Reddy",
//       height: "5'9\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//     {
//       id: 3,
//       name: "Sneha Patil",
//       age: 25,
//       job: "Doctor",
//       education: "MBBS",
//       location: "Pune",
//       community: "Hindu | Maratha",
//       height: "5'5\"",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//     },
//     {
//       id: 4,
//       name: "Rohit Verma",
//       age: 29,
//       job: "Civil Engineer",
//       education: "M.Tech",
//       location: "Delhi",
//       community: "Hindu | Kayastha",
//       height: "6'0\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     {
//       id: 5,
//       name: "Aditi Singh",
//       age: 23,
//       job: "HR Manager",
//       education: "MBA",
//       location: "Lucknow",
//       community: "Hindu | Rajput",
//       height: "5'3\"",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
//     },
//     {
//       id: 6,
//       name: "Vishal Kumar",
//       age: 28,
//       job: "Software Developer",
//       education: "B.Tech",
//       location: "Chennai",
//       community: "Hindu | Yadav",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     {
//       id: 7,
//       name: "Meera Nair",
//       age: 26,
//       job: "Fashion Designer",
//       education: "BA Fashion",
//       location: "Kochi",
//       community: "Hindu | Nair",
//       height: "5'5\"",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 8,
//       name: "Karan Mehta",
//       age: 30,
//       job: "Entrepreneur",
//       education: "MBA",
//       location: "Mumbai",
//       community: "Hindu | Jain",
//       height: "5'11\"",
//       image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
//     },
//     {
//       id: 9,
//       name: "Priya Das",
//       age: 24,
//       job: "Teacher",
//       education: "B.Ed",
//       location: "Kolkata",
//       community: "Hindu | Bengali",
//       height: "5'2\"",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       id: 10,
//       name: "Sandeep Gupta",
//       age: 27,
//       job: "Bank Officer",
//       education: "B.Com",
//       location: "Ahmedabad",
//       community: "Hindu | Vaishya",
//       height: "5'8\"",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     }
//   ];

//   // Initialize connections
//   useEffect(() => {
//     if (user) {
//       initializeConnections();
//     }
//   }, [user]);

//   const initializeConnections = () => {
//     // Initialize with some demo connections
//     const connections = {};
//     profiles.forEach(profile => {
//       // Demo: Some profiles are connected, some have pending requests
//       if (profile.id <= 3) {
//         connections[profile.id] = { status: 'connected' };
//       } else if (profile.id <= 6) {
//         connections[profile.id] = { status: 'request_sent' };
//       } else if (profile.id <= 8) {
//         connections[profile.id] = { status: 'request_received' };
//       } else {
//         connections[profile.id] = { status: 'not_connected' };
//       }
//     });
//     setUserConnections(connections);
//   };

//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => setRefreshing(false), 1000);
//   };

//   const handleSendRequest = (profileId) => {
//     if (!user) {
//       Alert.alert('Error', 'Please login to send requests');
//       return;
//     }

//     setUserConnections(prev => ({
//       ...prev,
//       [profileId]: { status: 'request_sent' }
//     }));

//     Alert.alert('Success', 'Request sent successfully!');
//   };

//   const handleAcceptRequest = (profileId) => {
//     setUserConnections(prev => ({
//       ...prev,
//       [profileId]: { status: 'connected' }
//     }));

//     Alert.alert('Success', 'Request accepted! You are now connected.');
//   };

//   const handleStartChat = (profile) => {
//     const status = userConnections[profile.id]?.status;
    
//     if (status === 'connected') {
//       navigation.navigate('Chat', { 
//         otherUser: profile 
//       });
//     } else {
//       Alert.alert('Info', 'You need to connect before chatting');
//     }
//   };

//   const handleProfilePress = (profile) => {
//     setSelectedProfile(profile);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//     setSelectedProfile(null);
//   };

//   const renderConnectionButton = (profile) => {
//     const status = userConnections[profile.id]?.status;
    
//     switch (status) {
//       case 'connected':
//         return (
//           <TouchableOpacity 
//             style={styles.chatButton}
//             onPress={() => handleStartChat(profile)}
//           >
//             <Icon name="chatbubble-ellipses" size={16} color="white" />
//             <Text style={styles.chatButtonText}>Start Chat</Text>
//           </TouchableOpacity>
//         );
      
//       case 'request_sent':
//         return (
//           <TouchableOpacity style={styles.pendingButton} disabled>
//             <Icon name="time" size={16} color="white" />
//             <Text style={styles.pendingButtonText}>Request Sent</Text>
//           </TouchableOpacity>
//         );
      
//       case 'request_received':
//         return (
//           <View style={styles.requestActions}>
//             <TouchableOpacity 
//               style={styles.acceptButton}
//               onPress={() => handleAcceptRequest(profile.id)}
//             >
//               <Icon name="checkmark" size={16} color="white" />
//               <Text style={styles.acceptButtonText}>Accept</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.declineButton}>
//               <Icon name="close" size={16} color="white" />
//               <Text style={styles.declineButtonText}>Decline</Text>
//             </TouchableOpacity>
//           </View>
//         );
      
//       default:
//         return (
//           <TouchableOpacity 
//             style={styles.connectButton}
//             onPress={() => handleSendRequest(profile.id)}
//           >
//             <Icon name="person-add" size={16} color="white" />
//             <Text style={styles.connectButtonText}>Send Request</Text>
//           </TouchableOpacity>
//         );
//     }
//   };

//   // ProfileCards Component for My Matches
//   const ProfileCards = ({ profiles, onProfilePress }) => {
//     return (
//       <View style={profileStyles.container}>
//         <Text style={profileStyles.title}>My Matches</Text>
//         <ScrollView 
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={profileStyles.cardsContainer}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         >
//           {profiles.map((profile) => (
//             <TouchableOpacity 
//               key={profile.id} 
//               style={profileStyles.card}
//               onPress={() => onProfilePress(profile)}
//             >
//               <View style={profileStyles.cardContent}>
//                 <Image 
//                   source={{ uri: profile.image }} 
//                   style={profileStyles.image}
//                   resizeMode="cover"
//                 />
//                 <View style={profileStyles.details}>
//                   <Text style={profileStyles.name}>{profile.name}</Text>
//                   <Text style={profileStyles.info}>{profile.age} yrs • {profile.height}</Text>
//                   <Text style={profileStyles.info}>{profile.job} • {profile.education}</Text>
//                   <Text style={profileStyles.info}>{profile.location}</Text>
//                   <Text style={profileStyles.community}>{profile.community}</Text>
                  
//                   <View style={profileStyles.buttonContainer}>
//                     <TouchableOpacity 
//                       style={profileStyles.viewButton}
//                       onPress={() => onProfilePress(profile)}
//                     >
//                       <Icon name="eye" size={14} color="white" />
//                       <Text style={profileStyles.buttonText}>View Profile</Text>
//                     </TouchableOpacity>
                    
//                     {renderConnectionButton(profile)}
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>
//     );
//   };

//   // New Matches Tab Component
//   const NewMatchesTab = () => {
//     // Filter profiles that are not connected yet
//     const newProfiles = profiles.filter(profile => 
//       !userConnections[profile.id] || userConnections[profile.id]?.status === 'not_connected'
//     );

//     return (
//       <View style={styles.screen}>
//         <Text style={styles.sectionTitle}>New Matches</Text>
//         {newProfiles.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Icon name="people-outline" size={64} color="#ccc" />
//             <Text style={styles.emptyStateText}>No new matches available</Text>
//             <Text style={styles.emptyStateSubtext}>
//               Check back later for new potential matches
//             </Text>
//           </View>
//         ) : (
//           <ScrollView 
//             style={styles.requestsContainer}
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//             }
//           >
//             {newProfiles.map(profile => (
//               <View key={profile.id} style={styles.requestItem}>
//                 <Image source={{ uri: profile.image }} style={styles.requestAvatar} />
//                 <View style={styles.requestInfo}>
//                   <Text style={styles.requestName}>{profile.name}</Text>
//                   <Text style={styles.requestType}>{profile.age} yrs • {profile.job}</Text>
//                   <Text style={styles.requestInfoText}>{profile.location}</Text>
//                   <Text style={styles.requestCommunity}>{profile.community}</Text>
//                 </View>
//                 <TouchableOpacity 
//                   style={styles.connectButton}
//                   onPress={() => handleSendRequest(profile.id)}
//                 >
//                   <Icon name="person-add" size={16} color="white" />
//                   <Text style={styles.connectButtonText}>Connect</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </ScrollView>
//         )}
//       </View>
//     );
//   };

//   // Near Me Tab Component
//   const NearMeTab = () => {
//     return (
//       <View style={styles.screen}>
//         <Icon name="location-outline" size={80} color="#007AFF" />
//         <Text style={styles.placeholderTitle}>Near Me Feature</Text>
//         <Text style={styles.placeholderSubtext}>
//           Discover matches in your local area
//         </Text>
//         <Text style={styles.placeholderDescription}>
//           This feature will show you potential matches based on your current location and proximity.
//         </Text>
//         <TouchableOpacity style={styles.enableLocationButton}>
//           <Icon name="navigate" size={20} color="white" />
//           <Text style={styles.enableLocationText}>Enable Location</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   // More Matches Tab Component
//   const MoreMatchesTab = () => {
//     return (
//       <View style={styles.screen}>
//         <Icon name="search-outline" size={80} color="#34C759" />
//         <Text style={styles.placeholderTitle}>More Matches</Text>
//         <Text style={styles.placeholderSubtext}>
//           Expand your search criteria
//         </Text>
//         <Text style={styles.placeholderDescription}>
//           Adjust your preferences to discover more compatible matches based on your interests and criteria.
//         </Text>
        
//         <View style={styles.featureGrid}>
//           <View style={styles.featureItem}>
//             <Icon name="filter" size={24} color="#007AFF" />
//             <Text style={styles.featureText}>Advanced Filters</Text>
//           </View>
//           <View style={styles.featureItem}>
//             <Icon name="heart" size={24} color="#FF3B30" />
//             <Text style={styles.featureText}>Compatibility Score</Text>
//           </View>
//           <View style={styles.featureItem}>
//             <Icon name="star" size={24} color="#FFCC00" />
//             <Text style={styles.featureText}>Premium Matches</Text>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const renderContent = () => {
//     if (!user) {
//       return (
//         <View style={styles.screen}>
//           <Icon name="log-in-outline" size={64} color="#ccc" />
//           <Text style={styles.placeholderText}>Please login to view matches</Text>
//           <TouchableOpacity 
//             style={styles.loginButton}
//             onPress={() => navigation.navigate('login')}
//           >
//             <Text style={styles.loginButtonText}>Login Now</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }

//     switch (activeTab) {
//       case 'new_matches':
//         return <NewMatchesTab />;
//       case 'my_matches':
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//       case 'near_me':
//         return <NearMeTab />;
//       case 'more_matches':
//         return <MoreMatchesTab />;
//       default:
//         return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Icon name="arrow-back" size={24} color="#007AFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Matches</Text>
//         <View style={styles.headerRight} />
//       </View>

//       {/* Tabs */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false} 
//         style={styles.tabContainer}
//         contentContainerStyle={styles.tabContentContainer}
//       >
//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'new_matches' && styles.activeTabButton]}
//           onPress={() => setActiveTab('new_matches')}
//         >
//           <Text style={[styles.tabText, activeTab === 'new_matches' && styles.activeTabText]}>
//             New Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'my_matches' && styles.activeTabButton]}
//           onPress={() => setActiveTab('my_matches')}
//         >
//           <Text style={[styles.tabText, activeTab === 'my_matches' && styles.activeTabText]}>
//             My Matches
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'near_me' && styles.activeTabButton]}
//           onPress={() => setActiveTab('near_me')}
//         >
//           <Text style={[styles.tabText, activeTab === 'near_me' && styles.activeTabText]}>
//             Near Me
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tabButton, activeTab === 'more_matches' && styles.activeTabButton]}
//           onPress={() => setActiveTab('more_matches')}
//         >
//           <Text style={[styles.tabText, activeTab === 'more_matches' && styles.activeTabText]}>
//             More Matches
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <View style={styles.contentContainer}>
//         {renderContent()}
//       </View>

//       {/* Profile Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={handleCloseModal}
//       >
//         <View style={modalStyles.overlay}>
//           <View style={modalStyles.modalContent}>
//             {selectedProfile && (
//               <>
//                 <TouchableOpacity 
//                   style={modalStyles.closeIcon}
//                   onPress={handleCloseModal}
//                 >
//                   <Icon name="close" size={24} color="#333" />
//                 </TouchableOpacity>
                
//                 <Image 
//                   source={{ uri: selectedProfile.image }} 
//                   style={modalStyles.modalImage}
//                   resizeMode="cover"
//                 />
//                 <View style={modalStyles.modalDetails}>
//                   <Text style={modalStyles.modalName}>{selectedProfile.name}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.age} yrs • {selectedProfile.height}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.job} • {selectedProfile.education}</Text>
//                   <Text style={modalStyles.modalInfo}>{selectedProfile.location}</Text>
//                   <Text style={modalStyles.modalCommunity}>{selectedProfile.community}</Text>
                  
//                   <View style={modalStyles.modalButtons}>
//                     <TouchableOpacity style={modalStyles.closeButton} onPress={handleCloseModal}>
//                       <Text style={modalStyles.closeButtonText}>Close</Text>
//                     </TouchableOpacity>
//                     {renderConnectionButton(selectedProfile)}
//                   </View>
//                 </View>
//               </>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     backgroundColor: '#fff',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   headerRight: {
//     width: 24,
//   },
//   backButton: {
//     padding: 4,
//   },
//   tabContainer: {
//     maxHeight: 50,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   tabContentContainer: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   tabButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginHorizontal: 4,
//     borderRadius: 8,
//   },
//   activeTabButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   screen: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
//   placeholderTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 16,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   placeholderSubtext: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   placeholderDescription: {
//     fontSize: 14,
//     color: '#888',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 20,
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 16,
//     marginBottom: 20,
//   },
//   loginButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginTop: 16,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   enableLocationButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   enableLocationText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   featureGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   featureItem: {
//     alignItems: 'center',
//     padding: 12,
//   },
//   featureText: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 8,
//     textAlign: 'center',
//   },
//   chatButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chatButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   connectButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   connectButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   pendingButton: {
//     backgroundColor: '#FF9500',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pendingButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   requestActions: {
//     flexDirection: 'row',
//     flex: 1,
//     marginLeft: 6,
//   },
//   acceptButton: {
//     backgroundColor: '#34C759',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   acceptButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   declineButton: {
//     backgroundColor: '#FF3B30',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginLeft: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   declineButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   requestsContainer: {
//     flex: 1,
//     width: '100%',
//   },
//   requestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     marginBottom: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   requestAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   requestInfo: {
//     flex: 1,
//   },
//   requestName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   requestType: {
//     fontSize: 14,
//     color: '#666',
//   },
//   requestInfoText: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 2,
//   },
//   requestCommunity: {
//     fontSize: 11,
//     color: '#888',
//     fontStyle: 'italic',
//     marginTop: 2,
//   },
//   acceptRequestButton: {
//     backgroundColor: '#34C759',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   acceptRequestText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 4,
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emptyStateText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 8,
//     marginTop: 16,
//   },
//   emptyStateSubtext: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
// });

// const profileStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//     color: '#333',
//   },
//   cardsContainer: {
//     padding: 16,
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   cardContent: {
//     flexDirection: 'row',
//     padding: 12,
//   },
//   image: {
//     width: 100,
//     height: 120,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   details: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#333',
//   },
//   info: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   community: {
//     fontSize: 13,
//     color: '#888',
//     marginBottom: 8,
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//   },
//   viewButton: {
//     backgroundColor: '#6C757D',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     flex: 1,
//     marginRight: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 12,
//     marginLeft: 4,
//   },
// });

// const modalStyles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     width: '100%',
//     maxWidth: 400,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   closeIcon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 10,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 15,
//     padding: 4,
//   },
//   modalImage: {
//     width: '100%',
//     height: 300,
//   },
//   modalDetails: {
//     padding: 20,
//   },
//   modalName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   modalInfo: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 4,
//   },
//   modalCommunity: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 20,
//     fontStyle: 'italic',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   closeButton: {
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     flex: 1,
//     marginRight: 8,
//   },
//   closeButtonText: {
//     color: '#007AFF',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// export default MatchesScreen;






// src/screens/MatchesScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  Modal, 
  Alert,
  RefreshControl 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MatchesScreen = ({ route, navigation, user, registeredUsers }) => {
  const [activeTab, setActiveTab] = useState('my_matches');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [userConnections, setUserConnections] = useState({});

  const profiles = [
    {
      id: 1,
      name: "Aarushi Sharma",
      age: 24,
      job: "Software Engineer",
      education: "B.Tech",
      location: "Hyderabad",
      community: "Hindu | Brahmin",
      height: "5'4\"",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      id: 2,
      name: "Arjun Reddy",
      age: 27,
      job: "Business Analyst",
      education: "MBA",
      location: "Bangalore",
      community: "Hindu | Reddy",
      height: "5'9\"",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 3,
      name: "Sneha Patil",
      age: 25,
      job: "Doctor",
      education: "MBBS",
      location: "Pune",
      community: "Hindu | Maratha",
      height: "5'5\"",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 4,
      name: "Rohit Verma",
      age: 29,
      job: "Civil Engineer",
      education: "M.Tech",
      location: "Delhi",
      community: "Hindu | Kayastha",
      height: "6'0\"",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      id: 5,
      name: "Aditi Singh",
      age: 23,
      job: "HR Manager",
      education: "MBA",
      location: "Lucknow",
      community: "Hindu | Rajput",
      height: "5'3\"",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      id: 6,
      name: "Vishal Kumar",
      age: 28,
      job: "Software Developer",
      education: "B.Tech",
      location: "Chennai",
      community: "Hindu | Yadav",
      height: "5'10\"",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      id: 7,
      name: "Meera Nair",
      age: 26,
      job: "Fashion Designer",
      education: "BA Fashion",
      location: "Kochi",
      community: "Hindu | Nair",
      height: "5'5\"",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      name: "Karan Mehta",
      age: 30,
      job: "Entrepreneur",
      education: "MBA",
      location: "Mumbai",
      community: "Hindu | Jain",
      height: "5'11\"",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
    },
    {
      id: 9,
      name: "Priya Das",
      age: 24,
      job: "Teacher",
      education: "B.Ed",
      location: "Kolkata",
      community: "Hindu | Bengali",
      height: "5'2\"",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 10,
      name: "Sandeep Gupta",
      age: 27,
      job: "Bank Officer",
      education: "B.Com",
      location: "Ahmedabad",
      community: "Hindu | Vaishya",
      height: "5'8\"",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ];

  // Initialize connections
  useEffect(() => {
    if (user) {
      initializeConnections();
    }
  }, [user]);

  const initializeConnections = () => {
    // Initialize with some demo connections
    const connections = {};
    profiles.forEach(profile => {
      // Demo: Some profiles are connected, some have pending requests
      if (profile.id <= 3) {
        connections[profile.id] = { status: 'connected' };
      } else if (profile.id <= 6) {
        connections[profile.id] = { status: 'request_sent' };
      } else if (profile.id <= 8) {
        connections[profile.id] = { status: 'request_received' };
      } else {
        connections[profile.id] = { status: 'not_connected' };
      }
    });
    setUserConnections(connections);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleSendRequest = (profileId) => {
    if (!user) {
      Alert.alert('Error', 'Please login to send requests');
      return;
    }

    setUserConnections(prev => ({
      ...prev,
      [profileId]: { status: 'request_sent' }
    }));

    Alert.alert('Success', 'Request sent successfully!');
  };

  const handleAcceptRequest = (profileId) => {
    setUserConnections(prev => ({
      ...prev,
      [profileId]: { status: 'connected' }
    }));

    Alert.alert('Success', 'Request accepted! You are now connected.');
  };

  const handleProfilePress = (profile) => {
    setSelectedProfile(profile);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProfile(null);
  };

  const renderConnectionButton = (profile) => {
    const status = userConnections[profile.id]?.status;
    
    switch (status) {
      case 'connected':
        return (
          <TouchableOpacity style={styles.connectedButton} disabled>
            <Icon name="checkmark-circle" size={16} color="white" />
            <Text style={styles.connectedButtonText}>Connected</Text>
          </TouchableOpacity>
        );
      
      case 'request_sent':
        return (
          <TouchableOpacity style={styles.pendingButton} disabled>
            <Icon name="time" size={16} color="white" />
            <Text style={styles.pendingButtonText}>Request Sent</Text>
          </TouchableOpacity>
        );
      
      case 'request_received':
        return (
          <View style={styles.requestActions}>
            <TouchableOpacity 
              style={styles.acceptButton}
              onPress={() => handleAcceptRequest(profile.id)}
            >
              <Icon name="checkmark" size={16} color="white" />
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Icon name="close" size={16} color="white" />
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        );
      
      default:
        return (
          <TouchableOpacity 
            style={styles.connectButton}
            onPress={() => handleSendRequest(profile.id)}
          >
            <Icon name="person-add" size={16} color="white" />
            <Text style={styles.connectButtonText}>Send Request</Text>
          </TouchableOpacity>
        );
    }
  };

  // ProfileCards Component for My Matches
  const ProfileCards = ({ profiles, onProfilePress }) => {
    return (
      <View style={profileStyles.container}>
        <Text style={profileStyles.title}>My Matches</Text>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={profileStyles.cardsContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {profiles.map((profile) => (
            <TouchableOpacity 
              key={profile.id} 
              style={profileStyles.card}
              onPress={() => onProfilePress(profile)}
            >
              <View style={profileStyles.cardContent}>
                <Image 
                  source={{ uri: profile.image }} 
                  style={profileStyles.image}
                  resizeMode="cover"
                />
                <View style={profileStyles.details}>
                  <Text style={profileStyles.name}>{profile.name}</Text>
                  <Text style={profileStyles.info}>{profile.age} yrs • {profile.height}</Text>
                  <Text style={profileStyles.info}>{profile.job} • {profile.education}</Text>
                  <Text style={profileStyles.info}>{profile.location}</Text>
                  <Text style={profileStyles.community}>{profile.community}</Text>
                  
                  <View style={profileStyles.buttonContainer}>
                    <TouchableOpacity 
                      style={profileStyles.viewButton}
                      onPress={() => onProfilePress(profile)}
                    >
                      <Icon name="eye" size={14} color="white" />
                      <Text style={profileStyles.buttonText}>View Profile</Text>
                    </TouchableOpacity>
                    
                    {renderConnectionButton(profile)}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  // New Matches Tab Component
  const NewMatchesTab = () => {
    // Filter profiles that are not connected yet
    const newProfiles = profiles.filter(profile => 
      !userConnections[profile.id] || userConnections[profile.id]?.status === 'not_connected'
    );

    return (
      <View style={styles.screen}>
        <Text style={styles.sectionTitle}>New Matches</Text>
        {newProfiles.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="people-outline" size={64} color="#ccc" />
            <Text style={styles.emptyStateText}>No new matches available</Text>
            <Text style={styles.emptyStateSubtext}>
              Check back later for new potential matches
            </Text>
          </View>
        ) : (
          <ScrollView 
            style={styles.requestsContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {newProfiles.map(profile => (
              <View key={profile.id} style={styles.requestItem}>
                <Image source={{ uri: profile.image }} style={styles.requestAvatar} />
                <View style={styles.requestInfo}>
                  <Text style={styles.requestName}>{profile.name}</Text>
                  <Text style={styles.requestType}>{profile.age} yrs • {profile.job}</Text>
                  <Text style={styles.requestInfoText}>{profile.location}</Text>
                  <Text style={styles.requestCommunity}>{profile.community}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.connectButton}
                  onPress={() => handleSendRequest(profile.id)}
                >
                  <Icon name="person-add" size={16} color="white" />
                  <Text style={styles.connectButtonText}>Connect</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  };

  // Near Me Tab Component
  const NearMeTab = () => {
    return (
      <View style={styles.screen}>
        <Icon name="location-outline" size={80} color="#007AFF" />
        <Text style={styles.placeholderTitle}>Near Me Feature</Text>
        <Text style={styles.placeholderSubtext}>
          Discover matches in your local area
        </Text>
        <Text style={styles.placeholderDescription}>
          This feature will show you potential matches based on your current location and proximity.
        </Text>
        <TouchableOpacity style={styles.enableLocationButton}>
          <Icon name="navigate" size={20} color="white" />
          <Text style={styles.enableLocationText}>Enable Location</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // More Matches Tab Component
  const MoreMatchesTab = () => {
    return (
      <View style={styles.screen}>
        <Icon name="search-outline" size={80} color="#34C759" />
        <Text style={styles.placeholderTitle}>More Matches</Text>
        <Text style={styles.placeholderSubtext}>
          Expand your search criteria
        </Text>
        <Text style={styles.placeholderDescription}>
          Adjust your preferences to discover more compatible matches based on your interests and criteria.
        </Text>
        
        <View style={styles.featureGrid}>
          <View style={styles.featureItem}>
            <Icon name="filter" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Advanced Filters</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="heart" size={24} color="#FF3B30" />
            <Text style={styles.featureText}>Compatibility Score</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="star" size={24} color="#FFCC00" />
            <Text style={styles.featureText}>Premium Matches</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderContent = () => {
    if (!user) {
      return (
        <View style={styles.screen}>
          <Icon name="log-in-outline" size={64} color="#ccc" />
          <Text style={styles.placeholderText}>Please login to view matches</Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.loginButtonText}>Login Now</Text>
          </TouchableOpacity>
        </View>
      );
    }

    switch (activeTab) {
      case 'new_matches':
        return <NewMatchesTab />;
      case 'my_matches':
        return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
      case 'near_me':
        return <NearMeTab />;
      case 'more_matches':
        return <MoreMatchesTab />;
      default:
        return <ProfileCards profiles={profiles} onProfilePress={handleProfilePress} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Matches</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.tabContainer}
        contentContainerStyle={styles.tabContentContainer}
      >
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'new_matches' && styles.activeTabButton]}
          onPress={() => setActiveTab('new_matches')}
        >
          <Text style={[styles.tabText, activeTab === 'new_matches' && styles.activeTabText]}>
            New Matches
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'my_matches' && styles.activeTabButton]}
          onPress={() => setActiveTab('my_matches')}
        >
          <Text style={[styles.tabText, activeTab === 'my_matches' && styles.activeTabText]}>
            My Matches
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'near_me' && styles.activeTabButton]}
          onPress={() => setActiveTab('near_me')}
        >
          <Text style={[styles.tabText, activeTab === 'near_me' && styles.activeTabText]}>
            Near Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'more_matches' && styles.activeTabButton]}
          onPress={() => setActiveTab('more_matches')}
        >
          <Text style={[styles.tabText, activeTab === 'more_matches' && styles.activeTabText]}>
            More Matches
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.contentContainer}>
        {renderContent()}
      </View>

      {/* Profile Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalContent}>
            {selectedProfile && (
              <>
                <TouchableOpacity 
                  style={modalStyles.closeIcon}
                  onPress={handleCloseModal}
                >
                  <Icon name="close" size={24} color="#333" />
                </TouchableOpacity>
                
                <Image 
                  source={{ uri: selectedProfile.image }} 
                  style={modalStyles.modalImage}
                  resizeMode="cover"
                />
                <View style={modalStyles.modalDetails}>
                  <Text style={modalStyles.modalName}>{selectedProfile.name}</Text>
                  <Text style={modalStyles.modalInfo}>{selectedProfile.age} yrs • {selectedProfile.height}</Text>
                  <Text style={modalStyles.modalInfo}>{selectedProfile.job} • {selectedProfile.education}</Text>
                  <Text style={modalStyles.modalInfo}>{selectedProfile.location}</Text>
                  <Text style={modalStyles.modalCommunity}>{selectedProfile.community}</Text>
                  
                  <View style={modalStyles.modalButtons}>
                    <TouchableOpacity style={modalStyles.closeButton} onPress={handleCloseModal}>
                      <Text style={modalStyles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    {renderConnectionButton(selectedProfile)}
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerRight: {
    width: 24,
  },
  backButton: {
    padding: 4,
  },
  tabContainer: {
    maxHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabContentContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: '#f0f0f0',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  placeholderSubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  placeholderDescription: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  enableLocationButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  enableLocationText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  featureGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  featureItem: {
    alignItems: 'center',
    padding: 12,
  },
  featureText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  connectedButton: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectedButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  connectButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  pendingButton: {
    backgroundColor: '#FF9500',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendingButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  requestActions: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 6,
  },
  acceptButton: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  declineButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  requestsContainer: {
    flex: 1,
    width: '100%',
  },
  requestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  requestAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  requestInfo: {
    flex: 1,
  },
  requestName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  requestType: {
    fontSize: 14,
    color: '#666',
  },
  requestInfoText: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  requestCommunity: {
    fontSize: 11,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 2,
  },
  acceptRequestButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  acceptRequestText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  cardsContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  community: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  viewButton: {
    backgroundColor: '#6C757D',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    marginRight: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
});

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    maxWidth: 400,
    overflow: 'hidden',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 15,
    padding: 4,
  },
  modalImage: {
    width: '100%',
    height: 300,
  },
  modalDetails: {
    padding: 20,
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  modalCommunity: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    flex: 1,
    marginRight: 8,
  },
  closeButtonText: {
    color: '#007AFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default MatchesScreen;










// // Matches.js
// import React, { useState } from 'react';
// import { 
//     View, 
//     Text, 
//     TouchableOpacity, 
//     StyleSheet, 
//     SafeAreaView,
//     StatusBar 
// } from 'react-native';
// import NewMatches from './NewMatches';
// import MyMatches from './MyMatches';
// import NearMe from './NearMe';
// import MoreMatches from './MoreMatches';

// const MatchesScreen = ({ user, registeredUsers, navigation }) => {
//     const [activeTab, setActiveTab] = useState('newmatches');

//     const renderContent = () => {
//         const commonProps = {
//             user: user,
//             registeredUsers: registeredUsers,
//             navigation: navigation
//         };

//         switch (activeTab) {
//             case 'newmatches':
//                 return <NewMatches {...commonProps} />;
//             case 'mymatches':
//                 return <MyMatches {...commonProps} />;
//             case 'nearme':
//                 return <NearMe {...commonProps} />;
//             case 'morematches':
//                 return <MoreMatches {...commonProps} />;
//             default:
//                 return <NewMatches {...commonProps} />;
//         }
//     };

//     const handleBackToDashboard = () => {
//         navigation.navigate('dashboard');
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />
            
//             {/* Header with Back Button */}
//             <View style={styles.header}>
//                 <TouchableOpacity 
//                     style={styles.backButton}
//                     onPress={handleBackToDashboard}
//                 >
//                     <Text style={styles.backIcon}>←</Text>
//                     <Text style={styles.backText}>Back to Dashboard</Text>
//                 </TouchableOpacity>
                
//                 <Text style={styles.headerTitle}>Find Matches</Text>
//                 <View style={styles.headerPlaceholder} />
//             </View>

//             {/* Main Content */}
//             <View style={styles.content}>
//                 {renderContent()}
//             </View>

//             {/* Custom Bottom Tabs */}
//             <View style={styles.bottomTabs}>
//                 <TouchableOpacity 
//                     style={[styles.tab, activeTab === 'newmatches' && styles.activeTab]}
//                     onPress={() => setActiveTab('newmatches')}
//                 >
//                     <Text style={[styles.tabIcon, activeTab === 'newmatches' && styles.activeTabIcon]}>🆕</Text>
//                     <Text style={[styles.tabText, activeTab === 'newmatches' && styles.activeTabText]}>
//                         New
//                     </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity 
//                     style={[styles.tab, activeTab === 'mymatches' && styles.activeTab]}
//                     onPress={() => setActiveTab('mymatches')}
//                 >
//                     <Text style={[styles.tabIcon, activeTab === 'mymatches' && styles.activeTabIcon]}>⭐</Text>
//                     <Text style={[styles.tabText, activeTab === 'mymatches' && styles.activeTabText]}>
//                         My Matches
//                     </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity 
//                     style={[styles.tab, activeTab === 'nearme' && styles.activeTab]}
//                     onPress={() => setActiveTab('nearme')}
//                 >
//                     <Text style={[styles.tabIcon, activeTab === 'nearme' && styles.activeTabIcon]}>📍</Text>
//                     <Text style={[styles.tabText, activeTab === 'nearme' && styles.activeTabText]}>
//                         Near Me
//                     </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity 
//                     style={[styles.tab, activeTab === 'morematches' && styles.activeTab]}
//                     onPress={() => setActiveTab('morematches')}
//                 >
//                     <Text style={[styles.tabIcon, activeTab === 'morematches' && styles.activeTabIcon]}>🔍</Text>
//                     <Text style={[styles.tabText, activeTab === 'morematches' && styles.activeTabText]}>
//                         More
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F8F9FA',
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         backgroundColor: '#FFFFFF',
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E5E5E5',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//         elevation: 2,
//     },
//     backButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 8,
//     },
//     backIcon: {
//         fontSize: 20,
//         color: '#E94057',
//         marginRight: 6,
//         fontWeight: 'bold',
//     },
//     backText: {
//         fontSize: 14,
//         color: '#E94057',
//         fontWeight: '600',
//     },
//     headerTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#333',
//         textAlign: 'center',
//         flex: 1,
//     },
//     headerPlaceholder: {
//         width: 80, // Same width as back button for balance
//     },
//     content: {
//         flex: 1,
//     },
//     bottomTabs: {
//         flexDirection: 'row',
//         backgroundColor: '#FFFFFF',
//         borderTopWidth: 1,
//         borderTopColor: '#E5E5E5',
//         paddingVertical: 8,
//         paddingHorizontal: 16,
//         height: 70,
//     },
//     tab: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 8,
//     },
//     activeTab: {
//         borderTopWidth: 2,
//         borderTopColor: '#E94057',
//     },
//     tabIcon: {
//         fontSize: 20,
//         marginBottom: 4,
//         color: '#ADAFBB',
//     },
//     activeTabIcon: {
//         color: '#E94057',
//     },
//     tabText: {
//         fontSize: 12,
//         fontWeight: '500',
//         color: '#ADAFBB',
//         textAlign: 'center',
//     },
//     activeTabText: {
//         color: '#E94057',
//     },
// });

// export default MatchesScreen;
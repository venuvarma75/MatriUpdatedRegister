// // ChatScreen.js
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   Image,
//   Alert,
//   KeyboardAvoidingView,
//   Platform
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const ChatScreen = ({ route, navigation }) => {
//   const { profile } = route.params || {};
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMatchVerified, setIsMatchVerified] = useState(true); // Set to true for testing
//   const flatListRef = useRef(null);

//   // Sample initial messages with proper structure
//   const initialMessages = [
//     {
//       id: 1,
//       text: "Hello! I'm excited to chat with you. Your profile really stood out!",
//       time: "10:32 AM",
//       isUser: true,
//       type: 'text'
//     },
//     {
//       id: 2,
//       text: "That's wonderful! I'm currently working as a Software Engineer in Hyderabad. What about you?",
//       time: "10:33 AM",
//       isUser: false,
//       type: 'text',
//       senderName: profile?.name || 'Srivalli',
//       senderImage: profile?.image
//     },
//     {
//       id: 3,
//       text: "I'm a Product Manager in Delhi. I love how we both work in tech!",
//       time: "10:34 AM",
//       isUser: true,
//       type: 'text'
//     },
//     {
//       id: 4,
//       text: "That's amazing! We should definitely discuss more about our work and interests.",
//       time: "10:35 AM",
//       isUser: false,
//       type: 'text',
//       senderName: profile?.name || 'Srivalli',
//       senderImage: profile?.image
//     },
//     {
//       id: 5,
//       text: "That's wonderful! I have similar interests too.",
//       time: "7:06 PM",
//       isUser: false,
//       type: 'text',
//       senderName: profile?.name || 'Srivalli',
//       senderImage: profile?.image
//     }
//   ];

//   useEffect(() => {
//     // For demo, always set to verified
//     setIsMatchVerified(true);
//     setMessages(initialMessages);
//   }, [profile]);

//   useEffect(() => {
//     // Scroll to bottom when new message is added
//     if (messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (newMessage.trim() === '') return;

//     const newMsg = {
//       id: messages.length + 1,
//       text: newMessage,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       isUser: true,
//       type: 'text'
//     };

//     setMessages(prev => [...prev, newMsg]);
//     setNewMessage('');

//     // Simulate reply after 1-2 seconds
//     setTimeout(() => {
//       const replies = [
//         "That's interesting! Tell me more.",
//         "I'd love to hear more about that.",
//         "Sounds great! What else do you enjoy doing?",
//         "That's wonderful! I have similar interests too.",
//         "I appreciate you sharing that with me.",
//         "That sounds amazing! Let's plan to meet sometime.",
//         "I completely agree with you on that!",
//         "We have so much in common, it's incredible!"
//       ];
      
//       const randomReply = replies[Math.floor(Math.random() * replies.length)];
      
//       const replyMsg = {
//         id: messages.length + 2,
//         text: randomReply,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         isUser: false,
//         type: 'text',
//         senderName: profile?.name || 'Srivalli',
//         senderImage: profile?.image
//       };

//       setMessages(prev => [...prev, replyMsg]);
//     }, 1000 + Math.random() * 1000);
//   };

//   const handleVoiceCall = () => {
//     Alert.alert(
//       "Voice Call",
//       `Call ${profile?.name || 'this person'}?`,
//       [
//         { text: "Cancel", style: "cancel" },
//         { text: "Call", onPress: () => Alert.alert("Calling...", `Connecting to ${profile?.name}`) }
//       ]
//     );
//   };

//   const handleVideoCall = () => {
//     Alert.alert(
//       "Video Call",
//       `Start video call with ${profile?.name || 'this person'}?`,
//       [
//         { text: "Cancel", style: "cancel" },
//         { text: "Call", onPress: () => Alert.alert("Connecting...", `Starting video call with ${profile?.name}`) }
//       ]
//     );
//   };

//   const handleViewProfile = () => {
//     if (profile) {
//       Alert.alert(
//         'Profile Details',
//         `${profile.name}\n\nAge: ${profile.age}\nHeight: ${profile.height}\nEducation: ${profile.education}\nLocation: ${profile.location}\nProfession: ${profile.profession}\n\nBio: ${profile.bio}\n\nInterests: ${profile.interests?.join(', ')}`,
//         [{ text: 'OK', style: 'default' }]
//       );
//     }
//   };

//   const renderMessage = ({ item, index }) => {
//     const showAvatar = !item.isUser && (
//       index === 0 || 
//       messages[index - 1].isUser !== item.isUser ||
//       !messages[index - 1].senderName
//     );

//     return (
//       <View style={[
//         styles.messageContainer,
//         item.isUser ? styles.userMessage : styles.otherMessage
//       ]}>
//         {/* Other User's Avatar - Only show for first message in sequence */}
//         {!item.isUser && showAvatar && (
//           <View style={styles.avatarContainer}>
//             {item.senderImage ? (
//               <Image source={item.senderImage} style={styles.messageAvatar} />
//             ) : (
//               <View style={styles.avatarPlaceholder}>
//                 <Icon name="user" size={16} color="#fff" />
//               </View>
//             )}
//           </View>
//         )}
        
//         {/* Spacer for when avatar is hidden */}
//         {!item.isUser && !showAvatar && (
//           <View style={styles.avatarSpacer} />
//         )}

//         <View style={styles.messageContent}>
//           {/* Sender Name for other user's messages */}
//           {!item.isUser && showAvatar && item.senderName && (
//             <Text style={styles.senderName}>{item.senderName}</Text>
//           )}
          
//           <View style={[
//             styles.messageBubble,
//             item.isUser ? styles.userBubble : styles.otherBubble
//           ]}>
//             <Text style={[
//               styles.messageText,
//               item.isUser ? styles.userMessageText : styles.otherMessageText
//             ]}>
//               {item.text}
//             </Text>
//           </View>
          
//           <Text style={[
//             styles.messageTime,
//             item.isUser ? styles.userMessageTime : styles.otherMessageTime
//           ]}>
//             {item.time}
//           </Text>
//         </View>

//         {/* Current User's Avatar */}
//         {item.isUser && (
//           <View style={styles.userAvatarContainer}>
//             <View style={styles.userAvatar}>
//               <Text style={styles.userAvatarText}>Y</Text>
//             </View>
//           </View>
//         )}
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#ff6b6b" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Icon name="arrow-left" size={20} color="#333" />
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={styles.profileInfo}
//           onPress={handleViewProfile}
//         >
//           {profile?.image ? (
//             <Image source={profile.image} style={styles.headerAvatar} />
//           ) : (
//             <View style={styles.headerAvatarPlaceholder}>
//               <Icon name="user" size={20} color="#fff" />
//             </View>
//           )}
//           <View style={styles.profileText}>
//             <Text style={styles.profileName}>{profile?.name || 'Srivalli'}</Text>
//             <Text style={styles.profileStatus}>
//               <Icon name="check-circle" size={12} color="#4CAF50" /> Online
//             </Text>
//           </View>
//         </TouchableOpacity>

//         <View style={styles.headerActions}>
//           <TouchableOpacity style={styles.headerButton} onPress={handleVoiceCall}>
//             <Icon name="phone" size={18} color="#333" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerButton} onPress={handleVideoCall}>
//             <Icon name="video" size={18} color="#333" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Messages List */}
//       <KeyboardAvoidingView 
//         style={styles.chatContainer}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//       >
//         <FlatList
//           ref={flatListRef}
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={item => item.id.toString()}
//           style={styles.messagesList}
//           showsVerticalScrollIndicator={false}
//           onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//           contentContainerStyle={styles.messagesContent}
//         />

//         {/* Message Input */}
//         <View style={styles.inputContainer}>
//           <TouchableOpacity style={styles.attachButton}>
//             <Icon name="paperclip" size={20} color="#666" />
//           </TouchableOpacity>
          
//           <TextInput
//             style={styles.textInput}
//             placeholder={`Message ${profile?.name || 'Srivalli'}...`}
//             placeholderTextColor="#999"
//             value={newMessage}
//             onChangeText={setNewMessage}
//             multiline
//             maxLength={500}
//           />
          
//           <TouchableOpacity style={styles.emojiButton}>
//             <Icon name="smile" size={20} color="#666" />
//           </TouchableOpacity>
          
//           <TouchableOpacity 
//             style={[
//               styles.sendButton,
//               !newMessage.trim() && styles.sendButtonDisabled
//             ]}
//             onPress={handleSendMessage}
//             disabled={!newMessage.trim()}
//           >
//             <Icon 
//               name="paper-plane" 
//               size={18} 
//               color={newMessage.trim() ? "#fff" : "#ccc"} 
//             />
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     padding: 8,
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     marginLeft: 10,
//   },
//   headerAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   headerAvatarPlaceholder: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#ff6b6b',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   profileText: {
//     marginLeft: 12,
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileStatus: {
//     fontSize: 12,
//     color: '#4CAF50',
//     marginTop: 2,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerButton: {
//     padding: 8,
//     marginLeft: 10,
//   },
//   chatContainer: {
//     flex: 1,
//   },
//   messagesList: {
//     flex: 1,
//   },
//   messagesContent: {
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     marginVertical: 4,
//     alignItems: 'flex-start',
//   },
//   userMessage: {
//     justifyContent: 'flex-end',
//   },
//   otherMessage: {
//     justifyContent: 'flex-start',
//   },
//   avatarContainer: {
//     width: 36,
//     marginRight: 8,
//     alignItems: 'center',
//   },
//   avatarSpacer: {
//     width: 36,
//     marginRight: 8,
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//   },
//   avatarPlaceholder: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#ff6b6b',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   messageContent: {
//     flex: 1,
//     maxWidth: '80%',
//   },
//   senderName: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//     marginBottom: 2,
//     marginLeft: 8,
//   },
//   messageBubble: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 18,
//     marginBottom: 4,
//   },
//   userBubble: {
//     backgroundColor: '#ff6b6b',
//     borderBottomRightRadius: 4,
//     alignSelf: 'flex-end',
//   },
//   otherBubble: {
//     backgroundColor: 'white',
//     borderBottomLeftRadius: 4,
//     alignSelf: 'flex-start',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 20,
//   },
//   userMessageText: {
//     color: 'white',
//   },
//   otherMessageText: {
//     color: '#333',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//     marginHorizontal: 8,
//   },
//   userMessageTime: {
//     color: '#666',
//     textAlign: 'right',
//   },
//   otherMessageTime: {
//     color: '#666',
//     textAlign: 'left',
//   },
//   userAvatarContainer: {
//     width: 36,
//     marginLeft: 8,
//     alignItems: 'center',
//   },
//   userAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#e0e0e0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   userAvatarText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#666',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     padding: 15,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//   },
//   attachButton: {
//     padding: 10,
//     marginRight: 5,
//   },
//   textInput: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     color: '#333',
//     marginHorizontal: 5,
//   },
//   emojiButton: {
//     padding: 10,
//     marginHorizontal: 5,
//   },
//   sendButton: {
//     backgroundColor: '#ff6b6b',
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 5,
//   },
//   sendButtonDisabled: {
//     backgroundColor: '#e0e0e0',
//   },
// });

// export default ChatScreen;



// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ChatWindow = () => {
//   const [chats, setChats] = useState([
//     {
//       id: 1,
//       name: "Priya Sharma",
//       avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//       messages: [
//         { sender: "Priya Sharma", text: "Hi Naveen, how are you?", time: "10:30 AM" },
//         { sender: "Me", text: "I'm good, thanks Priya!", time: "10:32 AM" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Rahul Mehta",
//       avatar: "https://randomuser.me/api/portraits/men/41.jpg",
//       messages: [
//         { sender: "Rahul Mehta", text: "Hey! Did you check the proposal?", time: "Yesterday" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Sneha Reddy",
//       avatar: "https://randomuser.me/api/portraits/women/75.jpg",
//       messages: [
//         { sender: "Sneha Reddy", text: "Hi! Are you free this weekend?", time: "2:45 PM" },
//       ],
//     },
//   ]);

//   const [selectedChatId, setSelectedChatId] = useState(1);
//   const [message, setMessage] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const flatListRef = useRef(null);

//   const selectedChat = chats.find((chat) => chat.id === selectedChatId);

//   const handleSend = () => {
//     if (!message.trim()) return;
//     const newMessage = {
//       sender: "Me",
//       text: message,
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     };

//     setChats((prevChats) =>
//       prevChats.map((chat) =>
//         chat.id === selectedChatId
//           ? { ...chat, messages: [...chat.messages, newMessage] }
//           : chat
//       )
//     );

//     setMessage("");
//   };

//   useEffect(() => {
//     // Scroll to bottom when messages change
//     if (flatListRef.current && selectedChat?.messages.length) {
//       setTimeout(() => {
//         flatListRef.current.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [selectedChat?.messages]);

//   // Filter chats by search term
//   const filteredChats = chats.filter((chat) =>
//     chat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderChatItem = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.chatlistItem,
//         selectedChatId === item.id && styles.selectedChatItem,
//       ]}
//       onPress={() => setSelectedChatId(item.id)}
//     >
//       <Image source={{ uri: item.avatar }} style={styles.chatlistAvatar} />
//       <View style={styles.chatlistContent}>
//         <Text style={styles.chatlistName}>{item.name}</Text>
//         <Text style={styles.chatlistLastMessage} numberOfLines={1}>
//           {item.messages[item.messages.length - 1]?.text}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderMessage = ({ item, index }) => (
//     <View
//       style={[
//         styles.chatBubble,
//         item.sender === "Me" ? styles.myMessage : styles.theirMessage,
//       ]}
//     >
//       <Text style={item.sender === "Me" ? styles.myMessageText : styles.theirMessageText}>
//         {item.text}
//       </Text>
//       <Text style={[
//         styles.chatTime,
//         item.sender === "Me" ? styles.myChatTime : styles.theirChatTime
//       ]}>
//         {item.time}
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.chatpageContainer}>
//         {/* Chat List */}
//         <View style={styles.chatlistContainer}>
//           <View style={styles.chatlistHeader}>
//             <Text style={styles.headerTitle}>SaathJanam</Text>
//           </View>

//           {/* Search Bar */}
//           <View style={styles.searchContainer}>
//             <Icon name="search" size={18} color="#666" />
//             <TextInput
//               placeholder="Search..."
//               value={searchTerm}
//               onChangeText={setSearchTerm}
//               style={styles.searchInput}
//               placeholderTextColor="#666"
//             />
//           </View>

//           {/* Chat Items */}
//           <View style={styles.chatList}>
//             {filteredChats.length > 0 ? (
//               <FlatList
//                 data={filteredChats}
//                 renderItem={renderChatItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 showsVerticalScrollIndicator={false}
//               />
//             ) : (
//               <View style={styles.noResults}>
//                 <Text style={styles.noResultsText}>No results found</Text>
//               </View>
//             )}
//           </View>
//         </View>

//         {/* Chat Window */}
//         <View style={styles.chatwindowContainer}>
//           <View style={styles.chatwindowHeader}>
//             <View style={styles.chatwindowUser}>
//               <Image
//                 source={{ uri: selectedChat?.avatar }}
//                 style={styles.chatwindowAvatar}
//               />
//               <View>
//                 <Text style={styles.chatwindowName}>{selectedChat?.name}</Text>
//                 <Text style={styles.activeStatus}>Active now</Text>
//               </View>
//             </View>
//           </View>

//           {/* Messages */}
//           <View style={styles.chatwindowMessages}>
//             <FlatList
//               ref={flatListRef}
//               data={selectedChat?.messages || []}
//               renderItem={renderMessage}
//               keyExtractor={(item, index) => index.toString()}
//               showsVerticalScrollIndicator={false}
//               onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//             />
//           </View>

//           {/* Input */}
//           <KeyboardAvoidingView 
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.chatwindowInput}
//           >
//             <TextInput
//               placeholder="Write a message..."
//               value={message}
//               onChangeText={setMessage}
//               style={styles.input}
//               placeholderTextColor="#666"
//               multiline
//             />
//             <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
//               <Icon name="send" size={20} color="white" />
//             </TouchableOpacity>
//           </KeyboardAvoidingView>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//   },
//   chatpageContainer: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   // Chat List Styles
//   chatlistContainer: {
//     width: '30%',
//     borderRightWidth: 1,
//     borderRightColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   chatlistHeader: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#0078ff',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f1f3f4',
//     margin: 10,
//     padding: 8,
//     borderRadius: 8,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 8,
//     fontSize: 14,
//     color: '#000',
//   },
//   chatList: {
//     flex: 1,
//   },
//   chatlistItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   selectedChatItem: {
//     backgroundColor: '#e8f0fe',
//   },
//   chatlistAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 12,
//   },
//   chatlistContent: {
//     flex: 1,
//   },
//   chatlistName: {
//     fontSize: 15,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   chatlistLastMessage: {
//     fontSize: 13,
//     color: '#666',
//   },
//   noResults: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   noResultsText: {
//     color: '#888',
//     fontSize: 16,
//   },
//   // Chat Window Styles
//   chatwindowContainer: {
//     flex: 1,
//     backgroundColor: '#fdfdfd',
//   },
//   chatwindowHeader: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#fff',
//   },
//   chatwindowUser: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   chatwindowAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 12,
//   },
//   chatwindowName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 2,
//   },
//   activeStatus: {
//     color: '#2ecc71',
//     fontSize: 13,
//   },
//   chatwindowMessages: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//   },
//   chatBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 16,
//     marginVertical: 4,
//     marginHorizontal: 16,
//   },
//   myMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#0078ff',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#eaeaea',
//     borderBottomLeftRadius: 4,
//   },
//   myMessageText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   theirMessageText: {
//     color: 'black',
//     fontSize: 14,
//   },
//   chatTime: {
//     fontSize: 11,
//     marginTop: 4,
//     textAlign: 'right',
//   },
//   myChatTime: {
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   theirChatTime: {
//     color: 'rgba(0, 0, 0, 0.5)',
//   },
//   chatwindowInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#f1f3f4',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginRight: 10,
//     fontSize: 14,
//     backgroundColor: '#f1f3f4',
//     maxHeight: 100,
//   },
//   sendButton: {
//     backgroundColor: '#0078ff',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ChatWindow;






















// // src/screens/ChatScreen.js
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   Image, 
//   StyleSheet, 
//   FlatList, 
//   KeyboardAvoidingView, 
//   Platform,
//   SafeAreaView,
//   Alert 
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ChatScreen = ({ route, navigation, user, chatManager }) => {
//   const { chatId, otherUser } = route.params || {};
//   const [message, setMessage] = useState('');
//   const [chat, setChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     if (chatId) {
//       loadChat();
//       // Set up interval to refresh messages
//       const interval = setInterval(loadChat, 2000);
//       return () => clearInterval(interval);
//     }
//   }, [chatId]);

//   const loadChat = () => {
//     const currentChat = chatManager.getChatById(chatId);
    
//     if (currentChat) {
//       setChat(currentChat);
//       setMessages([...currentChat.messages]);
//     } else {
//       Alert.alert('Error', 'Chat not found');
//       navigation.goBack();
//     }
//   };

//   const handleSend = () => {
//     if (!message.trim()) return;

//     // Get current user from chatManager
//     const currentUser = chatManager.currentUser || user;
//     if (!currentUser) {
//       Alert.alert('Error', 'User not found');
//       return;
//     }

//     const result = chatManager.sendMessage(chatId, currentUser.id, message);
    
//     if (result.success) {
//       setMessage('');
//       loadChat();
      
//       // Scroll to bottom after sending message
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     } else {
//       Alert.alert('Error', result.message);
//     }
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const renderMessage = ({ item }) => {
//     const currentUser = chatManager.currentUser || user;
//     const isMyMessage = item.senderId === currentUser?.id;

//     return (
//       <View
//         style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage,
//         ]}
//       >
//         <Text style={isMyMessage ? styles.myMessageText : styles.theirMessageText}>
//           {item.text}
//         </Text>
//         <Text style={[
//           styles.messageTime,
//           isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//         ]}>
//           {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </Text>
//       </View>
//     );
//   };

//   if (!chat) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.loadingContainer}>
//           <Text>Loading chat...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Chat Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#007AFF" />
//         </TouchableOpacity>
//         <View style={styles.userInfo}>
//           <Image
//             source={{ uri: otherUser?.image }}
//             style={styles.avatar}
//           />
//           <View style={styles.userDetails}>
//             <Text style={styles.userName}>{otherUser?.name}</Text>
//             <Text style={styles.userStatus}>Online</Text>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.menuButton}>
//           <Icon name="ellipsis-vertical" size={20} color="#007AFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Messages List */}
//       <View style={styles.messagesContainer}>
//         <FlatList
//           ref={flatListRef}
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//           onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
//         />
//       </View>

//       {/* Message Input */}
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.inputContainer}
//       >
//         <TextInput
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={setMessage}
//           style={styles.input}
//           placeholderTextColor="#666"
//           multiline
//           maxLength={500}
//         />
//         <TouchableOpacity 
//           onPress={handleSend} 
//           style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
//           disabled={!message.trim()}
//         >
//           <Icon name="send" size={20} color="white" />
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   backButton: {
//     padding: 4,
//     marginRight: 12,
//   },
//   userInfo: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   userDetails: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   userStatus: {
//     fontSize: 12,
//     color: '#2ecc71',
//   },
//   menuButton: {
//     padding: 4,
//   },
//   messagesContainer: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//     paddingHorizontal: 16,
//   },
//   messageBubble: {
//     maxWidth: '80%',
//     padding: 12,
//     borderRadius: 18,
//     marginVertical: 4,
//   },
//   myMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#007AFF',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#e5e5ea',
//     borderBottomLeftRadius: 4,
//   },
//   myMessageText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   theirMessageText: {
//     color: 'black',
//     fontSize: 16,
//   },
//   messageTime: {
//     fontSize: 11,
//     marginTop: 4,
//     textAlign: 'right',
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   theirMessageTime: {
//     color: 'rgba(0, 0, 0, 0.5)',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginRight: 12,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     maxHeight: 100,
//   },
//   sendButton: {
//     backgroundColor: '#007AFF',
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sendButtonDisabled: {
//     backgroundColor: '#ccc',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ChatScreen;







// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   BackHandler,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ChatWindow = ({ onBack }) => {
//   const [chats, setChats] = useState([
//     {
//       id: 1,
//       name: "Priya Sharma",
//       avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//       messages: [
//         { sender: "Priya Sharma", text: "Hi Naveen, how are you?", time: "10:30 AM" },
//         { sender: "Me", text: "I'm good, thanks Priya!", time: "10:32 AM" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Rahul Mehta",
//       avatar: "https://randomuser.me/api/portraits/men/41.jpg",
//       messages: [
//         { sender: "Rahul Mehta", text: "Hey! Did you check the proposal?", time: "Yesterday" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Sneha Reddy",
//       avatar: "https://randomuser.me/api/portraits/women/75.jpg",
//       messages: [
//         { sender: "Sneha Reddy", text: "Hi! Are you free this weekend?", time: "2:45 PM" },
//       ],
//     },
//   ]);

//   const [selectedChatId, setSelectedChatId] = useState(1);
//   const [message, setMessage] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewState, setViewState] = useState('chatList'); // 'chatList', 'chatWindow'
//   const flatListRef = useRef(null);

//   const selectedChat = chats.find((chat) => chat.id === selectedChatId);

//   // Handle Android back button
//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', handleHardwareBackPress);
    
//     return () => backHandler.remove();
//   }, [viewState]);

//   const handleHardwareBackPress = () => {
//     if (viewState === 'chatWindow') {
//       handleBackToChatList();
//       return true; // Prevent default back behavior
//     } else if (viewState === 'chatList') {
//       handleBackToDashboard();
//       return true; // Prevent default back behavior
//     }
//     return false; // Use default back behavior
//   };

//   const handleSend = () => {
//     if (!message.trim()) return;
//     const newMessage = {
//       sender: "Me",
//       text: message,
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     };

//     setChats((prevChats) =>
//       prevChats.map((chat) =>
//         chat.id === selectedChatId
//           ? { ...chat, messages: [...chat.messages, newMessage] }
//           : chat
//       )
//     );

//     setMessage("");
//   };

//   // Handle back navigation to dashboard
//   const handleBackToDashboard = () => {
//     console.log('Going back to dashboard');
//     if (onBack) {
//       onBack(); // Call parent's back handler to go back to dashboard
//     }
//   };

//   // Handle back to chat list (when in mobile view)
//   const handleBackToChatList = () => {
//     console.log('Going back to chat list');
//     setViewState('chatList');
//   };

//   // Handle chat selection
//   const handleChatSelect = (chatId) => {
//     setSelectedChatId(chatId);
//     if (Platform.OS !== 'web') {
//       setViewState('chatWindow');
//     }
//   };

//   // Combined back handler that works for both views
//   const handleUniversalBack = () => {
//     console.log('Universal back pressed, current viewState:', viewState);
//     if (viewState === 'chatWindow') {
//       handleBackToChatList();
//     } else {
//       handleBackToDashboard();
//     }
//   };

//   useEffect(() => {
//     // Scroll to bottom when messages change
//     if (flatListRef.current && selectedChat?.messages.length) {
//       setTimeout(() => {
//         flatListRef.current.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [selectedChat?.messages]);

//   // Filter chats by search term
//   const filteredChats = chats.filter((chat) =>
//     chat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderChatItem = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.chatlistItem,
//         selectedChatId === item.id && styles.selectedChatItem,
//       ]}
//       onPress={() => handleChatSelect(item.id)}
//     >
//       <Image source={{ uri: item.avatar }} style={styles.chatlistAvatar} />
//       <View style={styles.chatlistContent}>
//         <Text style={styles.chatlistName}>{item.name}</Text>
//         <Text style={styles.chatlistLastMessage} numberOfLines={1}>
//           {item.messages[item.messages.length - 1]?.text}
//         </Text>
//         <Text style={styles.chatlistTime}>
//           {item.messages[item.messages.length - 1]?.time}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderMessage = ({ item, index }) => (
//     <View
//       style={[
//         styles.chatBubble,
//         item.sender === "Me" ? styles.myMessage : styles.theirMessage,
//       ]}
//     >
//       <Text style={item.sender === "Me" ? styles.myMessageText : styles.theirMessageText}>
//         {item.text}
//       </Text>
//       <Text style={[
//         styles.chatTime,
//         item.sender === "Me" ? styles.myChatTime : styles.theirChatTime
//       ]}>
//         {item.time}
//       </Text>
//     </View>
//   );

//   // Determine which view to show based on platform and state
//   const showChatList = Platform.OS === 'web' || viewState === 'chatList';
//   const showChatWindow = Platform.OS === 'web' || viewState === 'chatWindow';

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.chatpageContainer}>
//         {/* Chat List - Always visible on web, conditionally on mobile */}
//         {showChatList && (
//           <View style={[
//             styles.chatlistContainer,
//             Platform.OS === 'web' && styles.chatlistContainerWeb,
//             Platform.OS !== 'web' && styles.chatlistContainerMobile
//           ]}>
//             <View style={styles.chatlistHeader}>
//               {/* Back button for mobile when in chat list */}
//               {Platform.OS !== 'web' && (
//                 <TouchableOpacity 
//                   onPress={handleUniversalBack} 
//                   style={styles.backButton}
//                   testID="chat-list-back-button"
//                 >
//                   <Icon name="arrow-back" size={24} color="#0078ff" />
//                   <Text style={styles.backButtonText}></Text>
//                 </TouchableOpacity>
//               )}
//               <Text style={styles.headerTitle}>SaathJanam</Text>
//             </View>

//             {/* Search Bar */}
//             <View style={styles.searchContainer}>
//               <Icon name="search" size={18} color="#666" />
//               <TextInput
//                 placeholder="Search chats..."
//                 value={searchTerm}
//                 onChangeText={setSearchTerm}
//                 style={styles.searchInput}
//                 placeholderTextColor="#666"
//               />
//             </View>

//             {/* Chat Items */}
//             <View style={styles.chatList}>
//               {filteredChats.length > 0 ? (
//                 <FlatList
//                   data={filteredChats}
//                   renderItem={renderChatItem}
//                   keyExtractor={(item) => item.id.toString()}
//                   showsVerticalScrollIndicator={false}
//                 />
//               ) : (
//                 <View style={styles.noResults}>
//                   <Icon name="search-outline" size={48} color="#ccc" />
//                   <Text style={styles.noResultsText}>No chats found</Text>
//                   <Text style={styles.noResultsSubText}>
//                     {searchTerm ? 'Try a different search term' : 'Start a new conversation'}
//                   </Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         )}

//         {/* Chat Window */}
//         {showChatWindow && (
//           <View style={[
//             styles.chatwindowContainer,
//             Platform.OS !== 'web' && styles.chatwindowContainerMobile
//           ]}>
//             <View style={styles.chatwindowHeader}>
//               <View style={styles.chatwindowUser}>
//                 {/* Back button for mobile in chat window - positioned before image */}
//                 {Platform.OS !== 'web' && (
//                   <TouchableOpacity 
//                     onPress={handleUniversalBack} 
//                     style={styles.chatBackButton}
//                     testID="chat-window-back-button"
//                   >
//                     <Icon name="arrow-back" size={24} color="#0078ff" />
//                     <Text style={styles.backButtonText}></Text>
//                   </TouchableOpacity>
//                 )}
//                 <Image
//                   source={{ uri: selectedChat?.avatar }}
//                   style={styles.chatwindowAvatar}
//                 />
//                 <View style={styles.chatwindowUserInfo}>
//                   <Text style={styles.chatwindowName}>{selectedChat?.name}</Text>
//                   <Text style={styles.activeStatus}>Active now</Text>
//                 </View>
//               </View>
//             </View>

//             {/* Messages */}
//             <View style={styles.chatwindowMessages}>
//               {selectedChat?.messages && selectedChat.messages.length > 0 ? (
//                 <FlatList
//                   ref={flatListRef}
//                   data={selectedChat.messages}
//                   renderItem={renderMessage}
//                   keyExtractor={(item, index) => index.toString()}
//                   showsVerticalScrollIndicator={false}
//                   onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//                 />
//               ) : (
//                 <View style={styles.noMessages}>
//                   <Icon name="chatbubble-outline" size={48} color="#ccc" />
//                   <Text style={styles.noMessagesText}>No messages yet</Text>
//                   <Text style={styles.noMessagesSubText}>Start the conversation!</Text>
//                 </View>
//               )}
//             </View>

//             {/* Input */}
//             <KeyboardAvoidingView 
//               behavior={Platform.OS === "ios" ? "padding" : "height"}
//               style={styles.chatwindowInput}
//             >
//               <TextInput
//                 placeholder="Type a message..."
//                 value={message}
//                 onChangeText={setMessage}
//                 style={styles.input}
//                 placeholderTextColor="#666"
//                 multiline
//               />
//               <TouchableOpacity 
//                 onPress={handleSend} 
//                 style={[
//                   styles.sendButton,
//                   !message.trim() && styles.sendButtonDisabled
//                 ]}
//                 disabled={!message.trim()}
//               >
//                 <Icon name="send" size={20} color="white" />
//               </TouchableOpacity>
//             </KeyboardAvoidingView>
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//   },
//   chatpageContainer: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   // Chat List Styles
//   chatlistContainer: {
//     borderRightWidth: 1,
//     borderRightColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   chatlistContainerWeb: {
//     width: '30%',
//   },
//   chatlistContainerMobile: {
//     width: '100%',
//   },
//   chatlistHeader: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   backButton: {
//     position: 'absolute',
//     left: 16,
//     padding: 8,
//     zIndex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backButtonText: {
//     color: '#0078ff',
//     fontSize: 16,
//     marginLeft: 8,
//     fontWeight: '500',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#0078ff',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f1f3f4',
//     margin: 10,
//     padding: 8,
//     borderRadius: 8,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 8,
//     fontSize: 14,
//     color: '#000',
//   },
//   chatList: {
//     flex: 1,
//   },
//   chatlistItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   selectedChatItem: {
//     backgroundColor: '#e8f0fe',
//     borderLeftWidth: 3,
//     borderLeftColor: '#0078ff',
//   },
//   chatlistAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   chatlistContent: {
//     flex: 1,
//   },
//   chatlistName: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 2,
//     color: '#333',
//   },
//   chatlistLastMessage: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 2,
//   },
//   chatlistTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   noResults: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   noResultsText: {
//     color: '#888',
//     fontSize: 16,
//     marginTop: 8,
//   },
//   noResultsSubText: {
//     color: '#aaa',
//     fontSize: 14,
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   // Chat Window Styles
//   chatwindowContainer: {
//     flex: 1,
//     backgroundColor: '#fdfdfd',
//   },
//   chatwindowContainerMobile: {
//     width: '100%',
//   },
//   chatwindowHeader: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   chatwindowUser: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   chatBackButton: {
//     padding: 8,
//     marginRight: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   chatwindowAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   chatwindowUserInfo: {
//     flex: 1,
//   },
//   chatwindowName: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     marginBottom: 2,
//     color: '#333',
//   },
//   activeStatus: {
//     color: '#2ecc71',
//     fontSize: 14,
//   },
//   chatwindowMessages: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//   },
//   noMessages: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   noMessagesText: {
//     color: '#888',
//     fontSize: 16,
//     marginTop: 8,
//   },
//   noMessagesSubText: {
//     color: '#aaa',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   chatBubble: {
//     maxWidth: '75%',
//     padding: 12,
//     borderRadius: 16,
//     marginVertical: 4,
//     marginHorizontal: 16,
//   },
//   myMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#0078ff',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   myMessageText: {
//     color: 'white',
//     fontSize: 15,
//   },
//   theirMessageText: {
//     color: '#333',
//     fontSize: 15,
//   },
//   chatTime: {
//     fontSize: 11,
//     marginTop: 4,
//     textAlign: 'right',
//   },
//   myChatTime: {
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   theirChatTime: {
//     color: 'rgba(0, 0, 0, 0.5)',
//   },
//   chatwindowInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     marginRight: 10,
//     fontSize: 15,
//     backgroundColor: '#fff',
//     maxHeight: 100,
//   },
//   sendButton: {
//     backgroundColor: '#0078ff',
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sendButtonDisabled: {
//     backgroundColor: '#ccc',
//   },
// });

// export default ChatWindow;




import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatScreen = ({ route, navigation, onBack, user }) => {
  // Use the onBack prop for back functionality
  const handleBackPress = () => {
    console.log('🔙 ChatScreen back button pressed');
    if (onBack) {
      onBack(); // This will call handleNavigateBackFromChat in App.js
    } else if (navigation?.goBack) {
      navigation.goBack(); // Fallback to navigation
    }
  };

  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      messages: [
        { sender: "Priya Sharma", text: "Hi Naveen, how are you?", time: "10:30 AM" },
        { sender: "Me", text: "I'm good, thanks Priya!", time: "10:32 AM" },
      ],
    },
    {
      id: 2,
      name: "Rahul Mehta",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      messages: [
        { sender: "Rahul Mehta", text: "Hey! Did you check the proposal?", time: "Yesterday" },
      ],
    },
    {
      id: 3,
      name: "Sneha Reddy",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      messages: [
        { sender: "Sneha Reddy", text: "Hi! Are you free this weekend?", time: "2:45 PM" },
      ],
    },
  ]);

  const [selectedChatId, setSelectedChatId] = useState(1);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewState, setViewState] = useState('chatList'); // 'chatList', 'chatWindow'
  const flatListRef = useRef(null);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleHardwareBackPress);
    
    return () => backHandler.remove();
  }, [viewState]);

  const handleHardwareBackPress = () => {
    if (viewState === 'chatWindow') {
      handleBackToChatList();
      return true; // Prevent default back behavior
    } else if (viewState === 'chatList') {
      handleBackToDashboard();
      return true; // Prevent default back behavior
    }
    return false; // Use default back behavior
  };

  const handleSend = () => {
    if (!message.trim()) return;
    const newMessage = {
      sender: "Me",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === selectedChatId
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );

    setMessage("");
  };

  // Handle back navigation to dashboard
  const handleBackToDashboard = () => {
    console.log('Going back to dashboard');
    handleBackPress(); // Use the parent's back handler
  };

  // Handle back to chat list (when in mobile view)
  const handleBackToChatList = () => {
    console.log('Going back to chat list');
    setViewState('chatList');
  };

  // Handle chat selection
  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    if (Platform.OS !== 'web') {
      setViewState('chatWindow');
    }
  };

  // Combined back handler that works for both views
  const handleUniversalBack = () => {
    console.log('Universal back pressed, current viewState:', viewState);
    if (viewState === 'chatWindow') {
      handleBackToChatList();
    } else {
      handleBackToDashboard();
    }
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    if (flatListRef.current && selectedChat?.messages.length) {
      setTimeout(() => {
        flatListRef.current.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [selectedChat?.messages]);

  // Filter chats by search term
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chatlistItem,
        selectedChatId === item.id && styles.selectedChatItem,
      ]}
      onPress={() => handleChatSelect(item.id)}
    >
      <Image source={{ uri: item.avatar }} style={styles.chatlistAvatar} />
      <View style={styles.chatlistContent}>
        <Text style={styles.chatlistName}>{item.name}</Text>
        <Text style={styles.chatlistLastMessage} numberOfLines={1}>
          {item.messages[item.messages.length - 1]?.text}
        </Text>
        <Text style={styles.chatlistTime}>
          {item.messages[item.messages.length - 1]?.time}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMessage = ({ item, index }) => (
    <View
      style={[
        styles.chatBubble,
        item.sender === "Me" ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <Text style={item.sender === "Me" ? styles.myMessageText : styles.theirMessageText}>
        {item.text}
      </Text>
      <Text style={[
        styles.chatTime,
        item.sender === "Me" ? styles.myChatTime : styles.theirChatTime
      ]}>
        {item.time}
      </Text>
    </View>
  );

  // Determine which view to show based on platform and state
  const showChatList = Platform.OS === 'web' || viewState === 'chatList';
  const showChatWindow = Platform.OS === 'web' || viewState === 'chatWindow';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatpageContainer}>
        {/* Chat List - Always visible on web, conditionally on mobile */}
        {showChatList && (
          <View style={[
            styles.chatlistContainer,
            Platform.OS === 'web' && styles.chatlistContainerWeb,
            Platform.OS !== 'web' && styles.chatlistContainerMobile
          ]}>
            <View style={styles.chatlistHeader}>
              {/* Back button for mobile when in chat list */}
              {Platform.OS !== 'web' && (
                <TouchableOpacity 
                  onPress={handleBackPress} 
                  style={styles.backButton}
                  testID="chat-list-back-button"
                >
                  <Icon name="arrow-back" size={24} color="#0078ff" />
                  <Text style={styles.backButtonText}></Text>
                </TouchableOpacity>
              )}
              <Text style={styles.headerTitle}>SaathJanam</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <Icon name="search" size={18} color="#666" />
              <TextInput
                placeholder="Search chats..."
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.searchInput}
                placeholderTextColor="#666"
              />
            </View>

            {/* Chat Items */}
            <View style={styles.chatList}>
              {filteredChats.length > 0 ? (
                <FlatList
                  data={filteredChats}
                  renderItem={renderChatItem}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <View style={styles.noResults}>
                  <Icon name="search-outline" size={48} color="#ccc" />
                  <Text style={styles.noResultsText}>No chats found</Text>
                  <Text style={styles.noResultsSubText}>
                    {searchTerm ? 'Try a different search term' : 'Start a new conversation'}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Chat Window */}
        {showChatWindow && (
          <View style={[
            styles.chatwindowContainer,
            Platform.OS !== 'web' && styles.chatwindowContainerMobile
          ]}>
            <View style={styles.chatwindowHeader}>
              <View style={styles.chatwindowUser}>
                {/* Back button for mobile in chat window - positioned before image */}
                {Platform.OS !== 'web' && (
                  <TouchableOpacity 
                    onPress={handleUniversalBack} 
                    style={styles.chatBackButton}
                    testID="chat-window-back-button"
                  >
                    <Icon name="arrow-back" size={24} color="#0078ff" />
                    <Text style={styles.backButtonText}></Text>
                  </TouchableOpacity>
                )}
                <Image
                  source={{ uri: selectedChat?.avatar }}
                  style={styles.chatwindowAvatar}
                />
                <View style={styles.chatwindowUserInfo}>
                  <Text style={styles.chatwindowName}>{selectedChat?.name}</Text>
                  <Text style={styles.activeStatus}>Active now</Text>
                </View>
              </View>
            </View>

            {/* Messages */}
            <View style={styles.chatwindowMessages}>
              {selectedChat?.messages && selectedChat.messages.length > 0 ? (
                <FlatList
                  ref={flatListRef}
                  data={selectedChat.messages}
                  renderItem={renderMessage}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />
              ) : (
                <View style={styles.noMessages}>
                  <Icon name="chatbubble-outline" size={48} color="#ccc" />
                  <Text style={styles.noMessagesText}>No messages yet</Text>
                  <Text style={styles.noMessagesSubText}>Start the conversation!</Text>
                </View>
              )}
            </View>

            {/* Input */}
            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.chatwindowInput}
            >
              <TextInput
                placeholder="Type a message..."
                value={message}
                onChangeText={setMessage}
                style={styles.input}
                placeholderTextColor="#666"
                multiline
              />
              <TouchableOpacity 
                onPress={handleSend} 
                style={[
                  styles.sendButton,
                  !message.trim() && styles.sendButtonDisabled
                ]}
                disabled={!message.trim()}
              >
                <Icon name="send" size={20} color="white" />
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  chatpageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  // Chat List Styles
  chatlistContainer: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    backgroundColor: '#fff',
  },
  chatlistContainerWeb: {
    width: '30%',
  },
  chatlistContainerMobile: {
    width: '100%',
  },
  chatlistHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#0078ff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0078ff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f4',
    margin: 10,
    padding: 8,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  chatList: {
    flex: 1,
  },
  chatlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedChatItem: {
    backgroundColor: '#e8f0fe',
    borderLeftWidth: 3,
    borderLeftColor: '#0078ff',
  },
  chatlistAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatlistContent: {
    flex: 1,
  },
  chatlistName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
    color: '#333',
  },
  chatlistLastMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  chatlistTime: {
    fontSize: 12,
    color: '#999',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noResultsText: {
    color: '#888',
    fontSize: 16,
    marginTop: 8,
  },
  noResultsSubText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  // Chat Window Styles
  chatwindowContainer: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  chatwindowContainerMobile: {
    width: '100%',
  },
  chatwindowHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  chatwindowUser: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  chatBackButton: {
    padding: 8,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatwindowAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatwindowUserInfo: {
    flex: 1,
  },
  chatwindowName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },
  activeStatus: {
    color: '#2ecc71',
    fontSize: 14,
  },
  chatwindowMessages: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  noMessages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noMessagesText: {
    color: '#888',
    fontSize: 16,
    marginTop: 8,
  },
  noMessagesSubText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  chatBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0078ff',
    borderBottomRightRadius: 4,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  myMessageText: {
    color: 'white',
    fontSize: 15,
  },
  theirMessageText: {
    color: '#333',
    fontSize: 15,
  },
  chatTime: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'right',
  },
  myChatTime: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  theirChatTime: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  chatwindowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#0078ff',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
});

export default ChatScreen;
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  ScrollView,
  ActivityIndicator 
} from 'react-native';

const AcceptedRequests = ({ navigation }) => {
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcceptedRequests = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockAcceptedUsers = [
          {
            id: 1,
            name: "Priya Sharma",
            age: 26,
            city: "Hyderabad",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          },
          {
            id: 2,
            name: "Anita Reddy",
            age: 24,
            city: "Bangalore",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
          }
        ];
        
        setAcceptedUsers(mockAcceptedUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accepted requests:", error);
        setLoading(false);
      }
    };

    fetchAcceptedRequests();
  }, []);

  const handleMessage = (user) => {
    navigation.navigate('chat', { 
      chatId: user.id, 
      otherUser: { name: user.name, image: user.image } 
    });
  };

  const handleViewProfile = (user) => {
    Alert.alert("Profile", `Viewing ${user.name}'s profile`);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#E94057" />
        <Text>Loading accepted requests...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {acceptedUsers.length > 0 ? (
        acceptedUsers.map((user) => (
          <View key={user.id} style={styles.card}>
            <TouchableOpacity 
              style={styles.leftSection}
              onPress={() => handleViewProfile(user)}
            >
              <Image source={{ uri: user.image }} style={styles.profileImage} />
              <View style={styles.textSection}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.details}>Age: {user.age}</Text>
                <Text style={styles.details}>City: {user.city}</Text>
                <Text style={styles.statusAccepted}>✓ Accepted</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.btnSection}>
              <TouchableOpacity 
                style={styles.messageButton}
                onPress={() => handleMessage(user)}
              >
                <Text style={styles.buttonText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No accepted requests</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  textSection: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  statusAccepted: {
    fontSize: 12,
    color: '#117A65',
    fontWeight: '600',
    marginTop: 4,
  },
  btnSection: {
    flexDirection: 'row',
  },
  messageButton: {
    backgroundColor: '#E94057',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 80,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default AcceptedRequests;
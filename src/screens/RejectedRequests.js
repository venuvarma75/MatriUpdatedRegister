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

const RejectedRequests = ({ navigation }) => {
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRejectedRequests = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockRejectedUsers = [
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
        
        setRejectedUsers(mockRejectedUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rejected requests:", error);
        setLoading(false);
      }
    };

    fetchRejectedRequests();
  }, []);

  const handleRestore = (userId) => {
    Alert.alert(
      "Restore Request",
      "Are you sure you want to restore this request?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            setRejectedUsers(rejectedUsers.filter(user => user.id !== userId));
            Alert.alert("Success", "Request restored successfully");
          }
        }
      ]
    );
  };

  const handleViewProfile = (user) => {
    Alert.alert("Profile", `Viewing ${user.name}'s profile`);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#E94057" />
        <Text>Loading rejected requests...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {rejectedUsers.length > 0 ? (
        rejectedUsers.map((user) => (
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
                <Text style={styles.statusRejected}>✗ Rejected</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.btnSection}>
              <TouchableOpacity 
                style={styles.restoreButton}
                onPress={() => handleRestore(user.id)}
              >
                <Text style={styles.buttonText}>Restore</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No rejected requests</Text>
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
  statusRejected: {
    fontSize: 12,
    color: '#F25C5C',
    fontWeight: '600',
    marginTop: 4,
  },
  btnSection: {
    flexDirection: 'row',
  },
  restoreButton: {
    backgroundColor: '#117A65',
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

export default RejectedRequests;
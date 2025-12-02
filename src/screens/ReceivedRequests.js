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

const ReceivedRequests = ({ navigation }) => {
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceivedRequests = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockRequests = [
          {
            requestId: 1,
            senderName: "Priya Sharma",
            age: 26,
            city: "Hyderabad",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          },
          {
            requestId: 2,
            senderName: "Anita Reddy",
            age: 24,
            city: "Bangalore",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
          },
          {
            requestId: 3,
            senderName: "Sneha Patel",
            age: 25,
            city: "Mumbai",
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
          }
        ];
        
        setReceivedRequests(mockRequests);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching received requests:", error);
        setLoading(false);
        Alert.alert("Error", "Failed to load requests");
      }
    };

    fetchReceivedRequests();
  }, []);

  const handleAccept = async (requestId) => {
    try {
      Alert.alert("Success", "Request accepted successfully");
      setReceivedRequests(receivedRequests.filter(req => req.requestId !== requestId));
    } catch (error) {
      console.error("Error accepting request:", error);
      Alert.alert("Error", "Failed to accept request");
    }
  };

  const handleReject = async (requestId) => {
    try {
      Alert.alert("Success", "Request rejected successfully");
      setReceivedRequests(receivedRequests.filter(req => req.requestId !== requestId));
    } catch (error) {
      console.error("Error rejecting request:", error);
      Alert.alert("Error", "Failed to reject request");
    }
  };

  const handleViewProfile = (user) => {
    Alert.alert("Profile", `Viewing ${user.senderName}'s profile`);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#E94057" />
        <Text>Loading requests...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {receivedRequests.length > 0 ? (
        receivedRequests.map((user) => (
          <View key={user.requestId} style={styles.card}>
            <TouchableOpacity 
              style={styles.leftSection}
              onPress={() => handleViewProfile(user)}
            >
              <Image source={{ uri: user.image }} style={styles.profileImage} />
              <View style={styles.textSection}>
                <Text style={styles.name}>{user.senderName}</Text>
                <Text style={styles.details}>Age: {user.age}</Text>
                <Text style={styles.details}>City: {user.city}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.btnSection}>
              <TouchableOpacity 
                style={styles.acceptButton}
                onPress={() => handleAccept(user.requestId)}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.rejectButton}
                onPress={() => handleReject(user.requestId)}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No received requests</Text>
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
  btnSection: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: '#117A65',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    minWidth: 80,
  },
  rejectButton: {
    backgroundColor: '#F25C5C',
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

export default ReceivedRequests;
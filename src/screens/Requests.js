// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet,
//   SafeAreaView,
//   StatusBar 
// } from 'react-native';
// import ReceivedRequests from './ReceivedRequests';
// import SentRequests from './SentRequests';
// import AcceptedRequests from './AcceptedRequests';
// import RejectedRequests from './RejectedRequests';

// const Requests = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState('received');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'received':
//         return <ReceivedRequests navigation={navigation} />;
//       case 'sent':
//         return <SentRequests navigation={navigation} />;
//       case 'accepted':
//         return <AcceptedRequests navigation={navigation} />;
//       case 'rejected':
//         return <RejectedRequests navigation={navigation} />;
//       default:
//         return <ReceivedRequests navigation={navigation} />;
//     }
//   };

//   const handleBackToDashboard = () => {
//     navigation.navigate('dashboard');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={handleBackToDashboard}
//         >
//           <Text style={styles.backIcon}>←</Text>
//           <Text style={styles.backText}>Back</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Requests</Text>
//         <View style={styles.headerPlaceholder} />
//       </View>

//       {/* Navigation Tabs */}
//       <View style={styles.tabContainer}>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'received' && styles.activeTab]}
//           onPress={() => setActiveTab('received')}
//         >
//           <Text style={[styles.tabText, activeTab === 'received' && styles.activeTabText]}>
//             Received
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'sent' && styles.activeTab]}
//           onPress={() => setActiveTab('sent')}
//         >
//           <Text style={[styles.tabText, activeTab === 'sent' && styles.activeTabText]}>
//             Sent
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'accepted' && styles.activeTab]}
//           onPress={() => setActiveTab('accepted')}
//         >
//           <Text style={[styles.tabText, activeTab === 'accepted' && styles.activeTabText]}>
//             Accepted
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'rejected' && styles.activeTab]}
//           onPress={() => setActiveTab('rejected')}
//         >
//           <Text style={[styles.tabText, activeTab === 'rejected' && styles.activeTabText]}>
//             Rejected
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Content Area */}
//       <View style={styles.content}>
//         {renderContent()}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 8,
//   },
//   backIcon: {
//     fontSize: 20,
//     color: '#E94057',
//     marginRight: 6,
//     fontWeight: 'bold',
//   },
//   backText: {
//     fontSize: 14,
//     color: '#E94057',
//     fontWeight: '600',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     flex: 1,
//   },
//   headerPlaceholder: {
//     width: 60,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 12,
//     marginHorizontal: 4,
//     borderRadius: 8,
//   },
//   activeTab: {
//     backgroundColor: '#E94057',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   content: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default Requests;




import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView 
} from 'react-native';

const Requests = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('received');

  // Sample data for each tab - replace with your actual data
  const receivedData = [
    { id: '1', name: 'John Doe', date: '2 hours ago' },
    { id: '2', name: 'Jane Smith', date: '1 day ago' },
  ];

  const sentData = [
    { id: '1', name: 'Alex Johnson', date: 'Yesterday', status: 'Pending' },
    { id: '2', name: 'Sarah Wilson', date: '3 days ago', status: 'Pending' },
  ];

  const acceptedData = [
    { id: '1', name: 'Mike Brown', date: 'Accepted: 1 week ago' },
    { id: '2', name: 'Emily Davis', date: 'Accepted: 2 weeks ago' },
  ];

  const rejectedData = [
    { id: '1', name: 'Chris Taylor', date: 'Rejected: 3 days ago' },
    { id: '2', name: 'Lisa Anderson', date: 'Rejected: 1 week ago' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'received':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Received Requests</Text>
            {receivedData.map((item) => (
              <View key={item.id} style={styles.requestCard}>
                <Text style={styles.requestName}>{item.name}</Text>
                <Text style={styles.requestDate}>{item.date}</Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={[styles.button, styles.acceptButton]}>
                    <Text style={styles.buttonText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, styles.rejectButton]}>
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        );
      case 'sent':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Sent Requests</Text>
            {sentData.map((item) => (
              <View key={item.id} style={styles.requestCard}>
                <Text style={styles.requestName}>{item.name}</Text>
                <Text style={styles.requestDate}>{item.date}</Text>
                <Text style={styles.statusText}>Status: {item.status}</Text>
              </View>
            ))}
          </View>
        );
      case 'accepted':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Accepted Requests</Text>
            {acceptedData.map((item) => (
              <View key={item.id} style={styles.requestCard}>
                <Text style={styles.requestName}>{item.name}</Text>
                <Text style={styles.requestDate}>{item.date}</Text>
                <TouchableOpacity style={[styles.button, styles.messageButton]}>
                  <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      case 'rejected':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Rejected Requests</Text>
            {rejectedData.map((item) => (
              <View key={item.id} style={styles.requestCard}>
                <Text style={styles.requestName}>{item.name}</Text>
                <Text style={styles.requestDate}>{item.date}</Text>
                <TouchableOpacity style={[styles.button, styles.resendButton]}>
                  <Text style={styles.buttonText}>Resend Request</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      default:
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Received Requests</Text>
            {receivedData.map((item) => (
              <View key={item.id} style={styles.requestCard}>
                <Text style={styles.requestName}>{item.name}</Text>
                <Text style={styles.requestDate}>{item.date}</Text>
              </View>
            ))}
          </View>
        );
    }
  };

  const handleBackToDashboard = () => {
    navigation.navigate('dashboard');
  };

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
        <Text style={styles.headerTitle}>Requests</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Four Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'received' && styles.activeTab]}
          onPress={() => setActiveTab('received')}
        >
          <Text style={[styles.tabText, activeTab === 'received' && styles.activeTabText]}>
            Received
          </Text>
          {activeTab === 'received' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, activeTab === 'sent' && styles.activeTab]}
          onPress={() => setActiveTab('sent')}
        >
          <Text style={[styles.tabText, activeTab === 'sent' && styles.activeTabText]}>
            Sent
          </Text>
          {activeTab === 'sent' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, activeTab === 'accepted' && styles.activeTab]}
          onPress={() => setActiveTab('accepted')}
        >
          <Text style={[styles.tabText, activeTab === 'accepted' && styles.activeTabText]}>
            Accepted
          </Text>
          {activeTab === 'accepted' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, activeTab === 'rejected' && styles.activeTab]}
          onPress={() => setActiveTab('rejected')}
        >
          <Text style={[styles.tabText, activeTab === 'rejected' && styles.activeTabText]}>
            Rejected
          </Text>
          {activeTab === 'rejected' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      </View>

      {/* Scrollable Content Area */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderContent()}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#E94057',
    fontWeight: '600',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '80%',
    backgroundColor: '#E94057',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  tabContent: {
    padding: 16,
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  requestName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  requestDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  statusText: {
    fontSize: 14,
    color: '#E94057',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#F44336',
  },
  messageButton: {
    backgroundColor: '#2196F3',
  },
  resendButton: {
    backgroundColor: '#FF9800',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Requests;
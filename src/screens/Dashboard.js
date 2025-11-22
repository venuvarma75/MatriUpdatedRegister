



import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dashboard = ({ navigation, user, onLogout }) => {
  // Navigation handlers
  const handleEditProfile = () => {
    navigation.navigate('editprofile');
  };

  const handleViewProfile = () => {
    navigation.navigate('profile');
  };

  const handleRequests = () => {
    navigation.navigate('requests');
  };

  const handleMatches = () => {
    navigation.navigate('matches');
  };

  const handleMessages = () => {
    navigation.navigate('chat');
  };

  const handleSettings = () => {
    navigation.navigate('settings');
  };

  // Navigation items data for easier management
  const navItems = [
    { icon: 'edit', label: 'Edit Profile', onPress: handleEditProfile, type: 'material' },
    { icon: 'user', label: 'View Profile', onPress: handleViewProfile, type: 'fontawesome' },
    { icon: 'people', label: 'Requests', onPress: handleRequests, type: 'material' },
    { icon: 'heart', label: 'Matches', onPress: handleMatches, type: 'ionicons' },
    { icon: 'chatbubbles', label: 'Messages', onPress: handleMessages, type: 'ionicons' },
    { icon: 'settings', label: 'Settings', onPress: handleSettings, type: 'ionicons' },
  ];

  const renderIcon = (type, iconName, size, color) => {
    switch (type) {
      case 'material':
        return <Icon name={iconName} size={size} color={color} />;
      case 'fontawesome':
        return <FontAwesome name={iconName} size={size} color={color} />;
      case 'ionicons':
        return <Ionicons name={iconName} size={size} color={color} />;
      default:
        return <Icon name={iconName} size={size} color={color} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* ====== Main Content ====== */}
      <ScrollView style={styles.dashboardBody} showsVerticalScrollIndicator={true}>
        {/* ====== Search Filters ====== */}
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Search Filters</Text>
          
          {/* Age Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Age</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={true}
              style={styles.filterOptions}
            >
              {["18-25", "26-30", "31-35", "36-40", "40+"].map((age, index) => (
                <TouchableOpacity key={index} style={styles.filterChip}>
                  <Text style={styles.filterChipText}>{age}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Religion Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Religion</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={true}
              style={styles.filterOptions}
            >
              {["Hindu", "Muslim", "Christian", "Sikh", "Jain"].map((religion, index) => (
                <TouchableOpacity key={index} style={styles.filterChip}>
                  <Text style={styles.filterChipText}>{religion}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Apply Filters Button */}
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>

        {/* ====== Matches Section ====== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Profile Matches</Text>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={true}
            style={styles.matchesContainer}
            contentContainerStyle={styles.matchesContent}
          >
            {[1, 2, 3, 4].map((i) => (
              <View key={i} style={styles.matchCard}>
                <Image 
                  source={{ uri: `https://picsum.photos/80?random=${i + 30}` }}
                  style={styles.matchImage}
                />
                <View style={styles.matchOverlay}>
                  <Text style={styles.matchName}>Julia Ann</Text>
                  <Text style={styles.matchDetails}>New York • 22 Years old</Text>
                </View>
                {/* Online Indicator */}
                <View style={styles.onlineIndicator}></View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ====== Request Section ====== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interest Requests</Text>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={true}
            style={styles.requestTabs}
            contentContainerStyle={styles.requestTabsContent}
          >
            {["New requests", "Accepted", "Denied"].map((text, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.requestTab,
                  i === 0 && styles.activeRequestTab
                ]}
              >
                <Text style={[
                  styles.requestTabText,
                  i === 0 && styles.activeRequestTabText
                ]}>
                  {text}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.requestCard}>
              <Image
                source={{ uri: `https://picsum.photos/110?random=${i}` }}
                style={styles.requestImage}
              />
              <View style={styles.requestDetails}>
                <Text style={styles.requestName}>John Smith</Text>
                <Text style={styles.requestInfo}>
                  City: <Text style={styles.bold}>Illinois</Text> • Age: <Text style={styles.bold}>21</Text> • Height: <Text style={styles.bold}>5.7</Text> • Job:{" "}
                  <Text style={styles.bold}>Engineer</Text>
                </Text>
                <Text style={styles.requestTime}>
                  Request on: 10:30 AM, 18 August 2024
                </Text>
                <TouchableOpacity style={styles.viewProfileButton}>
                  <Text style={styles.viewProfileText}>View full profile</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.requestActions}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.denyButton}>
                  <Text style={styles.buttonText}>Deny</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* ====== Plan and Chat Section ====== */}
        <View style={styles.bottomSection}>
          {/* Plan Details */}
          <View style={styles.planSection}>
            <Text style={styles.sectionTitle}>Plan Details</Text>
            <Image
              source={{ uri: "https://img.icons8.com/emoji/96/gift-emoji.png" }}
              style={styles.planImage}
            />
            <Text style={styles.planText}>
              <Text style={styles.bold}>Plan Name: </Text>Standard
            </Text>
            <Text style={styles.planText}>
              <Text style={styles.bold}>Validity: </Text>6 Months
            </Text>
          </View>

          {/* Recent Chat List */}
          <View style={styles.chatSection}>
            <Text style={styles.sectionTitle}>Recent Chat List</Text>

            {[1, 2, 3, 4].map((i) => (
              <View key={i} style={styles.chatItem}>
                <Image
                  source={{ uri: `https://picsum.photos/60?random=${i + 50}` }}
                  style={styles.chatImage}
                />
                <View style={styles.chatDetails}>
                  <Text style={styles.chatName}>Julia Ann</Text>
                  <Text style={styles.chatLocation}>Illinois, United States</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ====== Bottom Navigation ====== */}
      <View style={styles.bottomNav}>
        {navItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bottomNavItem}
            onPress={item.onPress}
          >
            {renderIcon(item.type, item.icon, 22, "#666")}
            <Text style={styles.bottomNavText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F2",
  },
  dashboardBody: {
    flex: 1,
    backgroundColor: "#FAF8F2",
    padding: 12,
    marginBottom: 70, // Space for bottom navigation
  },
  // Bottom Navigation Styles
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
    height: 70,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  bottomNavText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#666",
    marginTop: 4,
    textAlign: 'center',
  },
  // Filter Section Styles
  filterSection: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#695019",
    marginBottom: 12,
  },
  filterGroup: {
    marginBottom: 15,
  },
  filterLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  filterOptions: {
    flexGrow: 0,
  },
  filterChip: {
    backgroundColor: "#F8F6F1",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E8E2D2",
  },
  filterChipText: {
    fontSize: 11,
    color: "#333",
    fontWeight: "500",
  },
  applyButton: {
    backgroundColor: "#695019",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#695019",
    marginBottom: 10,
  },
  // Matches Section
  matchesContainer: {
    marginHorizontal: -5,
  },
  matchesContent: {
    paddingHorizontal: 5,
  },
  matchCard: {
    width: 140,
    height: 180,
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 6,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  matchImage: {
    width: "100%",
    height: "100%",
  },
  matchOverlay: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 5,
  },
  matchName: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
    marginBottom: 2,
  },
  matchDetails: {
    fontSize: 10,
    color: "#fff",
  },
  onlineIndicator: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#2ECC71",
    borderWidth: 2,
    borderColor: "#fff",
  },
  // Request Section
  requestTabs: {
    marginBottom: 12,
  },
  requestTabsContent: {
    paddingHorizontal: 5,
  },
  requestTab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F8F6F1",
    marginHorizontal: 4,
  },
  activeRequestTab: {
    backgroundColor: "#e8fff2",
  },
  requestTabText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 11,
  },
  activeRequestTabText: {
    color: "green",
  },
  requestCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  requestImage: {
    width: 70,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  requestDetails: {
    flex: 1,
  },
  requestName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  requestInfo: {
    fontSize: 11,
    marginBottom: 3,
    color: "#333",
  },
  requestTime: {
    fontSize: 10,
    color: "#7A6B4E",
    marginBottom: 6,
  },
  viewProfileButton: {
    borderWidth: 1,
    borderColor: "#BDB197",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  viewProfileText: {
    fontSize: 10,
    color: "#333",
  },
  requestActions: {
    alignItems: "flex-end",
    gap: 6,
  },
  acceptButton: {
    backgroundColor: "#117A65",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minWidth: 60,
  },
  denyButton: {
    backgroundColor: "#F25C5C",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minWidth: 60,
  },
  buttonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
  },
  // Bottom Section
  bottomSection: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: 15,
    marginBottom: 15,
  },
  planSection: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    minHeight: 180,
  },
  planImage: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  planText: {
    fontSize: 13,
    marginBottom: 5,
    color: "#333",
  },
  chatSection: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    minHeight: 180,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  chatImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#5C4218",
    marginBottom: 2,
  },
  chatLocation: {
    fontSize: 11,
    color: "#8A6F47",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default Dashboard;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = ({ onNavigateBack, onLogout, user }) => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.mobileNumber || user?.mobile || '',
    profileVisibility: 'Everyone',
    hideProfilePhoto: false,
    emailNotifications: true,
    smsAlerts: false,
    pushNotifications: true,
    newPassword: '',
    confirmPassword: '',
  });

  // Handle back navigation
  const handleBackPress = () => {
    console.log('🔙 Settings back button pressed');
    if (onNavigateBack) {
      onNavigateBack(); // Call parent's back handler
    }
  };

  // Handle logout
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Logout", 
          onPress: () => {
            if (onLogout) {
              onLogout();
            }
          }
        }
      ]
    );
  };

  // Handle save changes
  const handleSaveChanges = () => {
    Alert.alert("Success", "Your changes have been saved successfully!");
  };

  // Handle password update
  const handleUpdatePassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    if (formData.newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long!");
      return;
    }
    Alert.alert("Success", "Password updated successfully!");
    setFormData(prev => ({ ...prev, newPassword: '', confirmPassword: '' }));
  };

  // Handle account deletion
  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This action cannot be undone. All your data will be permanently deleted.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Delete Account", 
          style: "destructive",
          onPress: () => {
            Alert.alert("Account Deleted", "Your account has been deleted successfully.");
          }
        }
      ]
    );
  };

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const AccountSettings = () => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Account Details</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => updateFormData('fullName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={formData.email}
          onChangeText={(text) => updateFormData('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={(text) => updateFormData('phone', text)}
          keyboardType="phone-pad"
        />
        
        <TouchableOpacity style={styles.primaryButton} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const PrivacySettings = () => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Privacy Settings</Text>
        
        <View style={styles.dropdown}>
          <Text style={styles.dropdownLabel}>Profile Visibility</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Everyone', 'Only Matches', 'Premium Members'].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  formData.profileVisibility === option && styles.selectedOption
                ]}
                onPress={() => updateFormData('profileVisibility', option)}
              >
                <Text style={[
                  styles.optionText,
                  formData.profileVisibility === option && styles.selectedOptionText
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Hide Profile Photo</Text>
          <Switch
            value={formData.hideProfilePhoto}
            onValueChange={(value) => updateFormData('hideProfilePhoto', value)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={formData.hideProfilePhoto ? '#007AFF' : '#f4f3f4'}
          />
        </View>
        
        <TouchableOpacity style={styles.primaryButton} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const NotificationSettings = () => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Notification Preferences</Text>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Email Notifications</Text>
          <Switch
            value={formData.emailNotifications}
            onValueChange={(value) => updateFormData('emailNotifications', value)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={formData.emailNotifications ? '#007AFF' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>SMS Alerts</Text>
          <Switch
            value={formData.smsAlerts}
            onValueChange={(value) => updateFormData('smsAlerts', value)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={formData.smsAlerts ? '#007AFF' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>App Push Notifications</Text>
          <Switch
            value={formData.pushNotifications}
            onValueChange={(value) => updateFormData('pushNotifications', value)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={formData.pushNotifications ? '#007AFF' : '#f4f3f4'}
          />
        </View>
        
        <TouchableOpacity style={styles.primaryButton} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Preferences</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const SubscriptionSettings = () => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Subscription Details</Text>
        
        <Text style={styles.planText}>
          Current Plan: <Text style={styles.planBold}>Free Plan</Text>
        </Text>
        
        <TouchableOpacity style={styles.successButton}>
          <Text style={styles.buttonText}>Upgrade Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const SecuritySettings = () => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Security Settings</Text>
        
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={formData.newPassword}
          onChangeText={(text) => updateFormData('newPassword', text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChangeText={(text) => updateFormData('confirmPassword', text)}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.primaryButton} onPress={handleUpdatePassword}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const SupportSettings = () => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Help & Support</Text>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>View FAQ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Contact Support</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton} onPress={handleLogout}>
          <Text style={styles.secondaryButtonText}>Logout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.dangerButton} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const tabs = [
    'Account', 'Privacy', 'Notifications', 'Subscription', 'Security', 'Support'
  ];

  const renderContent = () => {
    switch (tab) {
      case 0: return <AccountSettings />;
      case 1: return <PrivacySettings />;
      case 2: return <NotificationSettings />;
      case 3: return <SubscriptionSettings />;
      case 4: return <SecuritySettings />;
      case 5: return <SupportSettings />;
      default: return <AccountSettings />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#0078ff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Tab Navigation */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabContainer}
        >
          {tabs.map((tabName, index) => (
            <TouchableOpacity
              key={tabName}
              style={[
                styles.tab,
                tab === index && styles.activeTab
              ]}
              onPress={() => setTab(index)}
            >
              <Text style={[
                styles.tabText,
                tab === index && styles.activeTabText
              ]}>
                {tabName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Content */}
        <View style={styles.content}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backButtonText: {
    color: '#0078ff',
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '500',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSpacer: {
    width: 60, // To balance the header layout
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  tabContainer: {
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    flex: 1,
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
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  dropdown: {
    marginBottom: 16,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  selectedOption: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionText: {
    fontSize: 14,
    color: '#666',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: '500',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  planText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  planBold: {
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  successButton: {
    backgroundColor: '#34C759',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  secondaryButton: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Settings;
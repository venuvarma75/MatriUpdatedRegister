import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  StyleSheet,
  Alert,
  Platform,
  Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const EditProfile = ({ navigation, user, onProfileUpdate, route }) => {
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize profile data from user prop or route params
  const [profileData, setProfileData] = useState({
    // Personal Details
    profileFor: "",
    gender: "",
    firstName: "",
    lastName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    age: "",
    religion: "",
    caste: "",
    subCaste: "",
    motherTongue: "",
    country: "",
    city: "",
    maritalStatus: "",
    noOfChildren: "",
    height: "",
    
    // Education & Career
    highestEducation: "",
    collegeName: "",
    sector: "",
    occupation: "",
    companyName: "",
    annualIncome: "",
    workLocation: "",
    
    // Contact
    emailId: "",
    mobileNumber: "",
    
    // Additional fields for complete profile
    aboutMe: "",
    hobbies: [],
    familyBackground: "",
    expectations: "",
    photo: null
  });

  const [editBuffer, setEditBuffer] = useState({});

  // Load user data when component mounts or user changes
  useEffect(() => {
    console.log('EditProfile - User:', user);
    console.log('EditProfile - Route params:', route?.params);
    
    let userData = user;
    
    // Check if user data comes from route params
    if (route?.params?.user) {
      userData = route.params.user;
      console.log('Using user data from route params');
    }
    
    if (userData) {
      setProfileData(prev => ({
        ...prev,
        ...userData,
        // Ensure all fields have values
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        emailId: userData.emailId || userData.email || "",
        mobileNumber: userData.mobileNumber || userData.mobile || "",
        // Parse date of birth if available
        ...(userData.dateOfBirth && parseDateOfBirth(userData.dateOfBirth))
      }));
      
      // Set photo if available
      if (userData.photo) {
        setPhoto({ uri: userData.photo });
      }
    }
  }, [user, route?.params]);

  const parseDateOfBirth = (dobString) => {
    if (!dobString) return {};
    try {
      const parts = dobString.split('-');
      return {
        dobYear: parts[0] || "",
        dobMonth: parts[1] || "",
        dobDay: parts[2] || ""
      };
    } catch (error) {
      console.log('Error parsing date:', error);
      return {};
    }
  };

  // Simple photo handler
  const handlePhotoUpload = () => {
    Alert.alert(
      "Profile Photo",
      "Photo upload functionality will be implemented in the future version.",
      [{ text: "OK" }]
    );
  };

  // Modal Handlers
  const openSectionModal = (sectionKey, fields) => {
    const sectionData = {};
    fields.forEach(field => {
      sectionData[field] = profileData[field] || "";
    });
    setEditBuffer(sectionData);
    setOpenModal(sectionKey);
  };

  const saveSection = () => {
    setIsLoading(true);
    
    // Update profile data with edited fields
    const updatedProfile = { ...profileData, ...editBuffer };
    setProfileData(updatedProfile);
    
    // Simulate API call
    setTimeout(() => {
      if (onProfileUpdate) {
        onProfileUpdate(updatedProfile);
      }
      setOpenModal(null);
      setEditBuffer({});
      setIsLoading(false);
      Alert.alert("Success", "Profile updated successfully!");
    }, 1000);
  };

  const cancelEdit = () => {
    setOpenModal(null);
    setEditBuffer({});
  };

  const handleEditInput = (key, value) => {
    setEditBuffer(prev => ({ ...prev, [key]: value }));
  };

  // Hobby Management
  const updateHobby = (index, value) => {
    const newHobbies = [...(editBuffer.hobbies || [])];
    newHobbies[index] = value;
    handleEditInput("hobbies", newHobbies);
  };

  const addHobby = () => {
    handleEditInput("hobbies", [...(editBuffer.hobbies || []), ""]);
  };

  const removeHobby = (index) => {
    const newHobbies = [...(editBuffer.hobbies || [])];
    newHobbies.splice(index, 1);
    handleEditInput("hobbies", newHobbies);
  };

  // Save all profile changes
  const handleSaveAll = () => {
    setIsLoading(true);
    
    // Validate required fields
    if (!profileData.firstName || !profileData.lastName) {
      Alert.alert("Error", "Please fill in required fields");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      if (onProfileUpdate) {
        onProfileUpdate(profileData);
      }
      setIsLoading(false);
      Alert.alert("Success", "Profile saved successfully!");
      if (navigation) {
        navigation.goBack();
      }
    }, 1500);
  };

  // Field Groups for different sections
  const fieldGroups = {
    personal: ['firstName', 'lastName', 'dobDay', 'dobMonth', 'dobYear', 'age', 'gender', 'profileFor'],
    religion: ['religion', 'caste', 'subCaste', 'motherTongue'],
    location: ['country', 'city'],
    marital: ['maritalStatus', 'noOfChildren', 'height'],
    education: ['highestEducation', 'collegeName'],
    career: ['sector', 'occupation', 'companyName', 'annualIncome', 'workLocation'],
    contact: ['emailId', 'mobileNumber'],
    additional: ['aboutMe', 'hobbies', 'familyBackground', 'expectations']
  };

  // Render field based on type
  const renderField = (field, value, isEditable = false) => {
    const fieldConfig = {
      firstName: { label: "First Name", type: "text" },
      lastName: { label: "Last Name", type: "text" },
      dobDay: { label: "Birth Day", type: "number" },
      dobMonth: { label: "Birth Month", type: "number" },
      dobYear: { label: "Birth Year", type: "number" },
      age: { label: "Age", type: "number" },
      gender: { label: "Gender", type: "select", options: ["Male", "Female"] },
      profileFor: { label: "Profile For", type: "select", options: ["Myself", "My Son", "My Daughter", "My Brother", "My Sister", "My Friend", "My Relative"] },
      religion: { label: "Religion", type: "select", options: ["Christian", "Hindu", "Muslim", "Sikh"] },
      caste: { label: "Caste", type: "select", options: ["BC", "OC", "SC & ST", "OBC"] },
      subCaste: { label: "Sub Caste", type: "text" },
      motherTongue: { label: "Mother Tongue", type: "select", options: ["English", "Hindi", "Telugu", "Malayali", "Marathi", "Punjabi", "Tamil", "Kannada"] },
      country: { label: "Country", type: "select", options: ["India", "USA", "UK", "Canada", "Australia"] },
      city: { label: "City", type: "text" },
      maritalStatus: { label: "Marital Status", type: "select", options: ["Single", "Divorced", "Widowed"] },
      noOfChildren: { label: "Number of Children", type: "number" },
      height: { label: "Height", type: "select", options: ["4 ft 5 in (134 cm)", "5 ft 0 in (152 cm)", "5 ft 5 in (165 cm)", "6 ft 0 in (183 cm)", "6 ft 5 in (196 cm)"] },
      highestEducation: { label: "Highest Education", type: "select", options: ["B.E / B.Tech", "Degree", "Intermediate", "M.E / M.Tech", "MBA", "PhD", "Tenth"] },
      collegeName: { label: "College/University", type: "text" },
      sector: { label: "Sector", type: "select", options: ["Business", "Government", "Private", "Self Employed", "Not Working"] },
      occupation: { label: "Occupation", type: "text" },
      companyName: { label: "Company Name", type: "text" },
      annualIncome: { label: "Annual Income", type: "select", options: ["Below ₹ 1 Lakh yearly", "₹ 1 to 3 Lakh yearly", "₹ 3 to 5 Lakh yearly", "₹ 5 to 7 Lakh yearly", "₹ 7 to 10 Lakh yearly", "₹ 10 to 15 Lakh yearly", "Above ₹ 15 Lakh yearly"] },
      workLocation: { label: "Work Location", type: "text" },
      emailId: { label: "Email", type: "email" },
      mobileNumber: { label: "Mobile Number", type: "tel" },
      aboutMe: { label: "About Me", type: "textarea" },
      familyBackground: { label: "Family Background", type: "textarea" },
      expectations: { label: "Expectations", type: "textarea" }
    };

    const config = fieldConfig[field] || { label: field, type: "text" };

    if (isEditable) {
      return (
        <View key={field} style={styles.field}>
          <Text style={styles.fieldLabel}>{config.label}</Text>
          {config.type === "textarea" ? (
            <TextInput
              style={[styles.input, styles.textArea]}
              value={editBuffer[field] || ""}
              onChangeText={(text) => handleEditInput(field, text)}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholder={`Enter ${config.label}`}
            />
          ) : config.type === "select" ? (
            <TouchableOpacity
              style={styles.select}
              onPress={() => showPicker(config.label, config.options, (value) => handleEditInput(field, value))}
            >
              <Text style={editBuffer[field] ? styles.selectText : styles.placeholderText}>
                {editBuffer[field] || `Select ${config.label}`}
              </Text>
              <Icon name="chevron-down" size={16} color="#666" />
            </TouchableOpacity>
          ) : (
            <TextInput
              style={styles.input}
              value={editBuffer[field] || ""}
              onChangeText={(text) => handleEditInput(field, text)}
              placeholder={`Enter ${config.label}`}
              keyboardType={config.type === "number" ? "numeric" : "default"}
            />
          )}
        </View>
      );
    }

    // Display mode
    return (
      <View key={field} style={styles.row}>
        <Text style={styles.label}>{config.label}</Text>
        <Text style={styles.value}>
          {Array.isArray(value) ? value.join(", ") : (value || "Not specified")}
        </Text>
      </View>
    );
  };

  const showPicker = (title, options, onSelect) => {
    Alert.alert(
      title,
      "",
      [
        ...options.map(option => ({
          text: option,
          onPress: () => onSelect(option)
        })),
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  };

  // Render modal form based on section
  const renderModalForm = () => {
    const modalTitles = {
      personal: "Personal Details",
      religion: "Religion & Community",
      location: "Location",
      marital: "Marital Status & Height",
      education: "Education",
      career: "Career Details",
      contact: "Contact Information",
      additional: "Additional Information"
    };

    return (
      <ScrollView style={styles.modalForm}>
        <Text style={styles.modalSectionTitle}>{modalTitles[openModal]}</Text>
        
        {fieldGroups[openModal]?.map(field => 
          renderField(field, profileData[field], true)
        )}

        {/* Special handling for hobbies */}
        {openModal === 'additional' && (
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Hobbies</Text>
            {(editBuffer.hobbies || []).map((hobby, index) => (
              <View key={index} style={styles.hobbyRow}>
                <TextInput
                  style={[styles.input, styles.hobbyInput]}
                  value={hobby}
                  placeholder={`Hobby ${index + 1}`}
                  onChangeText={(text) => updateHobby(index, text)}
                />
                <TouchableOpacity 
                  style={styles.removeHobbyButton}
                  onPress={() => removeHobby(index)}
                >
                  <MaterialIcons name="remove-circle" size={24} color="#ff4444" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.addHobbyButton} onPress={addHobby}>
              <Icon name="plus" size={14} color="#695019" />
              <Text style={styles.addHobbyText}>Add Hobby</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    );
  };

  // Calculate completion percentage
  const calculateCompletion = () => {
    const totalFields = Object.keys(profileData).length;
    const filledFields = Object.values(profileData).filter(value => 
      value && value.toString().trim() !== ''
    ).length;
    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Icon name="arrow-left" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSaveAll}
          disabled={isLoading}
        >
          <Text style={styles.saveButtonText}>
            {isLoading ? "Saving..." : "Save"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Completion */}
        <View style={styles.completionCard}>
          <Text style={styles.completionTitle}>Profile Completion</Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill,
                { width: `${calculateCompletion()}%` }
              ]} 
            />
          </View>
          <Text style={styles.completionText}>{calculateCompletion()}% Complete</Text>
        </View>

        {/* Photo Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Profile Photo</Text>
          <TouchableOpacity style={styles.photoContainer} onPress={handlePhotoUpload}>
            {profileData.photo || photo ? (
              <Image 
                source={{ uri: profileData.photo || (photo && photo.uri) }} 
                style={styles.profilePhoto}
              />
            ) : (
              <View style={styles.photoPlaceholder}>
                <Icon name="user" size={32} color="#666" />
                <Text style={styles.uploadText}>Add Photo</Text>
              </View>
            )}
          </TouchableOpacity>
        </View> 

        {/* Profile Sections */}
        {Object.entries(fieldGroups).map(([section, fields]) => (
          <View key={section} style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {section.charAt(0).toUpperCase() + section.slice(1)} Details
              </Text>
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => openSectionModal(section, fields)}
              >
                <Icon name="edit" size={14} color="#695019" />
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.sectionBody}>
              {fields.map(field => renderField(field, profileData[field]))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Edit Modal */}
      <Modal
        visible={!!openModal}
        animationType="slide"
        transparent={true}
        onRequestClose={cancelEdit}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Edit {openModal?.charAt(0).toUpperCase() + openModal?.slice(1)} Details
              </Text>
              <TouchableOpacity onPress={cancelEdit} style={styles.modalClose}>
                <MaterialIcons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            
            {renderModalForm()}
            
            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.cancelButton} onPress={cancelEdit}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.saveButton} 
                onPress={saveSection}
                disabled={isLoading}
              >
                <Text style={styles.saveButtonText}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F2",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#695019',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  completionCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#18c2b4',
    borderRadius: 4,
  },
  completionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e2d2',
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#695019',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 12,
    color: '#695019',
    marginLeft: 4,
  },
  sectionBody: {
    // Content styles
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 2,
    textAlign: 'right',
  },
  photoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  uploadText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#695019',
  },
  modalClose: {
    padding: 4,
  },
  modalForm: {
    maxHeight: 400,
    padding: 16,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 12,
  },
  cancelButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#695019',
  },
  cancelButtonText: {
    color: '#695019',
    fontWeight: '500',
  },
  // Form Styles
  field: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  select: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 14,
    color: '#333',
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
  },
  hobbyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  hobbyInput: {
    flex: 1,
    marginRight: 8,
  },
  removeHobbyButton: {
    padding: 4,
  },
  addHobbyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#695019',
    borderRadius: 6,
    alignSelf: 'flex-start',
    gap: 8,
  },
  addHobbyText: {
    color: '#695019',
    fontWeight: '500',
  },
});

export default EditProfile;
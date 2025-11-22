



import React, { useState, useRef } from "react";
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
  Platform
} from "react-native";
// import { Picker } from "@react-native-picker/picker";
 import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EditProfile = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(null);

  // Profile data states
  const [personal, setPersonal] = useState({
    fullName: "Bhavya S.",
    dob: "1999-08-01",
    gender: "Female",
    motherTongue: "Telugu",
    maritalStatus: "Never Married",
    location: "Hyderabad, Telangana",
    hobbies: ["Dancing", "Cooking", "Reading novels"],
  });

  const [basics, setBasics] = useState({
    height: "5'3\"",
    weight: "55 kg",
    bodyType: "Athletic",
    complexion: "Wheatish",
  });

  const [educationCareer, setEducationCareer] = useState({
    highestEducation: "B.Tech - CSE",
    employedIn: "Private",
    occupation: "Software Engineer",
    company: "NextHub Technologies",
    experience: "2 – 3 years",
  });

  const [family, setFamily] = useState({
    fatherName: "Suresh",
    motherName: "Latha",
    siblings: "1 Brother",
    familyStatus: "Middle Class",
  });

  const [astro, setAstro] = useState({
    manglik: "No",
    rashi: "Mesha",
    nakshatra: "Bharani",
  });

  const [partnerPrefs, setPartnerPrefs] = useState({
    ageRange: "27 - 32",
    religion: "Hindu",
    education: "Any Graduate",
    locationPref: "India",
    work: "Working / Employed",
    hobbies: ["Traveling", "Movies", "Cooking"],
  });

  const [editBuffer, setEditBuffer] = useState({});

  // Handlers
  const handlePhotoUpload = () => {
    // For React Native, you would use ImagePicker library
    Alert.alert("Upload Photo", "Photo upload functionality would be implemented here");
  };

  const openSectionModal = (sectionKey) => {
    const sectionMap = { 
      personal, 
      basics, 
      educationCareer, 
      family, 
      astro, 
      partnerPrefs 
    };
    setEditBuffer(JSON.parse(JSON.stringify(sectionMap[sectionKey])));
    setOpenModal(sectionKey);
  };

  const saveSection = () => {
    const setterMap = {
      personal: setPersonal,
      basics: setBasics,
      educationCareer: setEducationCareer,
      family: setFamily,
      astro: setAstro,
      partnerPrefs: setPartnerPrefs,
    };
    setterMap[openModal]?.(editBuffer);
    setOpenModal(null);
    setEditBuffer({});
  };

  const cancelEdit = () => {
    setOpenModal(null);
    setEditBuffer({});
  };

  const handleEditInput = (key, value) => {
    setEditBuffer(prev => ({ ...prev, [key]: value }));
  };

  const updateHobby = (index, value, section) => {
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

  // Row Component
  const Row = ({ label, value, actionText, onAction }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>
          {Array.isArray(value) 
            ? value.join(", ") 
            : value || <Text style={styles.muted}>Not specified</Text>
          }
        </Text>
        {actionText && (
          <TouchableOpacity style={styles.actionLink} onPress={onAction}>
            <Text style={styles.actionText}>{actionText}</Text>
            <Icon name="chevron-right" size={12} color="#666" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Photo Card */}
            <View style={styles.photoCard}>
              <TouchableOpacity style={styles.photoBox} onPress={handlePhotoUpload}>
                {photo ? (
                  <Image source={{ uri: photo }} style={styles.photoPreview} />
                ) : (
                  <View style={styles.photoPlaceholder}>
                    <Icon name="camera" size={24} color="#666" />
                    <Text style={styles.uploadText}>Upload Photo</Text>
                  </View>
                )}
                <View style={styles.cameraAction}>
                  <Icon name="camera" size={14} color="#fff" />
                  <Text style={styles.cameraActionText}>Change</Text>
                </View>
              </TouchableOpacity>
              
              <View style={styles.photoCaption}>
                <Text style={styles.photoName}>{personal.fullName}</Text>
                <Text style={styles.photoSub}>Active member • Verified</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.editProfileButton}
                onPress={() => openSectionModal("personal")}
              >
                <Text style={styles.editProfileButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>

            {/* Basics & Lifestyle */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Basics & Lifestyle</Text>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => openSectionModal("basics")}
                >
                  <Icon name="edit" size={14} color="#695019" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <Row label="Height" value={basics.height} />
                <Row label="Weight" value={basics.weight} />
                <Row label="Body Type" value={basics.bodyType} />
                <Row label="Complexion" value={basics.complexion} />
              </View>
            </View>

            {/* Family Details */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Family Details</Text>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => openSectionModal("family")}
                >
                  <Icon name="edit" size={14} color="#695019" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <Row label="Father" value={family.fatherName} />
                <Row label="Mother" value={family.motherName} />
                <Row label="Siblings" value={family.siblings} />
                <Row label="Family Status" value={family.familyStatus} />
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Personal Details */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Personal Details</Text>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => openSectionModal("personal")}
                >
                  <Icon name="edit" size={14} color="#695019" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.twoColumnBody}>
                <View style={styles.column}>
                  <Row label="Full Name" value={personal.fullName} />
                  <Row label="Date of Birth" value={personal.dob} />
                  <Row label="Gender" value={personal.gender} />
                  <Row label="Mother Tongue" value={personal.motherTongue} />
                  <Row label="Marital Status" value={personal.maritalStatus} />
                  <Row label="Location" value={personal.location} />
                </View>
                <View style={styles.column}>
                  <Row label="Highest Education" value={educationCareer.highestEducation} />
                  <Row label="Occupation" value={educationCareer.occupation} />
                  <Row label="Company" value={educationCareer.company} />
                  <Row label="Experience" value={educationCareer.experience} />
                  <Row label="Rashi" value={astro.rashi} />
                </View>
              </View>
            </View>

            {/* Education & Career */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Education & Career</Text>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => openSectionModal("educationCareer")}
                >
                  <Icon name="edit" size={14} color="#695019" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.twoColumnBody}>
                <View style={styles.column}>
                  <Row label="Highest Education" value={educationCareer.highestEducation} />
                  <Row label="Employed In" value={educationCareer.employedIn} />
                </View>
                <View style={styles.column}>
                  <Row label="Occupation" value={educationCareer.occupation} />
                  <Row label="Company" value={educationCareer.company} />
                  <Row label="Experience" value={educationCareer.experience} />
                </View>
              </View>
            </View>

            {/* Hobbies */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Hobbies</Text>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => openSectionModal("personal")}
                >
                  <Icon name="edit" size={14} color="#695019" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <Row label="Your Hobbies" value={personal.hobbies} />
              </View>
            </View>

            {/* Partner Preferences */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Partner Preferences</Text>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => openSectionModal("partnerPrefs")}
                >
                  <Icon name="edit" size={14} color="#695019" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.twoColumnBody}>
                <View style={styles.column}>
                  <Row label="Age Range" value={partnerPrefs.ageRange} />
                  <Row label="Religion" value={partnerPrefs.religion} />
                </View>
                <View style={styles.column}>
                  <Row label="Education" value={partnerPrefs.education} />
                  <Row label="Work" value={partnerPrefs.work} />
                  <Row label="Partner Hobbies" value={partnerPrefs.hobbies} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal */}
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
                {getModalTitle(openModal)}
              </Text>
              <TouchableOpacity onPress={cancelEdit} style={styles.modalClose}>
                <MaterialIcons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalBody}>
              {renderModalForm(
                openModal, 
                editBuffer, 
                handleEditInput, 
                updateHobby, 
                addHobby,
                removeHobby
              )}
            </ScrollView>
            
            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.cancelButton} onPress={cancelEdit}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={saveSection}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Helper function to get modal title
const getModalTitle = (key) => {
  const titles = {
    personal: "Personal Details",
    basics: "Basics & Lifestyle",
    educationCareer: "Education & Career",
    family: "Family Details",
    astro: "Astro / Religious",
    partnerPrefs: "Partner Preferences",
  };
  return titles[key] || "Details";
};

// Modal form renderer
const renderModalForm = (key, buffer, handleEditInput, updateHobby, addHobby, removeHobby) => {
  switch (key) {
    case "basics":
      return (
        <View style={styles.modalForm}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Height</Text>
            <TextInput
              style={styles.input}
              value={buffer.height || ""}
              onChangeText={(text) => handleEditInput("height", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Weight</Text>
            <TextInput
              style={styles.input}
              value={buffer.weight || ""}
              onChangeText={(text) => handleEditInput("weight", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Body Type</Text>
            <TextInput
              style={styles.input}
              value={buffer.bodyType || ""}
              onChangeText={(text) => handleEditInput("bodyType", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Complexion</Text>
            <TextInput
              style={styles.input}
              value={buffer.complexion || ""}
              onChangeText={(text) => handleEditInput("complexion", text)}
            />
          </View>
        </View>
      );

    case "family":
      return (
        <View style={styles.modalForm}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Father's Name</Text>
            <TextInput
              style={styles.input}
              value={buffer.fatherName || ""}
              onChangeText={(text) => handleEditInput("fatherName", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Mother's Name</Text>
            <TextInput
              style={styles.input}
              value={buffer.motherName || ""}
              onChangeText={(text) => handleEditInput("motherName", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Siblings</Text>
            <TextInput
              style={styles.input}
              value={buffer.siblings || ""}
              onChangeText={(text) => handleEditInput("siblings", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Family Status</Text>
            <TextInput
              style={styles.input}
              value={buffer.familyStatus || ""}
              onChangeText={(text) => handleEditInput("familyStatus", text)}
            />
          </View>
        </View>
      );

    case "educationCareer":
      return (
        <View style={styles.modalForm}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Highest Education</Text>
            <TextInput
              style={styles.input}
              value={buffer.highestEducation || ""}
              onChangeText={(text) => handleEditInput("highestEducation", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Employed In</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={buffer.employedIn || ""}
                onValueChange={(value) => handleEditInput("employedIn", value)}
                style={styles.picker}
              >
                <Picker.Item label="Private" value="Private" />
                <Picker.Item label="Government" value="Government" />
                <Picker.Item label="Self Employed" value="Self Employed" />
              </Picker>
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Occupation</Text>
            <TextInput
              style={styles.input}
              value={buffer.occupation || ""}
              onChangeText={(text) => handleEditInput("occupation", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Company</Text>
            <TextInput
              style={styles.input}
              value={buffer.company || ""}
              onChangeText={(text) => handleEditInput("company", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Experience</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={buffer.experience || ""}
                onValueChange={(value) => handleEditInput("experience", value)}
                style={styles.picker}
              >
                <Picker.Item label="< 1 year" value="< 1 year" />
                <Picker.Item label="2 – 3 years" value="2 – 3 years" />
                <Picker.Item label="3 – 5 years" value="3 – 5 years" />
                <Picker.Item label="> 5 years" value="> 5 years" />
              </Picker>
            </View>
          </View>
        </View>
      );

    case "personal":
      return (
        <View style={styles.modalForm}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={buffer.fullName || ""}
              onChangeText={(text) => handleEditInput("fullName", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={buffer.dob || ""}
              onChangeText={(text) => handleEditInput("dob", text)}
              placeholder="YYYY-MM-DD"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Gender</Text>
            {/* <View style={styles.pickerContainer}>
              <Picker
                selectedValue={buffer.gender || ""}
                onValueChange={(value) => handleEditInput("gender", value)}
                style={styles.picker}
              > */}
                {/* <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Other" value="Other" />
              </Picker> */}
            {/* </View> */}
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Mother Tongue</Text>
            <TextInput
              style={styles.input}
              value={buffer.motherTongue || ""}
              onChangeText={(text) => handleEditInput("motherTongue", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Marital Status</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={buffer.maritalStatus || ""}
                onValueChange={(value) => handleEditInput("maritalStatus", value)}
                style={styles.picker}
              >
                <Picker.Item label="Never Married" value="Never Married" />
                <Picker.Item label="Divorced" value="Divorced" />
                <Picker.Item label="Widowed" value="Widowed" />
              </Picker>
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Location</Text>
            <TextInput
              style={styles.input}
              value={buffer.location || ""}
              onChangeText={(text) => handleEditInput("location", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Hobbies</Text>
            {(buffer.hobbies || []).map((hobby, index) => (
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
                  <MaterialIcons name="remove-circle" size={20} color="#ff4444" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.addHobbyButton} onPress={addHobby}>
              <Icon name="plus" size={14} color="#695019" />
              <Text style={styles.addHobbyText}>Add Hobby</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    case "partnerPrefs":
      return (
        <View style={styles.modalForm}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Age Range</Text>
            <TextInput
              style={styles.input}
              value={buffer.ageRange || ""}
              onChangeText={(text) => handleEditInput("ageRange", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Religion</Text>
            <TextInput
              style={styles.input}
              value={buffer.religion || ""}
              onChangeText={(text) => handleEditInput("religion", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Education</Text>
            <TextInput
              style={styles.input}
              value={buffer.education || ""}
              onChangeText={(text) => handleEditInput("education", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Work</Text>
            <TextInput
              style={styles.input}
              value={buffer.work || ""}
              onChangeText={(text) => handleEditInput("work", text)}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Partner Hobbies</Text>
            {(buffer.hobbies || []).map((hobby, index) => (
              <View key={index} style={styles.hobbyRow}>
                <TextInput
                  style={[styles.input, styles.hobbyInput]}
                  value={hobby}
                  placeholder={`Partner Hobby ${index + 1}`}
                  onChangeText={(text) => {
                    const newHobbies = [...buffer.hobbies];
                    newHobbies[index] = text;
                    handleEditInput("hobbies", newHobbies);
                  }}
                />
                <TouchableOpacity 
                  style={styles.removeHobbyButton}
                  onPress={() => {
                    const newHobbies = [...buffer.hobbies];
                    newHobbies.splice(index, 1);
                    handleEditInput("hobbies", newHobbies);
                  }}
                >
                  <MaterialIcons name="remove-circle" size={20} color="#ff4444" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity 
              style={styles.addHobbyButton} 
              onPress={() => handleEditInput("hobbies", [...(buffer.hobbies || []), ""])}
            >
              <Icon name="plus" size={14} color="#695019" />
              <Text style={styles.addHobbyText}>Add Hobby</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    default:
      return <Text>Editing not supported for this section.</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#695019",
    textAlign: "center",
    marginVertical: 16,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    padding: 12,
  },
  leftColumn: {
    flex: 1,
    marginRight: 8,
  },
  rightColumn: {
    flex: 2,
    marginLeft: 8,
  },
  // Photo Card
  photoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  photoBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    overflow: "hidden",
    position: "relative",
  },
  photoPreview: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  photoPlaceholder: {
    alignItems: "center",
  },
  uploadText: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
  cameraAction: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 6,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  cameraActionText: {
    color: "#fff",
    fontSize: 10,
    marginLeft: 4,
  },
  photoCaption: {
    alignItems: "center",
    marginBottom: 12,
  },
  photoName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  photoSub: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  editProfileButton: {
    backgroundColor: "#695019",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editProfileButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  // Section Cards
  sectionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e8e2d2",
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#695019",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 12,
    color: "#695019",
    marginLeft: 4,
  },
  sectionBody: {
    // Default body style
  },
  twoColumnBody: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
  // Row Styles
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  valueContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  valueText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  muted: {
    color: "#999",
    fontStyle: "italic",
  },
  actionLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 12,
    color: "#695019",
    marginRight: 4,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "100%",
    maxHeight: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#695019",
  },
  modalClose: {
    padding: 4,
  },
  modalBody: {
    maxHeight: 400,
    padding: 16,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    gap: 12,
  },
  cancelButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#695019",
  },
  cancelButtonText: {
    color: "#695019",
    fontWeight: "500",
  },
  saveButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#695019",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  // Form Styles
  modalForm: {
    gap: 16,
  },
  field: {
    gap: 8,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
  },
  hobbyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  hobbyInput: {
    flex: 1,
  },
  removeHobbyButton: {
    padding: 4,
  },
  addHobbyButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#695019",
    borderRadius: 6,
    alignSelf: "flex-start",
    gap: 8,
  },
  addHobbyText: {
    color: "#695019",
    fontWeight: "500",
  },
});

export default EditProfile;









// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Dimensions,
//   Alert,
//   Platform,
//   Modal
// } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const EditProfile = ({ 
//   profileData, 
//   onSave, 
//   onCancel,
//   visible 
// }) => {
//   const [formData, setFormData] = useState(profileData || {});
//   const [currentStep, setCurrentStep] = useState(1);
//   const totalSteps = 7;

//   useEffect(() => {
//     if (profileData) {
//       setFormData(profileData);
//     }
//   }, [profileData]);

//   const handleChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const nextStep = () => {
//     if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
//   };

//   const prevStep = () => {
//     if (currentStep > 1) setCurrentStep((prev) => prev - 1);
//   };

//   const handleSave = () => {
//     // Basic validation
//     if (!formData.firstName || !formData.lastName) {
//       Alert.alert("Required", "Please enter your first and last name");
//       return;
//     }
    
//     if (!formData.email) {
//       Alert.alert("Required", "Please enter your email address");
//       return;
//     }

//     onSave(formData);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1: // Basic Info
//         return (
//           <>
//             <Text style={styles.stepTitle}>Personal Information</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="First Name"
//               value={formData.firstName}
//               onChangeText={(text) => handleChange("firstName", text)}
//             />
//             <TextInput
//               style={styles.formInput}
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChangeText={(text) => handleChange("lastName", text)}
//             />
            
//             <Text style={styles.formLabel}>Date of Birth</Text>
//             <View style={styles.dobFields}>
//               <TextInput
//                 style={[styles.formInput, styles.smallInput]}
//                 placeholder="DD"
//                 maxLength={2}
//                 keyboardType="number-pad"
//                 value={formData.dobDay}
//                 onChangeText={(text) => handleChange("dobDay", text)}
//               />
//               <TextInput
//                 style={[styles.formInput, styles.smallInput]}
//                 placeholder="MM"
//                 maxLength={2}
//                 keyboardType="number-pad"
//                 value={formData.dobMonth}
//                 onChangeText={(text) => handleChange("dobMonth", text)}
//               />
//               <TextInput
//                 style={[styles.formInput, styles.mediumInput]}
//                 placeholder="YYYY"
//                 maxLength={4}
//                 keyboardType="number-pad"
//                 value={formData.dobYear}
//                 onChangeText={(text) => handleChange("dobYear", text)}
//               />
//             </View>

//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Marital Status</Text>
//               <View style={styles.pickerContainer}>
//                 {["Never Married", "Divorced", "Widowed", "Awaiting Divorce"].map((status) => (
//                   <TouchableOpacity
//                     key={status}
//                     style={[
//                       styles.pickerOption,
//                       formData.maritalStatus === status && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("maritalStatus", status)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.maritalStatus === status && styles.pickerOptionTextSelected
//                     ]}>
//                       {status}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>
//           </>
//         );

//       case 2: // Religion & Community
//         return (
//           <>
//             <Text style={styles.stepTitle}>Religion & Community</Text>
            
//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Religion</Text>
//               <View style={styles.pickerContainer}>
//                 {["Hindu", "Muslim", "Christian", "Sikh", "Other"].map((religion) => (
//                   <TouchableOpacity
//                     key={religion}
//                     style={[
//                       styles.pickerOption,
//                       formData.religion === religion && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("religion", religion)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.religion === religion && styles.pickerOptionTextSelected
//                     ]}>
//                       {religion}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Community</Text>
//               <View style={styles.pickerContainer}>
//                 {["Telugu", "Tamil", "Malayalam", "Kannada", "Marathi", "Hindi"].map((community) => (
//                   <TouchableOpacity
//                     key={community}
//                     style={[
//                       styles.pickerOption,
//                       formData.community === community && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("community", community)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.community === community && styles.pickerOptionTextSelected
//                     ]}>
//                       {community}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <TextInput
//               style={styles.formInput}
//               placeholder="Sub-community (optional)"
//               value={formData.subCommunity}
//               onChangeText={(text) => handleChange("subCommunity", text)}
//             />
//           </>
//         );

//       case 3: // Location
//         return (
//           <>
//             <Text style={styles.stepTitle}>Location</Text>
            
//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Country</Text>
//               <View style={styles.pickerContainer}>
//                 {["India", "USA", "UK", "Canada", "Australia"].map((country) => (
//                   <TouchableOpacity
//                     key={country}
//                     style={[
//                       styles.pickerOption,
//                       formData.country === country && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("country", country)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.country === country && styles.pickerOptionTextSelected
//                     ]}>
//                       {country}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <TextInput
//               style={styles.formInput}
//               placeholder="City"
//               value={formData.city}
//               onChangeText={(text) => handleChange("city", text)}
//             />
//           </>
//         );

//       case 4: // Education
//         return (
//           <>
//             <Text style={styles.stepTitle}>Education</Text>
            
//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Highest Qualification</Text>
//               <View style={styles.pickerContainer}>
//                 {["B.E / B.Tech", "M.E / M.Tech", "MBA", "PhD", "Other"].map((qualification) => (
//                   <TouchableOpacity
//                     key={qualification}
//                     style={[
//                       styles.pickerOption,
//                       formData.highestQualification === qualification && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("highestQualification", qualification)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.highestQualification === qualification && styles.pickerOptionTextSelected
//                     ]}>
//                       {qualification}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <TextInput
//               style={styles.formInput}
//               placeholder="College / University Name"
//               value={formData.collegeName}
//               onChangeText={(text) => handleChange("collegeName", text)}
//             />
//           </>
//         );

//       case 5: // Career
//         return (
//           <>
//             <Text style={styles.stepTitle}>Career Details</Text>
            
//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Working With</Text>
//               <View style={styles.pickerContainer}>
//                 {["Private Company", "Government", "Self Employed", "Not Working"].map((workType) => (
//                   <TouchableOpacity
//                     key={workType}
//                     style={[
//                       styles.pickerOption,
//                       formData.workWith === workType && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("workWith", workType)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.workWith === workType && styles.pickerOptionTextSelected
//                     ]}>
//                       {workType}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <TextInput
//               style={styles.formInput}
//               placeholder="Your Profession"
//               value={formData.workAs}
//               onChangeText={(text) => handleChange("workAs", text)}
//             />
//             <TextInput
//               style={styles.formInput}
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChangeText={(text) => handleChange("companyName", text)}
//             />

//             <View style={styles.formGroup}>
//               <Text style={styles.formLabel}>Annual Income</Text>
//               <View style={styles.pickerContainer}>
//                 {[
//                   "₹ 3 to 5 Lakh yearly",
//                   "₹ 5 to 7 Lakh yearly", 
//                   "₹ 7 to 10 Lakh yearly",
//                   "₹ 10 to 15 Lakh yearly",
//                   "Above ₹ 15 Lakh yearly"
//                 ].map((income) => (
//                   <TouchableOpacity
//                     key={income}
//                     style={[
//                       styles.pickerOption,
//                       formData.income === income && styles.pickerOptionSelected
//                     ]}
//                     onPress={() => handleChange("income", income)}
//                   >
//                     <Text style={[
//                       styles.pickerOptionText,
//                       formData.income === income && styles.pickerOptionTextSelected
//                     ]}>
//                       {income}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>
//           </>
//         );

//       case 6: // Contact Info
//         return (
//           <>
//             <Text style={styles.stepTitle}>Contact Information</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Email Address"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               value={formData.email}
//               onChangeText={(text) => handleChange("email", text)}
//             />
//             <TextInput
//               style={styles.formInput}
//               placeholder="Mobile Number"
//               keyboardType="phone-pad"
//               value={formData.mobile}
//               onChangeText={(text) => handleChange("mobile", text)}
//             />
//           </>
//         );

//       case 7: // Review & Save
//         return (
//           <>
//             <Text style={styles.stepTitle}>Review & Save</Text>
//             <Text style={styles.confirmationText}>
//               Please review your updated information.
//             </Text>
            
//             <View style={styles.summaryContainer}>
//               <Text style={styles.summaryText}>
//                 <Text style={styles.summaryLabel}>Name: </Text>
//                 {formData.firstName} {formData.lastName}
//               </Text>
//               <Text style={styles.summaryText}>
//                 <Text style={styles.summaryLabel}>Email: </Text>
//                 {formData.email}
//               </Text>
//               <Text style={styles.summaryText}>
//                 <Text style={styles.summaryLabel}>Location: </Text>
//                 {formData.city}, {formData.country}
//               </Text>
//               <Text style={styles.summaryText}>
//                 <Text style={styles.summaryLabel}>Education: </Text>
//                 {formData.highestQualification}
//               </Text>
//             </View>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   if (!visible) return null;

//   return (
//     <Modal
//       visible={visible}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={onCancel}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Header */}
//           <View style={styles.header}>
//             <TouchableOpacity 
//               style={styles.backButton} 
//               onPress={onCancel}
//             >
//               <Icon name="times" size={20} color="#333" />
//               <Text style={styles.backButtonText}>Cancel</Text>
//             </TouchableOpacity>
            
//             <Text style={styles.editProfileTitle}>Edit Profile</Text>
            
//             <TouchableOpacity 
//               style={styles.saveButton}
//               onPress={handleSave}
//             >
//               <Icon name="check" size={16} color="#18c2b4" />
//               <Text style={styles.saveButtonText}>Save</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             contentContainerStyle={styles.scrollContent}
//           >
//             <View style={styles.formWrapper}>
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar,
//                     { width: `${(currentStep / totalSteps) * 100}%` }
//                   ]} 
//                 />
//               </View>

//               {/* Step Indicator */}
//               <Text style={styles.stepIndicator}>
//                 Step {currentStep} of {totalSteps}
//               </Text>

//               {/* Step Content */}
//               <View style={styles.stepContent}>
//                 {renderStep()}
//               </View>

//               {/* Navigation Buttons */}
//               <View style={styles.navButtons}>
//                 {currentStep > 1 && (
//                   <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
//                     <Icon name="arrow-left" size={16} color="#18c2b4" />
//                     <Text style={styles.backBtnText}>Back</Text>
//                   </TouchableOpacity>
//                 )}
//                 {currentStep < totalSteps && (
//                   <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
//                     <Text style={styles.nextBtnText}>Next</Text>
//                     <Icon name="arrow-right" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 )}
//                 {currentStep === totalSteps && (
//                   <TouchableOpacity style={styles.submitBtn} onPress={handleSave}>
//                     <Text style={styles.submitBtnText}>Save Changes</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: width * 0.95,
//     height: height * 0.9,
//     maxWidth: 700,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingBottom: 15,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   backButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   editProfileTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   saveButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 6,
//     backgroundColor: '#eafcff',
//   },
//   saveButtonText: {
//     color: '#18c2b4',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   formWrapper: {
//     backgroundColor: '#ffffff',
//     padding: 25,
//     borderRadius: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.05,
//     shadowRadius: 40,
//     elevation: 5,
//     marginBottom: 20,
//   },
//   progressBarContainer: {
//     width: '100%',
//     height: 6,
//     backgroundColor: '#e9ecef',
//     borderRadius: 3,
//     marginBottom: 15,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     backgroundColor: '#18c2b4',
//     borderRadius: 3,
//   },
//   stepIndicator: {
//     fontSize: 14,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 20,
//     fontWeight: '500',
//   },
//   stepContent: {
//     minHeight: 300,
//   },
//   stepTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   formGroup: {
//     marginBottom: 20,
//   },
//   formLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginBottom: 8,
//   },
//   formInput: {
//     width: '100%',
//     padding: 14,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     marginBottom: 15,
//   },
//   dobFields: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   smallInput: {
//     flex: 1,
//   },
//   mediumInput: {
//     flex: 2,
//   },
//   pickerContainer: {
//     gap: 8,
//   },
//   pickerOption: {
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   pickerOptionSelected: {
//     backgroundColor: '#eafcff',
//     borderColor: '#18c2b4',
//   },
//   pickerOptionText: {
//     color: '#495057',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   pickerOptionTextSelected: {
//     color: '#18c2b4',
//     fontWeight: '600',
//   },
//   confirmationText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   summaryContainer: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 30,
//   },
//   summaryText: {
//     fontSize: 14,
//     color: '#495057',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
//   summaryLabel: {
//     fontWeight: '600',
//     color: '#212529',
//   },
//   navButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 25,
//   },
//   backBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//   },
//   backBtnText: {
//     color: '#18c2b4',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   nextBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     backgroundColor: '#18c2b4',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 8,
//     shadowColor: '#18c2b4',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 15,
//     elevation: 5,
//   },
//   nextBtnText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   submitBtn: {
//     width: '100%',
//     backgroundColor: '#18c2b4',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#18c2b4',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 15,
//     elevation: 5,
//   },
//   submitBtnText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default EditProfile;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  Platform,
  Modal
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Register = ({ 
  show, 
  onClose, 
  onRegistrationComplete, 
  onNavigateToLogin 
}) => {
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState(null);

  const [formData, setFormData] = useState({
    profileFor: "",
    gender: "",
    firstName: "",
    lastName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    religion: "Hindu",
    community: "Telugu",
    subCommunity: "",
    country: "India",
    city: "",
    maritalStatus: "Never Married",
    height: "",
    highestQualification: "B.E / B.Tech",
    collegeName: "",
    workWith: "Private Company",
    workAs: "",
    companyName: "",
    income: "₹ 7 to 10 Lakh yearly",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const totalSteps = 8;

  // Icon configuration for each step
  const stepIcons = {
    1: { name: "user-friends", type: "FontAwesome5", color: "#18c2b4" },
    2: { name: "user", type: "FontAwesome5", color: "#18c2b4" },
    3: { name: "book-open", type: "FontAwesome5", color: "#18c2b4" },
    4: { name: "map-marker-alt", type: "FontAwesome5", color: "#18c2b4" },
    5: { name: "graduation-cap", type: "FontAwesome5", color: "#18c2b4" },
    6: { name: "briefcase", type: "FontAwesome5", color: "#18c2b4" },
    7: { name: "user-lock", type: "FontAwesome5", color: "#18c2b4" },
    8: { name: "ring", type: "FontAwesome5", color: "#18c2b4" }
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    // Basic validation before proceeding
    if (step === 1 && !formData.profileFor) {
      Alert.alert("Required", "Please select who this profile is for");
      return;
    }
    if (step === 2 && (!formData.firstName || !formData.lastName)) {
      Alert.alert("Required", "Please enter your first and last name");
      return;
    }
    if (step === 7 && (!formData.email || !formData.mobile)) {
      Alert.alert("Required", "Please enter your email and mobile number");
      return;
    }
    if (step === 7 && (!formData.password || !formData.confirmPassword)) {
      Alert.alert("Required", "Please enter and confirm your password");
      return;
    }
    if (step === 7 && formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const generateUsername = (firstName, lastName, email) => {
    const first = firstName?.toLowerCase() || 'user';
    const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
    const randomNum = Math.floor(100 + Math.random() * 900);
    return `${first}${lastInitial}${randomNum}`;
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      Alert.alert("Error", "Email and password are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const username = generateUsername(formData.firstName, formData.lastName, formData.email);
    
    setGeneratedCredentials({
      username: username,
      password: formData.password,
      email: formData.email
    });

    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setStep(1);
    setFormData({
      profileFor: "",
      gender: "",
      firstName: "",
      lastName: "",
      dobDay: "",
      dobMonth: "",
      dobYear: "",
      religion: "Hindu",
      community: "Telugu",
      subCommunity: "",
      country: "India",
      city: "",
      maritalStatus: "Never Married",
      height: "",
      highestQualification: "B.E / B.Tech",
      collegeName: "",
      workWith: "Private Company",
      workAs: "",
      companyName: "",
      income: "₹ 7 to 10 Lakh yearly",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ""
    });
    setShowSuccessModal(false);
    onClose();
  };

  const handleLoginWithCredentials = () => {
    const completeFormData = {
      ...formData,
      username: generatedCredentials?.username
    };
    
    if (onRegistrationComplete) {
      onRegistrationComplete(completeFormData);
    }
    
    setStep(1);
    setFormData({
      profileFor: "",
      gender: "",
      firstName: "",
      lastName: "",
      dobDay: "",
      dobMonth: "",
      dobYear: "",
      religion: "Hindu",
      community: "Telugu",
      subCommunity: "",
      country: "India",
      city: "",
      maritalStatus: "Never Married",
      height: "",
      highestQualification: "B.E / B.Tech",
      collegeName: "",
      workWith: "Private Company",
      workAs: "",
      companyName: "",
      income: "₹ 7 to 10 Lakh yearly",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ""
    });
    
    setShowSuccessModal(false);
    onClose();
    
    if (onNavigateToLogin && generatedCredentials?.email) {
      onNavigateToLogin(generatedCredentials.email);
    }
  };

  const handleCloseRegister = () => {
    setStep(1);
    setFormData({
      profileFor: "",
      gender: "",
      firstName: "",
      lastName: "",
      dobDay: "",
      dobMonth: "",
      dobYear: "",
      religion: "Hindu",
      community: "Telugu",
      subCommunity: "",
      country: "India",
      city: "",
      maritalStatus: "Never Married",
      height: "",
      highestQualification: "B.E / B.Tech",
      collegeName: "",
      workWith: "Private Company",
      workAs: "",
      companyName: "",
      income: "₹ 7 to 10 Lakh yearly",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ""
    });
    onClose();
  };

  // Render Icon Component based on type
  const renderStepIcon = (stepNumber) => {
    const iconConfig = stepIcons[stepNumber];
    if (!iconConfig) return null;

    switch (iconConfig.type) {
      case "FontAwesome5":
        return (
          <Icon 
            name={iconConfig.name} 
            size={28} 
            color={iconConfig.color} 
          />
        );
      case "MaterialIcons":
        return (
          <MaterialIcons 
            name={iconConfig.name} 
            size={28} 
            color={iconConfig.color} 
          />
        );
      case "FontAwesome":
        return (
          <FontAwesome 
            name={iconConfig.name} 
            size={28} 
            color={iconConfig.color} 
          />
        );
      default:
        return (
          <Icon 
            name={iconConfig.name} 
            size={28} 
            color={iconConfig.color} 
          />
        );
    }
  };

  // ------------------------ STEP RENDERING ------------------------
  const renderStep = () => {
    switch (step) {
      // STEP 1: Profile For
      case 1:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(1)}
            </View>
            <Text style={styles.stepTitle}>This profile is for</Text>
            <View style={styles.optionGroup}>
              {[
                "Myself",
                "My Son",
                "My Daughter",
                "My Brother",
                "My Sister",
                "My Friend",
                "My Relative",
              ].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionBtn,
                    formData.profileFor === option && styles.optionBtnSelected
                  ]}
                  onPress={() => {
                    handleChange("profileFor", option);
                    if (
                      option === "Myself" ||
                      option === "My Friend" ||
                      option === "My Relative"
                    )
                      return;
                    setTimeout(nextStep, 300);
                  }}
                >
                  <Text style={[
                    styles.optionBtnText,
                    formData.profileFor === option && styles.optionBtnTextSelected
                  ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {(formData.profileFor === "Myself" ||
              formData.profileFor === "My Friend" ||
              formData.profileFor === "My Relative") && (
              <View style={styles.fadeIn}>
                <Text style={styles.subTitle}>
                  {formData.profileFor === "My Friend"
                    ? "Is your friend Male or Female?"
                    : formData.profileFor === "My Relative"
                    ? "Is your relative Male or Female?"
                    : "Are you Male or Female?"}
                </Text>
                <View style={styles.optionGroup}>
                  {["Male", "Female"].map((g) => (
                    <TouchableOpacity
                      key={g}
                      style={[
                        styles.optionBtn,
                        formData.gender === g && styles.optionBtnSelected
                      ]}
                      onPress={() => {
                        handleChange("gender", g);
                        setTimeout(nextStep, 300);
                      }}
                    >
                      <Text style={[
                        styles.optionBtnText,
                        formData.gender === g && styles.optionBtnTextSelected
                      ]}>
                        {g}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </>
        );

      // STEP 2: Basic Details
      case 2:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(2)}
            </View>
            <Text style={styles.stepTitle}>Tell us about you</Text>
            <TextInput
              style={styles.formInput}
              placeholder="First Name"
              value={formData.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
            />
            <TextInput
              style={styles.formInput}
              placeholder="Last Name"
              value={formData.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
            />

            <Text style={styles.formLabel}>Date of Birth</Text>
            <View style={styles.dobFields}>
              <TextInput
                style={[styles.formInput, styles.smallInput]}
                placeholder="DD"
                maxLength={2}
                keyboardType="number-pad"
                value={formData.dobDay}
                onChangeText={(text) => handleChange("dobDay", text)}
              />
              <TextInput
                style={[styles.formInput, styles.smallInput]}
                placeholder="MM"
                maxLength={2}
                keyboardType="number-pad"
                value={formData.dobMonth}
                onChangeText={(text) => handleChange("dobMonth", text)}
              />
              <TextInput
                style={[styles.formInput, styles.mediumInput]}
                placeholder="YYYY"
                maxLength={4}
                keyboardType="number-pad"
                value={formData.dobYear}
                onChangeText={(text) => handleChange("dobYear", text)}
              />
            </View>
          </>
        );

      // STEP 3: Religion / Community
      case 3:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(3)}
            </View>
            <Text style={styles.stepTitle}>Religion & Community</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Religion</Text>
              <View style={styles.pickerContainer}>
                {["Hindu", "Muslim", "Christian", "Sikh", "Other"].map((religion) => (
                  <TouchableOpacity
                    key={religion}
                    style={[
                      styles.pickerOption,
                      formData.religion === religion && styles.pickerOptionSelected
                    ]}
                    onPress={() => handleChange("religion", religion)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      formData.religion === religion && styles.pickerOptionTextSelected
                    ]}>
                      {religion}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Community</Text>
              <View style={styles.pickerContainer}>
                {["Telugu", "Tamil", "Malayalam", "Kannada", "Marathi", "Hindi"].map((community) => (
                  <TouchableOpacity
                    key={community}
                    style={[
                      styles.pickerOption,
                      formData.community === community && styles.pickerOptionSelected
                    ]}
                    onPress={() => handleChange("community", community)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      formData.community === community && styles.pickerOptionTextSelected
                    ]}>
                      {community}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={styles.formInput}
              placeholder="Sub-community (optional)"
              value={formData.subCommunity}
              onChangeText={(text) => handleChange("subCommunity", text)}
            />
          </>
        );

      // STEP 4: Location
      case 4:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(4)}
            </View>
            <Text style={styles.stepTitle}>Where do you live?</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Country</Text>
              <View style={styles.pickerContainer}>
                {["India", "USA", "UK", "Canada", "Australia"].map((country) => (
                  <TouchableOpacity
                    key={country}
                    style={[
                      styles.pickerOption,
                      formData.country === country && styles.pickerOptionSelected
                    ]}
                    onPress={() => handleChange("country", country)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      formData.country === country && styles.pickerOptionTextSelected
                    ]}>
                      {country}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={styles.formInput}
              placeholder="City"
              value={formData.city}
              onChangeText={(text) => handleChange("city", text)}
            />
          </>
        );

      // STEP 5: Education
      case 5:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(5)}
            </View>
            <Text style={styles.stepTitle}>Education</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Highest Qualification</Text>
              <View style={styles.pickerContainer}>
                {["B.E / B.Tech", "M.E / M.Tech", "MBA", "PhD", "Other"].map((qualification) => (
                  <TouchableOpacity
                    key={qualification}
                    style={[
                      styles.pickerOption,
                      formData.highestQualification === qualification && styles.pickerOptionSelected
                    ]}
                    onPress={() => handleChange("highestQualification", qualification)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      formData.highestQualification === qualification && styles.pickerOptionTextSelected
                    ]}>
                      {qualification}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={styles.formInput}
              placeholder="College / University Name"
              value={formData.collegeName}
              onChangeText={(text) => handleChange("collegeName", text)}
            />
          </>
        );

      // STEP 6: Career
      case 6:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(6)}
            </View>
            <Text style={styles.stepTitle}>Career Details</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Working With</Text>
              <View style={styles.pickerContainer}>
                {["Private Company", "Government", "Self Employed", "Not Working"].map((workType) => (
                  <TouchableOpacity
                    key={workType}
                    style={[
                      styles.pickerOption,
                      formData.workWith === workType && styles.pickerOptionSelected
                    ]}
                    onPress={() => handleChange("workWith", workType)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      formData.workWith === workType && styles.pickerOptionTextSelected
                    ]}>
                      {workType}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={styles.formInput}
              placeholder="Your Profession"
              value={formData.workAs}
              onChangeText={(text) => handleChange("workAs", text)}
            />
            <TextInput
              style={styles.formInput}
              placeholder="Company Name"
              value={formData.companyName}
              onChangeText={(text) => handleChange("companyName", text)}
            />

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Annual Income</Text>
              <View style={styles.pickerContainer}>
                {[
                  "₹ 3 to 5 Lakh yearly",
                  "₹ 5 to 7 Lakh yearly", 
                  "₹ 7 to 10 Lakh yearly",
                  "₹ 10 to 15 Lakh yearly",
                  "Above ₹ 15 Lakh yearly"
                ].map((income) => (
                  <TouchableOpacity
                    key={income}
                    style={[
                      styles.pickerOption,
                      formData.income === income && styles.pickerOptionSelected
                    ]}
                    onPress={() => handleChange("income", income)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      formData.income === income && styles.pickerOptionTextSelected
                    ]}>
                      {income}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        );

      // STEP 7: Contact Info & Password
      case 7:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(7)}
            </View>
            <Text style={styles.stepTitle}>Contact & Security</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
            />
            <TextInput
              style={styles.formInput}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={formData.mobile}
              onChangeText={(text) => handleChange("mobile", text)}
            />
            <TextInput
              style={styles.formInput}
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TextInput
              style={styles.formInput}
              placeholder="Confirm Password"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
            />
          </>
        );

      // STEP 8: Final Confirmation
      case 8:
        return (
          <>
            <View style={styles.stepIcon}>
              {renderStepIcon(8)}
            </View>
            <Text style={styles.stepTitle}>Confirm & Submit</Text>
            <Text style={styles.confirmationText}>
              Please review your details and submit your profile.
            </Text>
            
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>
                <Text style={styles.summaryLabel}>Name: </Text>
                {formData.firstName} {formData.lastName}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.summaryLabel}>Email: </Text>
                {formData.email}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.summaryLabel}>Gender: </Text>
                {formData.gender}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.summaryLabel}>Location: </Text>
                {formData.city}, {formData.country}
              </Text>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Create My Profile</Text>
            </TouchableOpacity>
          </>
        );

      default:
        return <Text>Unknown Step</Text>;
    }
  };

  // Success Modal
  const SuccessModal = () => (
    <Modal
      visible={showSuccessModal}
      transparent={true}
      animationType="fade"
      onRequestClose={handleSuccessModalClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.successModal}>
          <View style={styles.successIcon}>
            <Icon name="check-circle" size={50} color="#16a34a" />
          </View>
          
          <Text style={styles.successTitle}>Registration Successful!</Text>
          
          <Text style={styles.successMessage}>
            Your account has been created successfully. Please save your login credentials:
          </Text>

          <View style={styles.credentialsContainer}>
            <View style={styles.credentialItem}>
              <Text style={styles.credentialLabel}>Username:</Text>
              <Text style={styles.credentialValue}>{generatedCredentials?.username}</Text>
            </View>
            
            <View style={styles.credentialItem}>
              <Text style={styles.credentialLabel}>Password:</Text>
              <Text style={styles.credentialValue}>{generatedCredentials?.password}</Text>
            </View>
            
            <View style={styles.credentialItem}>
              <Text style={styles.credentialLabel}>Email:</Text>
              <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
            </View>
          </View>

          <Text style={styles.importantNote}>
            ⚠️ Important: Please save these credentials. You'll need them to login.
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={[styles.modalButton, styles.loginButton]} 
              onPress={handleLoginWithCredentials}
            >
              <Icon name="sign-in-alt" size={16} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.loginButtonText}>Login Now</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.closeButton]} 
              onPress={handleSuccessModalClose}
            >
              <Icon name="times" size={16} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <Modal
      visible={show}
      animationType="slide"
      transparent={true}
      onRequestClose={handleCloseRegister}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={handleCloseRegister}
            >
              <Icon name="times" size={20} color="#333" />
              <Text style={styles.backButtonText}>Close</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formWrapper}>
              {/* Progress Bar */}
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar,
                    { width: `${(step / totalSteps) * 100}%` }
                  ]} 
                />
              </View>

              {/* Step Indicator */}
              <Text style={styles.stepIndicator}>
                Step {step} of {totalSteps}
              </Text>

              {/* Step Content */}
              <View style={styles.stepContent}>
                {renderStep()}
              </View>

              {/* Navigation Buttons */}
              <View style={styles.navButtons}>
                {step > 1 && (
                  <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
                    <Icon name="arrow-left" size={16} color="#18c2b4" />
                    <Text style={styles.backBtnText}>Back</Text>
                  </TouchableOpacity>
                )}
                {step < totalSteps && (
                  <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
                    <Text style={styles.nextBtnText}>Next</Text>
                    <Icon name="arrow-right" size={16} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>

              {/* Already have account link */}
              <View style={styles.loginLinkContainer}>
                <Text style={styles.loginLinkText}>
                  Already have an account?{" "}
                  <Text 
                    style={styles.loginLink} 
                    onPress={onNavigateToLogin}
                  >
                    Login here
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Success Modal */}
      <SuccessModal />
    </Modal>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.95,
    height: height * 0.9,
    maxWidth: 700,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  formWrapper: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 40,
    elevation: 5,
    marginBottom: 20,
  },
  progressBarContainer: {
    width: '100%',
    height: 6,
    backgroundColor: '#e9ecef',
    borderRadius: 3,
    marginBottom: 15,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#18c2b4',
    borderRadius: 3,
  },
  stepIndicator: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  stepIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#eafcff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'center',
  },
  stepContent: {
    minHeight: 300,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  confirmationText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  summaryContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    marginBottom: 30,
  },
  summaryText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 8,
    lineHeight: 20,
  },
  summaryLabel: {
    fontWeight: '600',
    color: '#212529',
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#495057',
    marginBottom: 8,
  },
  formInput: {
    width: '100%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  dobFields: {
    flexDirection: 'row',
    gap: 10,
  },
  smallInput: {
    flex: 1,
  },
  mediumInput: {
    flex: 2,
  },
  optionGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  optionBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  optionBtnSelected: {
    backgroundColor: '#eafcff',
    borderColor: '#18c2b4',
  },
  optionBtnText: {
    color: '#495057',
    fontWeight: '500',
    fontSize: 14,
  },
  optionBtnTextSelected: {
    color: '#18c2b4',
  },
  pickerContainer: {
    gap: 8,
  },
  pickerOption: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  pickerOptionSelected: {
    backgroundColor: '#eafcff',
    borderColor: '#18c2b4',
  },
  pickerOptionText: {
    color: '#495057',
    fontSize: 14,
    textAlign: 'center',
  },
  pickerOptionTextSelected: {
    color: '#18c2b4',
    fontWeight: '600',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backBtnText: {
    color: '#18c2b4',
    fontWeight: '600',
    fontSize: 16,
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#18c2b4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#18c2b4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  nextBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#18c2b4',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#18c2b4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginLinkContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  loginLinkText: {
    color: '#495057',
    fontSize: 14,
    textAlign: 'center',
  },
  loginLink: {
    color: '#18c2b4',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  fadeIn: {
    opacity: 1,
  },
  // Success Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successModal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#16a34a',
    textAlign: 'center',
    marginBottom: 15,
  },
  successMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  credentialsContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
  },
  credentialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
  },
  credentialLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
  credentialValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16a34a',
    backgroundColor: '#f0f9f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  importantNote: {
    fontSize: 12,
    color: '#dc2626',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  loginButton: {
    backgroundColor: '#16a34a',
  },
  closeButton: {
    backgroundColor: '#6b7280',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonIcon: {
    marginRight: 4,
  },
});

export default Register;
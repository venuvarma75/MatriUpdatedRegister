// import React, { useState } from "react";
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
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const Register = ({ 
//   show, 
//   onClose, 
//   onRegistrationComplete, 
//   onNavigateToLogin 
// }) => {
//   const [step, setStep] = useState(1);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [generatedCredentials, setGeneratedCredentials] = useState(null);

//   const [formData, setFormData] = useState({
//     profileFor: "",
//     gender: "",
//     firstName: "",
//     lastName: "",
//     dobDay: "",
//     dobMonth: "",
//     dobYear: "",
//     religion: "Hindu",
//     community: "Telugu",
//     subCommunity: "",
//     country: "India",
//     city: "",
//     maritalStatus: "Never Married",
//     height: "",
//     highestQualification: "B.E / B.Tech",
//     collegeName: "",
//     workWith: "Private Company",
//     workAs: "",
//     companyName: "",
//     income: "₹ 7 to 10 Lakh yearly",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const totalSteps = 8;

//   // Icon configuration for each step
//   const stepIcons = {
//     1: { name: "user-friends", type: "FontAwesome5", color: "#18c2b4" },
//     2: { name: "user", type: "FontAwesome5", color: "#18c2b4" },
//     3: { name: "book-open", type: "FontAwesome5", color: "#18c2b4" },
//     4: { name: "map-marker-alt", type: "FontAwesome5", color: "#18c2b4" },
//     5: { name: "graduation-cap", type: "FontAwesome5", color: "#18c2b4" },
//     6: { name: "briefcase", type: "FontAwesome5", color: "#18c2b4" },
//     7: { name: "user-lock", type: "FontAwesome5", color: "#18c2b4" },
//     8: { name: "ring", type: "FontAwesome5", color: "#18c2b4" }
//   };

//   const handleChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const nextStep = () => {
//     // Basic validation before proceeding
//     if (step === 1 && !formData.profileFor) {
//       Alert.alert("Required", "Please select who this profile is for");
//       return;
//     }
//     if (step === 2 && (!formData.firstName || !formData.lastName)) {
//       Alert.alert("Required", "Please enter your first and last name");
//       return;
//     }
//     if (step === 7 && (!formData.email || !formData.mobile)) {
//       Alert.alert("Required", "Please enter your email and mobile number");
//       return;
//     }
//     if (step === 7 && (!formData.password || !formData.confirmPassword)) {
//       Alert.alert("Required", "Please enter and confirm your password");
//       return;
//     }
//     if (step === 7 && formData.password !== formData.confirmPassword) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }
    
//     if (step < totalSteps) setStep((prev) => prev + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep((prev) => prev - 1);
//   };

//   const generateUsername = (firstName, lastName, email) => {
//     const first = firstName?.toLowerCase() || 'user';
//     const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
//     const randomNum = Math.floor(100 + Math.random() * 900);
//     return `${first}${lastInitial}${randomNum}`;
//   };

//   const handleSubmit = () => {
//     if (!formData.email || !formData.password) {
//       Alert.alert("Error", "Email and password are required");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }

//     const username = generateUsername(formData.firstName, formData.lastName, formData.email);
    
//     setGeneratedCredentials({
//       username: username,
//       password: formData.password,
//       email: formData.email
//     });

//     setShowSuccessModal(true);
//   };

//   const handleSuccessModalClose = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       religion: "Hindu",
//       community: "Telugu",
//       subCommunity: "",
//       country: "India",
//       city: "",
//       maritalStatus: "Never Married",
//       height: "",
//       highestQualification: "B.E / B.Tech",
//       collegeName: "",
//       workWith: "Private Company",
//       workAs: "",
//       companyName: "",
//       income: "₹ 7 to 10 Lakh yearly",
//       email: "",
//       mobile: "",
//       password: "",
//       confirmPassword: ""
//     });
//     setShowSuccessModal(false);
//     onClose();
//   };

//   const handleLoginWithCredentials = () => {
//     const completeFormData = {
//       ...formData,
//       username: generatedCredentials?.username
//     };
    
//     if (onRegistrationComplete) {
//       onRegistrationComplete(completeFormData);
//     }
    
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       religion: "Hindu",
//       community: "Telugu",
//       subCommunity: "",
//       country: "India",
//       city: "",
//       maritalStatus: "Never Married",
//       height: "",
//       highestQualification: "B.E / B.Tech",
//       collegeName: "",
//       workWith: "Private Company",
//       workAs: "",
//       companyName: "",
//       income: "₹ 7 to 10 Lakh yearly",
//       email: "",
//       mobile: "",
//       password: "",
//       confirmPassword: ""
//     });
    
//     setShowSuccessModal(false);
//     onClose();
    
//     if (onNavigateToLogin && generatedCredentials?.email) {
//       onNavigateToLogin(generatedCredentials.email);
//     }
//   };

//   const handleCloseRegister = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//        age:"",
//       religion: "Hindu",
//       caste: "Telugu",
//       subCaste: "",
//       motherTongue:"",
//       country: "India",
//       city: "",
//       maritalStatus: "Never Married",
//       noOfChildren:"",
//       height: "",
//       highestEducation: "B.E / B.Tech",
//       collegeName: "",
//       sector:"",
//       occupation:"",
//       annualIncome:"",
//       workLocation:"",
//        email: "",
//       mobileNumber: "",
//       createPassword: "",
//     role: "user",
//     });
//     onClose();
//   };

//   // Render Icon Component based on type
//   const renderStepIcon = (stepNumber) => {
//     const iconConfig = stepIcons[stepNumber];
//     if (!iconConfig) return null;

//     switch (iconConfig.type) {
//       case "FontAwesome5":
//         return (
//           <Icon 
//             name={iconConfig.name} 
//             size={28} 
//             color={iconConfig.color} 
//           />
//         );
//       case "MaterialIcons":
//         return (
//           <MaterialIcons 
//             name={iconConfig.name} 
//             size={28} 
//             color={iconConfig.color} 
//           />
//         );
//       case "FontAwesome":
//         return (
//           <FontAwesome 
//             name={iconConfig.name} 
//             size={28} 
//             color={iconConfig.color} 
//           />
//         );
//       default:
//         return (
//           <Icon 
//             name={iconConfig.name} 
//             size={28} 
//             color={iconConfig.color} 
//           />
//         );
//     }
//   };

//   // ------------------------ STEP RENDERING ------------------------
//   const renderStep = () => {
//     switch (step) {
//       // STEP 1: Profile For
//       case 1:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(1)}
//             </View>
//             <Text style={styles.stepTitle}>This profile is for</Text>
//             <View style={styles.optionGroup}>
//               {[
//                 "Myself",
//                 "My Son",
//                 "My Daughter",
//                 "My Brother",
//                 "My Sister",
//                 "My Friend",
//                 "My Relative",
//               ].map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={[
//                     styles.optionBtn,
//                     formData.profileFor === option && styles.optionBtnSelected
//                   ]}
//                   onPress={() => {
//                     handleChange("profileFor", option);
//                     if (
//                       option === "Myself" ||
//                       option === "My Friend" ||
//                       option === "My Relative"
//                     )
//                       return;
//                     setTimeout(nextStep, 300);
//                   }}
//                 >
//                   <Text style={[
//                     styles.optionBtnText,
//                     formData.profileFor === option && styles.optionBtnTextSelected
//                   ]}>
//                     {option}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             {(formData.profileFor === "Myself" ||
//               formData.profileFor === "My Friend" ||
//               formData.profileFor === "My Relative") && (
//               <View style={styles.fadeIn}>
//                 <Text style={styles.subTitle}>
//                   {formData.profileFor === "My Friend"
//                     ? "Is your friend Male or Female?"
//                     : formData.profileFor === "My Relative"
//                     ? "Is your relative Male or Female?"
//                     : "Are you Male or Female?"}
//                 </Text>
//                 <View style={styles.optionGroup}>
//                   {["Male", "Female"].map((g) => (
//                     <TouchableOpacity
//                       key={g}
//                       style={[
//                         styles.optionBtn,
//                         formData.gender === g && styles.optionBtnSelected
//                       ]}
//                       onPress={() => {
//                         handleChange("gender", g);
//                         setTimeout(nextStep, 300);
//                       }}
//                     >
//                       <Text style={[
//                         styles.optionBtnText,
//                         formData.gender === g && styles.optionBtnTextSelected
//                       ]}>
//                         {g}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </View>
//             )}
//           </>
//         );

//       // STEP 2: Basic Details
//       case 2:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(2)}
//             </View>
//             <Text style={styles.stepTitle}>Tell us about you</Text>
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
//           </>
//         );

//       // STEP 3: Religion / Community
//       case 3:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(3)}
//             </View>
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

//       // STEP 4: Location
//       case 4:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(4)}
//             </View>
//             <Text style={styles.stepTitle}>Where do you live?</Text>
            
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

//       // STEP 5: Education
//       case 5:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(5)}
//             </View>
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

//       // STEP 6: Career
//       case 6:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(6)}
//             </View>
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

//       // STEP 7: Contact Info & Password
//       case 7:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(7)}
//             </View>
//             <Text style={styles.stepTitle}>Contact & Security</Text>
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
//             <TextInput
//               style={styles.formInput}
//               placeholder="Password"
//               secureTextEntry
//               value={formData.password}
//               onChangeText={(text) => handleChange("password", text)}
//             />
//             <TextInput
//               style={styles.formInput}
//               placeholder="Confirm Password"
//               secureTextEntry
//               value={formData.confirmPassword}
//               onChangeText={(text) => handleChange("confirmPassword", text)}
//             />
//           </>
//         );

//       // STEP 8: Final Confirmation
//       case 8:
//         return (
//           <>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(8)}
//             </View>
//             <Text style={styles.stepTitle}>Confirm & Submit</Text>
//             <Text style={styles.confirmationText}>
//               Please review your details and submit your profile.
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
//                 <Text style={styles.summaryLabel}>Gender: </Text>
//                 {formData.gender}
//               </Text>
//               <Text style={styles.summaryText}>
//                 <Text style={styles.summaryLabel}>Location: </Text>
//                 {formData.city}, {formData.country}
//               </Text>
//             </View>

//             <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//               <Text style={styles.submitBtnText}>Create My Profile</Text>
//             </TouchableOpacity>
//           </>
//         );

//       default:
//         return <Text>Unknown Step</Text>;
//     }
//   };

//   // Success Modal
//   const SuccessModal = () => (
//     <Modal
//       visible={showSuccessModal}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={handleSuccessModalClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.successModal}>
//           <View style={styles.successIcon}>
//             <Icon name="check-circle" size={50} color="#16a34a" />
//           </View>
          
//           <Text style={styles.successTitle}>Registration Successful!</Text>
          
//           <Text style={styles.successMessage}>
//             Your account has been created successfully. Please save your login credentials:
//           </Text>

//           <View style={styles.credentialsContainer}>
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Username:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.username}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Password:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.password}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Email:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
//             </View>
//           </View>

//           <Text style={styles.importantNote}>
//             ⚠️ Important: Please save these credentials. You'll need them to login.
//           </Text>

//           <View style={styles.modalButtons}>
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.loginButton]} 
//               onPress={handleLoginWithCredentials}
//             >
//               <Icon name="sign-in-alt" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.loginButtonText}>Login Now</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.closeButton]} 
//               onPress={handleSuccessModalClose}
//             >
//               <Icon name="times" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <Modal
//       visible={show}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={handleCloseRegister}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Header with Back Button */}
//           <View style={styles.header}>
//             <TouchableOpacity 
//               style={styles.backButton} 
//               onPress={handleCloseRegister}
//             >
//               <Icon name="times" size={20} color="#333" />
//               <Text style={styles.backButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.formWrapper}>
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar,
//                     { width: `${(step / totalSteps) * 100}%` }
//                   ]} 
//                 />
//               </View>

//               {/* Step Indicator */}
//               <Text style={styles.stepIndicator}>
//                 Step {step} of {totalSteps}
//               </Text>

//               {/* Step Content */}
//               <View style={styles.stepContent}>
//                 {renderStep()}
//               </View>

//               {/* Navigation Buttons */}
//               <View style={styles.navButtons}>
//                 {step > 1 && (
//                   <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
//                     <Icon name="arrow-left" size={16} color="#18c2b4" />
//                     <Text style={styles.backBtnText}>Back</Text>
//                   </TouchableOpacity>
//                 )}
//                 {step < totalSteps && (
//                   <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
//                     <Text style={styles.nextBtnText}>Next</Text>
//                     <Icon name="arrow-right" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Already have account link */}
//               <View style={styles.loginLinkContainer}>
//                 <Text style={styles.loginLinkText}>
//                   Already have an account?{" "}
//                   <Text 
//                     style={styles.loginLink} 
//                     onPress={onNavigateToLogin}
//                   >
//                     Login here
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* Success Modal */}
//       <SuccessModal />
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
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
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
//   stepIcon: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#eafcff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     alignSelf: 'center',
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
//   subTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 20,
//     marginTop: 20,
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
//   optionGroup: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//     justifyContent: 'center',
//   },
//   optionBtn: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 25,
//     backgroundColor: '#fff',
//   },
//   optionBtnSelected: {
//     backgroundColor: '#eafcff',
//     borderColor: '#18c2b4',
//   },
//   optionBtnText: {
//     color: '#495057',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   optionBtnTextSelected: {
//     color: '#18c2b4',
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
//   loginLinkContainer: {
//     marginTop: 20,
//     paddingTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//   },
//   loginLinkText: {
//     color: '#495057',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   loginLink: {
//     color: '#18c2b4',
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   fadeIn: {
//     opacity: 1,
//   },
//   // Success Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   successModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     width: '90%',
//     maxWidth: 400,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   successIcon: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#e8f5e8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   successTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   successMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   credentialsContainer: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     marginBottom: 15,
//   },
//   credentialItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 5,
//   },
//   credentialLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   credentialValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     backgroundColor: '#f0f9f0',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   importantNote: {
//     fontSize: 12,
//     color: '#dc2626',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     gap: 10,
//     width: '100%',
//   },
//   modalButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   loginButton: {
//     backgroundColor: '#16a34a',
//   },
//   closeButton: {
//     backgroundColor: '#6b7280',
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   buttonIcon: {
//     marginRight: 4,
//   },
// });

// export default Register;

// import React, { useState } from "react";
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

// const Register = ({ 
//   show, 
//   onClose, 
//   onRegistrationComplete, 
//   onNavigateToLogin 
// }) => {
//   const [step, setStep] = useState(1);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [generatedCredentials, setGeneratedCredentials] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const [formData, setFormData] = useState({
//     profileFor: "",
//     gender: "",
//     firstName: "",
//     lastName: "",
//     dobDay: "",
//     dobMonth: "",
//     dobYear: "",
//     age: "",
//     religion: "",
//     caste: "",
//     subCaste: "",
//     motherTongue: "",
//     country: "",
//     city: "",
//     maritalStatus: "",
//     noOfChildren: "",
//     height: "",
//     highestEducation: "",
//     collegeName: "",
//     sector: "",
//     occupation: "",
//     companyName: "",
//     annualIncome: "",
//     workLocation: "",
//     emailId: "",
//     mobileNumber: "",
//     createPassword: "",
//     confirmPassword: "",
//     role: "user",
//   });

//   const totalSteps = 9;

//   // Icon configuration for each step
//   const stepIcons = {
//     1: { name: "user-friends", color: "#18c2b4" },
//     2: { name: "user", color: "#18c2b4" },
//     3: { name: "book-open", color: "#18c2b4" },
//     4: { name: "map-marker-alt", color: "#18c2b4" },
//     5: { name: "user-check", color: "#18c2b4" },
//     6: { name: "graduation-cap", color: "#18c2b4" },
//     7: { name: "briefcase", color: "#18c2b4" },
//     8: { name: "user-lock", color: "#18c2b4" },
//     9: { name: "ring", color: "#18c2b4" }
//   };

//   const handleChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleBlur = (name) => {
//     setTouched(prev => ({ ...prev, [name]: true }));
//     validateField(name, formData[name]);
//   };

//   const validateField = (name, value) => {
//     let error = "";

//     switch (name) {
//       case "profileFor":
//         if (!value) error = "Select one";
//         break;
//       case "gender":
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !value) {
//           error = "Select gender";
//         }
//         break;
//       case "firstName":
//         if (!value) error = "Required";
//         break;
//       case "lastName":
//         if (!value) error = "Required";
//         break;
//       case "dobDay":
//         if (!value) error = "Required";
//         break;
//       case "dobMonth":
//         if (!value) error = "Required";
//         break;
//       case "dobYear":
//         if (!value) error = "Required";
//         break;
//       case "religion":
//         if (!value) error = "Required";
//         break;
//       case "caste":
//         if (!value) error = "Required";
//         break;
//       case "country":
//         if (!value) error = "Required";
//         break;
//       case "city":
//         if (!value) error = "Required";
//         break;
//       case "maritalStatus":
//         if (!value) error = "Required";
//         break;
//       case "height":
//         if (!value) error = "Required";
//         break;
//       case "highestEducation":
//         if (!value) error = "Required";
//         break;
//       case "collegeName":
//         if (!value) error = "Required";
//         break;
//       case "sector":
//         if (!value) error = "Required";
//         break;
//       case "occupation":
//         if (!value) error = "Required";
//         break;
//       case "companyName":
//         if (!value) error = "Required";
//         break;
//       case "emailId":
//         if (!value) {
//           error = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email";
//         }
//         break;
//       case "mobileNumber":
//         if (!value) {
//           error = "Required";
//         } else if (!/^\d{10}$/.test(value)) {
//           error = "Enter 10-digit mobile";
//         }
//         break;
//       case "createPassword":
//         if (!value) error = "Required";
//         break;
//       case "confirmPassword":
//         if (!value) {
//           error = "Required";
//         } else if (value !== formData.createPassword) {
//           error = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     if (error) {
//       setErrors(prev => ({ ...prev, [name]: error }));
//     } else {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateStep = (step) => {
//     const stepErrors = {};
    
//     switch (step) {
//       case 1:
//         if (!formData.profileFor) stepErrors.profileFor = "Select one";
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !formData.gender) {
//           stepErrors.gender = "Select gender";
//         }
//         break;
//       case 2:
//         if (!formData.firstName) stepErrors.firstName = "Required";
//         if (!formData.lastName) stepErrors.lastName = "Required";
//         if (!formData.dobDay) stepErrors.dobDay = "Required";
//         if (!formData.dobMonth) stepErrors.dobMonth = "Required";
//         if (!formData.dobYear) stepErrors.dobYear = "Required";
//         break;
//       case 3:
//         if (!formData.religion) stepErrors.religion = "Required";
//         if (!formData.caste) stepErrors.caste = "Required";
//         break;
//       case 4:
//         if (!formData.country) stepErrors.country = "Required";
//         if (!formData.city) stepErrors.city = "Required";
//         break;
//       case 5:
//         if (!formData.maritalStatus) stepErrors.maritalStatus = "Required";
//         if (!formData.height) stepErrors.height = "Required";
//         break;
//       case 6:
//         if (!formData.highestEducation) stepErrors.highestEducation = "Required";
//         if (!formData.collegeName) stepErrors.collegeName = "Required";
//         break;
//       case 7:
//         if (!formData.sector) stepErrors.sector = "Required";
//         if (!formData.occupation) stepErrors.occupation = "Required";
//         if (!formData.companyName) stepErrors.companyName = "Required";
//         break;
//       case 8:
//         if (!formData.emailId) {
//           stepErrors.emailId = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
//           stepErrors.emailId = "Invalid email";
//         }
//         if (!formData.mobileNumber) {
//           stepErrors.mobileNumber = "Required";
//         } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//           stepErrors.mobileNumber = "Enter 10-digit mobile";
//         }
//         if (!formData.createPassword) stepErrors.createPassword = "Required";
//         if (!formData.confirmPassword) {
//           stepErrors.confirmPassword = "Required";
//         } else if (formData.confirmPassword !== formData.createPassword) {
//           stepErrors.confirmPassword = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     return stepErrors;
//   };

//   const nextStep = () => {
//     const stepErrors = validateStep(step);
    
//     if (Object.keys(stepErrors).length > 0) {
//       setErrors(stepErrors);
//       // Mark all fields in current step as touched
//       const stepFields = Object.keys(stepErrors);
//       const touchedFields = {};
//       stepFields.forEach(field => {
//         touchedFields[field] = true;
//       });
//       setTouched(prev => ({ ...prev, ...touchedFields }));
//       return;
//     }

//     if (step < totalSteps) {
//       setStep(step + 1);
//       setErrors({});
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//       setErrors({});
//     }
//   };

//   const generateUsername = (firstName, lastName, email) => {
//     const first = firstName?.toLowerCase() || 'user';
//     const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
//     const randomNum = Math.floor(100 + Math.random() * 900);
//     return `${first}${lastInitial}${randomNum}`;
//   };

//   const handleSubmit = () => {
//     const finalErrors = validateStep(8); // Validate all fields before submit
//     if (Object.keys(finalErrors).length > 0) {
//       setErrors(finalErrors);
//       Alert.alert("Validation Error", "Please fix all errors before submitting.");
//       return;
//     }

//     const dateOfBirthStr = `${formData.dobYear}-${formData.dobMonth.padStart(2, '0')}-${formData.dobDay.padStart(2, '0')}`;
//     const username = generateUsername(formData.firstName, formData.lastName, formData.emailId);
    
//     const completeFormData = {
//       ...formData,
//       dateOfBirth: dateOfBirthStr,
//       username: username
//     };

//     setGeneratedCredentials({
//       username: username,
//       password: formData.createPassword,
//       email: formData.emailId
//     });

//     setShowSuccessModal(true);
    
//     if (onRegistrationComplete) {
//       onRegistrationComplete(completeFormData);
//     }
//   };

//   const handleSuccessModalClose = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setShowSuccessModal(false);
//     onClose();
//   };

//   const handleLoginWithCredentials = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setShowSuccessModal(false);
//     onClose();
    
//     if (onNavigateToLogin && generatedCredentials?.email) {
//       onNavigateToLogin(generatedCredentials.email);
//     }
//   };

//   const handleCloseRegister = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     onClose();
//   };

//   const renderStepIcon = (stepNumber) => {
//     const iconConfig = stepIcons[stepNumber];
//     if (!iconConfig) return null;

//     return (
//       <Icon 
//         name={iconConfig.name} 
//         size={28} 
//         color={iconConfig.color} 
//       />
//     );
//   };

//   const renderOptionButtons = (name, options, selectedValue, onSelect) => (
//     <View style={styles.optionGroup}>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option}
//           style={[
//             styles.optionBtn,
//             selectedValue === option && styles.optionBtnSelected
//           ]}
//           onPress={() => onSelect(option)}
//         >
//           <Text style={selectedValue === option ? styles.optionBtnTextSelected : styles.optionBtnText}>
//             {option}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const showPicker = (title, options, onSelect) => {
//     Alert.alert(
//       title,
//       "",
//       options.map(option => ({
//         text: option,
//         onPress: () => onSelect(option)
//       }))
//     );
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(1)}
//             </View>
//             <Text style={styles.stepTitle}>This profile is for</Text>

//             {renderOptionButtons(
//               'profileFor',
//               ['Myself', 'My Son', 'My Daughter', 'My Brother', 'My Sister', 'My Friend', 'My Relative'],
//               formData.profileFor,
//               (option) => {
//                 handleChange("profileFor", option);
//                 if (option === 'My Son' || option === 'My Brother') {
//                   handleChange("gender", "Male");
//                 } else if (option === 'My Daughter' || option === 'My Sister') {
//                   handleChange("gender", "Female");
//                 } else {
//                   handleChange("gender", "");
//                 }
//               }
//             )}

//             {errors.profileFor && touched.profileFor && (
//               <Text style={styles.errorText}>{errors.profileFor}</Text>
//             )}

//             {['Myself', 'My Friend', 'My Relative'].includes(formData.profileFor) && (
//               <>
//                 <Text style={styles.subTitle}>
//                   {formData.profileFor === 'My Friend'
//                     ? 'Is your friend Male or Female?'
//                     : formData.profileFor === 'My Relative'
//                     ? 'Is your relative Male or Female?'
//                     : 'Are you Male or Female?'}
//                 </Text>

//                 {renderOptionButtons(
//                   'gender',
//                   ['Male', 'Female'],
//                   formData.gender,
//                   (gender) => handleChange("gender", gender)
//                 )}

//                 {errors.gender && touched.gender && (
//                   <Text style={styles.errorText}>{errors.gender}</Text>
//                 )}
//               </>
//             )}
//           </View>
//         );

//       case 2:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(2)}
//             </View>
//             <Text style={styles.stepTitle}>Tell us about you</Text>

//             <TextInput
//               style={[styles.formInput, errors.firstName && touched.firstName && styles.inputError]}
//               placeholder="First Name"
//               value={formData.firstName}
//               onChangeText={(text) => handleChange("firstName", text)}
//               onBlur={() => handleBlur("firstName")}
//             />
//             {errors.firstName && touched.firstName && (
//               <Text style={styles.errorText}>{errors.firstName}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.lastName && touched.lastName && styles.inputError]}
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChangeText={(text) => handleChange("lastName", text)}
//               onBlur={() => handleBlur("lastName")}
//             />
//             {errors.lastName && touched.lastName && (
//               <Text style={styles.errorText}>{errors.lastName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your Age"
//               value={formData.age}
//               onChangeText={(text) => handleChange("age", text)}
//               keyboardType="numeric"
//             />

//             <Text style={styles.formLabel}>Date of Birth</Text>
//             <View style={styles.dobFields}>
//               <TextInput
//                 style={[styles.dobInput, errors.dobDay && touched.dobDay && styles.inputError]}
//                 placeholder="DD"
//                 value={formData.dobDay}
//                 onChangeText={(text) => handleChange("dobDay", text)}
//                 onBlur={() => handleBlur("dobDay")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobMonth && touched.dobMonth && styles.inputError]}
//                 placeholder="MM"
//                 value={formData.dobMonth}
//                 onChangeText={(text) => handleChange("dobMonth", text)}
//                 onBlur={() => handleBlur("dobMonth")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobYear && touched.dobYear && styles.inputError]}
//                 placeholder="YYYY"
//                 value={formData.dobYear}
//                 onChangeText={(text) => handleChange("dobYear", text)}
//                 onBlur={() => handleBlur("dobYear")}
//                 keyboardType="number-pad"
//                 maxLength={4}
//               />
//             </View>
//             {(errors.dobDay && touched.dobDay) || (errors.dobMonth && touched.dobMonth) || (errors.dobYear && touched.dobYear) ? (
//               <Text style={styles.errorText}>Date of birth is required</Text>
//             ) : null}
//           </View>
//         );

//       case 3:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(3)}
//             </View>
//             <Text style={styles.stepTitle}>Religion & Community</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.religion && touched.religion && styles.inputError]}
//               onPress={() => showPicker("Select Religion", ["Christian", "Hindu", "Muslim", "Sikh"], 
//                 (religion) => handleChange("religion", religion))}
//             >
//               <Text style={formData.religion ? styles.selectText : styles.placeholderText}>
//                 {formData.religion || "Select your Religion"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.religion && touched.religion && (
//               <Text style={styles.errorText}>{errors.religion}</Text>
//             )}

//             <TouchableOpacity
//               style={styles.select}
//               onPress={() => showPicker("Select Mother Tongue", 
//                 ["English", "Hindi", "Telugu", "Malayali", "Marathi", "Punjabi", "Tamil", "Kannada"],
//                 (tongue) => handleChange("motherTongue", tongue))}
//             >
//               <Text style={formData.motherTongue ? styles.selectText : styles.placeholderText}>
//                 {formData.motherTongue || "Select your Mother Tongue"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.select, errors.caste && touched.caste && styles.inputError]}
//               onPress={() => showPicker("Select Caste", ["BC", "OC", "SC & ST", "OBC"],
//                 (caste) => handleChange("caste", caste))}
//             >
//               <Text style={formData.caste ? styles.selectText : styles.placeholderText}>
//                 {formData.caste || "Select your Caste"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.caste && touched.caste && (
//               <Text style={styles.errorText}>{errors.caste}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Sub-community (optional)"
//               value={formData.subCaste}
//               onChangeText={(text) => handleChange("subCaste", text)}
//             />
//           </View>
//         );

//       case 4:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(4)}
//             </View>
//             <Text style={styles.stepTitle}>Where do you live?</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.country && touched.country && styles.inputError]}
//               onPress={() => showPicker("Select Country", ["India", "USA", "UK", "Canada", "Australia"],
//                 (country) => handleChange("country", country))}
//             >
//               <Text style={formData.country ? styles.selectText : styles.placeholderText}>
//                 {formData.country || "Select your Country"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.country && touched.country && (
//               <Text style={styles.errorText}>{errors.country}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.city && touched.city && styles.inputError]}
//               placeholder="City"
//               value={formData.city}
//               onChangeText={(text) => handleChange("city", text)}
//               onBlur={() => handleBlur("city")}
//             />
//             {errors.city && touched.city && (
//               <Text style={styles.errorText}>{errors.city}</Text>
//             )}
//           </View>
//         );

//       case 5:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(5)}
//             </View>
//             <Text style={styles.stepTitle}>Marital Status & Height</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.maritalStatus && touched.maritalStatus && styles.inputError]}
//               onPress={() => showPicker("Select Marital Status", ["Single", "Divorced", "Widowed"],
//                 (status) => handleChange("maritalStatus", status))}
//             >
//               <Text style={formData.maritalStatus ? styles.selectText : styles.placeholderText}>
//                 {formData.maritalStatus || "Select your Marital Status"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.maritalStatus && touched.maritalStatus && (
//               <Text style={styles.errorText}>{errors.maritalStatus}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Number Of Children (Optional)"
//               value={formData.noOfChildren}
//               onChangeText={(text) => handleChange("noOfChildren", text)}
//               keyboardType="numeric"
//             />

//             <TouchableOpacity
//               style={[styles.select, errors.height && touched.height && styles.inputError]}
//               onPress={() => showPicker("Select Height", [
//                 "4 ft 5 in (134 cm)",
//                 "5 ft 0 in (152 cm)", 
//                 "5 ft 5 in (165 cm)",
//                 "6 ft 0 in (183 cm)",
//                 "6 ft 5 in (196 cm)"
//               ], (height) => handleChange("height", height))}
//             >
//               <Text style={formData.height ? styles.selectText : styles.placeholderText}>
//                 {formData.height || "Select your Height"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.height && touched.height && (
//               <Text style={styles.errorText}>{errors.height}</Text>
//             )}
//           </View>
//         );

//       case 6:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(6)}
//             </View>
//             <Text style={styles.stepTitle}>Education</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.highestEducation && touched.highestEducation && styles.inputError]}
//               onPress={() => showPicker("Select Highest Qualification", [
//                 "B.E / B.Tech", "Degree", "Intermediate", "M.E / M.Tech", 
//                 "MBA", "PhD", "Tenth"
//               ], (education) => handleChange("highestEducation", education))}
//             >
//               <Text style={formData.highestEducation ? styles.selectText : styles.placeholderText}>
//                 {formData.highestEducation || "Select your higher Qualification"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.highestEducation && touched.highestEducation && (
//               <Text style={styles.errorText}>{errors.highestEducation}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.collegeName && touched.collegeName && styles.inputError]}
//               placeholder="College / University Name"
//               value={formData.collegeName}
//               onChangeText={(text) => handleChange("collegeName", text)}
//               onBlur={() => handleBlur("collegeName")}
//             />
//             {errors.collegeName && touched.collegeName && (
//               <Text style={styles.errorText}>{errors.collegeName}</Text>
//             )}
//           </View>
//         );

//       case 7:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(7)}
//             </View>
//             <Text style={styles.stepTitle}>Career Details</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.sector && touched.sector && styles.inputError]}
//               onPress={() => showPicker("Select Sector", ["Business", "Government", "Private", "Self Employed", "Not Working"],
//                 (sector) => handleChange("sector", sector))}
//             >
//               <Text style={formData.sector ? styles.selectText : styles.placeholderText}>
//                 {formData.sector || "Select your sector"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.sector && touched.sector && (
//               <Text style={styles.errorText}>{errors.sector}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.occupation && touched.occupation && styles.inputError]}
//               placeholder="Your Profession"
//               value={formData.occupation}
//               onChangeText={(text) => handleChange("occupation", text)}
//               onBlur={() => handleBlur("occupation")}
//             />
//             {errors.occupation && touched.occupation && (
//               <Text style={styles.errorText}>{errors.occupation}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.companyName && touched.companyName && styles.inputError]}
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChangeText={(text) => handleChange("companyName", text)}
//               onBlur={() => handleBlur("companyName")}
//             />
//             {errors.companyName && touched.companyName && (
//               <Text style={styles.errorText}>{errors.companyName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your working Location"
//               value={formData.workLocation}
//               onChangeText={(text) => handleChange("workLocation", text)}
//             />

//             <TouchableOpacity
//               style={styles.select}
//               onPress={() => showPicker("Select Annual Income", [
//                 "Below ₹ 1 Lakh yearly",
//                 "₹ 1 to 3 Lakh yearly",
//                 "₹ 3 to 5 Lakh yearly",
//                 "₹ 5 to 7 Lakh yearly",
//                 "₹ 7 to 10 Lakh yearly",
//                 "₹ 10 to 15 Lakh yearly",
//                 "Above ₹ 15 Lakh yearly"
//               ], (income) => handleChange("annualIncome", income))}
//             >
//               <Text style={formData.annualIncome ? styles.selectText : styles.placeholderText}>
//                 {formData.annualIncome || "Select your yearly Income"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//           </View>
//         );

//       case 8:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(8)}
//             </View>
//             <Text style={styles.stepTitle}>Contact Information</Text>

//             <TextInput
//               style={[styles.formInput, errors.emailId && touched.emailId && styles.inputError]}
//               placeholder="Email Address"
//               value={formData.emailId}
//               onChangeText={(text) => handleChange("emailId", text)}
//               onBlur={() => handleBlur("emailId")}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             {errors.emailId && touched.emailId && (
//               <Text style={styles.errorText}>{errors.emailId}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.mobileNumber && touched.mobileNumber && styles.inputError]}
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChangeText={(text) => handleChange("mobileNumber", text)}
//               onBlur={() => handleBlur("mobileNumber")}
//               keyboardType="phone-pad"
//               maxLength={10}
//             />
//             {errors.mobileNumber && touched.mobileNumber && (
//               <Text style={styles.errorText}>{errors.mobileNumber}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.createPassword && touched.createPassword && styles.inputError]}
//               placeholder="Create Password"
//               value={formData.createPassword}
//               onChangeText={(text) => handleChange("createPassword", text)}
//               onBlur={() => handleBlur("createPassword")}
//               secureTextEntry
//             />
//             {errors.createPassword && touched.createPassword && (
//               <Text style={styles.errorText}>{errors.createPassword}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.confirmPassword && touched.confirmPassword && styles.inputError]}
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChangeText={(text) => handleChange("confirmPassword", text)}
//               onBlur={() => handleBlur("confirmPassword")}
//               secureTextEntry
//             />
//             {errors.confirmPassword && touched.confirmPassword && (
//               <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//             )}
//           </View>
//         );

//       case 9:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(9)}
//             </View>
//             <Text style={styles.stepTitle}>Confirm & Submit</Text>
//             <Text style={styles.confirmationText}>
//               Please review your details and submit your profile.
//             </Text>

//             <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//               <Text style={styles.submitBtnText}>Create My Profile</Text>
//             </TouchableOpacity>
//           </View>
//         );

//       default:
//         return null;
//     }
//   };

//   // Success Modal
//   const SuccessModal = () => (
//     <Modal
//       visible={showSuccessModal}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={handleSuccessModalClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.successModal}>
//           <View style={styles.successIcon}>
//             <Icon name="check-circle" size={50} color="#16a34a" />
//           </View>
          
//           <Text style={styles.successTitle}>Registration Successful!</Text>
          
//           <Text style={styles.successMessage}>
//             Your account has been created successfully. Please save your login credentials:
//           </Text>

//           <View style={styles.credentialsContainer}>
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Username:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.username}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Password:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.password}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Email:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
//             </View>
//           </View>

//           <Text style={styles.importantNote}>
//             ⚠️ Important: Please save these credentials. You'll need them to login.
//           </Text>

//           <View style={styles.modalButtons}>
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.loginButton]} 
//               onPress={handleLoginWithCredentials}
//             >
//               <Icon name="sign-in-alt" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.loginButtonText}>Login Now</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.closeButton]} 
//               onPress={handleSuccessModalClose}
//             >
//               <Icon name="times" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <Modal
//       visible={show}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={handleCloseRegister}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Header with Back Button */}
//           <View style={styles.header}>
//             <TouchableOpacity 
//               style={styles.backButton} 
//               onPress={handleCloseRegister}
//             >
//               <Icon name="times" size={20} color="#333" />
//               <Text style={styles.backButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.formWrapper}>
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar,
//                     { width: `${(step / totalSteps) * 100}%` }
//                   ]} 
//                 />
//               </View>

//               {/* Step Indicator */}
//               <Text style={styles.stepIndicator}>
//                 Step {step} of {totalSteps}
//               </Text>

//               {/* Step Content */}
//               <View style={styles.stepContent}>
//                 {renderStep()}
//               </View>

//               {/* Navigation Buttons */}
//               <View style={styles.navButtons}>
//                 {step > 1 && (
//                   <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
//                     <Icon name="arrow-left" size={16} color="#18c2b4" />
//                     <Text style={styles.backBtnText}>Back</Text>
//                   </TouchableOpacity>
//                 )}
//                 {step < totalSteps && (
//                   <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
//                     <Text style={styles.nextBtnText}>Next</Text>
//                     <Icon name="arrow-right" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Already have account link */}
//               <View style={styles.loginLinkContainer}>
//                 <Text style={styles.loginLinkText}>
//                   Already have an account?{" "}
//                   <Text 
//                     style={styles.loginLink} 
//                     onPress={onNavigateToLogin}
//                   >
//                     Login here
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* Success Modal */}
//       <SuccessModal />
//     </Modal>
//   );
// };

// // Styles remain the same as in your previous code
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
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
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
//   stepIcon: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#eafcff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     alignSelf: 'center',
//   },
//   stepContent: {
//     minHeight: 300,
//   },
//   stepContainer: {
//     alignItems: 'center',
//   },
//   stepTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   subTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   confirmationText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   formGroup: {
//     marginBottom: 15,
//   },
//   formLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginBottom: 8,
//     alignSelf: 'flex-start',
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
//   inputError: {
//     borderColor: '#dc3545',
//   },
//   dobFields: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 15,
//   },
//   dobInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     padding: 14,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   select: {
//     width: '100%',
//     padding: 14,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   selectText: {
//     fontSize: 16,
//     color: '#495057',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#6c757d',
//   },
//   optionGroup: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   optionBtn: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 25,
//     backgroundColor: '#fff',
//   },
//   optionBtnSelected: {
//     backgroundColor: '#eafcff',
//     borderColor: '#18c2b4',
//   },
//   optionBtnText: {
//     color: '#495057',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   optionBtnTextSelected: {
//     color: '#18c2b4',
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 14,
//     marginBottom: 10,
//     alignSelf: 'flex-start',
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
//   loginLinkContainer: {
//     marginTop: 20,
//     paddingTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//   },
//   loginLinkText: {
//     color: '#495057',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   loginLink: {
//     color: '#18c2b4',
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   // Success Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   successModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     width: '90%',
//     maxWidth: 400,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   successIcon: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#e8f5e8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   successTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   successMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   credentialsContainer: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     marginBottom: 15,
//   },
//   credentialItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 5,
//   },
//   credentialLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   credentialValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     backgroundColor: '#f0f9f0',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   importantNote: {
//     fontSize: 12,
//     color: '#dc2626',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     gap: 10,
//     width: '100%',
//   },
//   modalButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   loginButton: {
//     backgroundColor: '#16a34a',
//   },
//   closeButton: {
//     backgroundColor: '#6b7280',
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   buttonIcon: {
//     marginRight: 4,
//   },
// });

// export default Register;
























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

// const Register = ({ 
//   show, 
//   onClose, 
//   onRegistrationComplete, 
//   onNavigateToLogin 
// }) => {
//   const [step, setStep] = useState(1);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [generatedCredentials, setGeneratedCredentials] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [profileProgress, setProfileProgress] = useState(0);

//   const [formData, setFormData] = useState({
//     profileFor: "",
//     gender: "",
//     firstName: "",
//     lastName: "",
//     dobDay: "",
//     dobMonth: "",
//     dobYear: "",
//     age: "",
//     religion: "",
//     caste: "",
//     subCaste: "",
//     motherTongue: "",
//     country: "",
//     city: "",
//     maritalStatus: "",
//     noOfChildren: "",
//     height: "",
//     highestEducation: "",
//     collegeName: "",
//     sector: "",
//     occupation: "",
//     companyName: "",
//     annualIncome: "",
//     workLocation: "",
//     emailId: "",
//     mobileNumber: "",
//     createPassword: "",
//     confirmPassword: "",
//     role: "user",
//   });

//   const totalSteps = 9;

//   // Icon configuration for each step
//   const stepIcons = {
//     1: { name: "user-friends", color: "#18c2b4" },
//     2: { name: "user", color: "#18c2b4" },
//     3: { name: "book-open", color: "#18c2b4" },
//     4: { name: "map-marker-alt", color: "#18c2b4" },
//     5: { name: "user-check", color: "#18c2b4" },
//     6: { name: "graduation-cap", color: "#18c2b4" },
//     7: { name: "briefcase", color: "#18c2b4" },
//     8: { name: "user-lock", color: "#18c2b4" },
//     9: { name: "ring", color: "#18c2b4" }
//   };

//   // Calculate profile completion progress
//   useEffect(() => {
//     calculateProgress();
//   }, [formData]);

//   const calculateProgress = () => {
//     const requiredFields = [
//       'profileFor', 'firstName', 'lastName', 'dobDay', 'dobMonth', 'dobYear',
//       'religion', 'caste', 'country', 'city', 'maritalStatus', 'height',
//       'highestEducation', 'collegeName', 'sector', 'occupation', 'companyName',
//       'emailId', 'mobileNumber', 'createPassword', 'confirmPassword'
//     ];

//     let filledFields = 0;
//     requiredFields.forEach(field => {
//       if (formData[field] && formData[field].toString().trim() !== '') {
//         filledFields++;
//       }
//     });

//     const progress = Math.round((filledFields / requiredFields.length) * 100);
//     setProfileProgress(progress);
//   };

//   const handleChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleBlur = (name) => {
//     setTouched(prev => ({ ...prev, [name]: true }));
//     validateField(name, formData[name]);
//   };

//   const validateField = (name, value) => {
//     let error = "";

//     switch (name) {
//       case "profileFor":
//         if (!value) error = "Select one";
//         break;
//       case "gender":
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !value) {
//           error = "Select gender";
//         }
//         break;
//       case "firstName":
//         if (!value) error = "Required";
//         break;
//       case "lastName":
//         if (!value) error = "Required";
//         break;
//       case "dobDay":
//         if (!value) error = "Required";
//         break;
//       case "dobMonth":
//         if (!value) error = "Required";
//         break;
//       case "dobYear":
//         if (!value) error = "Required";
//         break;
//       case "religion":
//         if (!value) error = "Required";
//         break;
//       case "caste":
//         if (!value) error = "Required";
//         break;
//       case "country":
//         if (!value) error = "Required";
//         break;
//       case "city":
//         if (!value) error = "Required";
//         break;
//       case "maritalStatus":
//         if (!value) error = "Required";
//         break;
//       case "height":
//         if (!value) error = "Required";
//         break;
//       case "highestEducation":
//         if (!value) error = "Required";
//         break;
//       case "collegeName":
//         if (!value) error = "Required";
//         break;
//       case "sector":
//         if (!value) error = "Required";
//         break;
//       case "occupation":
//         if (!value) error = "Required";
//         break;
//       case "companyName":
//         if (!value) error = "Required";
//         break;
//       case "emailId":
//         if (!value) {
//           error = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email";
//         }
//         break;
//       case "mobileNumber":
//         if (!value) {
//           error = "Required";
//         } else if (!/^\d{10}$/.test(value)) {
//           error = "Enter 10-digit mobile";
//         }
//         break;
//       case "createPassword":
//         if (!value) error = "Required";
//         break;
//       case "confirmPassword":
//         if (!value) {
//           error = "Required";
//         } else if (value !== formData.createPassword) {
//           error = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     if (error) {
//       setErrors(prev => ({ ...prev, [name]: error }));
//     } else {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateStep = (step) => {
//     const stepErrors = {};
    
//     switch (step) {
//       case 1:
//         if (!formData.profileFor) stepErrors.profileFor = "Select one";
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !formData.gender) {
//           stepErrors.gender = "Select gender";
//         }
//         break;
//       case 2:
//         if (!formData.firstName) stepErrors.firstName = "Required";
//         if (!formData.lastName) stepErrors.lastName = "Required";
//         if (!formData.dobDay) stepErrors.dobDay = "Required";
//         if (!formData.dobMonth) stepErrors.dobMonth = "Required";
//         if (!formData.dobYear) stepErrors.dobYear = "Required";
//         break;
//       case 3:
//         if (!formData.religion) stepErrors.religion = "Required";
//         if (!formData.caste) stepErrors.caste = "Required";
//         break;
//       case 4:
//         if (!formData.country) stepErrors.country = "Required";
//         if (!formData.city) stepErrors.city = "Required";
//         break;
//       case 5:
//         if (!formData.maritalStatus) stepErrors.maritalStatus = "Required";
//         if (!formData.height) stepErrors.height = "Required";
//         break;
//       case 6:
//         if (!formData.highestEducation) stepErrors.highestEducation = "Required";
//         if (!formData.collegeName) stepErrors.collegeName = "Required";
//         break;
//       case 7:
//         if (!formData.sector) stepErrors.sector = "Required";
//         if (!formData.occupation) stepErrors.occupation = "Required";
//         if (!formData.companyName) stepErrors.companyName = "Required";
//         break;
//       case 8:
//         if (!formData.emailId) {
//           stepErrors.emailId = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
//           stepErrors.emailId = "Invalid email";
//         }
//         if (!formData.mobileNumber) {
//           stepErrors.mobileNumber = "Required";
//         } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//           stepErrors.mobileNumber = "Enter 10-digit mobile";
//         }
//         if (!formData.createPassword) stepErrors.createPassword = "Required";
//         if (!formData.confirmPassword) {
//           stepErrors.confirmPassword = "Required";
//         } else if (formData.confirmPassword !== formData.createPassword) {
//           stepErrors.confirmPassword = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     return stepErrors;
//   };

//   const nextStep = () => {
//     const stepErrors = validateStep(step);
    
//     if (Object.keys(stepErrors).length > 0) {
//       setErrors(stepErrors);
//       // Mark all fields in current step as touched
//       const stepFields = Object.keys(stepErrors);
//       const touchedFields = {};
//       stepFields.forEach(field => {
//         touchedFields[field] = true;
//       });
//       setTouched(prev => ({ ...prev, ...touchedFields }));
//       return;
//     }

//     if (step < totalSteps) {
//       setStep(step + 1);
//       setErrors({});
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//       setErrors({});
//     }
//   };

//   const generateUsername = (firstName, lastName, email) => {
//     const first = firstName?.toLowerCase() || 'user';
//     const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
//     const randomNum = Math.floor(100 + Math.random() * 900);
//     return `${first}${lastInitial}${randomNum}`;
//   };

//   const handleSubmit = () => {
//     const finalErrors = validateStep(8); // Validate all fields before submit
//     if (Object.keys(finalErrors).length > 0) {
//       setErrors(finalErrors);
//       Alert.alert("Validation Error", "Please fix all errors before submitting.");
//       return;
//     }

//     const dateOfBirthStr = `${formData.dobYear}-${formData.dobMonth.padStart(2, '0')}-${formData.dobDay.padStart(2, '0')}`;
//     const username = generateUsername(formData.firstName, formData.lastName, formData.emailId);
    
//     const completeFormData = {
//       ...formData,
//       dateOfBirth: dateOfBirthStr,
//       username: username
//     };

//     setGeneratedCredentials({
//       username: username,
//       password: formData.createPassword,
//       email: formData.emailId
//     });

//     setShowSuccessModal(true);
    
//     if (onRegistrationComplete) {
//       onRegistrationComplete(completeFormData);
//     }
//   };

//   const handleSuccessModalClose = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//     setShowSuccessModal(false);
//     onClose();
//   };

//   const handleLoginWithCredentials = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//     setShowSuccessModal(false);
//     onClose();
    
//     if (onNavigateToLogin && generatedCredentials?.email) {
//       onNavigateToLogin(generatedCredentials.email);
//     }
//   };

//   const handleCloseRegister = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//     onClose();
//   };

//   const renderStepIcon = (stepNumber) => {
//     const iconConfig = stepIcons[stepNumber];
//     if (!iconConfig) return null;

//     return (
//       <Icon 
//         name={iconConfig.name} 
//         size={28} 
//         color={iconConfig.color} 
//       />
//     );
//   };

//   const renderOptionButtons = (name, options, selectedValue, onSelect) => (
//     <View style={styles.optionGroup}>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option}
//           style={[
//             styles.optionBtn,
//             selectedValue === option && styles.optionBtnSelected
//           ]}
//           onPress={() => onSelect(option)}
//         >
//           <Text style={selectedValue === option ? styles.optionBtnTextSelected : styles.optionBtnText}>
//             {option}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const showPicker = (title, options, onSelect) => {
//     Alert.alert(
//       title,
//       "",
//       options.map(option => ({
//         text: option,
//         onPress: () => onSelect(option)
//       }))
//     );
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(1)}
//             </View>
//             <Text style={styles.stepTitle}>This profile is for</Text>

//             {renderOptionButtons(
//               'profileFor',
//               ['Myself', 'My Son', 'My Daughter', 'My Brother', 'My Sister', 'My Friend', 'My Relative'],
//               formData.profileFor,
//               (option) => {
//                 handleChange("profileFor", option);
//                 if (option === 'My Son' || option === 'My Brother') {
//                   handleChange("gender", "Male");
//                 } else if (option === 'My Daughter' || option === 'My Sister') {
//                   handleChange("gender", "Female");
//                 } else {
//                   handleChange("gender", "");
//                 }
//               }
//             )}

//             {errors.profileFor && touched.profileFor && (
//               <Text style={styles.errorText}>{errors.profileFor}</Text>
//             )}

//             {['Myself', 'My Friend', 'My Relative'].includes(formData.profileFor) && (
//               <>
//                 <Text style={styles.subTitle}>
//                   {formData.profileFor === 'My Friend'
//                     ? 'Is your friend Male or Female?'
//                     : formData.profileFor === 'My Relative'
//                     ? 'Is your relative Male or Female?'
//                     : 'Are you Male or Female?'}
//                 </Text>

//                 {renderOptionButtons(
//                   'gender',
//                   ['Male', 'Female'],
//                   formData.gender,
//                   (gender) => handleChange("gender", gender)
//                 )}

//                 {errors.gender && touched.gender && (
//                   <Text style={styles.errorText}>{errors.gender}</Text>
//                 )}
//               </>
//             )}
//           </View>
//         );

//       case 2:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(2)}
//             </View>
//             <Text style={styles.stepTitle}>Tell us about you</Text>

//             <TextInput
//               style={[styles.formInput, errors.firstName && touched.firstName && styles.inputError]}
//               placeholder="First Name"
//               value={formData.firstName}
//               onChangeText={(text) => handleChange("firstName", text)}
//               onBlur={() => handleBlur("firstName")}
//             />
//             {errors.firstName && touched.firstName && (
//               <Text style={styles.errorText}>{errors.firstName}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.lastName && touched.lastName && styles.inputError]}
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChangeText={(text) => handleChange("lastName", text)}
//               onBlur={() => handleBlur("lastName")}
//             />
//             {errors.lastName && touched.lastName && (
//               <Text style={styles.errorText}>{errors.lastName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your Age"
//               value={formData.age}
//               onChangeText={(text) => handleChange("age", text)}
//               keyboardType="numeric"
//             />

//             <Text style={styles.formLabel}>Date of Birth</Text>
//             <View style={styles.dobFields}>
//               <TextInput
//                 style={[styles.dobInput, errors.dobDay && touched.dobDay && styles.inputError]}
//                 placeholder="DD"
//                 value={formData.dobDay}
//                 onChangeText={(text) => handleChange("dobDay", text)}
//                 onBlur={() => handleBlur("dobDay")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobMonth && touched.dobMonth && styles.inputError]}
//                 placeholder="MM"
//                 value={formData.dobMonth}
//                 onChangeText={(text) => handleChange("dobMonth", text)}
//                 onBlur={() => handleBlur("dobMonth")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobYear && touched.dobYear && styles.inputError]}
//                 placeholder="YYYY"
//                 value={formData.dobYear}
//                 onChangeText={(text) => handleChange("dobYear", text)}
//                 onBlur={() => handleBlur("dobYear")}
//                 keyboardType="number-pad"
//                 maxLength={4}
//               />
//             </View>
//             {(errors.dobDay && touched.dobDay) || (errors.dobMonth && touched.dobMonth) || (errors.dobYear && touched.dobYear) ? (
//               <Text style={styles.errorText}>Date of birth is required</Text>
//             ) : null}
//           </View>
//         );

//       case 3:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(3)}
//             </View>
//             <Text style={styles.stepTitle}>Religion & Community</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.religion && touched.religion && styles.inputError]}
//               onPress={() => showPicker("Select Religion", ["Christian", "Hindu", "Muslim", "Sikh"], 
//                 (religion) => handleChange("religion", religion))}
//             >
//               <Text style={formData.religion ? styles.selectText : styles.placeholderText}>
//                 {formData.religion || "Select your Religion"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.religion && touched.religion && (
//               <Text style={styles.errorText}>{errors.religion}</Text>
//             )}

//             <TouchableOpacity
//               style={styles.select}
//               onPress={() => showPicker("Select Mother Tongue", 
//                 ["English", "Hindi", "Telugu", "Malayali", "Marathi", "Punjabi", "Tamil", "Kannada"],
//                 (tongue) => handleChange("motherTongue", tongue))}
//             >
//               <Text style={formData.motherTongue ? styles.selectText : styles.placeholderText}>
//                 {formData.motherTongue || "Select your Mother Tongue"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.select, errors.caste && touched.caste && styles.inputError]}
//               onPress={() => showPicker("Select Caste", ["BC", "OC", "SC & ST", "OBC"],
//                 (caste) => handleChange("caste", caste))}
//             >
//               <Text style={formData.caste ? styles.selectText : styles.placeholderText}>
//                 {formData.caste || "Select your Caste"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.caste && touched.caste && (
//               <Text style={styles.errorText}>{errors.caste}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Sub-community (optional)"
//               value={formData.subCaste}
//               onChangeText={(text) => handleChange("subCaste", text)}
//             />
//           </View>
//         );

//       case 4:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(4)}
//             </View>
//             <Text style={styles.stepTitle}>Where do you live?</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.country && touched.country && styles.inputError]}
//               onPress={() => showPicker("Select Country", ["India", "USA", "UK", "Canada", "Australia"],
//                 (country) => handleChange("country", country))}
//             >
//               <Text style={formData.country ? styles.selectText : styles.placeholderText}>
//                 {formData.country || "Select your Country"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.country && touched.country && (
//               <Text style={styles.errorText}>{errors.country}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.city && touched.city && styles.inputError]}
//               placeholder="City"
//               value={formData.city}
//               onChangeText={(text) => handleChange("city", text)}
//               onBlur={() => handleBlur("city")}
//             />
//             {errors.city && touched.city && (
//               <Text style={styles.errorText}>{errors.city}</Text>
//             )}
//           </View>
//         );

//       case 5:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(5)}
//             </View>
//             <Text style={styles.stepTitle}>Marital Status & Height</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.maritalStatus && touched.maritalStatus && styles.inputError]}
//               onPress={() => showPicker("Select Marital Status", ["Single", "Divorced", "Widowed"],
//                 (status) => handleChange("maritalStatus", status))}
//             >
//               <Text style={formData.maritalStatus ? styles.selectText : styles.placeholderText}>
//                 {formData.maritalStatus || "Select your Marital Status"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.maritalStatus && touched.maritalStatus && (
//               <Text style={styles.errorText}>{errors.maritalStatus}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Number Of Children (Optional)"
//               value={formData.noOfChildren}
//               onChangeText={(text) => handleChange("noOfChildren", text)}
//               keyboardType="numeric"
//             />

//             <TouchableOpacity
//               style={[styles.select, errors.height && touched.height && styles.inputError]}
//               onPress={() => showPicker("Select Height", [
//                 "4 ft 5 in (134 cm)",
//                 "5 ft 0 in (152 cm)", 
//                 "5 ft 5 in (165 cm)",
//                 "6 ft 0 in (183 cm)",
//                 "6 ft 5 in (196 cm)"
//               ], (height) => handleChange("height", height))}
//             >
//               <Text style={formData.height ? styles.selectText : styles.placeholderText}>
//                 {formData.height || "Select your Height"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.height && touched.height && (
//               <Text style={styles.errorText}>{errors.height}</Text>
//             )}
//           </View>
//         );

//       case 6:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(6)}
//             </View>
//             <Text style={styles.stepTitle}>Education</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.highestEducation && touched.highestEducation && styles.inputError]}
//               onPress={() => showPicker("Select Highest Qualification", [
//                 "B.E / B.Tech", "Degree", "Intermediate", "M.E / M.Tech", 
//                 "MBA", "PhD", "Tenth"
//               ], (education) => handleChange("highestEducation", education))}
//             >
//               <Text style={formData.highestEducation ? styles.selectText : styles.placeholderText}>
//                 {formData.highestEducation || "Select your higher Qualification"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.highestEducation && touched.highestEducation && (
//               <Text style={styles.errorText}>{errors.highestEducation}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.collegeName && touched.collegeName && styles.inputError]}
//               placeholder="College / University Name"
//               value={formData.collegeName}
//               onChangeText={(text) => handleChange("collegeName", text)}
//               onBlur={() => handleBlur("collegeName")}
//             />
//             {errors.collegeName && touched.collegeName && (
//               <Text style={styles.errorText}>{errors.collegeName}</Text>
//             )}
//           </View>
//         );

//       case 7:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(7)}
//             </View>
//             <Text style={styles.stepTitle}>Career Details</Text>

//             <TouchableOpacity
//               style={[styles.select, errors.sector && touched.sector && styles.inputError]}
//               onPress={() => showPicker("Select Sector", ["Business", "Government", "Private", "Self Employed", "Not Working"],
//                 (sector) => handleChange("sector", sector))}
//             >
//               <Text style={formData.sector ? styles.selectText : styles.placeholderText}>
//                 {formData.sector || "Select your sector"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//             {errors.sector && touched.sector && (
//               <Text style={styles.errorText}>{errors.sector}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.occupation && touched.occupation && styles.inputError]}
//               placeholder="Your Profession"
//               value={formData.occupation}
//               onChangeText={(text) => handleChange("occupation", text)}
//               onBlur={() => handleBlur("occupation")}
//             />
//             {errors.occupation && touched.occupation && (
//               <Text style={styles.errorText}>{errors.occupation}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.companyName && touched.companyName && styles.inputError]}
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChangeText={(text) => handleChange("companyName", text)}
//               onBlur={() => handleBlur("companyName")}
//             />
//             {errors.companyName && touched.companyName && (
//               <Text style={styles.errorText}>{errors.companyName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your working Location"
//               value={formData.workLocation}
//               onChangeText={(text) => handleChange("workLocation", text)}
//             />

//             <TouchableOpacity
//               style={styles.select}
//               onPress={() => showPicker("Select Annual Income", [
//                 "Below ₹ 1 Lakh yearly",
//                 "₹ 1 to 3 Lakh yearly",
//                 "₹ 3 to 5 Lakh yearly",
//                 "₹ 5 to 7 Lakh yearly",
//                 "₹ 7 to 10 Lakh yearly",
//                 "₹ 10 to 15 Lakh yearly",
//                 "Above ₹ 15 Lakh yearly"
//               ], (income) => handleChange("annualIncome", income))}
//             >
//               <Text style={formData.annualIncome ? styles.selectText : styles.placeholderText}>
//                 {formData.annualIncome || "Select your yearly Income"}
//               </Text>
//               <Icon name="chevron-down" size={16} color="#666" />
//             </TouchableOpacity>
//           </View>
//         );

//       case 8:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(8)}
//             </View>
//             <Text style={styles.stepTitle}>Contact Information</Text>

//             <TextInput
//               style={[styles.formInput, errors.emailId && touched.emailId && styles.inputError]}
//               placeholder="Email Address"
//               value={formData.emailId}
//               onChangeText={(text) => handleChange("emailId", text)}
//               onBlur={() => handleBlur("emailId")}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             {errors.emailId && touched.emailId && (
//               <Text style={styles.errorText}>{errors.emailId}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.mobileNumber && touched.mobileNumber && styles.inputError]}
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChangeText={(text) => handleChange("mobileNumber", text)}
//               onBlur={() => handleBlur("mobileNumber")}
//               keyboardType="phone-pad"
//               maxLength={10}
//             />
//             {errors.mobileNumber && touched.mobileNumber && (
//               <Text style={styles.errorText}>{errors.mobileNumber}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.createPassword && touched.createPassword && styles.inputError]}
//               placeholder="Create Password"
//               value={formData.createPassword}
//               onChangeText={(text) => handleChange("createPassword", text)}
//               onBlur={() => handleBlur("createPassword")}
//               secureTextEntry
//             />
//             {errors.createPassword && touched.createPassword && (
//               <Text style={styles.errorText}>{errors.createPassword}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.confirmPassword && touched.confirmPassword && styles.inputError]}
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChangeText={(text) => handleChange("confirmPassword", text)}
//               onBlur={() => handleBlur("confirmPassword")}
//               secureTextEntry
//             />
//             {errors.confirmPassword && touched.confirmPassword && (
//               <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//             )}
//           </View>
//         );

//       case 9:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(9)}
//             </View>
//             <Text style={styles.stepTitle}>Confirm & Submit</Text>
//             <Text style={styles.confirmationText}>
//               Please review your details and submit your profile.
//             </Text>

//             <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//               <Text style={styles.submitBtnText}>Create My Profile</Text>
//             </TouchableOpacity>
//           </View>
//         );

//       default:
//         return null;
//     }
//   };

//   // Success Modal
//   const SuccessModal = () => (
//     <Modal
//       visible={showSuccessModal}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={handleSuccessModalClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.successModal}>
//           <View style={styles.successIcon}>
//             <Icon name="check-circle" size={50} color="#16a34a" />
//           </View>
          
//           <Text style={styles.successTitle}>Registration Successful!</Text>
          
//           <Text style={styles.successMessage}>
//             Your account has been created successfully. Please save your login credentials:
//           </Text>

//           <View style={styles.credentialsContainer}>
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Username:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.username}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Password:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.password}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Email:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
//             </View>
//           </View>

//           <Text style={styles.importantNote}>
//             ⚠️ Important: Please save these credentials. You'll need them to login.
//           </Text>

//           <View style={styles.modalButtons}>
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.loginButton]} 
//               onPress={handleLoginWithCredentials}
//             >
//               <Icon name="sign-in-alt" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.loginButtonText}>Login Now</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.closeButton]} 
//               onPress={handleSuccessModalClose}
//             >
//               <Icon name="times" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <Modal
//       visible={show}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={handleCloseRegister}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Header with Back Button */}
//           <View style={styles.header}>
//             <TouchableOpacity 
//               style={styles.backButton} 
//               onPress={handleCloseRegister}
//             >
//               <Icon name="times" size={20} color="#333" />
//               <Text style={styles.backButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.formWrapper}>
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar,
//                     { width: `${(step / totalSteps) * 100}%` }
//                   ]} 
//                 />
//               </View>

//               {/* Profile Progress Section */}
//               <View style={styles.profileProgressContainer}>
//                 <Text style={styles.profileProgressText}>
//                   Profile Completion: {profileProgress}%
//                 </Text>
//                 <View style={styles.profileProgressBar}>
//                   <View 
//                     style={[
//                       styles.profileProgressFill,
//                       { width: `${profileProgress}%` }
//                     ]} 
//                   />
//                 </View>
//               </View>

//               {/* Step Indicator */}
//               <Text style={styles.stepIndicator}>
//                 Step {step} of {totalSteps}
//               </Text>

//               {/* Step Content */}
//               <View style={styles.stepContent}>
//                 {renderStep()}
//               </View>

//               {/* Navigation Buttons */}
//               <View style={styles.navButtons}>
//                 {step > 1 && (
//                   <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
//                     <Icon name="arrow-left" size={16} color="#18c2b4" />
//                     <Text style={styles.backBtnText}>Back</Text>
//                   </TouchableOpacity>
//                 )}
//                 {step < totalSteps && (
//                   <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
//                     <Text style={styles.nextBtnText}>Next</Text>
//                     <Icon name="arrow-right" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Already have account link */}
//               <View style={styles.loginLinkContainer}>
//                 <Text style={styles.loginLinkText}>
//                   Already have an account?{" "}
//                   <Text 
//                     style={styles.loginLink} 
//                     onPress={onNavigateToLogin}
//                   >
//                     Login here
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* Success Modal */}
//       <SuccessModal />
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
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
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
//   // Profile Progress Styles
//   profileProgressContainer: {
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   profileProgressText: {
//     fontSize: 14,
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   profileProgressBar: {
//     height: 6,
//     backgroundColor: '#e9ecef',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   profileProgressFill: {
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
//   stepIcon: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#eafcff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     alignSelf: 'center',
//   },
//   stepContent: {
//     minHeight: 300,
//   },
//   stepContainer: {
//     alignItems: 'center',
//   },
//   stepTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   subTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   confirmationText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   formGroup: {
//     marginBottom: 15,
//   },
//   formLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginBottom: 8,
//     alignSelf: 'flex-start',
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
//   inputError: {
//     borderColor: '#dc3545',
//   },
//   dobFields: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 15,
//   },
//   dobInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     padding: 14,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   select: {
//     width: '100%',
//     padding: 14,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   selectText: {
//     fontSize: 16,
//     color: '#495057',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#6c757d',
//   },
//   optionGroup: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   optionBtn: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 25,
//     backgroundColor: '#fff',
//   },
//   optionBtnSelected: {
//     backgroundColor: '#eafcff',
//     borderColor: '#18c2b4',
//   },
//   optionBtnText: {
//     color: '#495057',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   optionBtnTextSelected: {
//     color: '#18c2b4',
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 14,
//     marginBottom: 10,
//     alignSelf: 'flex-start',
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
//   loginLinkContainer: {
//     marginTop: 20,
//     paddingTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//   },
//   loginLinkText: {
//     color: '#495057',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   loginLink: {
//     color: '#18c2b4',
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   // Success Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   successModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     width: '90%',
//     maxWidth: 400,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   successIcon: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#e8f5e8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   successTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   successMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   credentialsContainer: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     marginBottom: 15,
//   },
//   credentialItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 5,
//   },
//   credentialLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   credentialValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     backgroundColor: '#f0f9f0',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   importantNote: {
//     fontSize: 12,
//     color: '#dc2626',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     gap: 10,
//     width: '100%',
//   },
//   modalButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   loginButton: {
//     backgroundColor: '#16a34a',
//   },
//   closeButton: {
//     backgroundColor: '#6b7280',
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   buttonIcon: {
//     marginRight: 4,
//   },
// });

// export default Register;










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

// const Register = ({ 
//   show, 
//   onClose, 
//   onRegistrationComplete, 
//   onNavigateToLogin 
// }) => {
//   const [step, setStep] = useState(1);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [generatedCredentials, setGeneratedCredentials] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [profileProgress, setProfileProgress] = useState(0);

//   const [formData, setFormData] = useState({
//     profileFor: "",
//     gender: "",
//     firstName: "",
//     lastName: "",
//     dobDay: "",
//     dobMonth: "",
//     dobYear: "",
//     age: "",
//     religion: "",
//     caste: "",
//     subCaste: "",
//     motherTongue: "",
//     country: "",
//     city: "",
//     maritalStatus: "",
//     noOfChildren: "",
//     height: "",
//     highestEducation: "",
//     collegeName: "",
//     sector: "",
//     occupation: "",
//     companyName: "",
//     annualIncome: "",
//     workLocation: "",
//     emailId: "",
//     mobileNumber: "",
//     createPassword: "",
//     confirmPassword: "",
//     role: "user",
//   });

//   const totalSteps = 9;

//   // Icon configuration for each step
//   const stepIcons = {
//     1: { name: "user-friends", color: "#18c2b4" },
//     2: { name: "user", color: "#18c2b4" },
//     3: { name: "book-open", color: "#18c2b4" },
//     4: { name: "map-marker-alt", color: "#18c2b4" },
//     5: { name: "user-check", color: "#18c2b4" },
//     6: { name: "graduation-cap", color: "#18c2b4" },
//     7: { name: "briefcase", color: "#18c2b4" },
//     8: { name: "user-lock", color: "#18c2b4" },
//     9: { name: "ring", color: "#18c2b4" }
//   };

//   // Calculate profile completion progress
//   useEffect(() => {
//     calculateProgress();
//   }, [formData]);

//   const calculateProgress = () => {
//     const requiredFields = [
//       'profileFor', 'firstName', 'lastName', 'dobDay', 'dobMonth', 'dobYear',
//       'religion', 'caste', 'country', 'city', 'maritalStatus', 'height',
//       'highestEducation', 'collegeName', 'sector', 'occupation', 'companyName',
//       'emailId', 'mobileNumber', 'createPassword', 'confirmPassword'
//     ];

//     let filledFields = 0;
//     requiredFields.forEach(field => {
//       if (formData[field] && formData[field].toString().trim() !== '') {
//         filledFields++;
//       }
//     });

//     const progress = Math.round((filledFields / requiredFields.length) * 100);
//     setProfileProgress(progress);
//   };

//   const handleChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleBlur = (name) => {
//     setTouched(prev => ({ ...prev, [name]: true }));
//     validateField(name, formData[name]);
//   };

//   const validateField = (name, value) => {
//     let error = "";

//     switch (name) {
//       case "profileFor":
//         if (!value) error = "Select one";
//         break;
//       case "gender":
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !value) {
//           error = "Select gender";
//         }
//         break;
//       case "firstName":
//         if (!value) error = "Required";
//         break;
//       case "lastName":
//         if (!value) error = "Required";
//         break;
//       case "dobDay":
//         if (!value) error = "Required";
//         break;
//       case "dobMonth":
//         if (!value) error = "Required";
//         break;
//       case "dobYear":
//         if (!value) error = "Required";
//         break;
//       case "religion":
//         if (!value) error = "Required";
//         break;
//       case "caste":
//         if (!value) error = "Required";
//         break;
//       case "country":
//         if (!value) error = "Required";
//         break;
//       case "city":
//         if (!value) error = "Required";
//         break;
//       case "maritalStatus":
//         if (!value) error = "Required";
//         break;
//       case "height":
//         if (!value) error = "Required";
//         break;
//       case "highestEducation":
//         if (!value) error = "Required";
//         break;
//       case "collegeName":
//         if (!value) error = "Required";
//         break;
//       case "sector":
//         if (!value) error = "Required";
//         break;
//       case "occupation":
//         if (!value) error = "Required";
//         break;
//       case "companyName":
//         if (!value) error = "Required";
//         break;
//       case "emailId":
//         if (!value) {
//           error = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email";
//         }
//         break;
//       case "mobileNumber":
//         if (!value) {
//           error = "Required";
//         } else if (!/^\d{10}$/.test(value)) {
//           error = "Enter 10-digit mobile";
//         }
//         break;
//       case "createPassword":
//         if (!value) error = "Required";
//         break;
//       case "confirmPassword":
//         if (!value) {
//           error = "Required";
//         } else if (value !== formData.createPassword) {
//           error = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     if (error) {
//       setErrors(prev => ({ ...prev, [name]: error }));
//     } else {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateStep = (step) => {
//     const stepErrors = {};
    
//     switch (step) {
//       case 1:
//         if (!formData.profileFor) stepErrors.profileFor = "Select one";
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !formData.gender) {
//           stepErrors.gender = "Select gender";
//         }
//         break;
//       case 2:
//         if (!formData.firstName) stepErrors.firstName = "Required";
//         if (!formData.lastName) stepErrors.lastName = "Required";
//         if (!formData.dobDay) stepErrors.dobDay = "Required";
//         if (!formData.dobMonth) stepErrors.dobMonth = "Required";
//         if (!formData.dobYear) stepErrors.dobYear = "Required";
//         break;
//       case 3:
//         if (!formData.religion) stepErrors.religion = "Required";
//         if (!formData.caste) stepErrors.caste = "Required";
//         break;
//       case 4:
//         if (!formData.country) stepErrors.country = "Required";
//         if (!formData.city) stepErrors.city = "Required";
//         break;
//       case 5:
//         if (!formData.maritalStatus) stepErrors.maritalStatus = "Required";
//         if (!formData.height) stepErrors.height = "Required";
//         break;
//       case 6:
//         if (!formData.highestEducation) stepErrors.highestEducation = "Required";
//         if (!formData.collegeName) stepErrors.collegeName = "Required";
//         break;
//       case 7:
//         if (!formData.sector) stepErrors.sector = "Required";
//         if (!formData.occupation) stepErrors.occupation = "Required";
//         if (!formData.companyName) stepErrors.companyName = "Required";
//         break;
//       case 8:
//         if (!formData.emailId) {
//           stepErrors.emailId = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
//           stepErrors.emailId = "Invalid email";
//         }
//         if (!formData.mobileNumber) {
//           stepErrors.mobileNumber = "Required";
//         } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//           stepErrors.mobileNumber = "Enter 10-digit mobile";
//         }
//         if (!formData.createPassword) stepErrors.createPassword = "Required";
//         if (!formData.confirmPassword) {
//           stepErrors.confirmPassword = "Required";
//         } else if (formData.confirmPassword !== formData.createPassword) {
//           stepErrors.confirmPassword = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     return stepErrors;
//   };

//   const nextStep = () => {
//     const stepErrors = validateStep(step);
    
//     if (Object.keys(stepErrors).length > 0) {
//       setErrors(stepErrors);
//       // Mark all fields in current step as touched
//       const stepFields = Object.keys(stepErrors);
//       const touchedFields = {};
//       stepFields.forEach(field => {
//         touchedFields[field] = true;
//       });
//       setTouched(prev => ({ ...prev, ...touchedFields }));
//       return;
//     }

//     if (step < totalSteps) {
//       setStep(step + 1);
//       setErrors({});
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//       setErrors({});
//     }
//   };

//   const generateUsername = (firstName, lastName, email) => {
//     const first = firstName?.toLowerCase() || 'user';
//     const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
//     const randomNum = Math.floor(100 + Math.random() * 900);
//     return `${first}${lastInitial}${randomNum}`;
//   };

//   const handleSubmit = () => {
//     const finalErrors = validateStep(8); // Validate all fields before submit
//     if (Object.keys(finalErrors).length > 0) {
//       setErrors(finalErrors);
//       Alert.alert("Validation Error", "Please fix all errors before submitting.");
//       return;
//     }

//     const dateOfBirthStr = `${formData.dobYear}-${formData.dobMonth.padStart(2, '0')}-${formData.dobDay.padStart(2, '0')}`;
//     const username = generateUsername(formData.firstName, formData.lastName, formData.emailId);
    
//     const completeFormData = {
//       ...formData,
//       dateOfBirth: dateOfBirthStr,
//       username: username
//     };

//     setGeneratedCredentials({
//       username: username,
//       password: formData.createPassword,
//       email: formData.emailId
//     });

//     setShowSuccessModal(true);
    
//     if (onRegistrationComplete) {
//       onRegistrationComplete(completeFormData);
//     }
//   };

//   const handleSuccessModalClose = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//     setShowSuccessModal(false);
//     onClose();
//   };

//   const handleLoginWithCredentials = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//     setShowSuccessModal(false);
//     onClose();
    
//     if (onNavigateToLogin && generatedCredentials?.email) {
//       onNavigateToLogin(generatedCredentials.email);
//     }
//   };

//   const handleCloseRegister = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//     onClose();
//   };

//   const renderStepIcon = (stepNumber) => {
//     const iconConfig = stepIcons[stepNumber];
//     if (!iconConfig) return null;

//     return (
//       <Icon 
//         name={iconConfig.name} 
//         size={28} 
//         color={iconConfig.color} 
//       />
//     );
//   };

//   const renderOptionButtons = (name, options, selectedValue, onSelect, error = null, touched = false) => (
//     <View style={styles.optionGroup}>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option}
//           style={[
//             styles.optionBtn,
//             selectedValue === option && styles.optionBtnSelected
//           ]}
//           onPress={() => onSelect(option)}
//         >
//           <Text style={selectedValue === option ? styles.optionBtnTextSelected : styles.optionBtnText}>
//             {option}
//           </Text>
//         </TouchableOpacity>
//       ))}
//       {error && touched && (
//         <Text style={styles.errorText}>{error}</Text>
//       )}
//     </View>
//   );

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(1)}
//             </View>
//             <Text style={styles.stepTitle}>This profile is for</Text>

//             {renderOptionButtons(
//               'profileFor',
//               ['Myself', 'My Son', 'My Daughter', 'My Brother', 'My Sister', 'My Friend', 'My Relative'],
//               formData.profileFor,
//               (option) => {
//                 handleChange("profileFor", option);
//                 if (option === 'My Son' || option === 'My Brother') {
//                   handleChange("gender", "Male");
//                 } else if (option === 'My Daughter' || option === 'My Sister') {
//                   handleChange("gender", "Female");
//                 } else {
//                   handleChange("gender", "");
//                 }
//               },
//               errors.profileFor,
//               touched.profileFor
//             )}

//             {['Myself', 'My Friend', 'My Relative'].includes(formData.profileFor) && (
//               <>
//                 <Text style={styles.subTitle}>
//                   {formData.profileFor === 'My Friend'
//                     ? 'Is your friend Male or Female?'
//                     : formData.profileFor === 'My Relative'
//                     ? 'Is your relative Male or Female?'
//                     : 'Are you Male or Female?'}
//                 </Text>

//                 {renderOptionButtons(
//                   'gender',
//                   ['Male', 'Female'],
//                   formData.gender,
//                   (gender) => handleChange("gender", gender),
//                   errors.gender,
//                   touched.gender
//                 )}
//               </>
//             )}
//           </View>
//         );

//       case 2:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(2)}
//             </View>
//             <Text style={styles.stepTitle}>Tell us about you</Text>

//             <TextInput
//               style={[styles.formInput, errors.firstName && touched.firstName && styles.inputError]}
//               placeholder="First Name"
//               value={formData.firstName}
//               onChangeText={(text) => handleChange("firstName", text)}
//               onBlur={() => handleBlur("firstName")}
//             />
//             {errors.firstName && touched.firstName && (
//               <Text style={styles.errorText}>{errors.firstName}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.lastName && touched.lastName && styles.inputError]}
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChangeText={(text) => handleChange("lastName", text)}
//               onBlur={() => handleBlur("lastName")}
//             />
//             {errors.lastName && touched.lastName && (
//               <Text style={styles.errorText}>{errors.lastName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your Age"
//               value={formData.age}
//               onChangeText={(text) => handleChange("age", text)}
//               keyboardType="numeric"
//             />

//             <Text style={styles.formLabel}>Date of Birth</Text>
//             <View style={styles.dobFields}>
//               <TextInput
//                 style={[styles.dobInput, errors.dobDay && touched.dobDay && styles.inputError]}
//                 placeholder="DD"
//                 value={formData.dobDay}
//                 onChangeText={(text) => handleChange("dobDay", text)}
//                 onBlur={() => handleBlur("dobDay")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobMonth && touched.dobMonth && styles.inputError]}
//                 placeholder="MM"
//                 value={formData.dobMonth}
//                 onChangeText={(text) => handleChange("dobMonth", text)}
//                 onBlur={() => handleBlur("dobMonth")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobYear && touched.dobYear && styles.inputError]}
//                 placeholder="YYYY"
//                 value={formData.dobYear}
//                 onChangeText={(text) => handleChange("dobYear", text)}
//                 onBlur={() => handleBlur("dobYear")}
//                 keyboardType="number-pad"
//                 maxLength={4}
//               />
//             </View>
//             {(errors.dobDay && touched.dobDay) || (errors.dobMonth && touched.dobMonth) || (errors.dobYear && touched.dobYear) ? (
//               <Text style={styles.errorText}>Date of birth is required</Text>
//             ) : null}
//           </View>
//         );

//       case 3:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(3)}
//             </View>
//             <Text style={styles.stepTitle}>Religion & Community</Text>

//             <Text style={styles.formLabel}>Select Religion</Text>
//             {renderOptionButtons(
//               'religion',
//               ['Christian', 'Hindu', 'Muslim', 'Sikh'],
//               formData.religion,
//               (religion) => handleChange("religion", religion),
//               errors.religion,
//               touched.religion
//             )}

//             <Text style={styles.formLabel}>Select Mother Tongue</Text>
//             {renderOptionButtons(
//               'motherTongue',
//               ['English', 'Hindi', 'Telugu', 'Malayali', 'Marathi', 'Punjabi', 'Tamil', 'Kannada'],
//               formData.motherTongue,
//               (tongue) => handleChange("motherTongue", tongue)
//             )}

//             <Text style={styles.formLabel}>Select Caste</Text>
//             {renderOptionButtons(
//               'caste',
//               ['BC', 'OC', 'SC & ST', 'OBC'],
//               formData.caste,
//               (caste) => handleChange("caste", caste),
//               errors.caste,
//               touched.caste
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Sub-community (optional)"
//               value={formData.subCaste}
//               onChangeText={(text) => handleChange("subCaste", text)}
//             />
//           </View>
//         );

//       case 4:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(4)}
//             </View>
//             <Text style={styles.stepTitle}>Where do you live?</Text>

//             <Text style={styles.formLabel}>Select Country</Text>
//             {renderOptionButtons(
//               'country',
//               ['India', 'USA', 'UK', 'Canada', 'Australia'],
//               formData.country,
//               (country) => handleChange("country", country),
//               errors.country,
//               touched.country
//             )}

//             <TextInput
//               style={[styles.formInput, errors.city && touched.city && styles.inputError]}
//               placeholder="City"
//               value={formData.city}
//               onChangeText={(text) => handleChange("city", text)}
//               onBlur={() => handleBlur("city")}
//             />
//             {errors.city && touched.city && (
//               <Text style={styles.errorText}>{errors.city}</Text>
//             )}
//           </View>
//         );

//       case 5:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(5)}
//             </View>
//             <Text style={styles.stepTitle}>Marital Status & Height</Text>

//             <Text style={styles.formLabel}>Select Marital Status</Text>
//             {renderOptionButtons(
//               'maritalStatus',
//               ['Single', 'Divorced', 'Widowed'],
//               formData.maritalStatus,
//               (status) => handleChange("maritalStatus", status),
//               errors.maritalStatus,
//               touched.maritalStatus
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Number Of Children (Optional)"
//               value={formData.noOfChildren}
//               onChangeText={(text) => handleChange("noOfChildren", text)}
//               keyboardType="numeric"
//             />

//             <Text style={styles.formLabel}>Select Height</Text>
//             {renderOptionButtons(
//               'height',
//               [
//                 "4 ft 5 in (134 cm)",
//                 "5 ft 0 in (152 cm)", 
//                 "5 ft 5 in (165 cm)",
//                 "6 ft 0 in (183 cm)",
//                 "6 ft 5 in (196 cm)"
//               ],
//               formData.height,
//               (height) => handleChange("height", height),
//               errors.height,
//               touched.height
//             )}
//           </View>
//         );

//       case 6:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(6)}
//             </View>
//             <Text style={styles.stepTitle}>Education</Text>

//             <Text style={styles.formLabel}>Select Highest Qualification</Text>
//             {renderOptionButtons(
//               'highestEducation',
//               [
//                 "B.E / B.Tech", "Degree", "Intermediate", "M.E / M.Tech", 
//                 "MBA", "PhD", "Tenth"
//               ],
//               formData.highestEducation,
//               (education) => handleChange("highestEducation", education),
//               errors.highestEducation,
//               touched.highestEducation
//             )}

//             <TextInput
//               style={[styles.formInput, errors.collegeName && touched.collegeName && styles.inputError]}
//               placeholder="College / University Name"
//               value={formData.collegeName}
//               onChangeText={(text) => handleChange("collegeName", text)}
//               onBlur={() => handleBlur("collegeName")}
//             />
//             {errors.collegeName && touched.collegeName && (
//               <Text style={styles.errorText}>{errors.collegeName}</Text>
//             )}
//           </View>
//         );

//       case 7:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(7)}
//             </View>
//             <Text style={styles.stepTitle}>Career Details</Text>

//             <Text style={styles.formLabel}>Select Sector</Text>
//             {renderOptionButtons(
//               'sector',
//               ["Business", "Government", "Private", "Self Employed", "Not Working"],
//               formData.sector,
//               (sector) => handleChange("sector", sector),
//               errors.sector,
//               touched.sector
//             )}

//             <TextInput
//               style={[styles.formInput, errors.occupation && touched.occupation && styles.inputError]}
//               placeholder="Your Profession"
//               value={formData.occupation}
//               onChangeText={(text) => handleChange("occupation", text)}
//               onBlur={() => handleBlur("occupation")}
//             />
//             {errors.occupation && touched.occupation && (
//               <Text style={styles.errorText}>{errors.occupation}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.companyName && touched.companyName && styles.inputError]}
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChangeText={(text) => handleChange("companyName", text)}
//               onBlur={() => handleBlur("companyName")}
//             />
//             {errors.companyName && touched.companyName && (
//               <Text style={styles.errorText}>{errors.companyName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your working Location"
//               value={formData.workLocation}
//               onChangeText={(text) => handleChange("workLocation", text)}
//             />

//             <Text style={styles.formLabel}>Select Annual Income</Text>
//             {renderOptionButtons(
//               'annualIncome',
//               [
//                 "Below ₹ 1 Lakh yearly",
//                 "₹ 1 to 3 Lakh yearly",
//                 "₹ 3 to 5 Lakh yearly",
//                 "₹ 5 to 7 Lakh yearly",
//                 "₹ 7 to 10 Lakh yearly",
//                 "₹ 10 to 15 Lakh yearly",
//                 "Above ₹ 15 Lakh yearly"
//               ],
//               formData.annualIncome,
//               (income) => handleChange("annualIncome", income)
//             )}
//           </View>
//         );

//       case 8:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(8)}
//             </View>
//             <Text style={styles.stepTitle}>Contact Information</Text>

//             <TextInput
//               style={[styles.formInput, errors.emailId && touched.emailId && styles.inputError]}
//               placeholder="Email Address"
//               value={formData.emailId}
//               onChangeText={(text) => handleChange("emailId", text)}
//               onBlur={() => handleBlur("emailId")}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             {errors.emailId && touched.emailId && (
//               <Text style={styles.errorText}>{errors.emailId}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.mobileNumber && touched.mobileNumber && styles.inputError]}
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChangeText={(text) => handleChange("mobileNumber", text)}
//               onBlur={() => handleBlur("mobileNumber")}
//               keyboardType="phone-pad"
//               maxLength={10}
//             />
//             {errors.mobileNumber && touched.mobileNumber && (
//               <Text style={styles.errorText}>{errors.mobileNumber}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.createPassword && touched.createPassword && styles.inputError]}
//               placeholder="Create Password"
//               value={formData.createPassword}
//               onChangeText={(text) => handleChange("createPassword", text)}
//               onBlur={() => handleBlur("createPassword")}
//               secureTextEntry
//             />
//             {errors.createPassword && touched.createPassword && (
//               <Text style={styles.errorText}>{errors.createPassword}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.confirmPassword && touched.confirmPassword && styles.inputError]}
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChangeText={(text) => handleChange("confirmPassword", text)}
//               onBlur={() => handleBlur("confirmPassword")}
//               secureTextEntry
//             />
//             {errors.confirmPassword && touched.confirmPassword && (
//               <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//             )}
//           </View>
//         );

//       case 9:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(9)}
//             </View>
//             <Text style={styles.stepTitle}>Confirm & Submit</Text>
//             <Text style={styles.confirmationText}>
//               Please review your details and submit your profile.
//             </Text>

//             <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//               <Text style={styles.submitBtnText}>Create My Profile</Text>
//             </TouchableOpacity>
//           </View>
//         );

//       default:
//         return null;
//     }
//   };

//   // Success Modal
//   const SuccessModal = () => (
//     <Modal
//       visible={showSuccessModal}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={handleSuccessModalClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.successModal}>
//           <View style={styles.successIcon}>
//             <Icon name="check-circle" size={50} color="#16a34a" />
//           </View>
          
//           <Text style={styles.successTitle}>Registration Successful!</Text>
          
//           <Text style={styles.successMessage}>
//             Your account has been created successfully. Please save your login credentials:
//           </Text>

//           <View style={styles.credentialsContainer}>
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Username:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.username}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Password:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.password}</Text>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Text style={styles.credentialLabel}>Email:</Text>
//               <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
//             </View>
//           </View>

//           <Text style={styles.importantNote}>
//             ⚠️ Important: Please save these credentials. You'll need them to login.
//           </Text>

//           <View style={styles.modalButtons}>
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.loginButton]} 
//               onPress={handleLoginWithCredentials}
//             >
//               <Icon name="sign-in-alt" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.loginButtonText}>Login Now</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.closeButton]} 
//               onPress={handleSuccessModalClose}
//             >
//               <Icon name="times" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <Modal
//       visible={show}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={handleCloseRegister}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Header with Back Button */}
//           <View style={styles.header}>
//             <TouchableOpacity 
//               style={styles.backButton} 
//               onPress={handleCloseRegister}
//             >
//               <Icon name="times" size={20} color="#333" />
//               <Text style={styles.backButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.formWrapper}>
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar,
//                     { width: `${(step / totalSteps) * 100}%` }
//                   ]} 
//                 />
//               </View>

//               {/* Profile Progress Section */}
//               <View style={styles.profileProgressContainer}>
//                 <Text style={styles.profileProgressText}>
//                   Profile Completion: {profileProgress}%
//                 </Text>
//                 <View style={styles.profileProgressBar}>
//                   <View 
//                     style={[
//                       styles.profileProgressFill,
//                       { width: `${profileProgress}%` }
//                     ]} 
//                   />
//                 </View>
//               </View>

//               {/* Step Indicator */}
//               <Text style={styles.stepIndicator}>
//                 Step {step} of {totalSteps}
//               </Text>

//               {/* Step Content */}
//               <View style={styles.stepContent}>
//                 {renderStep()}
//               </View>

//               {/* Navigation Buttons */}
//               <View style={styles.navButtons}>
//                 {step > 1 && (
//                   <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
//                     <Icon name="arrow-left" size={16} color="#18c2b4" />
//                     <Text style={styles.backBtnText}>Back</Text>
//                   </TouchableOpacity>
//                 )}
//                 {step < totalSteps && (
//                   <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
//                     <Text style={styles.nextBtnText}>Next</Text>
//                     <Icon name="arrow-right" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Already have account link */}
//               <View style={styles.loginLinkContainer}>
//                 <Text style={styles.loginLinkText}>
//                   Already have an account?{" "}
//                   <Text 
//                     style={styles.loginLink} 
//                     onPress={onNavigateToLogin}
//                   >
//                     Login here
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* Success Modal */}
//       <SuccessModal />
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
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
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
//   // Profile Progress Styles
//   profileProgressContainer: {
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   profileProgressText: {
//     fontSize: 14,
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   profileProgressBar: {
//     height: 6,
//     backgroundColor: '#e9ecef',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   profileProgressFill: {
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
//   stepIcon: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#eafcff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     alignSelf: 'center',
//   },
//   stepContent: {
//     minHeight: 300,
//   },
//   stepContainer: {
//     alignItems: 'center',
//   },
//   stepTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   subTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   confirmationText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   formGroup: {
//     marginBottom: 15,
//   },
//   formLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginBottom: 8,
//     alignSelf: 'flex-start',
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
//   inputError: {
//     borderColor: '#dc3545',
//   },
//   dobFields: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 15,
//   },
//   dobInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     padding: 14,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   select: {
//     width: '100%',
//     padding: 14,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   selectText: {
//     fontSize: 16,
//     color: '#495057',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#6c757d',
//   },
//   optionGroup: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   optionBtn: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 25,
//     backgroundColor: '#fff',
//   },
//   optionBtnSelected: {
//     backgroundColor: '#eafcff',
//     borderColor: '#18c2b4',
//   },
//   optionBtnText: {
//     color: '#495057',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   optionBtnTextSelected: {
//     color: '#18c2b4',
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 14,
//     marginBottom: 10,
//     alignSelf: 'flex-start',
//     width: '100%',
//     textAlign: 'center',
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
//   loginLinkContainer: {
//     marginTop: 20,
//     paddingTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//   },
//   loginLinkText: {
//     color: '#495057',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   loginLink: {
//     color: '#18c2b4',
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   // Success Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   successModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     width: '90%',
//     maxWidth: 400,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   successIcon: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#e8f5e8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   successTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   successMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   credentialsContainer: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     marginBottom: 15,
//   },
//   credentialItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 5,
//   },
//   credentialLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   credentialValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     backgroundColor: '#f0f9f0',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   importantNote: {
//     fontSize: 12,
//     color: '#dc2626',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     gap: 10,
//     width: '100%',
//   },
//   modalButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   loginButton: {
//     backgroundColor: '#16a34a',
//   },
//   closeButton: {
//     backgroundColor: '#6b7280',
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   buttonIcon: {
//     marginRight: 4,
//   },
// });

// export default Register;








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
//   Modal,
//   FlatList
// } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome5';

// // Custom Dropdown Component
// const CustomDropdown = ({ 
//   label, 
//   value, 
//   onSelect, 
//   options, 
//   placeholder, 
//   error = null, 
//   touched = false,
//   iconName = "chevron-down"
// }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <>
//       <View style={styles.dropdownContainer}>
//         <Text style={styles.dropdownLabel}>{label}</Text>
//         <TouchableOpacity
//           style={[
//             styles.dropdown,
//             error && touched && styles.dropdownError
//           ]}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={value ? styles.dropdownText : styles.dropdownPlaceholder}>
//             {value || placeholder}
//           </Text>
//           <Icon name={iconName} size={16} color="#666" />
//         </TouchableOpacity>
//         {error && touched && (
//           <Text style={styles.dropdownErrorText}>{error}</Text>
//         )}
//       </View>

//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.dropdownModalOverlay}>
//           <View style={styles.dropdownModalContent}>
//             <View style={styles.dropdownModalHeader}>
//               <Text style={styles.dropdownModalTitle}>{label}</Text>
//               <TouchableOpacity onPress={() => setModalVisible(false)}>
//                 <Icon name="times" size={20} color="#333" />
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={options}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={[
//                     styles.dropdownOption,
//                     value === item && styles.dropdownOptionSelected
//                   ]}
//                   onPress={() => {
//                     onSelect(item);
//                     setModalVisible(false);
//                   }}
//                 >
//                   <Text style={[
//                     styles.dropdownOptionText,
//                     value === item && styles.dropdownOptionTextSelected
//                   ]}>
//                     {item}
//                   </Text>
//                   {value === item && (
//                     <Icon name="check" size={16} color="#18c2b4" />
//                   )}
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const Register = ({ 
//   show, 
//   onClose, 
//   onRegistrationComplete, 
//   onNavigateToLogin 
// }) => {
//   const [step, setStep] = useState(1);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [generatedCredentials, setGeneratedCredentials] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [profileProgress, setProfileProgress] = useState(0);

//   const [formData, setFormData] = useState({
//     profileFor: "",
//     gender: "",
//     firstName: "",
//     lastName: "",
//     dobDay: "",
//     dobMonth: "",
//     dobYear: "",
//     age: "",
//     religion: "",
//     caste: "",
//     subCaste: "",
//     motherTongue: "",
//     country: "",
//     city: "",
//     maritalStatus: "",
//     noOfChildren: "",
//     height: "",
//     highestEducation: "",
//     collegeName: "",
//     sector: "",
//     occupation: "",
//     companyName: "",
//     annualIncome: "",
//     workLocation: "",
//     emailId: "",
//     mobileNumber: "",
//     createPassword: "",
//     confirmPassword: "",
//     role: "user",
//   });

//   // Dropdown options data
//   const dropdownOptions = {
//     profileFor: ["Myself", "My Son", "My Daughter", "My Brother", "My Sister", "My Friend", "My Relative"],
//     gender: ["Male", "Female"],
//     religion: ["Christian", "Hindu", "Muslim", "Sikh"],
//     motherTongue: ["English", "Hindi", "Kannada", "Malayali", "Marathi", "Punjabi", "Tamil", "Telugu"],
//     caste: ["BC", "OC", "SC & ST", "OBC"],
//     country: ["India", "USA", "UK", "Canada", "Australia"],
//     maritalStatus: ["Single", "Divorced", "Widowed"],
//     height: [
//       "4 ft 5 in (134 cm)",
//       "5 ft 0 in (152 cm)",
//       "5 ft 5 in (165 cm)",
//       "6 ft 0 in (183 cm)",
//       "6 ft 5 in (196 cm)"
//     ],
//     highestEducation: [
//       "B.E / B.Tech",
//       "Degree",
//       "Intermediate",
//       "M.E / M.Tech",
//       "MBA",
//       "PhD",
//       "Tenth"
//     ],
//     sector: ["Business", "Government", "Private", "Self Employed", "Not Working"],
//     annualIncome: [
//       "Below ₹ 1 Lakh yearly",
//       "₹ 1 to 3 Lakh yearly",
//       "₹ 3 to 5 Lakh yearly",
//       "₹ 5 to 7 Lakh yearly",
//       "₹ 7 to 10 Lakh yearly",
//       "₹ 10 to 15 Lakh yearly",
//       "Above ₹ 15 Lakh yearly"
//     ]
//   };

//   const totalSteps = 9;

//   // Icon configuration for each step
//   const stepIcons = {
//     1: { name: "user-friends", color: "#18c2b4" },
//     2: { name: "user", color: "#18c2b4" },
//     3: { name: "book-open", color: "#18c2b4" },
//     4: { name: "map-marker-alt", color: "#18c2b4" },
//     5: { name: "user-check", color: "#18c2b4" },
//     6: { name: "graduation-cap", color: "#18c2b4" },
//     7: { name: "briefcase", color: "#18c2b4" },
//     8: { name: "user-lock", color: "#18c2b4" },
//     9: { name: "ring", color: "#18c2b4" }
//   };

//   // Calculate profile completion progress
//   useEffect(() => {
//     calculateProgress();
//   }, [formData]);

//   const calculateProgress = () => {
//     const requiredFields = [
//       'profileFor', 'firstName', 'lastName', 'dobDay', 'dobMonth', 'dobYear',
//       'religion', 'caste', 'country', 'city', 'maritalStatus', 'height',
//       'highestEducation', 'collegeName', 'sector', 'occupation', 'companyName',
//       'emailId', 'mobileNumber', 'createPassword', 'confirmPassword'
//     ];

//     let filledFields = 0;
//     requiredFields.forEach(field => {
//       if (formData[field] && formData[field].toString().trim() !== '') {
//         filledFields++;
//       }
//     });

//     const progress = Math.round((filledFields / requiredFields.length) * 100);
//     setProfileProgress(progress);
//   };

//   const handleChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleBlur = (name) => {
//     setTouched(prev => ({ ...prev, [name]: true }));
//     validateField(name, formData[name]);
//   };

//   const validateField = (name, value) => {
//     let error = "";

//     switch (name) {
//       case "profileFor":
//         if (!value) error = "Select one";
//         break;
//       case "gender":
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !value) {
//           error = "Select gender";
//         }
//         break;
//       case "firstName":
//         if (!value) error = "Required";
//         break;
//       case "lastName":
//         if (!value) error = "Required";
//         break;
//       case "dobDay":
//         if (!value) error = "Required";
//         break;
//       case "dobMonth":
//         if (!value) error = "Required";
//         break;
//       case "dobYear":
//         if (!value) error = "Required";
//         break;
//       case "religion":
//         if (!value) error = "Required";
//         break;
//       case "caste":
//         if (!value) error = "Required";
//         break;
//       case "country":
//         if (!value) error = "Required";
//         break;
//       case "city":
//         if (!value) error = "Required";
//         break;
//       case "maritalStatus":
//         if (!value) error = "Required";
//         break;
//       case "height":
//         if (!value) error = "Required";
//         break;
//       case "highestEducation":
//         if (!value) error = "Required";
//         break;
//       case "collegeName":
//         if (!value) error = "Required";
//         break;
//       case "sector":
//         if (!value) error = "Required";
//         break;
//       case "occupation":
//         if (!value) error = "Required";
//         break;
//       case "companyName":
//         if (!value) error = "Required";
//         break;
//       case "emailId":
//         if (!value) {
//           error = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email";
//         }
//         break;
//       case "mobileNumber":
//         if (!value) {
//           error = "Required";
//         } else if (!/^\d{10}$/.test(value)) {
//           error = "Enter 10-digit mobile";
//         }
//         break;
//       case "createPassword":
//         if (!value) error = "Required";
//         break;
//       case "confirmPassword":
//         if (!value) {
//           error = "Required";
//         } else if (value !== formData.createPassword) {
//           error = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     if (error) {
//       setErrors(prev => ({ ...prev, [name]: error }));
//     } else {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateStep = (step) => {
//     const stepErrors = {};
    
//     switch (step) {
//       case 1:
//         if (!formData.profileFor) stepErrors.profileFor = "Select one";
//         if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !formData.gender) {
//           stepErrors.gender = "Select gender";
//         }
//         break;
//       case 2:
//         if (!formData.firstName) stepErrors.firstName = "Required";
//         if (!formData.lastName) stepErrors.lastName = "Required";
//         if (!formData.dobDay) stepErrors.dobDay = "Required";
//         if (!formData.dobMonth) stepErrors.dobMonth = "Required";
//         if (!formData.dobYear) stepErrors.dobYear = "Required";
//         break;
//       case 3:
//         if (!formData.religion) stepErrors.religion = "Required";
//         if (!formData.caste) stepErrors.caste = "Required";
//         break;
//       case 4:
//         if (!formData.country) stepErrors.country = "Required";
//         if (!formData.city) stepErrors.city = "Required";
//         break;
//       case 5:
//         if (!formData.maritalStatus) stepErrors.maritalStatus = "Required";
//         if (!formData.height) stepErrors.height = "Required";
//         break;
//       case 6:
//         if (!formData.highestEducation) stepErrors.highestEducation = "Required";
//         if (!formData.collegeName) stepErrors.collegeName = "Required";
//         break;
//       case 7:
//         if (!formData.sector) stepErrors.sector = "Required";
//         if (!formData.occupation) stepErrors.occupation = "Required";
//         if (!formData.companyName) stepErrors.companyName = "Required";
//         break;
//       case 8:
//         if (!formData.emailId) {
//           stepErrors.emailId = "Required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
//           stepErrors.emailId = "Invalid email";
//         }
//         if (!formData.mobileNumber) {
//           stepErrors.mobileNumber = "Required";
//         } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//           stepErrors.mobileNumber = "Enter 10-digit mobile";
//         }
//         if (!formData.createPassword) stepErrors.createPassword = "Required";
//         if (!formData.confirmPassword) {
//           stepErrors.confirmPassword = "Required";
//         } else if (formData.confirmPassword !== formData.createPassword) {
//           stepErrors.confirmPassword = "Passwords must match";
//         }
//         break;
//       default:
//         break;
//     }

//     return stepErrors;
//   };

//   const nextStep = () => {
//     const stepErrors = validateStep(step);
    
//     if (Object.keys(stepErrors).length > 0) {
//       setErrors(stepErrors);
//       // Mark all fields in current step as touched
//       const stepFields = Object.keys(stepErrors);
//       const touchedFields = {};
//       stepFields.forEach(field => {
//         touchedFields[field] = true;
//       });
//       setTouched(prev => ({ ...prev, ...touchedFields }));
//       return;
//     }

//     if (step < totalSteps) {
//       setStep(step + 1);
//       setErrors({});
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//       setErrors({});
//     }
//   };

//   const generateUsername = (firstName, lastName, email) => {
//     const first = firstName?.toLowerCase() || 'user';
//     const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
//     const randomNum = Math.floor(100 + Math.random() * 900);
//     return `${first}${lastInitial}${randomNum}`;
//   };

//   const handleSubmit = () => {
//     const finalErrors = validateStep(8); // Validate all fields before submit
//     if (Object.keys(finalErrors).length > 0) {
//       setErrors(finalErrors);
//       Alert.alert("Validation Error", "Please fix all errors before submitting.");
//       return;
//     }

//     const dateOfBirthStr = `${formData.dobYear}-${formData.dobMonth.padStart(2, '0')}-${formData.dobDay.padStart(2, '0')}`;
//     const username = generateUsername(formData.firstName, formData.lastName, formData.emailId);
    
//     const completeFormData = {
//       ...formData,
//       dateOfBirth: dateOfBirthStr,
//       username: username
//     };

//     setGeneratedCredentials({
//       username: username,
//       password: formData.createPassword,
//       email: formData.emailId
//     });

//     setShowSuccessModal(true);
    
//     if (onRegistrationComplete) {
//       onRegistrationComplete(completeFormData);
//     }
//   };

//   const handleSuccessModalClose = () => {
//     resetForm();
//     setShowSuccessModal(false);
//     onClose();
//   };

//   const handleLoginWithCredentials = () => {
//     resetForm();
//     setShowSuccessModal(false);
//     onClose();
    
//     if (onNavigateToLogin && generatedCredentials?.email) {
//       onNavigateToLogin(generatedCredentials.email);
//     }
//   };

//   const resetForm = () => {
//     setStep(1);
//     setFormData({
//       profileFor: "",
//       gender: "",
//       firstName: "",
//       lastName: "",
//       dobDay: "",
//       dobMonth: "",
//       dobYear: "",
//       age: "",
//       religion: "",
//       caste: "",
//       subCaste: "",
//       motherTongue: "",
//       country: "",
//       city: "",
//       maritalStatus: "",
//       noOfChildren: "",
//       height: "",
//       highestEducation: "",
//       collegeName: "",
//       sector: "",
//       occupation: "",
//       companyName: "",
//       annualIncome: "",
//       workLocation: "",
//       emailId: "",
//       mobileNumber: "",
//       createPassword: "",
//       confirmPassword: "",
//       role: "user",
//     });
//     setErrors({});
//     setTouched({});
//     setProfileProgress(0);
//   };

//   const handleCloseRegister = () => {
//     resetForm();
//     onClose();
//   };

//   const renderStepIcon = (stepNumber) => {
//     const iconConfig = stepIcons[stepNumber];
//     if (!iconConfig) return null;

//     return (
//       <Icon 
//         name={iconConfig.name} 
//         size={28} 
//         color={iconConfig.color} 
//       />
//     );
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(1)}
//             </View>
//             <Text style={styles.stepTitle}>This profile is for</Text>

//             <CustomDropdown
//               label="Profile For"
//               value={formData.profileFor}
//               onSelect={(value) => {
//                 handleChange("profileFor", value);
//                 if (value === 'My Son' || value === 'My Brother') {
//                   handleChange("gender", "Male");
//                 } else if (value === 'My Daughter' || value === 'My Sister') {
//                   handleChange("gender", "Female");
//                 } else {
//                   handleChange("gender", "");
//                 }
//               }}
//               options={dropdownOptions.profileFor}
//               placeholder="Select Profile For"
//               error={errors.profileFor}
//               touched={touched.profileFor}
//               iconName="user-friends"
//             />

//             {['Myself', 'My Friend', 'My Relative'].includes(formData.profileFor) && (
//               <CustomDropdown
//                 label={
//                   formData.profileFor === 'My Friend'
//                     ? 'Is your friend Male or Female?'
//                     : formData.profileFor === 'My Relative'
//                     ? 'Is your relative Male or Female?'
//                     : 'Are you Male or Female?'
//                 }
//                 value={formData.gender}
//                 onSelect={(value) => handleChange("gender", value)}
//                 options={dropdownOptions.gender}
//                 placeholder="Select Gender"
//                 error={errors.gender}
//                 touched={touched.gender}
//                 iconName="venus-mars"
//               />
//             )}
//           </View>
//         );

//       case 2:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(2)}
//             </View>
//             <Text style={styles.stepTitle}>Tell us about you</Text>

//             <TextInput
//               style={[styles.formInput, errors.firstName && touched.firstName && styles.inputError]}
//               placeholder="First Name"
//               value={formData.firstName}
//               onChangeText={(text) => handleChange("firstName", text)}
//               onBlur={() => handleBlur("firstName")}
//             />
//             {errors.firstName && touched.firstName && (
//               <Text style={styles.errorText}>{errors.firstName}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.lastName && touched.lastName && styles.inputError]}
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChangeText={(text) => handleChange("lastName", text)}
//               onBlur={() => handleBlur("lastName")}
//             />
//             {errors.lastName && touched.lastName && (
//               <Text style={styles.errorText}>{errors.lastName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your Age"
//               value={formData.age}
//               onChangeText={(text) => handleChange("age", text)}
//               keyboardType="numeric"
//             />

//             <Text style={styles.formLabel}>Date of Birth</Text>
//             <View style={styles.dobFields}>
//               <TextInput
//                 style={[styles.dobInput, errors.dobDay && touched.dobDay && styles.inputError]}
//                 placeholder="DD"
//                 value={formData.dobDay}
//                 onChangeText={(text) => handleChange("dobDay", text)}
//                 onBlur={() => handleBlur("dobDay")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobMonth && touched.dobMonth && styles.inputError]}
//                 placeholder="MM"
//                 value={formData.dobMonth}
//                 onChangeText={(text) => handleChange("dobMonth", text)}
//                 onBlur={() => handleBlur("dobMonth")}
//                 keyboardType="number-pad"
//                 maxLength={2}
//               />
//               <TextInput
//                 style={[styles.dobInput, errors.dobYear && touched.dobYear && styles.inputError]}
//                 placeholder="YYYY"
//                 value={formData.dobYear}
//                 onChangeText={(text) => handleChange("dobYear", text)}
//                 onBlur={() => handleBlur("dobYear")}
//                 keyboardType="number-pad"
//                 maxLength={4}
//               />
//             </View>
//             {(errors.dobDay && touched.dobDay) || (errors.dobMonth && touched.dobMonth) || (errors.dobYear && touched.dobYear) ? (
//               <Text style={styles.errorText}>Date of birth is required</Text>
//             ) : null}
//           </View>
//         );

//       case 3:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(3)}
//             </View>
//             <Text style={styles.stepTitle}>Religion & Community</Text>

//             <CustomDropdown
//               label="Religion"
//               value={formData.religion}
//               onSelect={(value) => handleChange("religion", value)}
//               options={dropdownOptions.religion}
//               placeholder="Select Religion"
//               error={errors.religion}
//               touched={touched.religion}
//               iconName="place-of-worship"
//             />

//             <CustomDropdown
//               label="Mother Tongue"
//               value={formData.motherTongue}
//               onSelect={(value) => handleChange("motherTongue", value)}
//               options={dropdownOptions.motherTongue}
//               placeholder="Select Mother Tongue"
//               iconName="language"
//             />

//             <CustomDropdown
//               label="Caste"
//               value={formData.caste}
//               onSelect={(value) => handleChange("caste", value)}
//               options={dropdownOptions.caste}
//               placeholder="Select Caste"
//               error={errors.caste}
//               touched={touched.caste}
//               iconName="users"
//             />

//             <TextInput
//               style={styles.formInput}
//               placeholder="Sub-community (optional)"
//               value={formData.subCaste}
//               onChangeText={(text) => handleChange("subCaste", text)}
//             />
//           </View>
//         );

//       case 4:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(4)}
//             </View>
//             <Text style={styles.stepTitle}>Where do you live?</Text>

//             <CustomDropdown
//               label="Country"
//               value={formData.country}
//               onSelect={(value) => handleChange("country", value)}
//               options={dropdownOptions.country}
//               placeholder="Select Country"
//               error={errors.country}
//               touched={touched.country}
//               iconName="globe"
//             />

//             <TextInput
//               style={[styles.formInput, errors.city && touched.city && styles.inputError]}
//               placeholder="City"
//               value={formData.city}
//               onChangeText={(text) => handleChange("city", text)}
//               onBlur={() => handleBlur("city")}
//             />
//             {errors.city && touched.city && (
//               <Text style={styles.errorText}>{errors.city}</Text>
//             )}
//           </View>
//         );

//       case 5:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(5)}
//             </View>
//             <Text style={styles.stepTitle}>Marital Status & Height</Text>

//             <CustomDropdown
//               label="Marital Status"
//               value={formData.maritalStatus}
//               onSelect={(value) => handleChange("maritalStatus", value)}
//               options={dropdownOptions.maritalStatus}
//               placeholder="Select Marital Status"
//               error={errors.maritalStatus}
//               touched={touched.maritalStatus}
//               iconName="ring"
//             />

//             <TextInput
//               style={styles.formInput}
//               placeholder="Number Of Children (Optional)"
//               value={formData.noOfChildren}
//               onChangeText={(text) => handleChange("noOfChildren", text)}
//               keyboardType="numeric"
//             />

//             <CustomDropdown
//               label="Height"
//               value={formData.height}
//               onSelect={(value) => handleChange("height", value)}
//               options={dropdownOptions.height}
//               placeholder="Select Height"
//               error={errors.height}
//               touched={touched.height}
//               iconName="ruler-vertical"
//             />
//           </View>
//         );

//       case 6:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(6)}
//             </View>
//             <Text style={styles.stepTitle}>Education</Text>

//             <CustomDropdown
//               label="Highest Education"
//               value={formData.highestEducation}
//               onSelect={(value) => handleChange("highestEducation", value)}
//               options={dropdownOptions.highestEducation}
//               placeholder="Select Highest Education"
//               error={errors.highestEducation}
//               touched={touched.highestEducation}
//               iconName="graduation-cap"
//             />

//             <TextInput
//               style={[styles.formInput, errors.collegeName && touched.collegeName && styles.inputError]}
//               placeholder="College / University Name"
//               value={formData.collegeName}
//               onChangeText={(text) => handleChange("collegeName", text)}
//               onBlur={() => handleBlur("collegeName")}
//             />
//             {errors.collegeName && touched.collegeName && (
//               <Text style={styles.errorText}>{errors.collegeName}</Text>
//             )}
//           </View>
//         );

//       case 7:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(7)}
//             </View>
//             <Text style={styles.stepTitle}>Career Details</Text>

//             <CustomDropdown
//               label="Sector"
//               value={formData.sector}
//               onSelect={(value) => handleChange("sector", value)}
//               options={dropdownOptions.sector}
//               placeholder="Select Sector"
//               error={errors.sector}
//               touched={touched.sector}
//               iconName="building"
//             />

//             <TextInput
//               style={[styles.formInput, errors.occupation && touched.occupation && styles.inputError]}
//               placeholder="Your Profession"
//               value={formData.occupation}
//               onChangeText={(text) => handleChange("occupation", text)}
//               onBlur={() => handleBlur("occupation")}
//             />
//             {errors.occupation && touched.occupation && (
//               <Text style={styles.errorText}>{errors.occupation}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.companyName && touched.companyName && styles.inputError]}
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChangeText={(text) => handleChange("companyName", text)}
//               onBlur={() => handleBlur("companyName")}
//             />
//             {errors.companyName && touched.companyName && (
//               <Text style={styles.errorText}>{errors.companyName}</Text>
//             )}

//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter your working Location"
//               value={formData.workLocation}
//               onChangeText={(text) => handleChange("workLocation", text)}
//             />

//             <CustomDropdown
//               label="Annual Income"
//               value={formData.annualIncome}
//               onSelect={(value) => handleChange("annualIncome", value)}
//               options={dropdownOptions.annualIncome}
//               placeholder="Select Annual Income"
//               iconName="money-bill-wave"
//             />
//           </View>
//         );

//       case 8:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(8)}
//             </View>
//             <Text style={styles.stepTitle}>Contact Information</Text>

//             <TextInput
//               style={[styles.formInput, errors.emailId && touched.emailId && styles.inputError]}
//               placeholder="Email Address"
//               value={formData.emailId}
//               onChangeText={(text) => handleChange("emailId", text)}
//               onBlur={() => handleBlur("emailId")}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             {errors.emailId && touched.emailId && (
//               <Text style={styles.errorText}>{errors.emailId}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.mobileNumber && touched.mobileNumber && styles.inputError]}
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChangeText={(text) => handleChange("mobileNumber", text)}
//               onBlur={() => handleBlur("mobileNumber")}
//               keyboardType="phone-pad"
//               maxLength={10}
//             />
//             {errors.mobileNumber && touched.mobileNumber && (
//               <Text style={styles.errorText}>{errors.mobileNumber}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.createPassword && touched.createPassword && styles.inputError]}
//               placeholder="Create Password"
//               value={formData.createPassword}
//               onChangeText={(text) => handleChange("createPassword", text)}
//               onBlur={() => handleBlur("createPassword")}
//               secureTextEntry
//             />
//             {errors.createPassword && touched.createPassword && (
//               <Text style={styles.errorText}>{errors.createPassword}</Text>
//             )}

//             <TextInput
//               style={[styles.formInput, errors.confirmPassword && touched.confirmPassword && styles.inputError]}
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChangeText={(text) => handleChange("confirmPassword", text)}
//               onBlur={() => handleBlur("confirmPassword")}
//               secureTextEntry
//             />
//             {errors.confirmPassword && touched.confirmPassword && (
//               <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//             )}
//           </View>
//         );

//       case 9:
//         return (
//           <View style={styles.stepContainer}>
//             <View style={styles.stepIcon}>
//               {renderStepIcon(9)}
//             </View>
//             <Text style={styles.stepTitle}>Confirm & Submit</Text>
//             <Text style={styles.confirmationText}>
//               Please review your details and submit your profile.
//             </Text>

//             <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//               <Icon name="check-circle" size={20} color="#fff" style={styles.submitIcon} />
//               <Text style={styles.submitBtnText}>Create My Profile</Text>
//             </TouchableOpacity>
//           </View>
//         );

//       default:
//         return null;
//     }
//   };

//   // Success Modal
//   const SuccessModal = () => (
//     <Modal
//       visible={showSuccessModal}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={handleSuccessModalClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.successModal}>
//           <View style={styles.successIcon}>
//             <Icon name="check-circle" size={50} color="#16a34a" />
//           </View>
          
//           <Text style={styles.successTitle}>Registration Successful!</Text>
          
//           <Text style={styles.successMessage}>
//             Your account has been created successfully. Please save your login credentials:
//           </Text>

//           <View style={styles.credentialsContainer}>
//             <View style={styles.credentialItem}>
//               <Icon name="user" size={16} color="#16a34a" style={styles.credentialIcon} />
//               <View style={styles.credentialTextContainer}>
//                 <Text style={styles.credentialLabel}>Email:</Text>
//                 <Text style={styles.credentialValue}>{generatedCredentials?.Email}</Text>
//               </View>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Icon name="lock" size={16} color="#16a34a" style={styles.credentialIcon} />
//               <View style={styles.credentialTextContainer}>
//                 <Text style={styles.credentialLabel}>Password:</Text>
//                 <Text style={styles.credentialValue}>{generatedCredentials?.password}</Text>
//               </View>
//             </View>
            
//             <View style={styles.credentialItem}>
//               <Icon name="envelope" size={16} color="#16a34a" style={styles.credentialIcon} />
//               <View style={styles.credentialTextContainer}>
//                 <Text style={styles.credentialLabel}>Email:</Text>
//                 <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.importantNote}>
//             ⚠️ Important: Please save these credentials. You'll need them to login.
//           </Text>

//           <View style={styles.modalButtons}>
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.loginButton]} 
//               onPress={handleLoginWithCredentials}
//             >
//               <Icon name="sign-in-alt" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.loginButtonText}>Login Now</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={[styles.modalButton, styles.closeButton]} 
//               onPress={handleSuccessModalClose}
//             >
//               <Icon name="times" size={16} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <Modal
//       visible={show}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={handleCloseRegister}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           {/* Header with Back Button */}
//           <View style={styles.header}>
//             <TouchableOpacity 
//               style={styles.backButton} 
//               onPress={handleCloseRegister}
//             >
//               <Icon name="times" size={20} color="#333" />
//               <Text style={styles.backButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.formWrapper}>
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar,
//                     { width: `${(step / totalSteps) * 100}%` }
//                   ]} 
//                 />
//               </View>

//               {/* Profile Progress Section */}
//               <View style={styles.profileProgressContainer}>
//                 <Text style={styles.profileProgressText}>
//                   Profile Completion: {profileProgress}%
//                 </Text>
//                 <View style={styles.profileProgressBar}>
//                   <View 
//                     style={[
//                       styles.profileProgressFill,
//                       { width: `${profileProgress}%` }
//                     ]} 
//                   />
//                 </View>
//               </View>

//               {/* Step Indicator */}
//               <Text style={styles.stepIndicator}>
//                 Step {step} of {totalSteps}
//               </Text>

//               {/* Step Content */}
//               <View style={styles.stepContent}>
//                 {renderStep()}
//               </View>

//               {/* Navigation Buttons */}
//               <View style={styles.navButtons}>
//                 {step > 1 && (
//                   <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
//                     <Icon name="arrow-left" size={16} color="#18c2b4" />
//                     <Text style={styles.backBtnText}>Back</Text>
//                   </TouchableOpacity>
//                 )}
//                 {step < totalSteps && (
//                   <TouchableOpacity style={styles.nextBtn} onPress={nextStep}>
//                     <Text style={styles.nextBtnText}>Next</Text>
//                     <Icon name="arrow-right" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Already have account link */}
//               <View style={styles.loginLinkContainer}>
//                 <Text style={styles.loginLinkText}>
//                   Already have an account?{" "}
//                   <Text 
//                     style={styles.loginLink} 
//                     onPress={onNavigateToLogin}
//                   >
//                     Login here
//                   </Text>
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* Success Modal */}
//       <SuccessModal />
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
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
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
//   // Profile Progress Styles
//   profileProgressContainer: {
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   profileProgressText: {
//     fontSize: 14,
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   profileProgressBar: {
//     height: 6,
//     backgroundColor: '#e9ecef',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   profileProgressFill: {
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
//   stepIcon: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#eafcff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     alignSelf: 'center',
//   },
//   stepContent: {
//     minHeight: 300,
//   },
//   stepContainer: {
//     alignItems: 'center',
//     width: '100%',
//   },
//   stepTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   subTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#495057',
//     textAlign: 'center',
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   confirmationText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   // Dropdown Styles
//   dropdownContainer: {
//     width: '100%',
//     marginBottom: 15,
//   },
//   dropdownLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginBottom: 8,
//   },
//   dropdown: {
//     width: '100%',
//     padding: 14,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   dropdownError: {
//     borderColor: '#dc3545',
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: '#212529',
//     flex: 1,
//   },
//   dropdownPlaceholder: {
//     fontSize: 16,
//     color: '#6c757d',
//     flex: 1,
//   },
//   dropdownErrorText: {
//     color: '#dc3545',
//     fontSize: 14,
//     marginTop: 4,
//     marginLeft: 4,
//   },
//   dropdownModalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',
//   },
//   dropdownModalContent: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     maxHeight: '80%',
//   },
//   dropdownModalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   dropdownModalTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   dropdownOption: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   dropdownOptionSelected: {
//     backgroundColor: '#eafcff',
//   },
//   dropdownOptionText: {
//     fontSize: 16,
//     color: '#495057',
//   },
//   dropdownOptionTextSelected: {
//     color: '#18c2b4',
//     fontWeight: '600',
//   },
//   // Form Input Styles
//   formGroup: {
//     marginBottom: 15,
//     width: '100%',
//   },
//   formLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginBottom: 8,
//     alignSelf: 'flex-start',
//     width: '100%',
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
//   inputError: {
//     borderColor: '#dc3545',
//   },
//   dobFields: {
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 15,
//     width: '100%',
//   },
//   dobInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 8,
//     padding: 14,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 14,
//     marginTop: -10,
//     marginBottom: 15,
//     paddingLeft: 5,
//     width: '100%',
//   },
//   navButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 25,
//     width: '100%',
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
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   submitIcon: {
//     marginRight: 4,
//   },
//   submitBtnText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loginLinkContainer: {
//     marginTop: 20,
//     paddingTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     width: '100%',
//   },
//   loginLinkText: {
//     color: '#495057',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   loginLink: {
//     color: '#18c2b4',
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   // Success Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   successModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     width: '90%',
//     maxWidth: 400,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   successIcon: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#e8f5e8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   successTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   successMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   credentialsContainer: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     marginBottom: 15,
//   },
//   credentialItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 5,
//   },
//   credentialIcon: {
//     marginRight: 10,
//   },
//   credentialTextContainer: {
//     flex: 1,
//   },
//   credentialLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   credentialValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#16a34a',
//     backgroundColor: '#f0f9f0',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     marginTop: 4,
//   },
//   importantNote: {
//     fontSize: 12,
//     color: '#dc2626',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     gap: 10,
//     width: '100%',
//   },
//   modalButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   loginButton: {
//     backgroundColor: '#16a34a',
//   },
//   closeButton: {
//     backgroundColor: '#6b7280',
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   buttonIcon: {
//     marginRight: 4,
//   },
// });

// export default Register;








import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  Modal,
  FlatList,
  ActivityIndicator
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

// Custom Dropdown Component
const CustomDropdown = ({ 
  label, 
  value, 
  onSelect, 
  options, 
  placeholder, 
  error = null, 
  touched = false, 
  iconName = "chevron-down"
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>{label}</Text>
        <TouchableOpacity
          style={[
            styles.dropdown,
            error && touched && styles.dropdownError
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={value ? styles.dropdownText : styles.dropdownPlaceholder}>
            {value || placeholder}
          </Text>
          <Icon name={iconName} size={16} color="#666" />
        </TouchableOpacity>
        {error && touched && (
          <Text style={styles.dropdownErrorText}>{error}</Text>
        )}
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.dropdownModalOverlay}>
          <View style={styles.dropdownModalContent}>
            <View style={styles.dropdownModalHeader}>
              <Text style={styles.dropdownModalTitle}>{label}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="times" size={20} color="#333" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownOption,
                    value === item && styles.dropdownOptionSelected
                  ]}
                  onPress={() => {
                    onSelect(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={[
                    styles.dropdownOptionText,
                    value === item && styles.dropdownOptionTextSelected
                  ]}>
                    {item}
                  </Text>
                  {value === item && (
                    <Icon name="check" size={16} color="#18c2b4" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const Register = ({ 
  show, 
  onClose, 
  onRegistrationSuccess, 
  onNavigateToLogin 
}) => {
  // Your backend API URL - CHANGE THIS TO YOUR BACKEND URL
  const BACKEND_URL = 'http://YOUR_SERVER_IP:8080/api';
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [profileProgress, setProfileProgress] = useState(0);

  // Form state - WITHOUT FORMIK
  const [formData, setFormData] = useState({
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
    highestEducation: "",
    collegeName: "",
    sector: "",
    occupation: "",
    companyName: "",
    annualIncome: "",
    workLocation: "",
    emailId: "",
    mobileNumber: "",
    createPassword: "",
    confirmPassword: "",
    role: "user",
  });

  // Dropdown options data
  const dropdownOptions = {
    profileFor: ["Myself", "My Son", "My Daughter", "My Brother", "My Sister", "My Friend", "My Relative"],
    gender: ["Male", "Female"],
    religion: ["Christian", "Hindu", "Muslim", "Sikh"],
    motherTongue: ["English", "Hindi", "Kannada", "Malayali", "Marathi", "Punjabi", "Tamil", "Telugu"],
    caste: ["BC", "OC", "SC & ST", "OBC"],
    country: ["India", "USA", "UK", "Canada", "Australia"],
    maritalStatus: ["Single", "Divorced", "Widowed"],
    height: [
      "4 ft 5 in (134 cm)",
      "5 ft 0 in (152 cm)",
      "5 ft 5 in (165 cm)",
      "6 ft 0 in (183 cm)",
      "6 ft 5 in (196 cm)"
    ],
    highestEducation: [
      "B.E / B.Tech",
      "Degree",
      "Intermediate",
      "M.E / M.Tech",
      "MBA",
      "PhD",
      "Tenth"
    ],
    sector: ["Business", "Government", "Private", "Self Employed", "Not Working"],
    annualIncome: [
      "Below ₹ 1 Lakh yearly",
      "₹ 1 to 3 Lakh yearly",
      "₹ 3 to 5 Lakh yearly",
      "₹ 5 to 7 Lakh yearly",
      "₹ 7 to 10 Lakh yearly",
      "₹ 10 to 15 Lakh yearly",
      "Above ₹ 15 Lakh yearly"
    ]
  };

  const totalSteps = 9;

  // Icon configuration for each step
  const stepIcons = {
    1: { name: "user-friends", color: "#18c2b4" },
    2: { name: "user", color: "#18c2b4" },
    3: { name: "book-open", color: "#18c2b4" },
    4: { name: "map-marker-alt", color: "#18c2b4" },
    5: { name: "user-check", color: "#18c2b4" },
    6: { name: "graduation-cap", color: "#18c2b4" },
    7: { name: "briefcase", color: "#18c2b4" },
    8: { name: "user-lock", color: "#18c2b4" },
    9: { name: "ring", color: "#18c2b4" }
  };

  // Calculate profile completion progress
  useEffect(() => {
    calculateProgress();
  }, [formData]);

  const calculateProgress = () => {
    const requiredFields = [
      'profileFor', 'firstName', 'lastName', 'dobDay', 'dobMonth', 'dobYear',
      'religion', 'caste', 'country', 'city', 'maritalStatus', 'height',
      'highestEducation', 'collegeName', 'sector', 'occupation', 'companyName',
      'emailId', 'mobileNumber', 'createPassword', 'confirmPassword'
    ];

    let filledFields = 0;
    requiredFields.forEach(field => {
      if (formData[field] && formData[field].toString().trim() !== '') {
        filledFields++;
      }
    });

    const progress = Math.round((filledFields / requiredFields.length) * 100);
    setProfileProgress(progress);
  };

  // Handle input change - WITHOUT FORMIK
  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  // Manual validation - WITHOUT YUP
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "profileFor":
        if (!value) error = "Select one";
        break;
      case "gender":
        if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !value) {
          error = "Select gender";
        }
        break;
      case "firstName":
        if (!value) error = "Required";
        break;
      case "lastName":
        if (!value) error = "Required";
        break;
      case "dobDay":
        if (!value) error = "Required";
        else if (parseInt(value) < 1 || parseInt(value) > 31) error = "Invalid day";
        break;
      case "dobMonth":
        if (!value) error = "Required";
        else if (parseInt(value) < 1 || parseInt(value) > 12) error = "Invalid month";
        break;
      case "dobYear":
        if (!value) error = "Required";
        else if (parseInt(value) < 1900 || parseInt(value) > new Date().getFullYear()) 
          error = "Invalid year";
        break;
      case "religion":
        if (!value) error = "Required";
        break;
      case "caste":
        if (!value) error = "Required";
        break;
      case "country":
        if (!value) error = "Required";
        break;
      case "city":
        if (!value) error = "Required";
        break;
      case "maritalStatus":
        if (!value) error = "Required";
        break;
      case "height":
        if (!value) error = "Required";
        break;
      case "highestEducation":
        if (!value) error = "Required";
        break;
      case "collegeName":
        if (!value) error = "Required";
        break;
      case "sector":
        if (!value) error = "Required";
        break;
      case "occupation":
        if (!value) error = "Required";
        break;
      case "companyName":
        if (!value) error = "Required";
        break;
      case "emailId":
        if (!value) {
          error = "Required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email";
        }
        break;
      case "mobileNumber":
        if (!value) {
          error = "Required";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Enter 10-digit mobile";
        }
        break;
      case "createPassword":
        if (!value) {
          error = "Required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Required";
        } else if (value !== formData.createPassword) {
          error = "Passwords must match";
        }
        break;
      default:
        break;
    }

    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Step validation - WITHOUT YUP
  const validateStep = (step) => {
    const stepErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.profileFor) stepErrors.profileFor = "Select one";
        if (["Myself", "My Friend", "My Relative"].includes(formData.profileFor) && !formData.gender) {
          stepErrors.gender = "Select gender";
        }
        break;
      case 2:
        if (!formData.firstName) stepErrors.firstName = "Required";
        if (!formData.lastName) stepErrors.lastName = "Required";
        if (!formData.dobDay) stepErrors.dobDay = "Required";
        if (!formData.dobMonth) stepErrors.dobMonth = "Required";
        if (!formData.dobYear) stepErrors.dobYear = "Required";
        break;
      case 3:
        if (!formData.religion) stepErrors.religion = "Required";
        if (!formData.caste) stepErrors.caste = "Required";
        break;
      case 4:
        if (!formData.country) stepErrors.country = "Required";
        if (!formData.city) stepErrors.city = "Required";
        break;
      case 5:
        if (!formData.maritalStatus) stepErrors.maritalStatus = "Required";
        if (!formData.height) stepErrors.height = "Required";
        break;
      case 6:
        if (!formData.highestEducation) stepErrors.highestEducation = "Required";
        if (!formData.collegeName) stepErrors.collegeName = "Required";
        break;
      case 7:
        if (!formData.sector) stepErrors.sector = "Required";
        if (!formData.occupation) stepErrors.occupation = "Required";
        if (!formData.companyName) stepErrors.companyName = "Required";
        break;
      case 8:
        if (!formData.emailId) {
          stepErrors.emailId = "Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
          stepErrors.emailId = "Invalid email";
        }
        if (!formData.mobileNumber) {
          stepErrors.mobileNumber = "Required";
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
          stepErrors.mobileNumber = "Enter 10-digit mobile";
        }
        if (!formData.createPassword) stepErrors.createPassword = "Required";
        if (formData.createPassword && formData.createPassword.length < 6) {
          stepErrors.createPassword = "Password must be at least 6 characters";
        }
        if (!formData.confirmPassword) {
          stepErrors.confirmPassword = "Required";
        } else if (formData.confirmPassword !== formData.createPassword) {
          stepErrors.confirmPassword = "Passwords must match";
        }
        break;
      default:
        break;
    }

    return stepErrors;
  };

  const nextStep = () => {
    const stepErrors = validateStep(step);
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      // Mark all fields in current step as touched
      const stepFields = Object.keys(stepErrors);
      const touchedFields = {};
      stepFields.forEach(field => {
        touchedFields[field] = true;
      });
      setTouched(prev => ({ ...prev, ...touchedFields }));
      return;
    }

    if (step < totalSteps) {
      setStep(step + 1);
      setErrors({});
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  // Format date for API
  const formatDateForAPI = (day, month, year) => {
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  // Generate username
  const generateUsername = (firstName, lastName, email) => {
    const first = firstName?.toLowerCase() || 'user';
    const lastInitial = lastName?.charAt(0)?.toLowerCase() || '';
    const randomNum = Math.floor(100 + Math.random() * 900);
    return `${first}${lastInitial}${randomNum}`;
  };

  // BACKEND API CALL WITH AXIOS - NO FORMIK, NO REACT NAVIGATION
  const handleSubmit = async () => {
    try {
      const finalErrors = validateStep(8); // Validate all fields
      if (Object.keys(finalErrors).length > 0) {
        setErrors(finalErrors);
        Alert.alert("Validation Error", "Please fix all errors before submitting.");
        return;
      }

      setLoading(true);

      // Prepare data for backend
      const apiData = {
        profileFor: formData.profileFor,
        gender: formData.gender,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formatDateForAPI(formData.dobDay, formData.dobMonth, formData.dobYear),
        age: formData.age ? parseInt(formData.age) : null,
        religion: formData.religion,
        caste: formData.caste,
        subCaste: formData.subCaste || null,
        motherTongue: formData.motherTongue || null,
        country: formData.country,
        city: formData.city,
        maritalStatus: formData.maritalStatus,
        noOfChildren: formData.noOfChildren ? parseInt(formData.noOfChildren) : 0,
        height: formData.height,
        highestEducation: formData.highestEducation,
        collegeName: formData.collegeName,
        sector: formData.sector,
        occupation: formData.occupation,
        companyName: formData.companyName,
        annualIncome: formData.annualIncome || null,
        workLocation: formData.workLocation || null,
        email: formData.emailId,
        mobileNumber: formData.mobileNumber,
        password: formData.createPassword,
        role: "user"
      };

      console.log("Sending to backend:", apiData);

      // AXIOS POST REQUEST TO BACKEND
      const response = await axios.post(`${BACKEND_URL}/profiles/register`, apiData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("Backend response:", response.data);

      // Show success
      const username = generateUsername(formData.firstName, formData.lastName, formData.emailId);
      setGeneratedCredentials({
        username: username,
        email: formData.emailId,
        password: formData.createPassword
      });
      setShowSuccessModal(true);
      
      // Call success callback if provided
      if (onRegistrationSuccess) {
        onRegistrationSuccess(response.data);
      }

      Alert.alert("Success", "Registration completed successfully!");

    } catch (error) {
      console.error("API Error:", error);
      
      let errorMessage = "Registration failed. Please try again.";
      
      if (error.response) {
        // Backend returned an error
        console.error("Backend error data:", error.response.data);
        errorMessage = error.response.data.message || error.response.data.error || errorMessage;
      } else if (error.request) {
        // No response received
        console.error("No response:", error.request);
        errorMessage = "No response from server. Check your connection.";
      } else {
        // Request setup error
        console.error("Request error:", error.message);
      }
      
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    resetForm();
    setShowSuccessModal(false);
    if (onClose) onClose();
  };

  const handleLoginWithCredentials = () => {
    resetForm();
    setShowSuccessModal(false);
    if (onClose) onClose();
    
    if (onNavigateToLogin && generatedCredentials?.email) {
      onNavigateToLogin(generatedCredentials.email);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
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
      highestEducation: "",
      collegeName: "",
      sector: "",
      occupation: "",
      companyName: "",
      annualIncome: "",
      workLocation: "",
      emailId: "",
      mobileNumber: "",
      createPassword: "",
      confirmPassword: "",
      role: "user",
    });
    setErrors({});
    setTouched({});
    setProfileProgress(0);
  };

  const handleCloseRegister = () => {
    resetForm();
    if (onClose) onClose();
  };

  const renderStepIcon = (stepNumber) => {
    const iconConfig = stepIcons[stepNumber];
    if (!iconConfig) return null;

    return (
      <Icon 
        name={iconConfig.name} 
        size={28} 
        color={iconConfig.color} 
      />
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(1)}
            </View>
            <Text style={styles.stepTitle}>This profile is for</Text>

            <CustomDropdown
              label="Profile For"
              value={formData.profileFor}
              onSelect={(value) => {
                handleChange("profileFor", value);
                if (value === 'My Son' || value === 'My Brother') {
                  handleChange("gender", "Male");
                } else if (value === 'My Daughter' || value === 'My Sister') {
                  handleChange("gender", "Female");
                } else {
                  handleChange("gender", "");
                }
              }}
              options={dropdownOptions.profileFor}
              // options={dropdownOptions.MyDaughter}
              // options={dropdownOptions.MyBrother}
              // options={dropdownOptions.MyFriend}
              // options={dropdownOptions.MySister}
              // options={dropdownOptions.MyRelative}

                            
                            




              //  ["Myself", "My Son", "My Daughter", "My Brother", "My Sister", "My Friend", "My Relative"]
              placeholder="Select Profile For"
              error={errors.profileFor}
              touched={touched.profileFor}
              iconName="user-friends"
            />

            {['Myself', 'My Friend', 'My Relative'].includes(formData.profileFor) && (
              <CustomDropdown
                label={
                  formData.profileFor === 'My Friend'
                    ? 'Is your friend Male or Female?'
                    : formData.profileFor === 'My Relative'
                    ? 'Is your relative Male or Female?'
                    : 'Are you Male or Female?'
                }
                value={formData.gender}
                onSelect={(value) => handleChange("gender", value)}
                options={dropdownOptions.gender}
                placeholder="Select Gender"
                error={errors.gender}
                touched={touched.gender}
                iconName="venus-mars"
              />
            )}
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(2)}
            </View>
            <Text style={styles.stepTitle}>Tell us about you</Text>

            <TextInput
              style={[styles.formInput, errors.firstName && touched.firstName && styles.inputError]}
              placeholder="First Name"
              value={formData.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
              onBlur={() => handleBlur("firstName")}
            />
            {errors.firstName && touched.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}

            <TextInput
              style={[styles.formInput, errors.lastName && touched.lastName && styles.inputError]}
              placeholder="Last Name"
              value={formData.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
              onBlur={() => handleBlur("lastName")}
            />
            {errors.lastName && touched.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}

            <TextInput
              style={styles.formInput}
              placeholder="Enter your Age"
              value={formData.age}
              onChangeText={(text) => handleChange("age", text)}
              keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Date of Birth</Text>
            <View style={styles.dobFields}>
              <TextInput
                style={[styles.dobInput, errors.dobDay && touched.dobDay && styles.inputError]}
                placeholder="DD"
                value={formData.dobDay}
                onChangeText={(text) => handleChange("dobDay", text)}
                onBlur={() => handleBlur("dobDay")}
                keyboardType="number-pad"
                maxLength={2}
              />
              <TextInput
                style={[styles.dobInput, errors.dobMonth && touched.dobMonth && styles.inputError]}
                placeholder="MM"
                value={formData.dobMonth}
                onChangeText={(text) => handleChange("dobMonth", text)}
                onBlur={() => handleBlur("dobMonth")}
                keyboardType="number-pad"
                maxLength={2}
              />
              <TextInput
                style={[styles.dobInput, errors.dobYear && touched.dobYear && styles.inputError]}
                placeholder="YYYY"
                value={formData.dobYear}
                onChangeText={(text) => handleChange("dobYear", text)}
                onBlur={() => handleBlur("dobYear")}
                keyboardType="number-pad"
                maxLength={4}
              />
            </View>
            {(errors.dobDay && touched.dobDay) || (errors.dobMonth && touched.dobMonth) || (errors.dobYear && touched.dobYear) ? (
              <Text style={styles.errorText}>Date of birth is required</Text>
            ) : null}
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(3)}
            </View>
            <Text style={styles.stepTitle}>Religion & Community</Text>

            <CustomDropdown
              label="Religion"
              value={formData.religion}
              onSelect={(value) => handleChange("religion", value)}
              options={dropdownOptions.religion}
              placeholder="Select Religion"
              error={errors.religion}
              touched={touched.religion}
              iconName="place-of-worship"
            />

            <CustomDropdown
              label="Mother Tongue"
              value={formData.motherTongue}
              onSelect={(value) => handleChange("motherTongue", value)}
              options={dropdownOptions.motherTongue}
              placeholder="Select Mother Tongue"
              iconName="language"
            />

            <CustomDropdown
              label="Caste"
              value={formData.caste}
              onSelect={(value) => handleChange("caste", value)}
              options={dropdownOptions.caste}
              placeholder="Select Caste"
              error={errors.caste}
              touched={touched.caste}
              iconName="users"
            />

            <TextInput
              style={styles.formInput}
              placeholder="Sub-community (optional)"
              value={formData.subCaste}
              onChangeText={(text) => handleChange("subCaste", text)}
            />
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(4)}
            </View>
            <Text style={styles.stepTitle}>Where do you live?</Text>

            <CustomDropdown
              label="Country"
              value={formData.country}
              onSelect={(value) => handleChange("country", value)}
              options={dropdownOptions.country}
              placeholder="Select Country"
              error={errors.country}
              touched={touched.country}
              iconName="globe"
            />

            <TextInput
              style={[styles.formInput, errors.city && touched.city && styles.inputError]}
              placeholder="City"
              value={formData.city}
              onChangeText={(text) => handleChange("city", text)}
              onBlur={() => handleBlur("city")}
            />
            {errors.city && touched.city && (
              <Text style={styles.errorText}>{errors.city}</Text>
            )}
          </View>
        );

      case 5:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(5)}
            </View>
            <Text style={styles.stepTitle}>Marital Status & Height</Text>

            <CustomDropdown
              label="Marital Status"
              value={formData.maritalStatus}
              onSelect={(value) => handleChange("maritalStatus", value)}
              options={dropdownOptions.maritalStatus}
              placeholder="Select Marital Status"
              error={errors.maritalStatus}
              touched={touched.maritalStatus}
              iconName="ring"
            />

            <TextInput
              style={styles.formInput}
              placeholder="Number Of Children (Optional)"
              value={formData.noOfChildren}
              onChangeText={(text) => handleChange("noOfChildren", text)}
              keyboardType="numeric"
            />

            <CustomDropdown
              label="Height"
              value={formData.height}
              onSelect={(value) => handleChange("height", value)}
              options={dropdownOptions.height}
              placeholder="Select Height"
              error={errors.height}
              touched={touched.height}
              iconName="ruler-vertical"
            />
          </View>
        );

      case 6:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(6)}
            </View>
            <Text style={styles.stepTitle}>Education</Text>

            <CustomDropdown
              label="Highest Education"
              value={formData.highestEducation}
              onSelect={(value) => handleChange("highestEducation", value)}
              options={dropdownOptions.highestEducation}
              placeholder="Select Highest Education"
              error={errors.highestEducation}
              touched={touched.highestEducation}
              iconName="graduation-cap"
            />

            <TextInput
              style={[styles.formInput, errors.collegeName && touched.collegeName && styles.inputError]}
              placeholder="College / University Name"
              value={formData.collegeName}
              onChangeText={(text) => handleChange("collegeName", text)}
              onBlur={() => handleBlur("collegeName")}
            />
            {errors.collegeName && touched.collegeName && (
              <Text style={styles.errorText}>{errors.collegeName}</Text>
            )}
          </View>
        );

      case 7:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(7)}
            </View>
            <Text style={styles.stepTitle}>Career Details</Text>

            <CustomDropdown
              label="Sector"
              value={formData.sector}
              onSelect={(value) => handleChange("sector", value)}
              options={dropdownOptions.sector}
              placeholder="Select Sector"
              error={errors.sector}
              touched={touched.sector}
              iconName="building"
            />

            <TextInput
              style={[styles.formInput, errors.occupation && touched.occupation && styles.inputError]}
              placeholder="Your Profession"
              value={formData.occupation}
              onChangeText={(text) => handleChange("occupation", text)}
              onBlur={() => handleBlur("occupation")}
            />
            {errors.occupation && touched.occupation && (
              <Text style={styles.errorText}>{errors.occupation}</Text>
            )}

            <TextInput
              style={[styles.formInput, errors.companyName && touched.companyName && styles.inputError]}
              placeholder="Company Name"
              value={formData.companyName}
              onChangeText={(text) => handleChange("companyName", text)}
              onBlur={() => handleBlur("companyName")}
            />
            {errors.companyName && touched.companyName && (
              <Text style={styles.errorText}>{errors.companyName}</Text>
            )}

            <TextInput
              style={styles.formInput}
              placeholder="Enter your working Location"
              value={formData.workLocation}
              onChangeText={(text) => handleChange("workLocation", text)}
            />

            <CustomDropdown
              label="Annual Income"
              value={formData.annualIncome}
              onSelect={(value) => handleChange("annualIncome", value)}
              options={dropdownOptions.annualIncome}
              placeholder="Select Annual Income"
              iconName="money-bill-wave"
            />
          </View>
        );

      case 8:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(8)}
            </View>
            <Text style={styles.stepTitle}>Contact Information</Text>

            <TextInput
              style={[styles.formInput, errors.emailId && touched.emailId && styles.inputError]}
              placeholder="Email Address"
              value={formData.emailId}
              onChangeText={(text) => handleChange("emailId", text)}
              onBlur={() => handleBlur("emailId")}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.emailId && touched.emailId && (
              <Text style={styles.errorText}>{errors.emailId}</Text>
            )}

            <TextInput
              style={[styles.formInput, errors.mobileNumber && touched.mobileNumber && styles.inputError]}
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChangeText={(text) => handleChange("mobileNumber", text)}
              onBlur={() => handleBlur("mobileNumber")}
              keyboardType="phone-pad"
              maxLength={10}
            />
            {errors.mobileNumber && touched.mobileNumber && (
              <Text style={styles.errorText}>{errors.mobileNumber}</Text>
            )}

            <TextInput
              style={[styles.formInput, errors.createPassword && touched.createPassword && styles.inputError]}
              placeholder="Create Password"
              value={formData.createPassword}
              onChangeText={(text) => handleChange("createPassword", text)}
              onBlur={() => handleBlur("createPassword")}
              secureTextEntry
            />
            {errors.createPassword && touched.createPassword && (
              <Text style={styles.errorText}>{errors.createPassword}</Text>
            )}

            <TextInput
              style={[styles.formInput, errors.confirmPassword && touched.confirmPassword && styles.inputError]}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
              onBlur={() => handleBlur("confirmPassword")}
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View>
        );

      case 9:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.stepIcon}>
              {renderStepIcon(9)}
            </View>
            <Text style={styles.stepTitle}>Confirm & Submit</Text>
            <Text style={styles.confirmationText}>
              Please review your details and submit your profile.
            </Text>

            <TouchableOpacity 
              style={[styles.submitBtn, loading && styles.submitBtnDisabled]} 
              onPress={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <Icon name="check-circle" size={20} color="#fff" style={styles.submitIcon} />
                  <Text style={styles.submitBtnText}>Create My Profile</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
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
              <Icon name="user" size={16} color="#16a34a" style={styles.credentialIcon} />
              <View style={styles.credentialTextContainer}>
                <Text style={styles.credentialLabel}>Username:</Text>
                <Text style={styles.credentialValue}>{generatedCredentials?.username}</Text>
              </View>
            </View>
            
            <View style={styles.credentialItem}>
              <Icon name="envelope" size={16} color="#16a34a" style={styles.credentialIcon} />
              <View style={styles.credentialTextContainer}>
                <Text style={styles.credentialLabel}>Email:</Text>
                <Text style={styles.credentialValue}>{generatedCredentials?.email}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.importantNote}>
            ⚠️ Your password has been securely stored. You can login with your email and password.
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

  if (!show) return null;

  return (
    <Modal
      visible={show}
      animationType="slide"
      transparent={true}
      onRequestClose={handleCloseRegister}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header with Close Button */}
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

              {/* Profile Progress Section */}
              <View style={styles.profileProgressContainer}>
                <Text style={styles.profileProgressText}>
                  Profile Completion: {profileProgress}%
                </Text>
                <View style={styles.profileProgressBar}>
                  <View 
                    style={[
                      styles.profileProgressFill,
                      { width: `${profileProgress}%` }
                    ]} 
                  />
                </View>
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
  header: {
    paddingTop: 30,
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
  profileProgressContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  profileProgressText: {
    fontSize: 14,
    color: '#495057',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '500',
  },
  profileProgressBar: {
    height: 6,
    backgroundColor: '#e9ecef',
    borderRadius: 3,
    overflow: 'hidden',
  },
  profileProgressFill: {
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
  stepContainer: {
    alignItems: 'center',
    width: '100%',
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 30,
  },
  confirmationText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  // Dropdown Styles
  dropdownContainer: {
    width: '100%',
    marginBottom: 15,
  },
  dropdownLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#495057',
    marginBottom: 8,
  },
  dropdown: {
    width: '100%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownError: {
    borderColor: '#dc3545',
  },
  dropdownText: {
    fontSize: 16,
    color: '#212529',
    flex: 1,
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: '#6c757d',
    flex: 1,
  },
  dropdownErrorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
  dropdownModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  dropdownModalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  dropdownModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  dropdownModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  dropdownOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownOptionSelected: {
    backgroundColor: '#eafcff',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#495057',
  },
  dropdownOptionTextSelected: {
    color: '#18c2b4',
    fontWeight: '600',
  },
  // Form Input Styles
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#495057',
    marginBottom: 8,
    alignSelf: 'flex-start',
    width: '100%',
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
  inputError: {
    borderColor: '#dc3545',
  },
  dobFields: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
    width: '100%',
  },
  dobInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 15,
    paddingLeft: 5,
    width: '100%',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '100%',
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
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  submitBtnDisabled: {
    backgroundColor: '#a0d8d3',
  },
  submitIcon: {
    marginRight: 4,
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
    width: '100%',
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
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
  },
  credentialIcon: {
    marginRight: 10,
  },
  credentialTextContainer: {
    flex: 1,
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
    marginTop: 4,
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









/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import RegisterForm from './src/screens/RegisterForm';
// import RegisterBasicDetails from './src/screens/RegisterBasicDetails';
// import RegisterReligionDetails from './src/screens/RegisterReligionDetails';
// import RegisterPersonalDetails from './src/screens/RegisterPersonalDetails';
// import RegisterProfessionalDetails from './src/screens/RegisterProfessionalDetails';
// import RegisterAboutYourself from './src/screens/RegisterAboutYourself';
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';

// // Safe image imports with fallbacks
// const images = {
//   Sanath: require('./src/assets/Sanath.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
//   priya: require('./src/assets/priya.jpg'),
//   anjali: require('./src/assets/anjali.jpg'),
//   sneha: require('./src/assets/sneha.jpg'),
//   divya: require('./src/assets/divya.jpg'),
//   srivalli: require('./src/assets/srivalli.jpg'),
//   anitha: require('./src/assets/anitha.jpg'),
//   vijay: require('./src/assets/vijay.jpg'),
//   rahul: require('./src/assets/rahul.jpg'),
// };

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [registrationData, setRegistrationData] = useState({});
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo user for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName);
//     setCurrentScreen(screenName);
//   };

//   // Handle successful login - navigate to home
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to home:', userData);
    
//     // Find the complete user data from registeredUsers
//     const completeUserData = registeredUsers.find(
//       user => user.username === userData.username || user.email === userData.email
//     );
    
//     console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

//     if (completeUserData) {
//       setCurrentUser(completeUserData);
//     } else {
//       // Fallback to the basic user data from login
//       console.log('⚠️ No complete user data found, using basic login data');
//       setCurrentUser(userData);
//     }
    
//     navigateToScreen('dashboard');
//   };

//   // Handle logout - navigate back to login
//   const handleLogout = () => {
//     setCurrentUser(null);
//     navigateToScreen('login');
//   };

//   // Handle profile update from EditProfileScreen
//   const handleProfileUpdate = (updatedData) => {
//     console.log('🔄 Updating user profile with:', updatedData);
    
//     // Update current user state
//     setCurrentUser(prevUser => ({
//       ...prevUser,
//       ...updatedData
//     }));

//     // Update in registeredUsers array
//     setRegisteredUsers(prevUsers => 
//       prevUsers.map(user => 
//         user.username === currentUser.username 
//           ? { ...user, ...updatedData }
//           : user
//       )
//     );

//     Alert.alert("Success", "Profile updated successfully!");
//     navigateToScreen('profile');
//   };

//   // Handle registration completion - Store user and navigate to login
//   const handleRegistrationComplete = (finalFormData) => {
//     try {
//       // Combine all registration data from all steps
//       const completeUserData = { 
//         ...registrationData, 
//         ...finalFormData,
//         registrationDate: new Date().toISOString(),
//         userId: Math.random().toString(36).substr(2, 9),
//         isRegistered: true
//       };

//       console.log('📦 Complete Registration Data:', completeUserData);

//       // Extract username and password for login
//       const username = completeUserData.username || completeUserData.email;
//       const password = completeUserData.password;

//       if (!username || !password) {
//         Alert.alert(
//           "Registration Error", 
//           "Username and password are required for login."
//         );
//         return;
//       }

//       // Check if username already exists
//       const userExists = registeredUsers.find(
//         user => user.username.toLowerCase() === username.toLowerCase()
//       );

//       if (userExists) {
//         Alert.alert(
//           "Registration Failed",
//           "Username already exists. Please choose a different username."
//         );
//         return;
//       }

//       // Create complete user profile
//       const newUser = {
//         username: username,
//         password: password,
//         fullName: completeUserData.fullName,
//         gender: completeUserData.gender,
//         dateOfBirth: completeUserData.dateOfBirth,
//         age: completeUserData.age,
//         email: completeUserData.email,
//         mobileNumber: completeUserData.mobileNumber,
//         religion: completeUserData.religion,
//         caste: completeUserData.caste,
//         subCaste: completeUserData.subCaste,
//         dosham: completeUserData.dosham,
//         willingToMarryOtherCaste: completeUserData.willingToMarryOtherCaste,
//         height: completeUserData.height,
//         maritalStatus: completeUserData.maritalStatus,
//         noOfChildren: completeUserData.noOfChildren,
//         childrenLivingWithYou: completeUserData.childrenLivingWithYou,
//         familyStatus: completeUserData.familyStatus,
//         familyType: completeUserData.familyType,
//         highestEducation: completeUserData.highestEducation,
//         occupation: completeUserData.occupation,
//         annualIncome: completeUserData.annualIncome,
//         employedIn: completeUserData.employedIn,
//         workLocation: completeUserData.workLocation,
//         state: completeUserData.state,
//         aboutYourself: completeUserData.aboutYourself,
//         interests: completeUserData.interests || ["Product Management", "Cricket", "Gym", "Travel"],
//         registrationDate: completeUserData.registrationDate,
//         userId: completeUserData.userId,
//         isRegistered: true
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Show success alert
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\n📧 Username: ${username}\n🔑 Password: ${password}\n\nPlease login to continue.`,
//         [
//           {
//             text: "Login Now",
//             onPress: () => {
//               setRegistrationData({});
//               navigateToScreen('login');
//             }
//           }
//         ]
//       );

//     } catch (error) {
//       console.error('❌ Registration error:', error);
//       Alert.alert("Registration Failed", "Something went wrong. Please try again.");
//     }
//   };

//   // Navigation handlers for registration steps
//   const handleNavigateToBasicDetails = (formData) => {
//     const loginData = {
//       username: formData.username,
//       password: formData.password,
//       mobileNumber: formData.mobileNumber,
//       fullName: formData.fullName
//     };
//     setRegistrationData(loginData);
//     navigateToScreen('registerBasicDetails');
//   };

//   const handleNavigateToReligionDetails = (basicDetailsData) => {
//     const completeData = { ...registrationData, ...basicDetailsData };
//     setRegistrationData(completeData);
//     navigateToScreen('registerReligionDetails');
//   };

//   const handleNavigateToPersonalDetails = (religionDetailsData) => {
//     const completeData = { ...registrationData, ...religionDetailsData };
//     setRegistrationData(completeData);
//     navigateToScreen('registerPersonalDetails');
//   };

//   const handleNavigateToProfessionalDetails = (personalDetailsData) => {
//     const completeData = { ...registrationData, ...personalDetailsData };
//     setRegistrationData(completeData);
//     navigateToScreen('registerProfessionalDetails');
//   };

//   const handleNavigateToAboutYourself = (professionalDetailsData) => {
//     const completeData = { ...registrationData, ...professionalDetailsData };
//     setRegistrationData(completeData);
//     navigateToScreen('registerAboutYourself');
//   };

//   // Back navigation handlers
//   const handleNavigateBackToRegister = () => navigateToScreen('register');
//   const handleNavigateBackToBasicDetails = () => navigateToScreen('registerBasicDetails');
//   const handleNavigateBackToReligionDetails = () => navigateToScreen('registerReligionDetails');
//   const handleNavigateBackToPersonalDetails = () => navigateToScreen('registerPersonalDetails');
//   const handleNavigateBackToProfessionalDetails = () => navigateToScreen('registerProfessionalDetails');

//   // Profile navigation handlers
//   const handleNavigateToProfile = () => navigateToScreen('profile');
//   const handleNavigateToEditProfile = () => navigateToScreen('editprofile');
//   const handleNavigateBackFromProfile = () => navigateToScreen('dashboard');
//   const handleNavigateBackFromEditProfile = () => navigateToScreen('profile');
//   const handleCancelEditProfile = () => navigateToScreen('profile');

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);

//   // Screen routing
//   if (currentScreen === 'splash') {
//     return (
//       <SplashScreen
//         backgroundImage={images.Sanath}
//         onFinish={() => navigateToScreen('onboarding')}
//       />
//     );
//   }

//   if (currentScreen === 'onboarding') {
//     return (
//       <OnboardingScreen
//         images={images}
//         onComplete={() => navigateToScreen('login')}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'login') {
//     return (
//       <LoginForm
//         backgroundImage={images.group37}
//         onLoginSuccess={handleLoginSuccess}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         registeredUsers={registeredUsers}
//       />
//     );
//   }

//   if (currentScreen === 'register') {
//     return (
//       <RegisterForm
//         backgroundImage={images.group37}
//         onNavigateToLogin={() => navigateToScreen('login')}
//         onNavigateToBasicDetails={handleNavigateToBasicDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerBasicDetails') {
//     return (
//       <RegisterBasicDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToRegister}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToReligionDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerReligionDetails') {
//     return (
//       <RegisterReligionDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToBasicDetails}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToPersonalDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerPersonalDetails') {
//     return (
//       <RegisterPersonalDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToReligionDetails}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToProfessionalDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerProfessionalDetails') {
//     return (
//       <RegisterProfessionalDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToPersonalDetails}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToAboutYourself}
//       />
//     );
//   }

//   if (currentScreen === 'registerAboutYourself') {
//     return (
//       <RegisterAboutYourself
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToProfessionalDetails}
//         onRegisterComplete={handleRegistrationComplete}
//       />
//     );
//   }

//   if (currentScreen === 'dashboard') {
//     return (
//       <Dashboard 
//         user={currentUser} 
//         onLogout={handleLogout}
//         profileImages={images}
//         navigation={{ 
//           navigate: (screen) => {
//             if (screen === 'editprofile') {
//               handleNavigateToEditProfile();
//             } else if (screen === 'profile') {
//               handleNavigateToProfile();
//             } else if (screen === 'matches') {
//               navigateToScreen('matches');
//             } else if (screen === 'chat') {
//               navigateToScreen('chat');
//             }
//           },
//           goBack: () => navigateToScreen('dashboard')
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'matches') {
//     return (
//       <MatchesScreen 
//         user={currentUser}
//         onLogout={handleLogout}
//         profileImages={images}
//         navigation={{ 
//           navigate: navigateToScreen,
//           goBack: () => navigateToScreen('dashboard')
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'chat') {
//     return (
//       <ChatScreen 
//         route={{ params: { profile: {} } }}
//         navigation={{ 
//           navigate: navigateToScreen, 
//           goBack: () => navigateToScreen('matches') 
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'profile') {
//     return (
//       <ProfileScreen 
//         user={currentUser}
//         onNavigateBack={handleNavigateBackFromProfile}
//         onLogout={handleLogout}
//         navigation={{
//           navigate: (screen) => {
//             if (screen === 'editprofile') {
//               handleNavigateToEditProfile();
//             }
//           },
//           goBack: handleNavigateBackFromProfile
//         }}
//       />
//     );
//   }

//   // EDIT PROFILE SCREEN
//   if (currentScreen === 'editprofile') {
//     return (
//       <EditProfileScreen 
//         user={currentUser}
//         onSave={handleProfileUpdate}
//         onCancel={handleCancelEditProfile}
//         navigation={{
//           navigate: navigateToScreen,
//           goBack: handleNavigateBackFromEditProfile
//         }}
//       />
//     );
//   }


// //   // Fallback - if no screen matches, go to login
//   return (
//     <LoginForm
//       backgroundImage={images.group37}
//       onLogin={() => {}}
//       onNavigateToRegister={() => navigateToScreen('register')}
//       onLoginSuccess={handleLoginSuccess}
//       registeredUsers={registeredUsers}
//     />
//   );
// }




// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register'; // Import the single Register component
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';

// // Safe image imports with fallbacks
// const images = {
//   Sanath: require('./src/assets/Sanath.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
//   priya: require('./src/assets/priya.jpg'),
//   anjali: require('./src/assets/anjali.jpg'),
//   sneha: require('./src/assets/sneha.jpg'),
//   divya: require('./src/assets/divya.jpg'),
//   srivalli: require('./src/assets/srivalli.jpg'),
//   anitha: require('./src/assets/anitha.jpg'),
//   vijay: require('./src/assets/vijay.jpg'),
//   rahul: require('./src/assets/rahul.jpg'),
// };

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo user for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName);
//     setCurrentScreen(screenName);
//   };

//   // Handle successful login - navigate to home
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to home:', userData);
    
//     // Find the complete user data from registeredUsers
//     const completeUserData = registeredUsers.find(
//       user => user.username === userData.username || user.email === userData.email
//     );
    
//     console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

//     if (completeUserData) {
//       setCurrentUser(completeUserData);
//     } else {
//       // Fallback to the basic user data from login
//       console.log('⚠️ No complete user data found, using basic login data');
//       setCurrentUser(userData);
//     }
    
//     navigateToScreen('dashboard');
//   };

//   // Handle logout - navigate back to login
//   const handleLogout = () => {
//     setCurrentUser(null);
//     navigateToScreen('login');
//   };

//   // Handle profile update from EditProfileScreen
//   const handleProfileUpdate = (updatedData) => {
//     console.log('🔄 Updating user profile with:', updatedData);
    
//     // Update current user state
//     setCurrentUser(prevUser => ({
//       ...prevUser,
//       ...updatedData
//     }));

//     // Update in registeredUsers array
//     setRegisteredUsers(prevUsers => 
//       prevUsers.map(user => 
//         user.username === currentUser.username 
//           ? { ...user, ...updatedData }
//           : user
//       )
//     );

//     Alert.alert("Success", "Profile updated successfully!");
//     navigateToScreen('profile');
//   };

//   // Handle registration completion from the single Register component
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Generate username from email or use a default
//       const username = userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.password || "default123"; // In real app, user should set password

//       if (!userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === userData.email.toLowerCase()
//       );

//       if (userExists) {
//         Alert.alert(
//           "Registration Failed",
//           "User with this email already exists. Please login instead."
//         );
//         return;
//       }

//       // Create complete user profile from form data
//       const newUser = {
//         username: username,
//         password: password,
//         fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
//         gender: userData.gender,
//         dateOfBirth: `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: userData.email,
//         mobileNumber: userData.mobile,
//         religion: userData.religion,
//         community: userData.community,
//         subCommunity: userData.subCommunity,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestQualification,
//         collegeName: userData.collegeName,
//         occupation: userData.workAs,
//         companyName: userData.companyName,
//         annualIncome: userData.income,
//         workSector: userData.workWith,
//         registrationDate: new Date().toISOString(),
//         userId: Math.random().toString(36).substr(2, 9),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"] // Default interests
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Show success alert
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\n📧 Email: ${userData.email}\n\nPlease login to continue.`,
//         [
//           {
//             text: "Login Now",
//             onPress: () => {
//               navigateToScreen('login');
//             }
//           }
//         ]
//       );

//     } catch (error) {
//       console.error('❌ Registration error:', error);
//       Alert.alert("Registration Failed", "Something went wrong. Please try again.");
//     }
//   };

//   // Profile navigation handlers
//   const handleNavigateToProfile = () => navigateToScreen('profile');
//   const handleNavigateToEditProfile = () => navigateToScreen('editprofile');
//   const handleNavigateBackFromProfile = () => navigateToScreen('dashboard');
//   const handleNavigateBackFromEditProfile = () => navigateToScreen('profile');
//   const handleCancelEditProfile = () => navigateToScreen('profile');

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);

//   // Screen routing
//   if (currentScreen === 'splash') {
//     return (
//       <SplashScreen
//         backgroundImage={images.Sanath}
//         onFinish={() => navigateToScreen('onboarding')}
//       />
//     );
//   }

//   if (currentScreen === 'onboarding') {
//     return (
//       <OnboardingScreen
//         images={images}
//         onComplete={() => navigateToScreen('login')}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'login') {
//     return (
//       <LoginForm
//         backgroundImage={images.group37}
//         onLoginSuccess={handleLoginSuccess}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         registeredUsers={registeredUsers}
//       />
//     );
//   }

//   if (currentScreen === 'register') {
//     return (
//       <Register 
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'dashboard') {
//     return (
//       <Dashboard 
//         user={currentUser} 
//         onLogout={handleLogout}
//         profileImages={images}
//         navigation={{ 
//           navigate: (screen) => {
//             if (screen === 'editprofile') {
//               handleNavigateToEditProfile();
//             } else if (screen === 'profile') {
//               handleNavigateToProfile();
//             } else if (screen === 'matches') {
//               navigateToScreen('matches');
//             } else if (screen === 'chat') {
//               navigateToScreen('chat');
//             }
//           },
//           goBack: () => navigateToScreen('dashboard')
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'matches') {
//     return (
//       <MatchesScreen 
//         user={currentUser}
//         onLogout={handleLogout}
//         profileImages={images}
//         navigation={{ 
//           navigate: navigateToScreen,
//           goBack: () => navigateToScreen('dashboard')
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'chat') {
//     return (
//       <ChatScreen 
//         route={{ params: { profile: {} } }}
//         navigation={{ 
//           navigate: navigateToScreen, 
//           goBack: () => navigateToScreen('matches') 
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'profile') {
//     return (
//       <ProfileScreen 
//         user={currentUser}
//         onNavigateBack={handleNavigateBackFromProfile}
//         onLogout={handleLogout}
//         navigation={{
//           navigate: (screen) => {
//             if (screen === 'editprofile') {
//               handleNavigateToEditProfile();
//             }
//           },
//           goBack: handleNavigateBackFromProfile
//         }}
//       />
//     );
//   }

//   // EDIT PROFILE SCREEN
//   if (currentScreen === 'editprofile') {
//     return (
//       <EditProfileScreen 
//         user={currentUser}
//         onSave={handleProfileUpdate}
//         onCancel={handleCancelEditProfile}
//         navigation={{
//           navigate: navigateToScreen,
//           goBack: handleNavigateBackFromEditProfile
//         }}
//       />
//     );
//   }

//   // Fallback - if no screen matches, go to login
//   return (
//     <LoginForm
//       backgroundImage={images.group37}
//       onLoginSuccess={handleLoginSuccess}
//       onNavigateToRegister={() => navigateToScreen('register')}
//       registeredUsers={registeredUsers}
//     />
//   );
// }
























// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register'; // Import the single Register component
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';

// // Safe image imports with fallbacks
// const images = {
//   Sanath: require('./src/assets/Sanath.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
//   priya: require('./src/assets/priya.jpg'),
//   anjali: require('./src/assets/anjali.jpg'),
//   sneha: require('./src/assets/sneha.jpg'),
//   divya: require('./src/assets/divya.jpg'),
//   srivalli: require('./src/assets/srivalli.jpg'),
//   anitha: require('./src/assets/anitha.jpg'),
//   vijay: require('./src/assets/vijay.jpg'),
//   rahul: require('./src/assets/rahul.jpg'),
// };

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo user for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName);
//     setCurrentScreen(screenName);
//   };

//   // Handle successful login - navigate to home
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to home:', userData);
    
//     // Find the complete user data from registeredUsers
//     const completeUserData = registeredUsers.find(
//       user => user.username === userData.username || user.email === userData.email
//     );
    
//     console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

//     if (completeUserData) {
//       setCurrentUser(completeUserData);
//     } else {
//       // Fallback to the basic user data from login
//       console.log('⚠️ No complete user data found, using basic login data');
//       setCurrentUser(userData);
//     }
    
//     navigateToScreen('dashboard');
//   };

//   // Handle logout - navigate back to login
//   const handleLogout = () => {
//     setCurrentUser(null);
//     navigateToScreen('login');
//   };

//   // Handle profile update from EditProfileScreen
//   const handleProfileUpdate = (updatedData) => {
//     console.log('🔄 Updating user profile with:', updatedData);
    
//     // Update current user state
//     setCurrentUser(prevUser => ({
//       ...prevUser,
//       ...updatedData
//     }));

//     // Update in registeredUsers array
//     setRegisteredUsers(prevUsers => 
//       prevUsers.map(user => 
//         user.username === currentUser.username 
//           ? { ...user, ...updatedData }
//           : user
//       )
//     );

//     Alert.alert("Success", "Profile updated successfully!");
//     navigateToScreen('profile');
//   };

//   // Handle registration completion from the single Register component
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Generate username from email or use a default
//       const username = userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.password || "default123"; // In real app, user should set password

//       if (!userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === userData.email.toLowerCase()
//       );

//       if (userExists) {
//         Alert.alert(
//           "Registration Failed",
//           "User with this email already exists. Please login instead."
//         );
//         return;
//       }

//       // Create complete user profile from form data
//       const newUser = {
//         username: username,
//         password: password,
//         fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
//         gender: userData.gender,
//         dateOfBirth: `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: userData.email,
//         mobileNumber: userData.mobile,
//         religion: userData.religion,
//         community: userData.community,
//         subCommunity: userData.subCommunity,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestQualification,
//         collegeName: userData.collegeName,
//         occupation: userData.workAs,
//         companyName: userData.companyName,
//         annualIncome: userData.income,
//         workSector: userData.workWith,
//         registrationDate: new Date().toISOString(),
//         userId: Math.random().toString(36).substr(2, 9),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"] // Default interests
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Show success alert
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\n📧 Email: ${userData.email}\n\nPlease login to continue.`,
//         [
//           {
//             text: "Login Now",
//             onPress: () => {
//               navigateToScreen('login');
//             }
//           }
//         ]
//       );

//     } catch (error) {
//       console.error('❌ Registration error:', error);
//       Alert.alert("Registration Failed", "Something went wrong. Please try again.");
//     }
//   };

//   // Profile navigation handlers
//   const handleNavigateToProfile = () => navigateToScreen('profile');
//   const handleNavigateToEditProfile = () => navigateToScreen('editprofile');
//   const handleNavigateBackFromProfile = () => navigateToScreen('dashboard');
//   const handleNavigateBackFromEditProfile = () => navigateToScreen('profile');
//   const handleCancelEditProfile = () => navigateToScreen('profile');

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);

//   // Screen routing
//   if (currentScreen === 'splash') {
//     return (
//       <SplashScreen
//         backgroundImage={images.Sanath}
//         onFinish={() => navigateToScreen('onboarding')}
//       />
//     );
//   }

//   if (currentScreen === 'onboarding') {
//     return (
//       <OnboardingScreen
//         images={images}
//         onComplete={() => navigateToScreen('login')}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'login') {
//     return (
//       <LoginForm
//         backgroundImage={images.group37}
//         onLoginSuccess={handleLoginSuccess}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         registeredUsers={registeredUsers}
//       />
//     );
//   }

//   if (currentScreen === 'register') {
//     return (
//       <Register 
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'dashboard') {
//     return (
//       <Dashboard 
//         user={currentUser} 
//         onLogout={handleLogout}
//         profileImages={images}
//         navigation={{ 
//           navigate: (screen) => {
//             if (screen === 'editprofile') {
//               handleNavigateToEditProfile();
//             } else if (screen === 'profile') {
//               handleNavigateToProfile();
//             } else if (screen === 'matches') {
//               navigateToScreen('matches');
//             } else if (screen === 'chat') {
//               navigateToScreen('chat');
//             }
//           },
//           goBack: () => navigateToScreen('dashboard')
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'matches') {
//     return (
//       <MatchesScreen 
//         user={currentUser}
//         onLogout={handleLogout}
//         profileImages={images}
//         navigation={{ 
//           navigate: navigateToScreen,
//           goBack: () => navigateToScreen('dashboard')
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'chat') {
//     return (
//       <ChatScreen 
//         route={{ params: { profile: {} } }}
//         navigation={{ 
//           navigate: navigateToScreen, 
//           goBack: () => navigateToScreen('matches') 
//         }}
//       />
//     );
//   }

//   if (currentScreen === 'profile') {
//     return (
//       <ProfileScreen 
//         user={currentUser}
//         onNavigateBack={handleNavigateBackFromProfile}
//         onLogout={handleLogout}
//         navigation={{
//           navigate: (screen) => {
//             if (screen === 'editprofile') {
//               handleNavigateToEditProfile();
//             }
//           },
//           goBack: handleNavigateBackFromProfile
//         }}
//       />
//     );
//   }

//   // EDIT PROFILE SCREEN
//   if (currentScreen === 'editprofile') {
//     return (
//       <EditProfileScreen 
//         user={currentUser}
//         onSave={handleProfileUpdate}
//         onCancel={handleCancelEditProfile}
//         navigation={{
//           navigate: navigateToScreen,
//           goBack: handleNavigateBackFromEditProfile
//         }}
//       />
//     );
//   }

//   // Fallback - if no screen matches, go to login
//   return (
//     <LoginForm
//       backgroundImage={images.group37}
//       onLoginSuccess={handleLoginSuccess}
//       onNavigateToRegister={() => navigateToScreen('register')}
//       registeredUsers={registeredUsers}
//     />
//   );
// }











import React, { useState } from 'react';
import { Alert } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginForm from './src/screens/LoginForm';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import MatchesScreen from './src/screens/MatchesScreen';
import ChatScreen from "./src/screens/ChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfileScreen from './src/screens/EditProfileScreen';

// Safe image imports with fallbacks
const images = {
  Sanath: require('./src/assets/Sanath.jpg'),
  onboarding1: require('./src/assets/onboarding1.jpg'),
  onboarding2: require('./src/assets/onboarding2.jpg'),
  onboarding3: require('./src/assets/onboarding3.jpg'),
  group37: require('./src/assets/Group37.jpg'),
  priya: require('./src/assets/priya.jpg'),
  anjali: require('./src/assets/anjali.jpg'),
  sneha: require('./src/assets/sneha.jpg'),
  divya: require('./src/assets/divya.jpg'),
  srivalli: require('./src/assets/srivalli.jpg'),
  anitha: require('./src/assets/anitha.jpg'),
  vijay: require('./src/assets/vijay.jpg'),
  rahul: require('./src/assets/rahul.jpg'),
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentUser, setCurrentUser] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([
    // Demo users for testing
    {
      username: "demo",
      password: "demo123",
      email: "demo@example.com",
      mobile: "1234567890",
      fullName: "Demo User",
      firstName: "Demo",
      lastName: "User",
      isRegistered: true
    },
    {
      username: "user",
      password: "password123",
      email: "user@example.com",
      mobile: "9876543210",
      fullName: "Test User",
      firstName: "Test",
      lastName: "User",
      isRegistered: true
    }
  ]);

  const navigateToScreen = (screenName) => {
    console.log('🚀 NAVIGATION TRIGGERED:', screenName);
    setCurrentScreen(screenName);
  };

  // Handle successful login
  const handleLoginSuccess = (userData) => {
    console.log('✅ Login successful, navigating to dashboard:', userData);
    
    // Find the complete user data from registeredUsers
    const completeUserData = registeredUsers.find(
      user => user.username === userData.username || user.email === userData.email
    );
    
    console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

    if (completeUserData) {
      setCurrentUser(completeUserData);
    } else {
      // Fallback to the basic user data from login
      console.log('⚠️ No complete user data found, using basic login data');
      setCurrentUser(userData);
    }
    
    navigateToScreen('dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setShowRegisterModal(false);
    navigateToScreen('login');
  };

  // Handle profile update from EditProfileScreen
  const handleProfileUpdate = (updatedData) => {
    console.log('🔄 Updating user profile with:', updatedData);
    
    // Update current user state
    setCurrentUser(prevUser => ({
      ...prevUser,
      ...updatedData
    }));

    // Update in registeredUsers array
    setRegisteredUsers(prevUsers => 
      prevUsers.map(user => 
        user.username === currentUser.username 
          ? { ...user, ...updatedData }
          : user
      )
    );

    Alert.alert("Success", "Profile updated successfully!");
    navigateToScreen('profile');
  };

  // Handle registration completion
  const handleRegistrationComplete = (userData) => {
    try {
      console.log('📦 Registration Data Received:', userData);

      // Use the generated username from Register component or create one
      const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
      const password = userData.password || "default123";

      if (!userData.email) {
        Alert.alert(
          "Registration Error", 
          "Email is required for registration."
        );
        return;
      }

      // Check if user already exists
      const userExists = registeredUsers.find(
        user => user.email.toLowerCase() === userData.email.toLowerCase()
      );

      if (userExists) {
        Alert.alert(
          "Registration Failed",
          "User with this email already exists. Please login instead."
        );
        return;
      }

      // Create complete user profile from form data
      const newUser = {
        username: username,
        password: password,
        fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        gender: userData.gender,
        dateOfBirth: `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
        email: userData.email,
        mobileNumber: userData.mobile,
        religion: userData.religion,
        community: userData.community,
        subCommunity: userData.subCommunity,
        country: userData.country,
        city: userData.city,
        maritalStatus: userData.maritalStatus,
        height: userData.height,
        highestEducation: userData.highestQualification,
        collegeName: userData.collegeName,
        occupation: userData.workAs,
        companyName: userData.companyName,
        annualIncome: userData.income,
        workSector: userData.workWith,
        registrationDate: new Date().toISOString(),
        userId: Math.random().toString(36).substr(2, 9),
        isRegistered: true,
        interests: ["Reading", "Travel", "Music"]
      };

      // Add to registered users
      setRegisteredUsers(prevUsers => {
        const updatedUsers = [...prevUsers, newUser];
        console.log('✅ New user added. Total users:', updatedUsers.length);
        console.log('🔐 New user credentials:', { username, password });
        return updatedUsers;
      });
      
      console.log('✅ Registration Complete - New User:', newUser);
      
      // Close register modal
      setShowRegisterModal(false);
      
      // Show success message and navigate to login
      Alert.alert(
        "Registration Successful! 🎉",
        `Your account has been created successfully!\n\nUsername: ${username}\nPassword: ${password}\n\nPlease login to continue.`,
        [
          {
            text: "Login Now",
            onPress: () => {
              navigateToScreen('login');
            }
          }
        ]
      );

    } catch (error) {
      console.error('❌ Registration error:', error);
      Alert.alert("Registration Failed", "Something went wrong. Please try again.");
    }
  };

  // Profile navigation handlers
  const handleNavigateToProfile = () => navigateToScreen('profile');
  const handleNavigateToEditProfile = () => navigateToScreen('editprofile');
  const handleNavigateBackFromProfile = () => navigateToScreen('dashboard');
  const handleNavigateBackFromEditProfile = () => navigateToScreen('profile');
  const handleCancelEditProfile = () => navigateToScreen('profile');

  // Register modal handlers
  const handleOpenRegister = () => setShowRegisterModal(true);
  const handleCloseRegister = () => setShowRegisterModal(false);

  console.log('🔄 App Rendered - Current Screen:', currentScreen);
  console.log('👥 Registered Users Count:', registeredUsers.length);
  console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
  console.log('📝 Register Modal:', showRegisterModal);

  // Screen routing
  if (currentScreen === 'splash') {
    return (
      <SplashScreen
        backgroundImage={images.Sanath}
        onFinish={() => navigateToScreen('onboarding')}
      />
    );
  }

  if (currentScreen === 'onboarding') {
    return (
      <OnboardingScreen
        images={images}
        onComplete={() => navigateToScreen('login')}
        onNavigateToRegister={handleOpenRegister}
        onNavigateToLogin={() => navigateToScreen('login')}
      />
    );
  }

  if (currentScreen === 'login') {
    return (
      <>
        <LoginForm
          backgroundImage={images.group37}
          onLoginSuccess={handleLoginSuccess}
          onNavigateToRegister={handleOpenRegister}
          registeredUsers={registeredUsers}
        />
        <Register 
          show={showRegisterModal}
          onClose={handleCloseRegister}
          onRegistrationComplete={handleRegistrationComplete}
          onNavigateToLogin={() => {
            setShowRegisterModal(false);
            navigateToScreen('login');
          }}
        />
      </>
    );
  }

  if (currentScreen === 'dashboard') {
    return (
      <>
        <Dashboard 
          user={currentUser} 
          onLogout={handleLogout}
          profileImages={images}
          navigation={{ 
            navigate: (screen) => {
              if (screen === 'editprofile') {
                handleNavigateToEditProfile();
              } else if (screen === 'profile') {
                handleNavigateToProfile();
              } else if (screen === 'matches') {
                navigateToScreen('matches');
              } else if (screen === 'chat') {
                navigateToScreen('chat');
              }
            },
            goBack: () => navigateToScreen('dashboard')
          }}
        />
        <Register 
          show={showRegisterModal}
          onClose={handleCloseRegister}
          onRegistrationComplete={handleRegistrationComplete}
          onNavigateToLogin={() => {
            setShowRegisterModal(false);
            navigateToScreen('login');
          }}
        />
      </>
    );
  }

  if (currentScreen === 'matches') {
    return (
      <MatchesScreen 
        user={currentUser}
        onLogout={handleLogout}
        profileImages={images}
        navigation={{ 
          navigate: navigateToScreen,
          goBack: () => navigateToScreen('dashboard')
        }}
      />
    );
  }

  if (currentScreen === 'chat') {
    return (
      <ChatScreen 
        route={{ params: { profile: {} } }}
        navigation={{ 
          navigate: navigateToScreen, 
          goBack: () => navigateToScreen('matches') 
        }}
      />
    );
  }

  if (currentScreen === 'profile') {
    return (
      <ProfileScreen 
        user={currentUser}
        onNavigateBack={handleNavigateBackFromProfile}
        onLogout={handleLogout}
        navigation={{
          navigate: (screen) => {
            if (screen === 'editprofile') {
              handleNavigateToEditProfile();
            }
          },
          goBack: handleNavigateBackFromProfile
        }}
      />
    );
  }

  // EDIT PROFILE SCREEN
  if (currentScreen === 'editprofile') {
    return (
      <EditProfileScreen 
        user={currentUser}
        onSave={handleProfileUpdate}
        onCancel={handleCancelEditProfile}
        navigation={{
          navigate: navigateToScreen,
          goBack: handleNavigateBackFromEditProfile
        }}
      />
    );
  }

  // Fallback - if no screen matches, go to login
  return (
    <>
      <LoginForm
        backgroundImage={images.group37}
        onLoginSuccess={handleLoginSuccess}
        onNavigateToRegister={handleOpenRegister}
        registeredUsers={registeredUsers}
      />
      <Register 
        show={showRegisterModal}
        onClose={handleCloseRegister}
        onRegistrationComplete={handleRegistrationComplete}
        onNavigateToLogin={() => {
          setShowRegisterModal(false);
          navigateToScreen('login');
        }}
      />
    </>
  );
}
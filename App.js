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











// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register';
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
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo users for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       isRegistered: true
//     },
//     {
//       username: "user",
//       password: "password123",
//       email: "user@example.com",
//       mobile: "9876543210",
//       fullName: "Test User",
//       firstName: "Test",
//       lastName: "User",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName);
//     setCurrentScreen(screenName);
//   };

//   // Handle successful login
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to dashboard:', userData);
    
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

//   // Handle logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setShowRegisterModal(false);
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

//   // Handle registration completion
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Use the generated username from Register component or create one
//       const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.password || "default123";

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
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
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
//         interests: ["Reading", "Travel", "Music"]
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         console.log('🔐 New user credentials:', { username, password });
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Close register modal
//       setShowRegisterModal(false);
      
//       // Show success message and navigate to login
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\nUsername: ${username}\nPassword: ${password}\n\nPlease login to continue.`,
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

//   // Register modal handlers
//   const handleOpenRegister = () => setShowRegisterModal(true);
//   const handleCloseRegister = () => setShowRegisterModal(false);

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);
//   console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
//   console.log('📝 Register Modal:', showRegisterModal);

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
//         onNavigateToRegister={handleOpenRegister}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'login') {
//     return (
//       <>
//         <LoginForm
//           backgroundImage={images.group37}
//           onLoginSuccess={handleLoginSuccess}
//           onNavigateToRegister={handleOpenRegister}
//           registeredUsers={registeredUsers}
//         />
//         <Register 
//           show={showRegisterModal}
//           onClose={handleCloseRegister}
//           onRegistrationComplete={handleRegistrationComplete}
//           onNavigateToLogin={() => {
//             setShowRegisterModal(false);
//             navigateToScreen('login');
//           }}
//         />
//       </>
//     );
//   }

//   if (currentScreen === 'dashboard') {
//     return (
//       <>
//         <Dashboard 
//           user={currentUser} 
//           onLogout={handleLogout}
//           profileImages={images}
//           navigation={{ 
//             navigate: (screen) => {
//               if (screen === 'editprofile') {
//                 handleNavigateToEditProfile();
//               } else if (screen === 'profile') {
//                 handleNavigateToProfile();
//               } else if (screen === 'matches') {
//                 navigateToScreen('matches');
//               } else if (screen === 'chat') {
//                 navigateToScreen('chat');
//               }
//             },
//             goBack: () => navigateToScreen('dashboard')
//           }}
//         />
//         <Register 
//           show={showRegisterModal}
//           onClose={handleCloseRegister}
//           onRegistrationComplete={handleRegistrationComplete}
//           onNavigateToLogin={() => {
//             setShowRegisterModal(false);
//             navigateToScreen('login');
//           }}
//         />
//       </>
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
//     <>
//       <LoginForm
//         backgroundImage={images.group37}
//         onLoginSuccess={handleLoginSuccess}
//         onNavigateToRegister={handleOpenRegister}
//         registeredUsers={registeredUsers}
//       />
//       <Register 
//         show={showRegisterModal}
//         onClose={handleCloseRegister}
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={() => {
//           setShowRegisterModal(false);
//           navigateToScreen('login');
//         }}
//       />
//     </>
//   );
// }




// import React, { useState } from 'react';
// import { Alert, View } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register';
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
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo users for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       isRegistered: true
//     },
//     {
//       username: "user",
//       password: "password123",
//       email: "user@example.com",
//       mobile: "9876543210",
//       fullName: "Test User",
//       firstName: "Test",
//       lastName: "User",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName);
//     setCurrentScreen(screenName);
//   };

//   // Handle successful login
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to dashboard:', userData);
    
//     // Find the complete user data from registeredUsers
//     const completeUserData = registeredUsers.find(
//       user => user.username === userData.username || user.email === userData.email
//     );
    
//     console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

//     if (completeUserData) {
//       setCurrentUser(completeUserData);
//       navigateToScreen('dashboard');
//     } else {
//       // Fallback to the basic user data from login
//       console.log('⚠️ No complete user data found, using basic login data');
//       setCurrentUser(userData);
//       navigateToScreen('dashboard');
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setShowRegisterModal(false);
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

//   // Handle registration completion - MODIFIED: Navigate to login after registration
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Use the generated username from Register component or create one
//       const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.createPassword || userData.password || "default123";

//       if (!userData.emailId && !userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       const email = userData.emailId || userData.email;

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === email.toLowerCase()
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
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
//         gender: userData.gender,
//         dateOfBirth: userData.dateOfBirth || `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: email,
//         mobileNumber: userData.mobileNumber || userData.mobile,
//         religion: userData.religion,
//         community: userData.caste,
//         subCommunity: userData.subCaste,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestEducation,
//         collegeName: userData.collegeName,
//         occupation: userData.occupation,
//         companyName: userData.companyName,
//         annualIncome: userData.annualIncome,
//         workSector: userData.sector,
//         registrationDate: new Date().toISOString(),
//         userId: Math.random().toString(36).substr(2, 9),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"],
//         motherTongue: userData.motherTongue,
//         age: userData.age,
//         noOfChildren: userData.noOfChildren,
//         workLocation: userData.workLocation
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         console.log('🔐 New user credentials:', { username, password });
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // NEW: Navigate to login after registration
//       setShowRegisterModal(false);
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\nUsername: ${username}\nPassword: ${password}\n\nPlease login to continue.`,
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

//   // Register modal handlers
//   const handleOpenRegister = () => setShowRegisterModal(true);
//   const handleCloseRegister = () => {
//     setShowRegisterModal(false);
//   };

//   // Handle navigation to login with pre-filled email
//   const handleNavigateToLoginWithEmail = (email) => {
//     setShowRegisterModal(false);
//     navigateToScreen('login');
//   };

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);
//   console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
//   console.log('📝 Register Modal:', showRegisterModal);

//   // Screen routing - Clean and organized
//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case 'splash':
//         return (
//           <SplashScreen
//             backgroundImage={images.Sanath}
//             onFinish={() => navigateToScreen('onboarding')}
//           />
//         );

//       case 'onboarding':
//         return (
//           <OnboardingScreen
//             images={images}
//             onComplete={() => navigateToScreen('login')}
//             onNavigateToRegister={handleOpenRegister}
//             onNavigateToLogin={() => navigateToScreen('login')}
//           />
//         );

//       case 'login':
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );

//       case 'dashboard':
//         return (
//           <Dashboard 
//             user={currentUser} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   navigateToScreen('matches');
//                 } else if (screen === 'chat') {
//                   navigateToScreen('chat');
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'matches':
//         return (
//           <MatchesScreen 
//             user={currentUser}
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: navigateToScreen,
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'chat':
//         return (
//           <ChatScreen 
//             route={{ params: { profile: {} } }}
//             navigation={{ 
//               navigate: navigateToScreen, 
//               goBack: () => navigateToScreen('matches') 
//             }}
//           />
//         );

//       case 'profile':
//         return (
//           <ProfileScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromProfile}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: (screen) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 }
//               },
//               goBack: handleNavigateBackFromProfile
//             }}
//           />
//         );

//       case 'editprofile':
//         return (
//           <EditProfileScreen 
//             user={currentUser}
//             onSave={handleProfileUpdate}
//             onCancel={handleCancelEditProfile}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromEditProfile
//             }}
//           />
//         );

//       default:
//         // Fallback to login screen
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Main Screen Content */}
//       {renderCurrentScreen()}
      
//       {/* Global Register Modal - Can be opened from any screen */}
//       <Register 
//         show={showRegisterModal}
//         onClose={handleCloseRegister}
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={handleNavigateToLoginWithEmail}
//       />
//     </View>
//   );
// }







// import React, { useState } from 'react';
// import { Alert, View } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register';
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import SettingsScreen from './src/screens/settings';
// // import HomeScreen from './src/screens/HomeScreen';

// // Safe image imports with fallback
// const images = {
//   Sanath: require('./src/assets/Sanath.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
// };

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo users for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       isRegistered: true
//     },
//     {
//       username: "user",
//       password: "password123",
//       email: "user@example.com",
//       mobile: "9876543210",
//       fullName: "Test User",
//       firstName: "Test",
//       lastName: "User",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName, params = {}) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName, params);
//     setCurrentScreen(screenName);
//   };

//  // Handle successful login
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to dashboard:', userData);
    
//     // Find the complete user data from registeredUsers
//     const completeUserData = registeredUsers.find(
//       user => user.username === userData.username || user.email === userData.email
//     );
    
//     console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

//     if (completeUserData) {
//       setCurrentUser(completeUserData);
//       navigateToScreen('dashboard');
//     } else {
//       // Fallback to the basic user data from login
//       console.log('⚠️ No complete user data found, using basic login data');
//       setCurrentUser(userData);
//       navigateToScreen('dashboard');
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setShowRegisterModal(false);
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

//   // Handle registration completion
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Use the generated username from Register component or create one
//       const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.createPassword || userData.password || "default123";

//       if (!userData.emailId && !userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       const email = userData.emailId || userData.email;

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === email.toLowerCase()
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
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
//         gender: userData.gender,
//         dateOfBirth: userData.dateOfBirth || `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: email,
//         mobileNumber: userData.mobileNumber || userData.mobile,
//         religion: userData.religion,
//         community: userData.caste,
//         subCommunity: userData.subCaste,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestEducation,
//         collegeName: userData.collegeName,
//         occupation: userData.occupation,
//         companyName: userData.companyName,
//         annualIncome: userData.annualIncome,
//         workSector: userData.sector,
//         registrationDate: new Date().toISOString(),
//         userId: Math.random().toString(36).substr(2, 9),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"],
//         motherTongue: userData.motherTongue,
//         age: userData.age,
//         noOfChildren: userData.noOfChildren,
//         workLocation: userData.workLocation
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         console.log('🔐 New user credentials:', { username, password });
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Navigate to login after registration
//       setShowRegisterModal(false);
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\nUsername: ${username}\nPassword: ${password}\n\nPlease login to continue.`,
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

//   // Settings navigation handlers
//   const handleNavigateToSettings = () => navigateToScreen('settings');
//   const handleNavigateBackFromSettings = () => navigateToScreen('dashboard');

//   // Chat navigation handlers
//   const handleNavigateToChat = (chat = null) => {
//     navigateToScreen('chat');
//   };

//   const handleNavigateBackFromChat = () => navigateToScreen('matches');

//   // Register modal handlers
//   const handleOpenRegister = () => setShowRegisterModal(true);
//   const handleCloseRegister = () => {
//     setShowRegisterModal(false);
//   };

//   // Handle navigation to login with pre-filled email
//   const handleNavigateToLoginWithEmail = (email) => {
//     setShowRegisterModal(false);
//     navigateToScreen('login');
//   };

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);
//   console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
//   console.log('📝 Register Modal:', showRegisterModal);

//   // Screen routing - Clean and organized
//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case 'splash':
//         return (
//           <SplashScreen
//             backgroundImage={images.Sanath}
//             onFinish={() => navigateToScreen('onboarding')}
//           />
//         );

//       case 'onboarding':
//         return (
//           <OnboardingScreen
//             images={images}
//             onComplete={() => navigateToScreen('login')}
//             onNavigateToRegister={handleOpenRegister}
//             onNavigateToLogin={() => navigateToScreen('login')}
//           />
//         );

//       case 'login':
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );

//       case 'dashboard':
//         return (
//           <Dashboard 
//             user={currentUser} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   navigateToScreen('matches');
//                 } else if (screen === 'chat') {
//                   handleNavigateToChat(params.chat);
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'matches':
//         return (
//           <MatchesScreen 
//             user={currentUser}
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'chat') {
//                   handleNavigateToChat(params.chat);
//                 } else if (screen === 'dashboard') {
//                   navigateToScreen('dashboard');
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'chat':
//         return (
//           <ChatScreen 
//             navigation={{ 
//               navigate: navigateToScreen, 
//               goBack: handleNavigateBackFromChat 
//             }}
//           />
//         );

//       case 'profile':
//         return (
//           <ProfileScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromProfile}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: (screen) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: handleNavigateBackFromProfile
//             }}
//           />
//         );

//       case 'editprofile':
//         return (
//           <EditProfileScreen 
//             user={currentUser}
//             onSave={handleProfileUpdate}
//             onCancel={handleCancelEditProfile}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromEditProfile
//             }}
//           />
//         );

//       case 'settings':
//         return (
//           <SettingsScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromSettings}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromSettings
//             }}
//           />
//         );

//       default:
//         // Fallback to login screen
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Main Screen Content */}
//       {renderCurrentScreen()}
      
//       {/* Global Register Modal - Can be opened from any screen */}
//       <Register 
//         show={showRegisterModal}
//         onClose={handleCloseRegister}
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={handleNavigateToLoginWithEmail}
//       />
//     </View>
//   );
// }




// // App.js
// import React, { useState, useEffect } from 'react';
// import { Alert, View } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register';
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import SettingsScreen from './src/screens/settings';
// import PremiumSubscription from './src/screens/PremiumSubscription';

// // Safe image imports with fallback
// const images = {
//   Sanath: require('./src/assets/banner2.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
//   saathjanam: require('./src/assets/saathjanam_logo.jpg')
// };

// // Demo profiles for matches
// const demoProfiles = [
//   {
//     id: 1,
//     name: "Aarushi Sharma",
//     age: 24,
//     job: "Software Engineer",
//     education: "B.Tech",
//     location: "Hyderabad",
//     community: "Hindu | Brahmin",
//     height: "5'4\"",
//     image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//   },
//   {
//     id: 2,
//     name: "Arjun Reddy",
//     age: 27,
//     job: "Business Analyst",
//     education: "MBA",
//     location: "Bangalore",
//     community: "Hindu | Reddy",
//     height: "5'9\"",
//     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//   },
//   {
//     id: 3,
//     name: "Sneha Patil",
//     age: 25,
//     job: "Doctor",
//     education: "MBBS",
//     location: "Pune",
//     community: "Hindu | Maratha",
//     height: "5'5\"",
//     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//   },
//   {
//     id: 4,
//     name: "Rohit Verma",
//     age: 29,
//     job: "Civil Engineer",
//     education: "M.Tech",
//     location: "Delhi",
//     community: "Hindu | Kayastha",
//     height: "6'0\"",
//     image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//   }
// ];

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo users for testing
//     {
//       id: 1,
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       isRegistered: true
//     },
//     {
//       id: 2,
//       username: "user",
//       password: "password123",
//       email: "user@example.com",
//       mobile: "9876543210",
//       fullName: "Test User",
//       firstName: "Test",
//       lastName: "User",
//       isRegistered: true
//     }
//   ]);

//   // Initialize demo data
//   const initializeDemoData = () => {
//     // Add demo profiles to registered users
//     demoProfiles.forEach(profile => {
//       const existingUser = registeredUsers.find(user => user.id === profile.id);
//       if (!existingUser) {
//         setRegisteredUsers(prevUsers => [
//           ...prevUsers,
//           {
//             id: profile.id,
//             username: profile.name.toLowerCase().replace(' ', ''),
//             email: `${profile.name.toLowerCase().replace(' ', '')}@example.com`,
//             password: "password123",
//             fullName: profile.name,
//             firstName: profile.name.split(' ')[0],
//             lastName: profile.name.split(' ')[1] || '',
//             age: profile.age,
//             occupation: profile.job,
//             education: profile.education,
//             location: profile.location,
//             community: profile.community,
//             height: profile.height,
//             image: profile.image,
//             isRegistered: true
//           }
//         ]);
//       }
//     });
//   };

//   useEffect(() => {
//     initializeDemoData();
//   }, []);

//   const navigateToScreen = (screenName, params = {}) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName, params);
//     setCurrentScreen(screenName);
//   };

//   // Navigation handlers
//   const handleNavigateToMatches = () => {
//     navigateToScreen('matches');
//   };

//   const handleNavigateToChat = (chatId, otherUser) => {
//     navigateToScreen('chat', { chatId, otherUser });
//   };

//   const handleNavigateBackFromChat = () => {
//     navigateToScreen('matches');
//   };

//   // Handle successful login
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to dashboard:', userData);
    
//     // Find the complete user data from registeredUsers
//     const completeUserData = registeredUsers.find(
//       user => user.username === userData.username || user.email === userData.email
//     );
    
//     console.log('🔍 COMPLETE USER DATA FOUND:', completeUserData);

//     if (completeUserData) {
//       setCurrentUser(completeUserData);
//       navigateToScreen('dashboard');
//     } else {
//       // Fallback to the basic user data from login
//       console.log('⚠️ No complete user data found, using basic login data');
//       setCurrentUser(userData);
//       navigateToScreen('dashboard');
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setShowRegisterModal(false);
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

//   // Handle registration completion
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Use the generated username from Register component or create one
//       const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.createPassword || userData.password || "default123";

//       if (!userData.emailId && !userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       const email = userData.emailId || userData.email;

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === email.toLowerCase()
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
//         id: Math.random().toString(36).substr(2, 9),
//         username: username,
//         password: password,
//         fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
//         gender: userData.gender,
//         dateOfBirth: userData.dateOfBirth || `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: email,
//         mobileNumber: userData.mobileNumber || userData.mobile,
//         religion: userData.religion,
//         community: userData.caste,
//         subCommunity: userData.subCaste,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestEducation,
//         collegeName: userData.collegeName,
//         occupation: userData.occupation,
//         companyName: userData.companyName,
//         annualIncome: userData.annualIncome,
//         workSector: userData.sector,
//         registrationDate: new Date().toISOString(),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"],
//         motherTongue: userData.motherTongue,
//         age: userData.age,
//         noOfChildren: userData.noOfChildren,
//         workLocation: userData.workLocation
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         console.log('🔐 New user credentials:', { username, password });
//         return updatedUsers;
//       });

//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Navigate to login after registration
//       setShowRegisterModal(false);
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\nUsername: ${username}\nPassword: ${password}\n\nPlease login to continue.`,
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

//   // Settings navigation handlers
//   const handleNavigateToSettings = () => navigateToScreen('settings');
//   const handleNavigateBackFromSettings = () => navigateToScreen('dashboard');

//   // Premium Subscription navigation handlers
//   const handleNavigateToPremiumSubscription = () => {
//     console.log('💰 Navigating to Premium Subscription');
//     navigateToScreen('premiumsubscription');
//   };
  
//   const handleNavigateBackFromPremiumSubscription = () => {
//     console.log('🔙 Navigating back from Premium Subscription to Dashboard');
//     navigateToScreen('dashboard');
//   };

//   // Register modal handlers
//   const handleOpenRegister = () => setShowRegisterModal(true);
//   const handleCloseRegister = () => {
//     setShowRegisterModal(false);
//   };

//   // Handle navigation to login with pre-filled email
//   const handleNavigateToLoginWithEmail = (email) => {
//     setShowRegisterModal(false);
//     navigateToScreen('login');
//   };

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);
//   console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
//   console.log('📝 Register Modal:', showRegisterModal);

//   // Screen routing - Clean and organized
//   const renderCurrentScreen = () => {
//     console.log('📱 Rendering screen:', currentScreen);
    
//     switch (currentScreen) {
//       case 'splash':
//         return (
//           <SplashScreen
//             backgroundImage={images.Sanath}
//             logoImage={images.saathjanam}
//             onFinish={() => navigateToScreen('onboarding')}
//           />
//         );

//       case 'onboarding':
//         return (
//           <OnboardingScreen
//             images={images}
//             onComplete={() => navigateToScreen('login')}
//             onNavigateToRegister={handleOpenRegister}
//             onNavigateToLogin={() => navigateToScreen('login')}
//           />
//         );

//       case 'login':
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );

//       case 'dashboard':
//         return (
//           <Dashboard 
//             user={currentUser} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 console.log('📱 Dashboard navigation to:', screen);
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   handleNavigateToMatches();
//                 } else if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 } else if (screen === 'premiumsubscription') {
//                   handleNavigateToPremiumSubscription();
//                 }
//               },
//               goBack: () => {
//                 console.log('🔙 Dashboard goBack called');
//                 navigateToScreen('dashboard');
//               }
//             }}
//           />
//         );

//       case 'matches':
//         return (
//           <MatchesScreen 
//             user={currentUser}
//             registeredUsers={registeredUsers}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 console.log('📱 Matches navigation to:', screen);
//                 if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'dashboard') {
//                   navigateToScreen('dashboard');
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 } else if (screen === 'premiumsubscription') {
//                   handleNavigateToPremiumSubscription();
//                 }
//               },
//               goBack: () => {
//                 console.log('🔙 Matches goBack called');
//                 navigateToScreen('dashboard');
//               }
//             }}
//           />
//         );

//       case 'chat':
//         return (
//           <ChatScreen 
//             route={{ params: { chatId: null, otherUser: null } }} 
//             user={currentUser}
//             registeredUsers={registeredUsers}
//             navigation={{ 
//               navigate: navigateToScreen, 
//               goBack: handleNavigateBackFromChat 
//             }}
//           />
//         );

//       case 'profile':
//         return (
//           <ProfileScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromProfile}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: (screen) => {
//                 console.log('📱 Profile navigation to:', screen);
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 } else if (screen === 'premiumsubscription') {
//                   handleNavigateToPremiumSubscription();
//                 }
//               },
//               goBack: handleNavigateBackFromProfile
//             }}
//           />
//         );

//       case 'editprofile':
//         return (
//           <EditProfileScreen 
//             user={currentUser}
//             onSave={handleProfileUpdate}
//             onCancel={handleCancelEditProfile}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromEditProfile
//             }}
//           />
//         );

//       case 'settings':
//         return (
//           <SettingsScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromSettings}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromSettings
//             }}
//           />
//         );

//       case 'premiumsubscription':
//         console.log('💰 Rendering PremiumSubscription screen');
//         return (
//           <PremiumSubscription
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromPremiumSubscription
//             }}
//           />
//         );

//       default:
//         // Fallback to login screen
//         console.log('⚠️ Default screen - showing login');
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Main Screen Content */}
//       {renderCurrentScreen()}
      
//       {/* Global Register Modal - Can be opened from any screen */}
//       <Register 
//         show={showRegisterModal}
//         onClose={handleCloseRegister}
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={handleNavigateToLoginWithEmail}
//       />
//     </View>
//   );
// } 







// App.js
import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginForm from './src/screens/LoginForm';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import Requests from './src/screens/Requests'; // IMPORT REQUESTS SCREEN
import MatchesScreen from './src/screens/MatchesScreen';
import ChatScreen from "./src/screens/ChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfileScreen from './src/screens/EditProfileScreen';
import SettingsScreen from './src/screens/settings';
import PremiumSubscription from './src/screens/PremiumSubscription';

// Safe image imports with fallback
const images = {
  Sanath: require('./src/assets/banner2.jpg'),
  onboarding1: require('./src/assets/onboarding1.jpg'),
  onboarding2: require('./src/assets/onboarding2.jpg'),
  onboarding3: require('./src/assets/onboarding3.jpg'),
  group37: require('./src/assets/Group37.jpg'),
  saathjanam: require('./src/assets/saathjanam_logo.jpg')
};

// Demo profiles for matches
const demoProfiles = [
  {
    id: 1,
    name: "Aarushi Sharma",
    age: 24,
    job: "Software Engineer",
    education: "B.Tech",
    location: "Hyderabad",
    community: "Hindu | Brahmin",
    height: "5'4\"",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: 2,
    name: "Arjun Reddy",
    age: 27,
    job: "Business Analyst",
    education: "MBA",
    location: "Bangalore",
    community: "Hindu | Reddy",
    height: "5'9\"",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    id: 3,
    name: "Sneha Patil",
    age: 25,
    job: "Doctor",
    education: "MBBS",
    location: "Pune",
    community: "Hindu | Maratha",
    height: "5'5\"",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: 4,
    name: "Rohit Verma",
    age: 29,
    job: "Civil Engineer",
    education: "M.Tech",
    location: "Delhi",
    community: "Hindu | Kayastha",
    height: "6'0\"",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentUser, setCurrentUser] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([
    // Demo users for testing
    {
      id: 1,
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
      id: 2,
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

  // Initialize demo data
  const initializeDemoData = () => {
    // Add demo profiles to registered users
    demoProfiles.forEach(profile => {
      const existingUser = registeredUsers.find(user => user.id === profile.id);
      if (!existingUser) {
        setRegisteredUsers(prevUsers => [
          ...prevUsers,
          {
            id: profile.id,
            username: profile.name.toLowerCase().replace(' ', ''),
            email: `${profile.name.toLowerCase().replace(' ', '')}@example.com`,
            password: "password123",
            fullName: profile.name,
            firstName: profile.name.split(' ')[0],
            lastName: profile.name.split(' ')[1] || '',
            age: profile.age,
            occupation: profile.job,
            education: profile.education,
            location: profile.location,
            community: profile.community,
            height: profile.height,
            image: profile.image,
            isRegistered: true
          }
        ]);
      }
    });
  };

  useEffect(() => {
    initializeDemoData();
  }, []);

  const navigateToScreen = (screenName, params = {}) => {
    console.log('🚀 NAVIGATION TRIGGERED:', screenName, params);
    setCurrentScreen(screenName);
  };

  // Navigation handlers
  const handleNavigateToMatches = () => {
    navigateToScreen('matches');
  };

  const handleNavigateToRequests = () => {
    console.log('📋 Navigating to Requests screen');
    navigateToScreen('requests');
  };

  const handleNavigateToChat = (chatId, otherUser) => {
    navigateToScreen('chat', { chatId, otherUser });
  };

  const handleNavigateBackFromChat = () => {
    navigateToScreen('matches');
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
      navigateToScreen('dashboard');
    } else {
      // Fallback to the basic user data from login
      console.log('⚠️ No complete user data found, using basic login data');
      setCurrentUser(userData);
      navigateToScreen('dashboard');
    }
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
      const password = userData.createPassword || userData.password || "default123";

      if (!userData.emailId && !userData.email) {
        Alert.alert(
          "Registration Error", 
          "Email is required for registration."
        );
        return;
      }

      const email = userData.emailId || userData.email;

      // Check if user already exists
      const userExists = registeredUsers.find(
        user => user.email.toLowerCase() === email.toLowerCase()
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
        id: Math.random().toString(36).substr(2, 9),
        username: username,
        password: password,
        fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        gender: userData.gender,
        dateOfBirth: userData.dateOfBirth || `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
        email: email,
        mobileNumber: userData.mobileNumber || userData.mobile,
        religion: userData.religion,
        community: userData.caste,
        subCommunity: userData.subCaste,
        country: userData.country,
        city: userData.city,
        maritalStatus: userData.maritalStatus,
        height: userData.height,
        highestEducation: userData.highestEducation,
        collegeName: userData.collegeName,
        occupation: userData.occupation,
        companyName: userData.companyName,
        annualIncome: userData.annualIncome,
        workSector: userData.sector,
        registrationDate: new Date().toISOString(),
        isRegistered: true,
        interests: ["Reading", "Travel", "Music"],
        motherTongue: userData.motherTongue,
        age: userData.age,
        noOfChildren: userData.noOfChildren,
        workLocation: userData.workLocation
      };

      // Add to registered users
      setRegisteredUsers(prevUsers => {
        const updatedUsers = [...prevUsers, newUser];
        console.log('✅ New user added. Total users:', updatedUsers.length);
        console.log('🔐 New user credentials:', { username, password });
        return updatedUsers;
      });

      console.log('✅ Registration Complete - New User:', newUser);
      
      // Navigate to login after registration
      setShowRegisterModal(false);
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

  // Settings navigation handlers
  const handleNavigateToSettings = () => navigateToScreen('settings');
  const handleNavigateBackFromSettings = () => navigateToScreen('dashboard');

  // Premium Subscription navigation handlers
  const handleNavigateToPremiumSubscription = () => {
    console.log('💰 Navigating to Premium Subscription');
    navigateToScreen('premiumsubscription');
  };
  
  const handleNavigateBackFromPremiumSubscription = () => {
    console.log('🔙 Navigating back from Premium Subscription to Dashboard');
    navigateToScreen('dashboard');
  };

  // Requests navigation handlers
  const handleNavigateBackFromRequests = () => {
    console.log('🔙 Navigating back from Requests to Dashboard');
    navigateToScreen('dashboard');
  };

  // Register modal handlers
  const handleOpenRegister = () => setShowRegisterModal(true);
  const handleCloseRegister = () => {
    setShowRegisterModal(false);
  };

  // Handle navigation to login with pre-filled email
  const handleNavigateToLoginWithEmail = (email) => {
    setShowRegisterModal(false);
    navigateToScreen('login');
  };

  console.log('🔄 App Rendered - Current Screen:', currentScreen);
  console.log('👥 Registered Users Count:', registeredUsers.length);
  console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
  console.log('📝 Register Modal:', showRegisterModal);

  // Screen routing - Clean and organized
  const renderCurrentScreen = () => {
    console.log('📱 Rendering screen:', currentScreen);
    
    switch (currentScreen) {
      case 'splash':
        return (
          <SplashScreen
            backgroundImage={images.Sanath}
            logoImage={images.saathjanam}
            onFinish={() => navigateToScreen('onboarding')}
          />
        );

      case 'onboarding':
        return (
          <OnboardingScreen
            images={images}
            onComplete={() => navigateToScreen('login')}
            onNavigateToRegister={handleOpenRegister}
            onNavigateToLogin={() => navigateToScreen('login')}
          />
        );

      case 'login':
        return (
          <LoginForm
            backgroundImage={images.group37}
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={handleOpenRegister}
            registeredUsers={registeredUsers}
          />
        );

      case 'dashboard':
        return (
          <Dashboard 
            user={currentUser} 
            onLogout={handleLogout}
            profileImages={images}
            navigation={{ 
              navigate: (screen, params = {}) => {
                console.log('📱 Dashboard navigation to:', screen);
                if (screen === 'editprofile') {
                  handleNavigateToEditProfile();
                } else if (screen === 'profile') {
                  handleNavigateToProfile();
                } else if (screen === 'matches') {
                  handleNavigateToMatches();
                } else if (screen === 'requests') {
                  handleNavigateToRequests();
                } else if (screen === 'chat') {
                  handleNavigateToChat(params.chatId, params.otherUser);
                } else if (screen === 'settings') {
                  handleNavigateToSettings();
                } else if (screen === 'premiumsubscription') {
                  handleNavigateToPremiumSubscription();
                }
              },
              goBack: () => {
                console.log('🔙 Dashboard goBack called');
                navigateToScreen('dashboard');
              }
            }}
          />
        );

      case 'requests':
        console.log('📋 Rendering Requests screen');
        return (
          <Requests
            navigation={{
              navigate: navigateToScreen,
              goBack: handleNavigateBackFromRequests
            }}
          />
        );

      case 'matches':
        return (
          <MatchesScreen 
            user={currentUser}
            registeredUsers={registeredUsers}
            navigation={{ 
              navigate: (screen, params = {}) => {
                console.log('📱 Matches navigation to:', screen);
                if (screen === 'chat') {
                  handleNavigateToChat(params.chatId, params.otherUser);
                } else if (screen === 'dashboard') {
                  navigateToScreen('dashboard');
                } else if (screen === 'profile') {
                  handleNavigateToProfile();
                } else if (screen === 'requests') {
                  handleNavigateToRequests();
                } else if (screen === 'settings') {
                  handleNavigateToSettings();
                } else if (screen === 'premiumsubscription') {
                  handleNavigateToPremiumSubscription();
                }
              },
              goBack: () => {
                console.log('🔙 Matches goBack called');
                navigateToScreen('dashboard');
              }
            }}
          />
        );

      case 'chat':
        return (
          <ChatScreen 
            route={{ params: { chatId: null, otherUser: null } }} 
            user={currentUser}
            registeredUsers={registeredUsers}
            navigation={{ 
              navigate: navigateToScreen, 
              goBack: handleNavigateBackFromChat 
            }}
          />
        );

      case 'profile':
        return (
          <ProfileScreen 
            user={currentUser}
            onNavigateBack={handleNavigateBackFromProfile}
            onLogout={handleLogout}
            navigation={{
              navigate: (screen) => {
                console.log('📱 Profile navigation to:', screen);
                if (screen === 'editprofile') {
                  handleNavigateToEditProfile();
                } else if (screen === 'settings') {
                  handleNavigateToSettings();
                } else if (screen === 'requests') {
                  handleNavigateToRequests();
                } else if (screen === 'premiumsubscription') {
                  handleNavigateToPremiumSubscription();
                }
              },
              goBack: handleNavigateBackFromProfile
            }}
          />
        );

      case 'editprofile':
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

      case 'settings':
        return (
          <SettingsScreen 
            user={currentUser}
            onNavigateBack={handleNavigateBackFromSettings}
            onLogout={handleLogout}
            navigation={{
              navigate: navigateToScreen,
              goBack: handleNavigateBackFromSettings
            }}
          />
        );

      case 'premiumsubscription':
        console.log('💰 Rendering PremiumSubscription screen');
        return (
          <PremiumSubscription
            navigation={{
              navigate: navigateToScreen,
              goBack: handleNavigateBackFromPremiumSubscription
            }}
          />
        );

      default:
        // Fallback to login screen
        console.log('⚠️ Default screen - showing login');
        return (
          <LoginForm
            backgroundImage={images.group37}
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={handleOpenRegister}
            registeredUsers={registeredUsers}
          />
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Main Screen Content */}
      {renderCurrentScreen()}
      
      {/* Global Register Modal - Can be opened from any screen */}
      <Register 
        show={showRegisterModal}
        onClose={handleCloseRegister}
        onRegistrationComplete={handleRegistrationComplete}
        onNavigateToLogin={handleNavigateToLoginWithEmail}
      />
    </View>
  );
}
















// // App.js
// import React, { useState, useEffect } from 'react';
// import { Alert, View } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register';
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import SettingsScreen from './src/screens/settings';

// // Safe image imports with fallback
// const images = {
//   Sanath: require('./src/assets/banner2.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
//   saathjanam: require('./src/assets/saathjanam_logo.jpg')
// };

// // Demo profiles for matches
// const demoProfiles = [
//   {
//     id: 1,
//     name: "Aarushi Sharma",
//     age: 24,
//     job: "Software Engineer",
//     education: "B.Tech",
//     location: "Hyderabad",
//     community: "Hindu | Brahmin",
//     height: "5'4\"",
//     image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//   },
//   {
//     id: 2,
//     name: "Arjun Reddy",
//     age: 27,
//     job: "Business Analyst",
//     education: "MBA",
//     location: "Bangalore",
//     community: "Hindu | Reddy",
//     height: "5'9\"",
//     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//   },
//   {
//     id: 3,
//     name: "Sneha Patil",
//     age: 25,
//     job: "Doctor",
//     education: "MBBS",
//     location: "Pune",
//     community: "Hindu | Maratha",
//     height: "5'5\"",
//     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//   },
//   {
//     id: 4,
//     name: "Rohit Verma",
//     age: 29,
//     job: "Civil Engineer",
//     education: "M.Tech",
//     location: "Delhi",
//     community: "Hindu | Kayastha",
//     height: "6'0\"",
//     image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//   }
// ];

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [chatParams, setChatParams] = useState({ chatId: null, otherUser: null });
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo users for testing
//     {
//       id: 1,
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       age: 28,
//       occupation: "Software Developer",
//       education: "B.Tech",
//       location: "Mumbai",
//       community: "Hindu | General",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
//       isRegistered: true
//     },
//     {
//       id: 2,
//       username: "user",
//       password: "password123",
//       email: "user@example.com",
//       mobile: "9876543210",
//       fullName: "Test User",
//       firstName: "Test",
//       lastName: "User",
//       age: 25,
//       occupation: "Business Analyst",
//       education: "MBA",
//       location: "Delhi",
//       community: "Hindu | General",
//       height: "5'6\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
//       isRegistered: true
//     }
//   ]);

//   // Initialize demo data
//   const initializeDemoData = () => {
//     // Add demo profiles to registered users
//     demoProfiles.forEach(profile => {
//       const existingUser = registeredUsers.find(user => user.id === profile.id);
//       if (!existingUser) {
//         setRegisteredUsers(prevUsers => [
//           ...prevUsers,
//           {
//             id: profile.id,
//             username: profile.name.toLowerCase().replace(' ', ''),
//             email: `${profile.name.toLowerCase().replace(' ', '')}@example.com`,
//             password: "password123",
//             fullName: profile.name,
//             firstName: profile.name.split(' ')[0],
//             lastName: profile.name.split(' ')[1] || '',
//             age: profile.age,
//             occupation: profile.job,
//             education: profile.education,
//             location: profile.location,
//             community: profile.community,
//             height: profile.height,
//             image: profile.image,
//             isRegistered: true
//           }
//         ]);
//       }
//     });
//   };

//   useEffect(() => {
//     initializeDemoData();
//   }, []);

//   // Auto-login for demo - Remove this if you want manual login
//   useEffect(() => {
//     // Auto navigate to dashboard after splash screen for demo purposes
//     if (currentScreen === 'splash') {
//       const timer = setTimeout(() => {
//         handleAutoLogin();
//       }, 3000); // 3 seconds splash screen
//       return () => clearTimeout(timer);
//     }
//   }, [currentScreen]);

//   const handleAutoLogin = () => {
//     console.log('🚀 AUTO LOGIN - Opening dashboard directly');
//     const demoUser = registeredUsers[0]; // Use first demo user
//     setCurrentUser(demoUser);
//     setCurrentScreen('dashboard');
//   };

//   const navigateToScreen = (screenName, params = {}) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName, params);
//     setCurrentScreen(screenName);
    
//     // Store chat params when navigating to chat
//     if (screenName === 'chat') {
//       setChatParams(params);
//     }
//   };

//   // Navigation handlers
//   const handleNavigateToMatches = () => {
//     navigateToScreen('matches');
//   };

//   const handleNavigateToChat = (chatId, otherUser) => {
//     console.log('💬 Opening chat with:', otherUser?.name);
//     navigateToScreen('chat', { chatId, otherUser });
//   };

//   // FIXED: Proper back functionality for chat screen
//   const handleNavigateBackFromChat = () => {
//     console.log('🔙 Back from chat - Returning to previous screen');
    
//     // Determine where to go back based on navigation history
//     // For demo purposes, we'll go back to matches screen
//     // In a real app, you might want to track navigation history
//     navigateToScreen('matches');
//   };

//   // Handle successful login - DIRECT LOGIN
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ DIRECT LOGIN - Opening dashboard immediately');
    
//     // Use demo user data or create a default user
//     const demoUser = {
//       id: 1,
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       age: 28,
//       occupation: "Software Developer",
//       education: "B.Tech",
//       location: "Mumbai",
//       community: "Hindu | General",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
//       isRegistered: true,
//       ...userData // Merge any additional data from login
//     };

//     setCurrentUser(demoUser);
//     navigateToScreen('dashboard');
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setShowRegisterModal(false);
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

//   // Handle registration completion
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       // Use the generated username from Register component or create one
//       const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.createPassword || userData.password || "default123";

//       if (!userData.emailId && !userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       const email = userData.emailId || userData.email;

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === email.toLowerCase()
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
//         id: Math.random().toString(36).substr(2, 9),
//         username: username,
//         password: password,
//         fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
//         gender: userData.gender,
//         dateOfBirth: userData.dateOfBirth || `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: email,
//         mobileNumber: userData.mobileNumber || userData.mobile,
//         religion: userData.religion,
//         community: userData.caste,
//         subCommunity: userData.subCaste,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestEducation,
//         collegeName: userData.collegeName,
//         occupation: userData.occupation,
//         companyName: userData.companyName,
//         annualIncome: userData.annualIncome,
//         workSector: userData.sector,
//         registrationDate: new Date().toISOString(),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"],
//         motherTongue: userData.motherTongue,
//         age: userData.age,
//         noOfChildren: userData.noOfChildren,
//         workLocation: userData.workLocation
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         console.log('🔐 New user credentials:', { username, password });
//         return updatedUsers;
//       });

//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Auto login after registration
//       setShowRegisterModal(false);
//       setCurrentUser(newUser);
//       navigateToScreen('dashboard');
      
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\nWelcome to SaathJanam!`,
//         [{ text: "Get Started", onPress: () => {} }]
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

//   // Settings navigation handlers
//   const handleNavigateToSettings = () => navigateToScreen('settings');
//   const handleNavigateBackFromSettings = () => navigateToScreen('dashboard');

//   // Register modal handlers
//   const handleOpenRegister = () => setShowRegisterModal(true);
//   const handleCloseRegister = () => {
//     setShowRegisterModal(false);
//   };

//   // Handle navigation to login with pre-filled email
//   const handleNavigateToLoginWithEmail = (email) => {
//     setShowRegisterModal(false);
//     navigateToScreen('login');
//   };

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);
//   console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
//   console.log('📝 Register Modal:', showRegisterModal);
//   console.log('💬 Chat Params:', chatParams);

//   // Screen routing - Clean and organized
//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case 'splash':
//         return (
//           <SplashScreen
//             backgroundImage={images.Sanath}
//             logoImage={images.saathjanam}
//             onFinish={() => navigateToScreen('onboarding')}
//           />
//         );

//       case 'onboarding':
//         return (
//           <OnboardingScreen
//             images={images}
//             onComplete={() => navigateToScreen('login')}
//             onNavigateToRegister={handleOpenRegister}
//             onNavigateToLogin={() => navigateToScreen('login')}
//           />
//         );

//       case 'login':
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );

//       case 'dashboard':
//         return (
//           <Dashboard 
//             user={currentUser} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   handleNavigateToMatches();
//                 } else if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'matches':
//         return (
//           <MatchesScreen 
//             user={currentUser}
//             registeredUsers={registeredUsers}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'dashboard') {
//                   navigateToScreen('dashboard');
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'chat':
//         return (
//           <ChatScreen 
//             route={{ params: chatParams }} 
//             user={currentUser}
//             registeredUsers={registeredUsers}
//             navigation={{ 
//               navigate: navigateToScreen, 
//               goBack: handleNavigateBackFromChat 
//             }}
//             onBack={handleNavigateBackFromChat} // ADDED: Direct back handler
//           />
//         );

//       case 'profile':
//         return (
//           <ProfileScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromProfile}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: (screen) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: handleNavigateBackFromProfile
//             }}
//           />
//         );

//       case 'editprofile':
//         return (
//           <EditProfileScreen 
//             user={currentUser}
//             onSave={handleProfileUpdate}
//             onCancel={handleCancelEditProfile}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromEditProfile
//             }}
//           />
//         );

//       case 'settings':
//         return (
//           <SettingsScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromSettings}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromSettings
//             }}
//           />
//         );

//       default:
//         // Fallback to dashboard for demo
//         return (
//           <Dashboard 
//             user={currentUser || registeredUsers[0]} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   handleNavigateToMatches();
//                 } else if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Main Screen Content */}
//       {renderCurrentScreen()}
      
//       {/* Global Register Modal - Can be opened from any screen */}
//       <Register 
//         show={showRegisterModal}
//         onClose={handleCloseRegister}
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={handleNavigateToLoginWithEmail}
//       />
//     </View>
//   );
// }



















// // App.js
// import React, { useState, useEffect } from 'react';
// import { Alert, View } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import Register from './src/screens/Register';
// import Dashboard from './src/screens/Dashboard';
// import MatchesScreen from './src/screens/MatchesScreen';
// import ChatScreen from "./src/screens/ChatScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import SettingsScreen from './src/screens/settings';
//  import Requests from './src/screens/Requests';

// // Safe image imports with fallback
// const images = {
//   Sanath: require('./src/assets/banner2.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
//   saathjanam: require('./src/assets/saathjanam_logo.jpg')
// };

// // Demo profiles for matches
// const demoProfiles = [
//   {
//     id: 1,
//     name: "Aarushi Sharma",
//     age: 24,
//     job: "Software Engineer",
//     education: "B.Tech",
//     location: "Hyderabad",
//     community: "Hindu | Brahmin",
//     height: "5'4\"",
//     image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//   },
//   {
//     id: 2,
//     name: "Arjun Reddy",
//     age: 27,
//     job: "Business Analyst",
//     education: "MBA",
//     location: "Bangalore",
//     community: "Hindu | Reddy",
//     height: "5'9\"",
//     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//   },
//   {
//     id: 3,
//     name: "Sneha Patil",
//     age: 25,
//     job: "Doctor",
//     education: "MBBS",
//     location: "Pune",
//     community: "Hindu | Maratha",
//     height: "5'5\"",
//     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//   },
//   {
//     id: 4,
//     name: "Rohit Verma",
//     age: 29,
//     job: "Civil Engineer",
//     education: "M.Tech",
//     location: "Delhi",
//     community: "Hindu | Kayastha",
//     height: "6'0\"",
//     image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//   }
// ];

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [chatParams, setChatParams] = useState({ chatId: null, otherUser: null });
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo users for testing
//     {
//       id: 1,
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       age: 28,
//       occupation: "Software Developer",
//       education: "B.Tech",
//       location: "Mumbai",
//       community: "Hindu | General",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
//       isRegistered: true
//     },
//     {
//       id: 2,
//       username: "user",
//       password: "password123",
//       email: "user@example.com",
//       mobile: "9876543210",
//       fullName: "Test User",
//       firstName: "Test",
//       lastName: "User",
//       age: 25,
//       occupation: "Business Analyst",
//       education: "MBA",
//       location: "Delhi",
//       community: "Hindu | General",
//       height: "5'6\"",
//       image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
//       isRegistered: true
//     }
//   ]);

//   // Initialize demo data
//   const initializeDemoData = () => {
//     // Add demo profiles to registered users
//     demoProfiles.forEach(profile => {
//       const existingUser = registeredUsers.find(user => user.id === profile.id);
//       if (!existingUser) {
//         setRegisteredUsers(prevUsers => [
//           ...prevUsers,
//           {
//             id: profile.id,
//             username: profile.name.toLowerCase().replace(' ', ''),
//             email: `${profile.name.toLowerCase().replace(' ', '')}@example.com`,
//             password: "password123",
//             fullName: profile.name,
//             firstName: profile.name.split(' ')[0],
//             lastName: profile.name.split(' ')[1] || '',
//             age: profile.age,
//             occupation: profile.job,
//             education: profile.education,
//             location: profile.location,
//             community: profile.community,
//             height: profile.height,
//             image: profile.image,
//             isRegistered: true
//           }
//         ]);
//       }
//     });
//   };

//   useEffect(() => {
//     initializeDemoData();
//   }, []);

//   // Auto-login for demo - Remove this if you want manual login
//   useEffect(() => {
//     // Auto navigate to dashboard after splash screen for demo purposes
//     if (currentScreen === 'splash') {
//       const timer = setTimeout(() => {
//         handleAutoLogin();
//       }, 3000); // 3 seconds splash screen
//       return () => clearTimeout(timer);
//     }
//   }, [currentScreen]);

//   const handleAutoLogin = () => {
//     console.log('🚀 AUTO LOGIN - Opening dashboard directly');
//     const demoUser = registeredUsers[0]; // Use first demo user
//     setCurrentUser(demoUser);
//     setCurrentScreen('dashboard');
//   };

//   // Main navigation function
//   const navigateToScreen = (screenName, params = {}) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName, params);
//     setCurrentScreen(screenName);
    
//     // Store chat params when navigating to chat
//     if (screenName === 'chat') {
//       setChatParams(params);
//     }
//   };

//   // Navigation handlers for different screens
//   const handleNavigateToDashboard = () => navigateToScreen('dashboard');
//   const handleNavigateToMatches = () => navigateToScreen('matches');
//   const handleNavigateToRequests = () => navigateToScreen('requests');
//   const handleNavigateToProfile = () => navigateToScreen('profile');
//   const handleNavigateToEditProfile = () => navigateToScreen('editprofile');
//   const handleNavigateToSettings = () => navigateToScreen('settings');

//   // Chat navigation
//   const handleNavigateToChat = (chatId, otherUser) => {
//     console.log('💬 Opening chat with:', otherUser?.name);
//     navigateToScreen('chat', { chatId, otherUser });
//   };

//   // Back navigation handlers
//   const handleNavigateBackFromChat = () => {
//     console.log('🔙 Back from chat');
//     navigateToScreen('matches');
//   };

//   const handleNavigateBackFromProfile = () => navigateToScreen('dashboard');
//   const handleNavigateBackFromEditProfile = () => navigateToScreen('profile');
//   const handleNavigateBackFromSettings = () => navigateToScreen('dashboard');
//   const handleNavigateBackFromRequests = () => navigateToScreen('dashboard');

//   // Handle successful login
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ LOGIN SUCCESS - Opening dashboard');
    
//     const demoUser = {
//       id: 1,
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       fullName: "Demo User",
//       firstName: "Demo",
//       lastName: "User",
//       age: 28,
//       occupation: "Software Developer",
//       education: "B.Tech",
//       location: "Mumbai",
//       community: "Hindu | General",
//       height: "5'10\"",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
//       isRegistered: true,
//       ...userData
//     };

//     setCurrentUser(demoUser);
//     navigateToScreen('dashboard');
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setShowRegisterModal(false);
//     navigateToScreen('login');
//   };

//   // Handle profile update
//   const handleProfileUpdate = (updatedData) => {
//     console.log('🔄 Updating user profile with:', updatedData);
    
//     setCurrentUser(prevUser => ({
//       ...prevUser,
//       ...updatedData
//     }));

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

//   // Handle registration completion
//   const handleRegistrationComplete = (userData) => {
//     try {
//       console.log('📦 Registration Data Received:', userData);

//       const username = userData.username || userData.email?.split('@')[0] || `user${Date.now()}`;
//       const password = userData.createPassword || userData.password || "default123";

//       if (!userData.emailId && !userData.email) {
//         Alert.alert(
//           "Registration Error", 
//           "Email is required for registration."
//         );
//         return;
//       }

//       const email = userData.emailId || userData.email;

//       // Check if user already exists
//       const userExists = registeredUsers.find(
//         user => user.email.toLowerCase() === email.toLowerCase()
//       );

//       if (userExists) {
//         Alert.alert(
//           "Registration Failed",
//           "User with this email already exists. Please login instead."
//         );
//         return;
//       }

//       // Create complete user profile
//       const newUser = {
//         id: Math.random().toString(36).substr(2, 9),
//         username: username,
//         password: password,
//         fullName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim(),
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
//         gender: userData.gender,
//         dateOfBirth: userData.dateOfBirth || `${userData.dobDay}-${userData.dobMonth}-${userData.dobYear}`,
//         email: email,
//         mobileNumber: userData.mobileNumber || userData.mobile,
//         religion: userData.religion,
//         community: userData.caste,
//         subCommunity: userData.subCaste,
//         country: userData.country,
//         city: userData.city,
//         maritalStatus: userData.maritalStatus,
//         height: userData.height,
//         highestEducation: userData.highestEducation,
//         collegeName: userData.collegeName,
//         occupation: userData.occupation,
//         companyName: userData.companyName,
//         annualIncome: userData.annualIncome,
//         workSector: userData.sector,
//         registrationDate: new Date().toISOString(),
//         isRegistered: true,
//         interests: ["Reading", "Travel", "Music"],
//         motherTongue: userData.motherTongue,
//         age: userData.age,
//         noOfChildren: userData.noOfChildren,
//         workLocation: userData.workLocation
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         return updatedUsers;
//       });

//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Auto login after registration
//       setShowRegisterModal(false);
//       setCurrentUser(newUser);
//       navigateToScreen('dashboard');
      
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\nWelcome to SaathJanam!`,
//         [{ text: "Get Started", onPress: () => {} }]
//       );

//     } catch (error) {
//       console.error('❌ Registration error:', error);
//       Alert.alert("Registration Failed", "Something went wrong. Please try again.");
//     }
//   };

//   // Register modal handlers
//   const handleOpenRegister = () => setShowRegisterModal(true);
//   const handleCloseRegister = () => setShowRegisterModal(false);

//   // Handle navigation to login with pre-filled email
//   const handleNavigateToLoginWithEmail = (email) => {
//     setShowRegisterModal(false);
//     navigateToScreen('login');
//   };

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👤 Current User:', currentUser ? currentUser.username : 'None');
//   console.log('👥 Registered Users Count:', registeredUsers.length);

//   // Screen routing with state management
//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case 'splash':
//         return (
//           <SplashScreen
//             backgroundImage={images.Sanath}
//             logoImage={images.saathjanam}
//             onFinish={() => navigateToScreen('onboarding')}
//           />
//         );

//       case 'onboarding':
//         return (
//           <OnboardingScreen
//             images={images}
//             onComplete={() => navigateToScreen('login')}
//             onNavigateToRegister={handleOpenRegister}
//             onNavigateToLogin={() => navigateToScreen('login')}
//           />
//         );

//       case 'login':
//         return (
//           <LoginForm
//             backgroundImage={images.group37}
//             onLoginSuccess={handleLoginSuccess}
//             onNavigateToRegister={handleOpenRegister}
//             registeredUsers={registeredUsers}
//           />
//         );

//       case 'dashboard':
//         return (
//           <Dashboard 
//             user={currentUser} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   handleNavigateToMatches();
//                 } else if (screen === 'requests') {
//                   handleNavigateToRequests();
//                 } else if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );

//       case 'matches':
//         return (
//           <MatchesScreen 
//             user={currentUser}
//             registeredUsers={registeredUsers}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'dashboard') {
//                   handleNavigateToDashboard();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'requests') {
//                   handleNavigateToRequests();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: handleNavigateToDashboard
//             }}
//           />
//         );

//       case 'requests':
//         return (
//           <Requests 
//             user={currentUser}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'dashboard') {
//                   handleNavigateToDashboard();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   handleNavigateToMatches();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: handleNavigateBackFromRequests
//             }}
//           />
//         );

//       case 'chat':
//         return (
//           <ChatScreen 
//             route={{ params: chatParams }} 
//             user={currentUser}
//             registeredUsers={registeredUsers}
//             navigation={{ 
//               navigate: navigateToScreen, 
//               goBack: handleNavigateBackFromChat 
//             }}
//             onBack={handleNavigateBackFromChat}
//           />
//         );

//       case 'profile':
//         return (
//           <ProfileScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromProfile}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: (screen) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 } else if (screen === 'requests') {
//                   handleNavigateToRequests();
//                 }
//               },
//               goBack: handleNavigateBackFromProfile
//             }}
//           />
//         );

//       case 'editprofile':
//         return (
//           <EditProfileScreen 
//             user={currentUser}
//             onSave={handleProfileUpdate}
//             onCancel={handleNavigateBackFromEditProfile}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromEditProfile
//             }}
//           />
//         );

//       case 'settings':
//         return (
//           <SettingsScreen 
//             user={currentUser}
//             onNavigateBack={handleNavigateBackFromSettings}
//             onLogout={handleLogout}
//             navigation={{
//               navigate: navigateToScreen,
//               goBack: handleNavigateBackFromSettings
//             }}
//           />
//         );

//       default:
//         // Fallback to dashboard
//         return (
//           <Dashboard 
//             user={currentUser || registeredUsers[0]} 
//             onLogout={handleLogout}
//             profileImages={images}
//             navigation={{ 
//               navigate: (screen, params = {}) => {
//                 if (screen === 'editprofile') {
//                   handleNavigateToEditProfile();
//                 } else if (screen === 'profile') {
//                   handleNavigateToProfile();
//                 } else if (screen === 'matches') {
//                   handleNavigateToMatches();
//                 } else if (screen === 'requests') {
//                   handleNavigateToRequests();
//                 } else if (screen === 'chat') {
//                   handleNavigateToChat(params.chatId, params.otherUser);
//                 } else if (screen === 'settings') {
//                   handleNavigateToSettings();
//                 }
//               },
//               goBack: () => navigateToScreen('dashboard')
//             }}
//           />
//         );
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Main Screen Content */}
//       {renderCurrentScreen()}
      
//       {/* Global Register Modal - Can be opened from any screen */}
//       <Register 
//         show={showRegisterModal}
//         onClose={handleCloseRegister}
//         onRegistrationComplete={handleRegistrationComplete}
//         onNavigateToLogin={handleNavigateToLoginWithEmail}
//       />
//     </View>
//   );
// }
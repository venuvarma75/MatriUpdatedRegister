import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ImageBackground,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";

const Login = ({ 
  show, 
  onClose, 
  registeredUsers = [], 
  onLoginSuccess,
  onNavigateToRegister  // Add this new prop
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Demo users for testing if no registered users provided
  const demoUsers = [
    {
      email: "demo@example.com",
      password: "demo123",
      username: "demo",
      fullName: "Demo User",
      userId: "1"
    },
    {
      email: "user@example.com",
      password: "password123",
      username: "user",
      fullName: "Test User", 
      userId: "2"
    }
  ];

  // Combine demo users with registered users
  const allUsers = [...demoUsers, ...registeredUsers];

  const handleRegister = () => {
    onClose();
    // Call the new prop to navigate to register
    if (onNavigateToRegister) {
      onNavigateToRegister();
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find user by email/username and password
      const foundUser = allUsers.find(user => 
        (user.email.toLowerCase() === email.toLowerCase() || 
         user.username?.toLowerCase() === email.toLowerCase()) && 
        user.password === password
      );

      if (foundUser) {
        // Login successful
        Alert.alert("Success", "Login successful! 🎉");
        
        // Prepare user data for the success handler
        const userData = {
          email: foundUser.email,
          username: foundUser.username,
          fullName: foundUser.fullName,
          userId: foundUser.userId,
          isAuthenticated: true,
          loginTime: new Date().toISOString()
        };

        // Call the success handler if provided
        if (onLoginSuccess) {
          onLoginSuccess(userData);
        }
        
        // Navigate to dashboard
        // navigation.navigate('Dashboard');
        onClose();
        
        // Clear form
        setEmail("");
        setPassword("");
      } else {
        Alert.alert(
          "Login Failed", 
          "Invalid email/username or password. Please try again."
        );
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    onClose();
    // navigation.navigate('ForgotPassword');
  };

  // Quick login for demo (optional)
  const handleQuickLogin = (demoEmail, demoPassword) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <Modal
      visible={show}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Overlay background */}
        <TouchableOpacity 
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />

        {/* Popup box */}
        <View style={styles.popup}>
          {/* Close button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>×</Text>
          </TouchableOpacity>

          <View style={styles.formBox}>
            {/* Left side - Image/Details */}
            <ImageBackground 
              source={{ uri: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }}
              style={styles.formDetails}
              imageStyle={styles.backgroundImage}
            >
              <View style={styles.detailsContent}>
                <Text style={styles.detailsTitle}>WELCOME BACK !</Text>
                <Text style={styles.detailsText}>
                  Please log in using your personal information to stay connected with us.
                </Text>
                
                {/* Demo credentials hint */}
                <View style={styles.demoSection}>
                  <Text style={styles.demoTitle}>Demo Credentials:</Text>
                  <TouchableOpacity 
                    style={styles.demoButton}
                    onPress={() => handleQuickLogin("demo@example.com", "demo123")}
                  >
                    <Text style={styles.demoText}>demo@example.com / demo123</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.demoButton}
                    onPress={() => handleQuickLogin("user@example.com", "password123")}
                  >
                    <Text style={styles.demoText}>user@example.com / password123</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>

            {/* Right side - Form */}
            <View style={styles.formContent}>
              {/* Form content without ScrollView */}
              <Text style={styles.formTitle}>LOGIN</Text>
              
              {/* Email/Username Input */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, email && styles.inputFilled]}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email or Username"
                  placeholderTextColor="#9e9d9d"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  editable={!isLoading}
                />
                {!email && (
                  <Text style={styles.floatingLabel}>Email or Username</Text>
                )}
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, password && styles.inputFilled]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor="#9e9d9d"
                  secureTextEntry
                  editable={!isLoading}
                />
                {!password && (
                  <Text style={styles.floatingLabel}>Password</Text>
                )}
              </View>

              {/* Forgot Password */}
              <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading}>
                <Text style={[styles.forgotPassLink, isLoading && styles.disabledText]}>
                  Forgot password?
                </Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity 
                style={[styles.loginButton, isLoading && styles.loginButtonDisabled]} 
                onPress={handleLogin}
                disabled={isLoading}
              >
                <Text style={styles.loginButtonText}>
                  {isLoading ? "Logging in..." : "Log In"}
                </Text>
              </TouchableOpacity>

              {/* Signup Link */}
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                  New to Matrimony?{" "}
                  <Text 
                    style={[styles.signupLink, isLoading && styles.disabledText]} 
                    onPress={isLoading ? null : handleRegister}
                  >
                    SignUp for Free
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: width * 0.95,
    height: height > 600 ? height * 0.8 : height * 0.9, // Adaptive height
    maxWidth: 700,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  closeBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 30,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold',
  },
  formBox: {
    flexDirection: width > 760 ? 'row' : 'column',
    flex: 1,
  },
  formDetails: {
    flex: width > 760 ? 1 : 0.4,
    justifyContent: 'flex-end',
    padding: 25,
  },
  backgroundImage: {
    borderRadius: 0,
  },
  detailsContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#f7f4f7',
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  detailsText: {
    fontSize: 14,
    color: '#f7f4f7',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  demoSection: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
  },
  demoTitle: {
    fontSize: 12,
    color: '#f7f4f7',
    marginBottom: 8,
    fontWeight: '600',
  },
  demoButton: {
    padding: 5,
    marginBottom: 4,
  },
  demoText: {
    fontSize: 11,
    color: '#a0d2ff',
    fontStyle: 'italic',
  },
  formContent: {
    flex: width > 760 ? 1 : 0.6,
    padding: 30,
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#081c15',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    paddingTop: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#013c19',
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: '#013c19',
  },
  inputFilled: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  floatingLabel: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontSize: 16,
    color: '#9e9d9d',
    pointerEvents: 'none',
  },
  forgotPassLink: {
    marginTop: 15,
    color: '#013c19',
    fontSize: 14,
    textAlign: 'right',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#081c15',
    padding: 15,
    marginTop: 25,
    borderRadius: 40,
  },
  loginButtonDisabled: {
    backgroundColor: '#6c757d',
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  signupContainer: {
    marginTop: 25,
  },
  signupText: {
    color: '#013c19',
    fontSize: 14,
    textAlign: 'center',
  },
  signupLink: {
    color: '#013c19',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  disabledText: {
    opacity: 0.5,
  },
});

export default Login;
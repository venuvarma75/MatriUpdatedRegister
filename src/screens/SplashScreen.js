// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   Image,
//   Dimensions,
//   Platform,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const SplashScreen = ({onFinish, duration = 20000, backgroundImage}) => {
//   const [orientation, setOrientation] = useState('portrait');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, duration);

//     // Handle orientation changes
//     const updateOrientation = () => {
//       const {width: newWidth, height: newHeight} = Dimensions.get('window');
//       setOrientation(newHeight >= newWidth ? 'portrait' : 'landscape');
//     };

//     const subscription = Dimensions.addEventListener(
//       'change',
//       updateOrientation,
//     );

//     return () => {
//       clearTimeout(timer);
//       subscription?.remove();
//     };
//   }, [onFinish, duration]);

//   const isLandscape = orientation === 'landscape';

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         hidden={true} // Hide status bar for full screen
//         backgroundColor="#000000"
//       />

//       {/* Full Screen Background Image - Everything Visible */}
//       {backgroundImage && (
//         <View style={styles.imageWrapper}>
//           <Image
//             source={backgroundImage}
//             style={[
//               styles.backgroundImage,
//               isLandscape && styles.landscapeBackground
//             ]}
//             resizeMode="contain" // Changed from "cover" to "contain"
//           />
//         </View>
//       )}

//       {/* Optional loading indicator */}
//       <View style={styles.loadingContainer}>
//         <View style={styles.loadingBar} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//   },
//   landscapeBackground: {
//     // No need to swap dimensions with "contain" resizeMode
//   },
//   loadingContainer: {
//     position: 'absolute',
//     bottom: 50,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   loadingBar: {
//     width: 120,
//     height: 4,
//     backgroundColor: '#ffffff',
//     borderRadius: 2,
//   },
// })

// export default SplashScreen;



import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  Platform,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const SplashScreen = ({onFinish, duration = 20000, backgroundImage, logoImage}) => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    const updateOrientation = () => {
      const {width: newWidth, height: newHeight} = Dimensions.get('window');
      setOrientation(newHeight >= newWidth ? 'portrait' : 'landscape');
    };

    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );

    return () => {
      clearTimeout(timer);
      subscription?.remove();
    };
  }, [onFinish, duration]);

  const isLandscape = orientation === 'landscape';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={true}
        backgroundColor="#ffffff"
      />

      {/* Background Image */}
      {backgroundImage && (
        <View style={styles.imageWrapper}>
          <Image
            source={backgroundImage}
            style={[
              styles.backgroundImage,
              isLandscape && styles.landscapeBackground
            ]}
            resizeMode="cover"
          />
          {/* Light overlay for better text contrast */}
          <View style={styles.overlay} />
        </View>
      )}

      {/* Logo and Text positioned at bottom to show faces */}
      <View style={styles.bottomContent}>
        {/* Logo Image */}
        {logoImage && (
          <View style={styles.logoContainer}>
            <Image 
              source={logoImage}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        )}
        
        {/* Text container */}
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}>SaathJanam</Text>
          <Text style={styles.tagline}>Bond for Seven Lifetimes...</Text>
        </View>
      </View>

      {/* Loading indicator */}
      <View style={styles.loadingContainer}>
        <View style={styles.loadingBar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Very light overlay
  },
  bottomContent: {
    position: 'absolute',
    bottom: height * 0.2, // Position from bottom to show faces above
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 20,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  logoImage: {
    width: 90,
    height: 90,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textShadowColor: 'rgba(255, 255, 255, 0.9)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    letterSpacing: 1.2,
    marginBottom: 6,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 14,
    color: '#34495e',
    textShadowColor: 'rgba(255, 255, 255, 0.9)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontStyle: 'italic',
    letterSpacing: 0.6,
    textAlign: 'center',
    lineHeight: 18,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 40, // Moved up slightly
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  loadingBar: {
    width: 120,
    height: 4,
    backgroundColor: '#2c3e50',
    borderRadius: 2,
  },
});

export default SplashScreen;



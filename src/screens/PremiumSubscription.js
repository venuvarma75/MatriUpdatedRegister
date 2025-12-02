import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
  Alert
} from 'react-native';

const PremiumSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const plans = [
    {
      id: 'gold-3months',
      name: 'Gold 3 Months',
      discount: '60% off',
      originalPrice: '₹4,540',
      discountedPrice: '₹1,815',
      perMonth: '₹605/month',
      features: [
        'Send unlimited Messages',
        'View 50 Contact Numbers',
        '5 SaathJanam Live passes',
        'Standout from Profiles',
        'Matches contact directly'
      ],
      duration: '3 months'
    },
    {
      id: 'gold-plus-3months',
      name: 'Gold Plus 3 Months',
      discount: '65% off',
      originalPrice: '₹5,560',
      discountedPrice: '₹1,946',
      perMonth: '₹648/month',
      features: [
        'Send unlimited Messages',
        'View 75 Contact Numbers',
        '6 SaathJanam Live passes',
        'Standout from Profiles',
        'Matches contact directly'
      ],
      duration: '3 months'
    },
    {
      id: 'diamond-6months',
      name: 'Diamond 6 Months',
      discount: '65% off',
      originalPrice: '₹6,520',
      discountedPrice: '₹2,281',
      perMonth: '₹381/month',
      features: [
        'Send unlimited Messages',
        'View 100 Contact Numbers',
        '8 SaathJanam Live passes',
        'Standout from Profiles',
        'Matches contact directly'
      ],
      duration: '6 months'
    },
    {
      id: 'diamond-plus-6months',
      name: 'Diamond Plus 6 Months',
      discount: '66% off',
      originalPrice: '₹8,199',
      discountedPrice: '₹2,787',
      perMonth: '₹464/month',
      badge: 'TOP SELLER',
      features: [
        'Send unlimited Messages',
        'View 100 Contacts (Unlimited)',
        '9 SaathJanam Live passes',
        'Standout from Profiles',
        'Matches contact directly'
      ],
      duration: '6 months'
    },
    {
      id: 'platinum-plus-12months',
      name: 'Platinum 12 Months',
      discount: '60% off',
      originalPrice: '₹13,304',
      discountedPrice: '₹5,321',
      perMonth: '₹443/month',
      badge: 'BEST VALUE',
      features: [
        'Send unlimited Messages',
        'View 200 Contacts (Unlimited)',
        '15 SaathJanam Live passes',
        'Standout from Profiles',
        'Matches contact directly'
      ],
      duration: '12 months'  
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowCartModal(true);
  };

  const handlePurchase = () => {
    setShowCartModal(false);
    Alert.alert(
      'Success!',
      `You have successfully purchased ${selectedPlan.name}`,
      [{ text: 'OK', onPress: () => setSelectedPlan(null) }]
    );
  };

  const handleConsultation = () => {
    setShowConsultationModal(true);
  };

  const handleBookConsultation = () => {
    setShowConsultationModal(false);
    Alert.alert(
      'Booking Confirmed!',
      'Your FREE consultation has been booked. Our team will contact you shortly.',
      [{ text: 'OK' }]
    );
  };

  const handlePersonalizedHelp = () => {
    Alert.alert(
      'Personalized Plans Help',
      'Our team will contact you to help choose the best plan for your needs.',
      [{ text: 'OK' }]
    );
  };

  const handleDoThisLater = () => {
    Alert.alert(
      'Reminder Set',
      'We will remind you about our premium plans later.',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>SaathJanam</Text>
        </View>

        {/* Banner Section */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Upgrade now & Get upto 66% discount!</Text>
          <Text style={styles.bannerSubtitle}>Save upto 66%. Expires in 07h: 48m: 27s</Text>
          <View style={styles.bannerActions}>
            <TouchableOpacity onPress={handlePersonalizedHelp}>
              <Text style={styles.bannerActionText}>Personalised Plans Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDoThisLater}>
              <Text style={styles.bannerActionText}>Do This Later</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Plans Section */}
        <View style={styles.plansSection}>
          {plans.map((plan) => (
            <View key={plan.id} style={[
              styles.planCard,
              plan.badge && styles.featuredPlanCard
            ]}>
              {plan.badge && (
                <View style={styles.planBadge}>
                  <Text style={styles.planBadgeText}>{plan.badge}</Text>
                </View>
              )}
              
              <View style={styles.planHeader}>
                <Text style={styles.planName}>{plan.name}</Text>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountBadgeText}>{plan.discount}</Text>
                </View>
              </View>

              <View style={styles.priceSection}>
                <Text style={styles.originalPrice}>{plan.originalPrice}</Text>
                <Text style={styles.discountedPrice}>{plan.discountedPrice}</Text>
                <Text style={styles.perMonth}>{plan.perMonth}</Text>
              </View>

              <TouchableOpacity
                style={styles.continueButton}
                onPress={() => handlePlanSelect(plan)}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>

              <View style={styles.features}>
                {plan.features.map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Text style={styles.featureIcon}>✔</Text>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.autoRenewal}>Auto-renews on expiry</Text>
            </View>
          ))}
        </View>

        {/* VIP Section */}
        <View style={styles.vipSection}>
          <View style={styles.vipBadge}>
            <Text style={styles.vipBadgeText}>VIP SAATHJANAM</Text>
          </View>
          <Text style={styles.vipTitle}>No.1 Matchmaking Service for the Elite</Text>
          <View style={styles.vipFeatures}>
            <Text style={styles.vipFeature}>5x Success + 100% Privacy</Text>
            <Text style={styles.vipFeature}>50K+ VIPs + Top Consultant</Text>
          </View>
          <TouchableOpacity 
            style={styles.consultationButton}
            onPress={handleConsultation}
          >
            <Text style={styles.consultationButtonText}>Book a FREE Consultation</Text>
          </TouchableOpacity>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>You have questions. We have the answers...</Text>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>What are some of the benefits of Premium plans?</Text>
            <Text style={styles.faqAnswer}>As a Premium member, you can chat unlimited with your Matches, view their contact numbers and view hidden photos. You also get Premium Assistance on priority.</Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>What payment options do you offer?</Text>
            <Text style={styles.faqAnswer}>We offer multiple Online and offline payment options for you to pick and choose from based on your location.</Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>What offers and discounts can I avail?</Text>
            <Text style={styles.faqAnswer}>We keep you informed from time to time whenever you are eligible for different discounts and offers.</Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>How can I be safe on SaathJanam.com?</Text>
            <Text style={styles.faqAnswer}>We go to great lengths to make sure you get the best possible experience here. Every single profile is screened.</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            The safest, smartest and the most secure matchmaking service in India
          </Text>
        </View>
      </ScrollView>

      {/* Cart Modal */}
      <Modal
        visible={showCartModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCartModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Purchase</Text>
            {selectedPlan && (
              <>
                <Text style={styles.modalPlanName}>{selectedPlan.name}</Text>
                <Text style={styles.modalPrice}>{selectedPlan.discountedPrice}</Text>
                <Text style={styles.modalDuration}>{selectedPlan.duration}</Text>
                
                <View style={styles.modalFeatures}>
                  {selectedPlan.features.map((feature, index) => (
                    <Text key={index} style={styles.modalFeature}>• {feature}</Text>
                  ))}
                </View>

                <View style={styles.modalButtons}>
                  <TouchableOpacity 
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setShowCartModal(false)}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.modalButton, styles.confirmButton]}
                    onPress={handlePurchase}
                  >
                    <Text style={styles.confirmButtonText}>Purchase</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Consultation Modal */}
      <Modal
        visible={showConsultationModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowConsultationModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Book FREE Consultation</Text>
            <Text style={styles.modalSubtitle}>
              Our VIP matchmaking experts will contact you to understand your preferences and help you find your perfect match.
            </Text>
            
            <View style={styles.consultationBenefits}>
              <Text style={styles.benefitItem}>✓ Personalized matchmaking</Text>
              <Text style={styles.benefitItem}>✓ Privacy guaranteed</Text>
              <Text style={styles.benefitItem}>✓ Elite community access</Text>
              <Text style={styles.benefitItem}>✓ Expert guidance</Text>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowConsultationModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleBookConsultation}
              >
                <Text style={styles.confirmButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d4af37',
  },
  banner: {
    backgroundColor: '#fff8e1',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },
  bannerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bannerActionText: {
    color: '#d4af37',
    fontWeight: '600',
    fontSize: 14,
  },
  plansSection: {
    padding: 16,
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredPlanCard: {
    borderColor: '#d4af37',
    borderWidth: 2,
  },
  planBadge: {
    backgroundColor: '#d4af37',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  planBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  discountBadge: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceSection: {
    marginBottom: 16,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 4,
  },
  discountedPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  perMonth: {
    fontSize: 14,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#d4af37',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  features: {
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    color: '#4caf50',
    marginRight: 8,
    fontSize: 14,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  autoRenewal: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  vipSection: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  vipBadge: {
    backgroundColor: '#d4af37',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  vipBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  vipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  vipFeatures: {
    marginBottom: 16,
  },
  vipFeature: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  consultationButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#d4af37',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  consultationButtonText: {
    color: '#d4af37',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqSection: {
    padding: 20,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  faqItem: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  modalPlanName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#d4af37',
  },
  modalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#333',
  },
  modalDuration: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  modalFeatures: {
    marginBottom: 20,
  },
  modalFeature: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  consultationBenefits: {
    marginBottom: 20,
  },
  benefitItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  confirmButton: {
    backgroundColor: '#d4af37',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PremiumSubscription;













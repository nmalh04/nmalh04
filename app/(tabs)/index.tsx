import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/8224759/pexels-photo-8224759.jpeg' }}
          style={styles.heroImage}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to Sports Explorer!</Text>
          <Text style={styles.heroSubtitle}>Let's discover amazing sports together!</Text>
        </View>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Sport</Text>
        <Link href="/sports" asChild>
          <Pressable style={styles.featuredCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/8224763/pexels-photo-8224763.jpeg' }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>Soccer</Text>
              <Text style={styles.featuredDescription}>
                The world's most popular sport! Kick, pass, and score goals with your feet.
              </Text>
            </View>
          </Pressable>
        </Link>
      </View>

      <View style={styles.quickLinks}>
        <Link href="/games" asChild>
          <Pressable style={styles.quickLink}>
            <Text style={styles.quickLinkText}>Play Games</Text>
          </Pressable>
        </Link>
        <Link href="/achievements" asChild>
          <Pressable style={styles.quickLink}>
            <Text style={styles.quickLinkText}>View Rewards</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  hero: {
    position: 'relative',
    height: 200,
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  featuredSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  quickLinks: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  quickLink: {
    flex: 1,
    backgroundColor: '#4361EE',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  quickLinkText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
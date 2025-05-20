import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Trophy } from 'lucide-react-native';

const achievements = [
  {
    id: '1',
    name: 'Sports Explorer',
    description: 'Explored 3 different sports',
    progress: 2,
    total: 3,
    image: 'https://images.pexels.com/photos/8224772/pexels-photo-8224772.jpeg',
  },
  {
    id: '2',
    name: 'Game Master',
    description: 'Completed 5 mini-games',
    progress: 3,
    total: 5,
    image: 'https://images.pexels.com/photos/8224775/pexels-photo-8224775.jpeg',
  },
];

export default function AchievementsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsCard}>
        <Trophy color="#4361EE" size={32} />
        <View style={styles.statsContent}>
          <Text style={styles.statsTitle}>Total Achievements</Text>
          <Text style={styles.statsValue}>5 / 10</Text>
        </View>
      </View>

      {achievements.map((achievement) => (
        <View key={achievement.id} style={styles.achievementCard}>
          <Image source={{ uri: achievement.image }} style={styles.achievementImage} />
          <View style={styles.achievementContent}>
            <Text style={styles.achievementName}>{achievement.name}</Text>
            <Text style={styles.achievementDescription}>{achievement.description}</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill,
                    { width: `${(achievement.progress / achievement.total) * 100}%` }
                  ]}
                />
              </View>
              <Text style={styles.progressText}>
                {achievement.progress}/{achievement.total}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  statsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statsContent: {
    marginLeft: 12,
  },
  statsTitle: {
    fontSize: 14,
    color: '#64748B',
  },
  statsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  achievementImage: {
    width: '100%',
    height: 120,
  },
  achievementContent: {
    padding: 16,
  },
  achievementName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4361EE',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: 'bold',
  },
});
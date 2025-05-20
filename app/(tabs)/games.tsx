import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { CirclePlay as PlayCircle } from 'lucide-react-native';

const games = [
  {
    id: '1',
    name: 'Ball Control Challenge',
    description: 'Practice your ball control skills!',
    image: 'https://images.pexels.com/photos/8224766/pexels-photo-8224766.jpeg',
    difficulty: 'Easy',
  },
  {
    id: '2',
    name: 'Sports Quiz',
    description: 'Test your sports knowledge!',
    image: 'https://images.pexels.com/photos/8224769/pexels-photo-8224769.jpeg',
    difficulty: 'Medium',
  },
];

export default function GamesScreen() {
  return (
    <ScrollView style={styles.container}>
      {games.map((game) => (
        <Pressable key={game.id} style={styles.gameCard}>
          <Image source={{ uri: game.image }} style={styles.gameImage} />
          <View style={styles.overlay}>
            <PlayCircle color="#FFFFFF" size={48} />
          </View>
          <View style={styles.gameContent}>
            <View style={styles.gameHeader}>
              <Text style={styles.gameName}>{game.name}</Text>
              <View style={[
                styles.difficultyBadge,
                game.difficulty === 'Easy' ? styles.easyBadge : styles.mediumBadge
              ]}>
                <Text style={styles.difficultyText}>{game.difficulty}</Text>
              </View>
            </View>
            <Text style={styles.gameDescription}>{game.description}</Text>
          </View>
        </Pressable>
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
  gameCard: {
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
  gameImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContent: {
    padding: 16,
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  easyBadge: {
    backgroundColor: '#4CB944',
  },
  mediumBadge: {
    backgroundColor: '#FF9F1C',
  },
  difficultyText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  gameDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
});
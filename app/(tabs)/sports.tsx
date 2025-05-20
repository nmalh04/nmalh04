import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';

const sports = [
  {
    id: '1',
    name: 'Soccer',
    description: 'Kick the ball into the goal!',
    image: 'https://images.pexels.com/photos/8224763/pexels-photo-8224763.jpeg',
    level: 'Beginner',
  },
  {
    id: '2',
    name: 'Basketball',
    description: 'Shoot hoops and dribble!',
    image: 'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg',
    level: 'Beginner',
  },
  {
    id: '3',
    name: 'Swimming',
    description: 'Splash and have fun in the water!',
    image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg',
    level: 'Beginner',
  },
];

export default function SportsScreen() {
  return (
    <ScrollView style={styles.container}>
      {sports.map((sport) => (
        <Pressable key={sport.id} style={styles.card}>
          <Image source={{ uri: sport.image }} style={styles.image} />
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>{sport.name}</Text>
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>{sport.level}</Text>
              </View>
            </View>
            <Text style={styles.description}>{sport.description}</Text>
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
  card: {
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
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  levelBadge: {
    backgroundColor: '#4361EE',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  levelText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
});
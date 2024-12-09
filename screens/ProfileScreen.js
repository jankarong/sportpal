import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, useTheme, Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SavedEventsSection from './SavedEventsSection';


export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text variant="headlineMedium" style={styles.headerText}>
          Welcome Back, Janka
        </Text>

      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <SettingItem
            icon="account-settings-outline"
            label="Account Settings"
          />
          <SettingItem icon="bell-outline" label="Notifications" value="ON" />
          <SettingItem icon="translate" label="Language" value="English" />
        </View>

        <View style={styles.card}>
          <SettingItem icon="bookmark-outline" label="Saved Events" onPress={() => navigation.navigate('SavedEventsScreen')}/>
          <SettingItem icon="history" label="Past Events" />
          <SettingItem icon="pencil-outline" label="Manage Events" />
          <SettingItem icon="map-marker-outline" label="Venue Registration" />
        </View>

        <View style={styles.card}>
          <SettingItem icon="help-circle-outline" label="Help & Support" />
          <SettingItem icon="email-outline" label="Contact us" />
          <SettingItem icon="lock-outline" label="Privacy policy" />
        </View>
        <SavedEventsSection />
      </ScrollView>

      
    </View>
  );
}

const SettingItem = ({ icon, label, value }) => {
  const theme = useTheme();
  return (
    <View style={styles.settingItem}>
      <MaterialCommunityIcons name={icon} size={24} color={theme.colors.primary} />
      <Text style={styles.settingLabel}>{label}</Text>
      {value && <Text style={[styles.settingValue, { color: theme.colors.primary }]}>{value}</Text>}
    </View>
  );
};

const BottomNavItem = ({ icon, label, active }) => {
  const theme = useTheme();
  return (
    <View style={styles.navItem}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={active ? theme.colors.primary : 'gray'}
      />
      <Text style={[styles.navLabel, active && { color: theme.colors.primary }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: { color: 'white', fontWeight: 'bold', marginBottom: 10 },
  profileImage: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: 'white' },
  content: { padding: 20 },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  settingLabel: { flex: 1, marginLeft: 10 },
  settingValue: { fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  navItem: { alignItems: 'center' },
  navLabel: { fontSize: 12, color: 'gray' },
});

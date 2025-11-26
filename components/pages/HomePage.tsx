import React from 'react';
import { HomeHero } from '../home/HomeHero';
import { MapFeature } from '../home/MapFeature';
import { InfoDisplay } from '../home/InfoDisplay';
import { TaskManagement } from '../home/TaskManagement';
import { FocusMode } from '../home/FocusMode';
import { MusicPlayer } from '../home/MusicPlayer';
import { PersonalProfile } from '../home/PersonalProfile';

export const HomePage: React.FC = () => {
  return (
    <div id="features" style={{backgroundColor: '#111111'}}>
      <HomeHero />
      <MapFeature />
      <InfoDisplay />
      <TaskManagement />
      <FocusMode />
      <MusicPlayer />
      <PersonalProfile />
    </div>
  );
};

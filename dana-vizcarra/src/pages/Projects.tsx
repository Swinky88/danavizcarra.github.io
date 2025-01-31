import React from 'react';
import { ImageCard } from '../components';
import homeImage from '../img/home.jpg';

export default function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <ImageCard 
        imageSrc={homeImage}
        altText="Modern home exterior"
        title="Project Title"
        description="Project description goes here"
      />
    </div>
  );
} 
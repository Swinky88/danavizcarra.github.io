import React from 'react';
import ImageCard from '../components/ImageCard';
import homeImage from '../img/home.jpg';

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Website Home</h1>
      <ImageCard 
        imageSrc={homeImage}
        altText="Home Image"
        title="Home Title"
        description="Home description goes here"
      />
    </div>
  );
} 
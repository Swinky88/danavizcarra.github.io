import React from 'react';
import './ImageCard.css';

interface ImageCardProps {
  imageSrc: string;
  altText: string;
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  primaryButton,
  secondaryButton
}) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={altText} className="image-card__image" />
      <div className="image-card__content">
        {title && <h3 className="image-card__title">{title}</h3>}
        {description && <p className="image-card__description">{description}</p>}
        {(primaryButton || secondaryButton) && (
          <div className="image-card__buttons">
            {primaryButton && (
              <button 
                className="image-card__button image-card__button--primary"
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </button>
            )}
            {secondaryButton && (
              <button 
                className="image-card__button image-card__button--secondary"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard; 
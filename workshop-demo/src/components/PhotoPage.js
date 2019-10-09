import React from 'react';
import '../style/photo-page.scss';
import Card from './Card';

function PhotoPage() {
  return (
    <div className="photo-page">
        <Card name="Photo 1" text="a cool photo" url="https://www.w3schools.com/howto/img_avatar.png"/>
        <Card name="Photo 2" text="a cool photo ~" url="https://www.w3schools.com/howto/img_avatar2.png"/>
        <Card name="Photo 3" text="a cool photo !" url="https://www.w3schools.com/howto/img_avatar.png"/>
        <Card name="Photo 4" text="a cool photo *" url="https://www.w3schools.com/howto/img_avatar2.png"/>
        <Card name="Photo 5" text="a cool photo #" url="https://www.w3schools.com/howto/img_avatar.png"/>
        <Card name="Photo 6" text="a cool photo $" url="https://www.w3schools.com/howto/img_avatar2.png"/>
        <Card name="Photo 7" text="a cool photo %" url="https://www.w3schools.com/howto/img_avatar.png"/>
        <Card name="Photo 8" text="a cool photo ^" url="https://www.w3schools.com/howto/img_avatar2.png"/>
    </div>
  );
}

export default PhotoPage;

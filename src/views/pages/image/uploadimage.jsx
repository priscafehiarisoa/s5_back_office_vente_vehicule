import React from 'react';
import { storage } from '../../../configurationUpload/firebase';
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll, list } from 'firebase/storage';
import { v4 } from 'uuid';
import axios from 'axios';
import config from '../../../config';

const Uploadimage = () => {
  const link = `${config.http}://${config.host}`;
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, 'images/');
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        saveImageUrlToBackend(url); // Send the URL to the backend
      });
    });
  };

  useEffect(() => {
    // Fetch image URLs from the backend
    fetch(link + '/annonce/getimages')
      .then((response) => response.json())
      .then((data) => {
        if (data.statut === 200 && data.donnee) {
          setImageUrls(data.donnee);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);
  const [formData, setFormData] = useState({
    imgUrl: ''
  });

  const saveImageUrlToBackend = (imageUrl) => {
    // Make a POST request to your backend to save the image URL
    fetch(link + '/annonce/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imgUrl: imageUrl })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>

      <p>liste image </p>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt="" />
      ))}
    </div>
  );
};

export default Uploadimage;

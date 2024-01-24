import React from 'react';

const InsertImgage = () => {
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setFormData({ ...formData, selectedImage });
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post(`${backendURL}/upload-image`, formData);
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <input type="submit" onClick={handleSubmit} value="enregistrer image"/>
    </div>
  );
};

export default InsertImgage;
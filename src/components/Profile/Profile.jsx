import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='profileContainer'>
      <div className="center">
        <div className="ProfileTitle">
          <h1>My Profile</h1>
        </div>

        <h2 className='Mainhead1'>PERSONAL INFORMATION</h2>

        <div className='form'>
          <div className='form-group'>
            <label htmlFor='name'>YOUR NAME<span>*</span></label>
            <input type='text' name='name' id='name'/>
          </div>

          <div className='form-group'>
            <label htmlFor='branch'>BRANCH<span>*</span></label>
            <input type='text' name='branch' id='branch'/>
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>PHONE/MOBILE<span>*</span></label>
            <input type='text' name='phone' id='phone'/>
          </div>

          <div className='form-group'>
            <label htmlFor='email'>EMAIL ID<span>*</span></label>
            <input type='email' name='email' id='email'/>
          </div>

        </div>

        <button className='btn'>SAVE CHANGES</button>
      </div>

      <div className="profileImageContainer">
        {image ? (
          <img className="profileImage" src={image} alt="Uploaded Profile" />
        ) : (
          <>
            <div className="uploadPlaceholder">Upload an image</div>
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;

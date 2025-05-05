import React, { useState } from 'react'
import ImageUpload from './components/ImageUpload'

function App() {
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleImageUpload = (file) => {
    console.log("Image uploaded:", file)
    setUploadedImage(file)
  }

  return (
    <div>
      <h1>Welcome to Snookify!</h1>
      <p>Upload your image and start your personalization journey.</p>
      <ImageUpload onImageUpload={handleImageUpload} />
    </div>
  )
}

export default App

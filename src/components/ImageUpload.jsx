import React, { useState } from 'react'

function ImageUpload({ onImageUpload }) {
  const [preview, setPreview] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      onImageUpload(file)
    }
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Upload your image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" style={{ marginTop: '10px', maxWidth: '300px' }} />}
    </div>
  )
}

export default ImageUpload

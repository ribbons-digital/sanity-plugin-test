import React, {useState} from 'react'

export default function ImageUpload() {
  const [error, setError] = useState<string>('')
  const [imagePreview, setImagePreview] = useState<string>()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > 120000) {
        setError('Image is too large. Max size is 120kb')
        return
      }

      setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {imagePreview && <img src={imagePreview} alt="Preview" />}
      {error.length > 0 && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

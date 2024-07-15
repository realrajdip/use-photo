#  usePhoto 

A custom React hook for uploading images to Cloudinary.


## 🚀 Installation

With `npm`:
```
npm install --save use-photo
```

With `yarn`:
```
yarn add use-photo
```

## 🖥️ Usage

First, import the usePhoto hook and use it in your component. Make sure to replace 'your-cloud-name' and 'your-upload-preset' with your actual Cloudinary details.

## ✅ Cloudinary Configuration

`Cloud Name`:

This is the unique identifier for your Cloudinary account. For example, if your Cloudinary cloud name is my-cloud-name, you should replace 'your-cloud-name' with 'my-cloud-name'.

`Upload Preset`:

This is the name of the preset you created in the Cloudinary dashboard. If you created a preset named my-upload-preset, replace 'your-upload-preset' with 'my-upload-preset'.


```ts
import React, { useState, ChangeEvent } from 'react';
import { usePhoto } from 'use-photo';

const App: React.FC = () => {
  const { upload, error, uploading, result } = usePhoto(
    'your-cloud-name', // Your Cloudinary cloud name
    'your-upload-preset' // Your Cloudinary upload preset
  );
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      upload(file);
    }
  };

  return (
    <div>
      <h1>Upload Image to Cloudinary</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {result && (
        <div>
          <h2>Upload Success:</h2>
          <img src={result.secure_url} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default App;

```


## Contributors ✨


<table>
  <tr>
    <td align="center"><a href="https://github.com/realrajdip"><img src="https://gravatar.com/galaxyvery8c553b013f" width="100px;" alt=""/><br /><sub><b>Rajdip Bandopadhyay</b></sub></a><br /><a href="https://github.com/realrajdip/use-image/commits?author=realrajdip" title="Code">💻</a> <a href="https://github.com/realrajdip/use-upload/commits?author=realrajdip" title="Documentation">📖</a></td>
  </tr>
</table>

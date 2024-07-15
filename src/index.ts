import { useState } from 'react';
import { UploadResult, UploadOptions, UseUploadResult } from './types';

export const usePhoto = (
  cloudName: string,
  uploadPreset: string,
  options: UploadOptions = {}
): UseUploadResult => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<UploadResult | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    setResult(null);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    if (options.folder) {
      formData.append('folder', options.folder);
    }

    if (options.tags) {
      formData.append('tags', options.tags.join(','));
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err);
    } finally {
      setUploading(false);
    }
  };

  return { upload, error, uploading, result };
};

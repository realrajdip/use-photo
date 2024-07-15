export interface UploadResult {
  public_id: string;
  secure_url: string;
}

export interface UploadOptions {
  folder?: string;
  tags?: string[];
}

export interface UseUploadResult {
  upload: (file: File) => Promise<void>;
  error: any;
  uploading: boolean;
  result: UploadResult | null;
}

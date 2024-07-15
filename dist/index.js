"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePhoto = void 0;
const react_1 = require("react");
const usePhoto = (cloudName, uploadPreset, options = {}) => {
    const [uploading, setUploading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const [result, setResult] = (0, react_1.useState)(null);
    const upload = (file) => __awaiter(void 0, void 0, void 0, function* () {
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
            const response = yield fetch(url, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`Upload failed with status ${response.status}`);
            }
            const data = yield response.json();
            setResult(data);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setUploading(false);
        }
    });
    return { upload, error, uploading, result };
};
exports.usePhoto = usePhoto;

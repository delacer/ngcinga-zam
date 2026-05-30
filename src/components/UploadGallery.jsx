// src/components/UploadGallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import { FaCloudUploadAlt, FaFilm, FaImage, FaTrashAlt, FaSpinner } from "react-icons/fa";
import supabase from "../lib/supabaseClient";
import "./UploadGallery.css";

const UploadGallery = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(true);

  // Wrapped in useCallback to prevent reference recalculation on parent re-renders
  const fetchFiles = useCallback(async () => {
    try {
      setLoadingFiles(true);
      
      // Requesting file list with sorting options if available to keep grid order predictable
      const { data, error } = await supabase.storage
        .from("uploads")
        .list("", {
          limit: 100,
          sortBy: { column: "created_at", order: "desc" }
        });
      
      if (error) {
        console.error("Error fetching files:", error.message);
        return;
      }

      if (data) {
        // Filter out Supabase system placeholder folders immediately
        const validFiles = data.filter(item => item.name !== ".emptyFolderPlaceholder");

        // Optimized parsing block: batch-extracting the public URLs
        const urls = validFiles.map((item) => {
          const publicUrl = supabase.storage.from("uploads").getPublicUrl(item.name).data.publicUrl;
          return {
            url: publicUrl,
            name: item.name
          };
        });

        setFiles(urls);
      }
    } catch (err) {
      console.error("System structural error mapping storage media:", err);
    } finally {
      setLoadingFiles(false);
    }
  }, []);

  // Safe side-effect load on mount hook
  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      // Your backend node API handler address
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        // Fast state synchronization following successful asset upload payload pipeline
        await fetchFiles();
      } else {
        console.error("Upload failed server side.");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setIsUploading(false);
      // Reset input element value so same file can be uploaded consecutively if needed
      e.target.value = "";
    }
  };

  const handleDelete = async (fileName) => {
    if (!window.confirm("Are you sure you want to remove this file from your gallery?")) return;
    
    const { error } = await supabase.storage.from("uploads").remove([fileName]);
    if (!error) {
      // Functional state updates skip having to call the network for a complete refetch loop
      setFiles((prev) => prev.filter((item) => item.name !== fileName));
    } else {
      console.error("Deletion error:", error.message);
    }
  };

  return (
    <div className="gallery-admin-container">
      {/* HEADER CONTROLS LAYER */}
      <header className="gallery-header-pane">
        <div className="title-block">
          <h2>Project Media Vault</h2>
          <p>Manage and display recent high-resolution project proofs, structural installations, and walk-through videos.</p>
        </div>

        {/* DRAG & CLICK UPLOAD STATION BOARD */}
        <div className={`upload-dropzone-box ${isUploading ? "disabled" : ""}`}>
          <input 
            type="file" 
            id="gallery-file-input" 
            onChange={handleUpload} 
            disabled={isUploading} 
            accept="image/*,video/*"
          />
          <label htmlFor="gallery-file-input" className="dropzone-label">
            {isUploading ? (
              <>
                <FaSpinner className="icon-uploading-spin" />
                <span>Streaming Payload To Server...</span>
              </>
            ) : (
              <>
                <FaCloudUploadAlt className="icon-cloud-drop" />
                <span>Drop images/videos or <strong className="orange-highlight">Browse Files</strong></span>
              </>
            )}
          </label>
        </div>
      </header>

      {/* RENDER ENGINE GRID */}
      {loadingFiles ? (
        <div className="gallery-skeleton-grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="skeleton-card"></div>
          ))}
        </div>
      ) : files.length === 0 ? (
        <div className="empty-state-notice">
          <p>No media found inside the storage bucket. Use the module above to populate your showcase gallery.</p>
        </div>
      ) : (
        <div className="gallery-display-grid">
          {files.map((fileObj, idx) => {
            const isVideo = fileObj.name.match(/\.(mp4|mov|avi|webm)$/i);
            return (
              <div key={fileObj.name || idx} className="gallery-glass-card">
                <div className="media-viewport-wrapper">
                  {isVideo ? (
                    <video 
                      src={fileObj.url} 
                      controls 
                      preload="metadata"
                      decoding="async" // Offloads video frame calculation from primary main stream threads
                    />
                  ) : (
                    <img 
                      src={fileObj.url} 
                      alt="Uploaded work evidence" 
                      loading="lazy" 
                      decoding="async" // Leverages async decoding architectures to remove main UI painting lags
                    />
                  )}
                  <div className="media-type-tag">
                    {isVideo ? <FaFilm /> : <FaImage />}
                  </div>
                </div>
                
                <div className="media-meta-footer">
                  <span className="file-name-label" title={fileObj.name}>
                    {fileObj.name}
                  </span>
                  <button 
                    className="delete-item-action-btn"
                    onClick={() => handleDelete(fileObj.name)}
                    aria-label="Delete item asset"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UploadGallery;
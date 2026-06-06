// src/components/UploadGallery.jsx
import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt, FaFilm, FaImage, FaTrashAlt, FaSpinner, FaLock } from "react-icons/fa";
import "./UploadGallery.css";

const GALLERY_PASSWORD = process.env.REACT_APP_GALLERY_PASSWORD; 
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
console.log("DEBUG ENVIRONMENT PASSWORD:", GALLERY_PASSWORD);

const UploadGallery = () => {
  const [files, setFiles] = useState(() => {
    const savedFiles = localStorage.getItem("gallery_assets");
    return savedFiles ? JSON.parse(savedFiles) : [];
  });
  const [isUploading, setIsUploading] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(true);

  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem("gallery_admin_auth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("gallery_assets", JSON.stringify(files));
  }, [files]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    script.onload = () => setLoadingFiles(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const checkAuthentication = () => {
    if (isAdmin) return true;

    const passwordInput = prompt("Enter Admin Password to modify media:");
    if (passwordInput === GALLERY_PASSWORD) {
      setIsAdmin(true);
      sessionStorage.setItem("gallery_admin_auth", "true");
      return true;
    } else if (passwordInput !== null) {
      alert("Incorrect password! Access denied.");
    }
    return false;
  };

  const openWidget = (e) => {
    e.preventDefault();
    if (isUploading) return;

    if (!checkAuthentication()) return;

    window.cloudinary.openUploadWidget(
      {
        cloudName: CLOUD_NAME, 
        uploadPreset: UPLOAD_PRESET, 
        sources: ["local", "url", "camera"],
        multiple: false, 
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Widget Error:", error);
          setIsUploading(false);
          return;
        }

        if (result && result.event === "upload-started") {
          setIsUploading(true);
        }

        if (result && result.event === "success") {
          console.log("Uploaded File Details: ", result.info);
          
          const newFile = {
            name: result.info.original_filename + "." + result.info.format,
            url: result.info.secure_url,
            publicId: result.info.public_id, 
            resourceType: result.info.resource_type 
          };

          setFiles((prevFiles) => [newFile, ...prevFiles]);
          setIsUploading(false);
        }
      }
    );
  };

  const handleDelete = (indexToDelete) => {
    if (!checkAuthentication()) return;

    if (window.confirm("Are you sure you want to remove this item from your gallery?")) {
      setFiles((prevFiles) => prevFiles.filter((_, idx) => idx !== indexToDelete));
    }
  };

  const handleLockPanel = () => {
    setIsAdmin(false);
    sessionStorage.removeItem("gallery_admin_auth");
    alert("Admin panel locked successfully.");
  };

  return (
    <div className="gallery-admin-container">
      {/* HEADER CONTROLS LAYER */}
      <header className="gallery-header-pane">
        <div className="title-block">
          <h2>Project Media Vault</h2>
          <p>Manage and display recent high-resolution project proofs, structural installations, and walk-through videos.</p>
          
          {isAdmin && (
            <button 
              onClick={handleLockPanel} 
              className="lock-panel-btn"
              style={{
                marginTop: "12px",
                padding: "6px 12px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: "4px"
              }}
            >
              Lock Admin Controls
            </button>
          )}
        </div>

        {/* DRAG & CLICK UPLOAD STATION BOARD */}
        <div 
          className={`upload-dropzone-box ${isUploading ? "disabled" : ""}`}
          onClick={openWidget}
          style={{ cursor: isUploading ? "not-allowed" : "pointer" }}
        >
          <div className="dropzone-label">
            {isUploading ? (
              <>
                <FaSpinner className="icon-uploading-spin" />
                <span>Streaming Payload To Server...</span>
              </>
            ) : (
              <>
                <FaCloudUploadAlt className="icon-cloud-drop" />
                <span>
                  {isAdmin ? (
                    <>Click here to <strong className="orange-highlight">Browse & Upload Files</strong></>
                  ) : (
                    <><FaLock style={{ marginRight: "8px", fontSize: "0.9em" }} /> Authenticate to <strong className="orange-highlight">Upload Files</strong></>
                  )}
                </span>
              </>
            )}
          </div>
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
            const isVideo = fileObj.resourceType === "video" || fileObj.name.match(/\.(mp4|mov|avi|webm)$/i);
            
            return (
              <div key={fileObj.publicId || idx} className="gallery-glass-card">
                <div className="media-viewport-wrapper">
                  {isVideo ? (
                    <video 
                      src={fileObj.url} 
                      controls 
                      preload="metadata"
                      decoding="async" 
                    />
                  ) : (
                    <img 
                      src={fileObj.url} 
                      alt="Uploaded work evidence" 
                      loading="lazy" 
                      decoding="async" 
                    />
                  )}
                  
                  {/* Media Type Indicator (Top Right Corner) */}
                  <div className="media-type-tag">
                    {isVideo ? <FaFilm /> : <FaImage />}
                  </div>

                  {/* Absolute Positioned Delete Action Button inside the card viewport */}
                  <button 
                    className="delete-item-action-btn card-overlay-delete"
                    aria-label="Delete item asset"
                    onClick={() => handleDelete(idx)}
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
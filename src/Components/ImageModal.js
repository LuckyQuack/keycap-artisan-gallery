import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is important for accessibility

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
          border: 'none',
          borderRadius: '8px',
          maxWidth: '80%', // Ensure the modal doesn't exceed 80% of the viewport width
          maxHeight: '80%', // Ensure the modal doesn't exceed 80% of the viewport height
        },
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          padding: '5px 10px',
        }}
      >
        Close
      </button>
      <img
        src={imageSrc}
        alt=""
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1000px', // Set the maximum width of the image
          maxHeight: '100vh', // Set the maximum height of the image
        }}
      />
    </Modal>
  );
};

export default ImageModal;

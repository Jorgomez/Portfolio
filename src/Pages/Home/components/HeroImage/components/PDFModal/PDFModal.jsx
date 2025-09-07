import React from 'react'
import { HiX, HiDownload } from 'react-icons/hi'
import './PDFModal.scss'

export const PDFModal = ({ isOpen, onClose, pdfUrl, title, language }) => {
  if (!isOpen) return null

  
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `CV_Jorge_Gomez_${language}.pdf`
    link.click()
  }

  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Función para cerrar el modal
  const handleClose = () => {
    onClose()
  }

  return (
    <div className="pdf-modal-backdrop" onClick={handleBackdropClick}>
      <div className="pdf-modal">
        <div className="pdf-modal__header"> 
          <div className="pdf-modal__header-close" onClick={handleClose}>
            <HiX />
          </div>
        </div>
        <div className="pdf-modal__content">
          <iframe
            src={pdfUrl}
            className="pdf-modal__iframe"
            title={title}
            width="100%"
            height="100%"
          />
        </div>

    
     

      </div>
    </div>
  )
}

export default PDFModal 
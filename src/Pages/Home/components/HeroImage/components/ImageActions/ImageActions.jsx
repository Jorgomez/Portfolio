import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiMail, HiChevronDown, HiDownload } from 'react-icons/hi'
import PDFModal from '../PDFModal/PDFModal'
import './ImageActions.scss'

export const ImageActions = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false)
  const [selectedCV, setSelectedCV] = useState({ url: '', language: '', title: '' })
  const [isMobile, setIsMobile] = useState(false)
  
  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Comprobar al cargar
    checkIfMobile()
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile)
    
    // Limpiar el event listener
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])
  
  // Función para WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = "34611845110"
    const message = "Hola! He visto tu portfolio y me gustaría contactar contigo."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Función para Email
  const handleEmail = () => {
    window.location.href = 'mailto:Jorgomez@protonmail.com'
  }

  // Función para LinkedIn
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jorgomezm/', '_blank')
  }

  
  const handleCVView = (language) => {
    const cvUrl = language === 'es' ? '/CV_JORGOMEZ_SP.L.pdf' : '/CV_JORGOMEZ_EN..pdf'
    const title = language === 'es' ? 'CV Jorge Gómez - Español' : 'CV Jorge Gómez - English'
    
    setSelectedCV({
      url: cvUrl,
      language: language,
      title: title
    })
    
    if (isMobile) {
      // En móvil: descargar directamente
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = language === 'es' ? 'CV_Jorge_Gomez_Español.pdf' : 'CV_Jorge_Gomez_English.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // En desktop: mostrar modal
      setIsPDFModalOpen(true)
    }
    
    setIsDropdownOpen(false) // Cerrar dropdown
  }

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Cerrar modal
  const closePDFModal = () => {
    setIsPDFModalOpen(false)
  }

  return (
    <>
      <div className="image-actions">
        
        {/* Email Button */}
        <button 
          className="image-actions__button image-actions__button--primary" 
          onClick={handleEmail}
        >
          <HiMail className="image-actions__button-icon" />
        </button>
        
        {/* WhatsApp Button */}
        <button 
          className="image-actions__button image-actions__button--tertiary"
          onClick={handleWhatsApp}
        >
          <FaWhatsapp className="image-actions__button-icon" />
        </button>
        
        {/* LinkedIn Button */}
        <button 
          className="image-actions__button image-actions__button--secondary" 
          onClick={handleLinkedIn}
        >
          <FaLinkedin className="image-actions__button-icon" />
        </button>
        
        {/* Resume Dropdown - Custom */}
        <div className="image-actions__dropdown">
          <button 
            className="image-actions__button image-actions__button--resume"
            onClick={toggleDropdown}
          >
            <span className="image-actions__button-text">Resume</span>
            <HiChevronDown 
              className={`image-actions__button-dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`} 
            />
          </button>
          
          {isDropdownOpen && (
            <div className="image-actions__dropdown-menu">
              <button 
                className="image-actions__dropdown-item"
                onClick={() => handleCVView('en')}
              >
                {isMobile ? (
                  <>
                    English <HiDownload className="image-actions__button-download-icon" />
                  </>
                ) : (
                  'English'
                )}
              </button>
              <button 
                className="image-actions__dropdown-item"
                onClick={() => handleCVView('es')}
              >
                {isMobile ? (
                  <>
                    Spanish <HiDownload className="image-actions__button-download-icon" />
                  </>
                ) : (
                  'Spanish'
                )}
              </button>
            </div>
          )}
        </div>
        
      </div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={closePDFModal}
        pdfUrl={selectedCV.url}
        title={selectedCV.title}
        language={selectedCV.language}
      />
    </>
  )
}

export default ImageActions 
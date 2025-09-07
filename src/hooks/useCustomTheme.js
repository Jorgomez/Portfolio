import { useState, useEffect } from 'react'

export const useCustomTheme = () => {
  const [theme, setThemeState] = useState('dark')
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setThemeState(newTheme)
    
    if (newTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
    
    // Disparar evento personalizado para notificar cambios
    window.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { theme: newTheme }
    }))
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setThemeState(savedTheme)
    
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  // Escuchar cambios de tema desde otros componentes
  useEffect(() => {
    const handleThemeChange = (event) => {
      setThemeState(event.detail.theme)
    }

    window.addEventListener('themeChange', handleThemeChange)
    return () => window.removeEventListener('themeChange', handleThemeChange)
  }, [])

  return { theme, toggleTheme }
} 
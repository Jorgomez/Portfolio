import './MenuToggle.scss'

const MenuToggle = ({ isOpen, onToggle }) => {
  return (
    <button 
      className={`menu-toggle ${isOpen ? 'open' : ''}`}
      onClick={onToggle}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default MenuToggle 
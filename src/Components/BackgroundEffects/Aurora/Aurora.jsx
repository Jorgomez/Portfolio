import './Aurora.scss'

const Aurora = ({ intensity = 'medium', position = 'top' }) => {
  return (
    <div className={`aurora aurora--${intensity} aurora--${position}`}>
      <div className="aurora__layer aurora__layer--1"></div>
      <div className="aurora__layer aurora__layer--2"></div>
      <div className="aurora__layer aurora__layer--3"></div>
      <div className="aurora__layer aurora__layer--4"></div>
      <div className="aurora__layer aurora__layer--5"></div>
   
    </div>
  )
}

export default Aurora 
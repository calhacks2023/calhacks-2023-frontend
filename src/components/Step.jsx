import './Step.css'

function Step(props) {
  return (
    <div className='step-container'>
      <h2 className='step-number'>{props.stepNumber}</h2>
      <h2>{props.stepText}</h2>
    </div>
  )
}

export default Step
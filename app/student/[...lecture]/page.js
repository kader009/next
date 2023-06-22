
const lecture = ({params}) => {
  return (
    <div>
    <h1>day no - {params.lecture[0]}</h1>
    <h1>lecture no - {params.lecture[1]}</h1>
    <h1>lecture no - {params.lecture[2]}</h1>
    </div>
  )
}

export default lecture;
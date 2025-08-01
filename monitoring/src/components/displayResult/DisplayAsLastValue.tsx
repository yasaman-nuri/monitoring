
import type { SensorProps } from '../../models/SensorModel'

interface ResultProps {
    data: SensorProps
}
const DisplayAsLastValue = ({data}: ResultProps) => {

  return (
    <div>
        <h1>{data.name}</h1>
        <h2>{data.value}</h2>
    </div>
  )
}

export default DisplayAsLastValue

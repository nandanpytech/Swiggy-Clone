import {React, useState} from 'react'
import { createContext } from 'react'
import { getlocationdata } from '../FetchData/FetchRegionData'
export const FoodContext = createContext(null)

function Provide({children}) {
  const [ParticularRes, setParticularRes] = useState([])
  const [isdraweropen, setisdraweropen] = useState(false)
  const [inputdata, setinputdata] = useState("Bangalore")
  const [coordinate, setcoordinate] = useState()
  const [sorttype, setsorttype] = useState("RELEVANCE")
  const [filters, setfilters] = useState([])

  const getlocation=async(name)=>{
      const data=await getlocationdata(name)
      setcoordinate(data.coord)
      return data
  }

  return (
    <>
    <FoodContext.Provider value={{
      ParticularRes,
      setParticularRes,
      isdraweropen,
      setisdraweropen,
      inputdata,
      setinputdata,
      getlocation,
      coordinate,
      sorttype,
      setsorttype,
      filters,setfilters
      }}>
        {children}
    </FoodContext.Provider>
    
    </>
  )
}

export default Provide
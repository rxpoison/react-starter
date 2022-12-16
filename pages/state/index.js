import { useEffect, useLayoutEffect, useState } from "react"
import styles from '../../styles/Home.module.css'

export default function About() {   
const [value, setValue] = useState(0)
const [loaded, setLoaded] = useState(false)

useEffect(() => {
    console.log(loaded)
},[value,loaded])

const updateState = () => {
    setValue(value+1) 
    setLoaded(!loaded)
}

    return (
        <div className={styles.container}>
            <h3>Loaded state : {loaded?'TRUE':'FALSE'}</h3>
            <h3>Value state : {value}</h3>
           <button onClick={updateState}>Update</button>
        </div>
    )
}
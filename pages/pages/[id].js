import { useRouter } from "next/router"
import { useState } from "react"
import fetch from 'isomorphic-unfetch'
import styles from '../../styles/Home.module.css'


const Meow = ({Meow}) => {
    return <img src={Meow.file} />
}
export default function About() {
    const router = useRouter()
    const {id} = router.query
    const res = async() => {
        return await fetch('https://aws.random.cat/meow')
    }
    
    console.log('data',res)
   
    return (
        <div className={styles.container}>
           <h1>Blog {id}</h1> 
        </div>
    )
}
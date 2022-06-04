import React, {useState, useEffect} from 'react'
import { NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../Api'

const CountryPicker=({handleCountryChange})=>{
    const[countries, setCountries]=useState([])

    useEffect(
        ()=>{
            const getCountries= async()=>{
                setCountries(await fetchCountries())
            }
            getCountries()
        },[countries])

    return (
        <div className={styles.container}>
        <FormControl className={styles.FormControl}>
             <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}> 
                 <option value=''>Global</option>
                 {countries.map((country,i)=><option key={i} value={country}>{country}</option>)}
             </NativeSelect>

        </FormControl>
        </div>
        
    )
}

export default CountryPicker
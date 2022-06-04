import React from 'react'
import styles from './App.module.css';
import {fetchData} from './Api';
import {Cards,Charts,CountryPicker } from './components'
import img from './images/covid-img.png'


class App extends React.Component {
  state={
    data: {},
    country:null
  }

    async componentDidMount(){
        const country=this.state
        const data= await fetchData({country})
        this.setState({ data })
   }
  
  handleCountryChange= async(country)=>{
    const fetchedData= await fetchData({country})
    this.setState({data:fetchedData, country:country})
  }

  render (){
    const {data, country}= this.state

    return(
        <div className={styles.container}>
        <img  className={styles.image} src={img} alt='Covid-19'/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
        </div>
      )
  }
      
  
}

export default App;

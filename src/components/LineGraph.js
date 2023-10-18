import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'

function LineGraph({data,total}) {
    const[active,setActive]=useState('')
    const[recovered,setRecovered]=useState('')
    const[confirmed,setConfirmed]=useState('')
    const[deaths,setDeaths]=useState('')

    useEffect(()=>{
      showTotal()
        if(data===undefined){
            console.log('')
        }else{
            setActive(data.active)
            setRecovered(data.recovered)
            setDeaths(data.deaths)
            setConfirmed(data.confirmed)
        }
    },[data,total])

    const showTotal=()=>{
      return total.map(item=>{
        const {active,confirmed,deaths,recovered}=item[0]
        setActive(active)
        setConfirmed(confirmed)
        setRecovered(recovered)
        setDeaths(deaths)
      })
    }
    const state = {
        labels: ['recovered'],
        datasets: [
          {
            label: 'recovered',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0,recovered],
          },
          {
            label: 'active',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0,active],
          },
          {
            label: 'deaths',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0,deaths],
          },
        ]
      }
    return (
        <div>
        <Line
          data={state}
          height={250}
          options={{
            title:{
              display:false,
            },
            legend:{
              display:false,
            }
          }}
        />
      </div>
    )
}

export default LineGraph

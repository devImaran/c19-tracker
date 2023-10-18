import React,{useState,useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2';

function DoughnutChart({data,total}) {
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
        labels: ['active', 'decresed', 'recovered'],
        datasets: [
          {
            borderWidth:0.3,
            backgroundColor: [
              '#029bf1',
              '#2C3A47',
              '#4cd137',
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            ],
            data: [ active,deaths, recovered]
          }
        ]
      }
    return (
        <div>
        <Doughnut
        data={state}
        height={250}
        options={{
        cutoutPercentage:90,
        responsive:true,
          legend:{
            display:true,
            position:'right',
            align:'center',
            labels: {
                usePointStyle:true,
            },
            }
        }}
      />
        </div>
    )
}

export default DoughnutChart

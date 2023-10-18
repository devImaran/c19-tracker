import React from 'react'
import {Table} from 'react-bootstrap'

function List({record}) {

    const showList=()=>{
      return record.map(item=>{
         return item.map(el=>{
            const {active,confirmed,deaths,state,recovered}=el
            return(
                <tr>
                    <td>{state}</td>
                    <td>{confirmed}</td>
                    <td>{active}</td>
                    <td>{recovered}</td>
                    <td>{deaths}</td>
                </tr>
              
                )
            })
         })
        }

    return (
        <div className="table">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>state</th>
                <th>confirmed</th>
                <th>active</th>
                <th>recovered</th>
                <th>decresed</th>
              </tr>
            </thead>
            <tbody>
              {showList()}
            </tbody>
        </Table> 
      </div>
    )
}

export default List

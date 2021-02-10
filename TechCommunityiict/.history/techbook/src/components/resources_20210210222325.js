import React, { Component } from 'react'
import './resources.css'
import Header from './Header'


 
class Resources extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          cprelatedBookss: [
             { Books: 'SWE 121'},
             { Books: 'SWE 122'},
             { Books: 'SWE 123'},
             { Books: 'EEE 101'},
             { Books: 'EEE 102'},
             { Books: 'MAT 105W'},
             { Books: 'PHY 103W'},
             { Books: 'BNG 105W'}
          ],
          
          datastructure: [
            { Books: 'SWE 150'},
            { Books: 'SWE 127'},
            { Books: 'SWE 128'},
            { Books: 'SWE 125'},
            { Books: 'PHY 102W'},
            { Books: 'MAT 107W'},
            { Books: 'STA 101W'},
            { Books: 'ENG 101W'},
            { Books: 'ENG 102W'}
         ]
       }
    }

    

    renderTableData() {
        return this.state.cprelatedBookss.map((cpBookss, index) => {
           const {Books} = cpBookss //destructuring
           return (
              <tr key={Books}>
                 <td>{Books}</td>
              </tr>
           )
        })
     }

     rendersecTableData() {
        return this.state.datastructure.map((dsBookss, index) => {
           const { Books } = dsBookss //destructuring
           return (
              <tr key={Books}>
                 <td>{Books}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.cprelatedBookss[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
       return (
          <div className="curriculam">
              <div className="academic_information">
              <h2 id="infotitle">Necessary Books</h2>
              </div>
              
            <div className="yr1sms1">
             <h3 id='title'>Competetive Programming</h3>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>

            <div className="yr1sms2">
             <h3 id='title'>Algorithm & Data Structure</h3>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.rendersecTableData()}
               </tbody>
            </table>
            </div>
          </div>
       )
    }
 }
 
 export default Resources;
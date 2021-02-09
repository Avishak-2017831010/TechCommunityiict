import React, { Component } from 'react'
import './Curriculam.css'


 
class Curriculam extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
             { Code: 'SWE 121', Coursename: 'Structured Programming Language',Credit: '3.0' },
             { Code: 'SWE 122', Coursename: 'Structured Programming Language Lab',  Credit: '1.5' },
             { Code: 'SWE 123', Coursename: 'Discreate Mathematics', Credit: '3.0' },
             { Code: 'EEE 101', Coursename: 'Basic Electrical and Electronic Circuits', Credit: '3.0' },
             { Code: 'EEE 102', Coursename: 'Basic Electrical and Electronic Circuits Lab', Credit: '1.5' },
             { Code: 'MAT 105W', Coursename: 'Coordinate Geometry and Calculus', Credit: '3.0' },
             { Code: 'PHY 103W', Coursename: 'Mechanics, Wave, Heat & Thermodynamics', Credit: '3.0' },
             { Code: 'BNG 105W', Coursename: 'Bangla Language', Credit: '3.0' }
          ]
       }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { Code, CourseCoursename, age, email } = student //destructuring
           return (
              <tr key={Code}>
                 <td>{Code}</td>
                 <td>{CourseCoursename}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
       return (
          <div>
              <div className="academic_information">
              <h2 id="infotitle">Undergraduate program</h2>
              <div className="curriculaminfo">
              <h3>Bsc. in Software Engineering <span id="info">(4 years)</span></h3>
              <h4>Total Credits: <span id="info">160</span></h4>
              <h4>Course length: <span id="info">4 years</span></h4>
              <h4>Total Semester: <span id="info">8</span></h4>
              </div>
              </div>
              

             <h4 id='title'>Year:1 Semester:1</h4>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
          </div>
       )
    }
 }
 
 export default Curriculam
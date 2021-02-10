import React from 'react';

class Resources extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
             { Code: 'SWE 121' },
             { Code: 'SWE 122'},
             { Code: 'SWE 123'},
             { Code: 'EEE 101' },
             { Code: 'EEE 102' },
             { Code: 'MAT 105W'},
             { Code: 'PHY 103W', Coursename: 'Mechanics, Wave, Heat & Thermodynamics', Credit: '3.0' },
             { Code: 'BNG 105W', Coursename: 'Bangla Language', Credit: '3.0' }
          ],
          
          studentsofsecond: [
            { Code: 'SWE 150', Coursename: 'Project Work-I',Credit: '2.0' },
            { Code: 'SWE 127', Coursename: 'Data Structure',  Credit: '3.0' },
            { Code: 'SWE 128', Coursename: 'Data Structure Lab', Credit: '2.0' },
            { Code: 'SWE 125', Coursename: 'Introduction To Software Engineering', Credit: '3.0' },
            { Code: 'PHY 102W', Coursename: 'Basic Physics Lab', Credit: '1.5' },
            { Code: 'MAT 107W', Coursename: 'Linear and Abstract Algebra', Credit: '3.0' },
            { Code: 'STA 101W', Coursename: 'Basic Statics & Probability', Credit: '3.0' },
            { Code: 'ENG 101W', Coursename: 'Effective Communication in English', Credit: '2.0' },
            { Code: 'ENG 102W', Coursename: 'English Language Lab', Credit: '1.0' }
         ]
       }
    }

    

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { Code, Coursename, age, Credit } = student //destructuring
           return (
              <tr key={Code}>
                 <td>{Code}</td>
                 <td>{Coursename}</td>
                 <td>{Credit}</td>
              </tr>
           )
        })
     }

     rendersecTableData() {
        return this.state.studentsofsecond.map((student, index) => {
           const {Code} = student //destructuring
           return (
              <tr key={Code}>
                 <td>{Code}</td>
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
          <div className="curriculam">
              <div className="academic_information">
              <h2 id="infotitle">Undergraduate program</h2>
              <div className="curriculaminfo">
              <h3>Bsc. in Software Engineering <span id="info">(4 years)</span></h3>
              <h4>Total Credits: <span id="info">160</span></h4>
              <h4>Course length: <span id="info">4 years</span></h4>
              <h4>Total Semester: <span id="info">8</span></h4>
              </div>
              </div>
              
            <div className="yr1sms1">
             <h4 id='title'>Year:1 Semester:1</h4>
             <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>

            <div className="yr1sms2">
             <h4 id='title'>Year:1 Semester:2</h4>
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
 
 export default Resources
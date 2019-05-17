import React, { Component } from 'react'
import axios from 'axios';
import { constants } from "../../components"

const baseUrl = constants.baseUrl;
const deptName = 'Mba';
const department = 'mba';

export default class Mba extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tab: 'about',
      showMenu: '',
      staffs: []
    }
  }

  fetchStaffs(dept) {
    axios.get(`${baseUrl}/api/staffhandler.php?department=${dept}`)
      .then(response => {

        const data = response.data;
        console.log(data);
        this.setState({ staffs: data })
      })
      .catch(err => {
        console.log(err);

      })

  }

  FacultyDetails = () => {
    if (this.state.staffs.length === 0)
      this.fetchStaffs(department);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center orange-text h3">
            Faculty Details
          <hr />
          </div>
        </div>
        {this.state.staffs.map((item, key) => (
          <div key={key}> 
            <div className="row mt-2 mb-4 pb-2">
              <div className="col-4">
                <img className="img-responsive img-rounded rounded-circle shadow-lg staff-image" src={`${baseUrl}${item[4]}`} alt=""  />
              </div>
              <div className="col text-left d-flex align-items-center">
                <div className="staff-details">
                  <div className=" h4-responsive  text-primary">{item[1]}</div>
                  <div className=" h7-responsive text-success">{item[2]}</div>
                  <div className="h8-responsive">{item[5]}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
        </div>
        ))}

      </div>
    )
  }

  About() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center orange-text h3-responsive">
            About
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col">
           <div className="h5-responsive text-success">
             APPROACH:
           </div>
           <div  className="text-left">
            We follow a dynamic approach in teaching the course. Lectures are supplemented with Case Study Analysis, Workshops, Seminars. Learning Exercises, Management Games, Personality Development Programmes, Mini Projects in Functional Areas, Industry Visits and a Summer Project.
           </div>
           <hr/>
           <div className="h5-responsive text-success">
                ACHEIVEMENTS:
           </div>
           <hr/>
           <div>
           <ul className="text-left">   
             <li>Third Trimester result-93% achieved(2008)batch.</li>
             <li>Fourth Trimester Result-91% achieved(2008-2010)batch.</li>
             <li>National Level College Meet in PSNA College-2nd.</li>
           </ul>
           </div>
          </div>
        </div>
      </div>
    )
  }

  Events() {
    return (
      <div>events</div>
    )
  }

  studentActivities() {
    return (
      <div>student activities</div>
    )
  }

  laboratories() {
    return (
      <div>laboratories</div>
    )
  }

  achivements() {
    return (
      <div>achivements</div>
    )
  }

  tabChange(tab) {
    switch (tab) {
      case 'about':
        return this.About();
      case 'faculty':
        return this.FacultyDetails();
      case 'events':
        return this.Events();
      case 'studentactivity':
        return this.studentActivities();
      case 'laboratories':
        return this.laboratories();
      case 'achivements':
        return this.achivements();
      default:
        return <div>null</div>;
    }
  }

  render() {
    return (
      <div className="mtspace">
        <div className="side-section p-3">
          <div className="side-header text-orange h2-responsive">
            {deptName.toUpperCase()}
            <i onClick={(e) => this.state.showMenu === '' ? this.setState({showMenu: 'd-none-custom'}): this.setState({showMenu: ''})}  className="fa fa-caret-down text-white float-right mr-4 dropdown-custom"></i>
          </div>
          <ul className={`side-nav-content text-white ${this.state.showMenu}`}>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "about" }) }}>About</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "faculty" }) }}>Faculty Details</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "events" }) }}>Events</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "studentactivity" }) }}>Student Activities</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "laboratories" }) }}>Laboratories</li>
            <li className="h5-responsive" onClick={(e) => { this.setState({ tab: "achivements" }) }}>Achivements</li>
          </ul>
        </div>
        <div className="main-section">
          {this.state.tab ? this.tabChange(this.state.tab) : ''}
        </div>
      </div>
    )
  }
}



import React, { Component } from 'react'
import axios from 'axios';
import { constants } from "../../components"

const baseUrl = constants.baseUrl;
const deptName = 'Eee';
const department = 'eee';

export default class Eee extends Component {


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
        this.setState({ staffs: data })
        console.log(data);
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
              <div>{key+1}.</div>
              <div className="col text-left d-flex justify-content-center align-items-center">
                <div className="staff-details text-center">
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
           Objective:
           </div>
           <hr/>
           <div className="text-left">
           To impart training with the best of teaching expertise supported by excellent laboratory infrastructure and exposure to recent trends in the industry, to ensure that the students are moulded into competent electrical engineers and Worth citizens of the country.
           </div>
           <hr/>
           <div className="h5-responsive text-success">
           OPPORTUNITIES:
           </div>
           <hr/>
           <div className="text-left">
           The Electrical & Electronics Engineering degree program prepares the graduates to enter a dynamic and rapidly changing field with career opportunities in Electric Power, Power Electronics, Microprocessors and Controllers. Integrated Circuits, Robotics and Control, Computer Hardware and Software. The demand for electrical power and electronic systems is increasing rapidly and Electrical and Electronics Engineers are mainly employed in Industries using Electrical Power, Manufacturing Electrical Equipment, Electronic System, Accessories, Research and Development.


          Electrical and Electronics Engineering is arguably the technology which has most shaped the world we live in. All aspects of our lives are affected by the electrical power we take for granted. Electrical and Electronics Engineers are responsible for the continued safe and responsible development of this technology in all its many applications, through research, design and development, manufacture, service, marketing and consulting. Electrical and Electronics Engineering is a dynamic and exciting discipline which will continue to serve the needs of society through the economic and responsible exploitation of existing technology and the development of innovative ideas. To meet the needs and challenges, the department in REC has a firm commitment to develop and produce stalwart electrical engineers of high technical knowledge combined with leadership skills, decision making, design capabilities and problem solving.
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


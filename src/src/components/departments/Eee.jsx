import React, { Component, Fragment } from "react";
import axios from "axios";
import { constants } from "../../components";

const baseUrl = constants.baseUrl;
const deptName = "Eee";
const department = "eee";

export default class Eee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "about",
      showMenu: "",
      staffs: []
    };
    this.hideEeeDepartNavbar =  this.hideEeeDepartNavbar.bind(this);
  }

  componentDidMount() {
    this.fetchStaffs(department);
    this.fetchEvents(department);
    this.fetchStuAct(department);
    this.fetchLab(department);
  }

  fetchStaffs(dept) {
    axios
      .get(`${baseUrl}/api/staffhandler.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        this.setState({ staffs: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchEvents(dept) {
    axios
      .get(`${baseUrl}/api/deptevent.php?department=${dept}`)
      .then(response => {
        const data = response.data;

        this.setState({ deptevent: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchStuAct(dept) {
    axios
      .get(`${baseUrl}/api/deptstuact.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        this.setState({ deptstuact: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchLab(dept) {
    axios
      .get(`${baseUrl}/api/deptlab.php?department=${dept}`)
      .then(response => {
        const data = response.data;
        this.setState({ deptlab: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  FacultyDetails = () => {
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
              <div>{key + 1}.</div>
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
    );
  };

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
            <div className="h5-responsive text-success">Objective:</div>
            <hr />
            <div className="text-left">
              To impart training with the best of teaching expertise supported
              by excellent laboratory infrastructure and exposure to recent
              trends in the industry, to ensure that the students are moulded
              into competent electrical engineers and Worth citizens of the
              country.
            </div>
            <hr />
            <div className="h5-responsive text-success">OPPORTUNITIES:</div>
            <hr />
            <div className="text-left">
              The Electrical & Electronics Engineering degree program prepares
              the graduates to enter a dynamic and rapidly changing field with
              career opportunities in Electric Power, Power Electronics,
              Microprocessors and Controllers. Integrated Circuits, Robotics and
              Control, Computer Hardware and Software. The demand for electrical
              power and electronic systems is increasing rapidly and Electrical
              and Electronics Engineers are mainly employed in Industries using
              Electrical Power, Manufacturing Electrical Equipment, Electronic
              System, Accessories, Research and Development. Electrical and
              Electronics Engineering is arguably the technology which has most
              shaped the world we live in. All aspects of our lives are affected
              by the electrical power we take for granted. Electrical and
              Electronics Engineers are responsible for the continued safe and
              responsible development of this technology in all its many
              applications, through research, design and development,
              manufacture, service, marketing and consulting. Electrical and
              Electronics Engineering is a dynamic and exciting discipline which
              will continue to serve the needs of society through the economic
              and responsible exploitation of existing technology and the
              development of innovative ideas. To meet the needs and challenges,
              the department in REC has a firm commitment to develop and produce
              stalwart electrical engineers of high technical knowledge combined
              with leadership skills, decision making, design capabilities and
              problem solving.
            </div>
          </div>
        </div>
      </div>
    );
  }

  Events() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold text-primary h3-responsive">
            Events
            <hr />
          </div>
        </div>
        {this.state.deptevent.map((item, key) => (
          <Fragment key={key}>
            <div className="row d-flex align-items-center">
              {item[3] !== "null" && (
                <div className="col-md-6 col-sm-12 text-center">
                  <img
                    className="img img-responsive dept-image shadow rounded"
                    src={`${constants.baseUrl}${item[3]}`}
                    alt=""
                  />
                </div>
              )}
              {item[3] === "null" && (
                <div className="offset-md-1 offset-sm-0" />
              )}
              <div className="col-md-6 col-sm-12 mt-4">
                <div className="text-danger font-weight-bold h5-responsive">
                  {item[1]}
                </div>
                <div className="text-dark font-weight-normal h6-responsive">
                  {item[2]}
                </div>
                <div
                  className="text-dark font-weight-normal"
                  style={{ fontSize: "12px" }}
                >
                  Posted At :- {new Date(item[4]).toDateString()}
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
  studentActivities() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold text-primary h3-responsive">
            Student Achievements
            <hr />
          </div>
        </div>
        {this.state.deptstuact.map((item, key) => (
          <Fragment key={key}>
            <div className="row d-flex align-items-center">
              {item[3] !== "null" && (
                <div className="col-md-6 col-sm-12 text-center">
                  <img
                    className="img img-responsive dept-image shadow rounded"
                    src={`${constants.baseUrl}${item[3]}`}
                    alt=""
                  />
                </div>
              )}
              {item[3] === "null" && (
                <div className="offset-md-1 offset-sm-0" />
              )}
              <div className="col-md-6 col-sm-12 mt-4">
                <div className="text-danger font-weight-bold h5-responsive">
                  {item[1]}
                </div>
                <div className="text-dark font-weight-normal h6-responsive">
                  {item[2]}
                </div>
                <div
                  className="text-dark font-weight-normal"
                  style={{ fontSize: "12px" }}
                >
                  Posted At :- {new Date(item[4]).toDateString()}
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
  laboratories() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center font-weight-bold text-primary h3-responsive">
            Laboratories
            <hr />
          </div>
        </div>
        {this.state.deptlab.map((item, key) => (
          <Fragment key={key}>
            <div className="row d-flex align-items-center">
              {item[3] !== "null" && (
                <div className="col-md-6 col-sm-12 text-center">
                  <img
                    className="img img-responsive dept-image shadow rounded"
                    src={`${constants.baseUrl}${item[3]}`}
                    alt=""
                  />
                </div>
              )}
              {item[3] === "null" && (
                <div className="offset-md-1 offset-sm-0" />
              )}
              <div className="col-md-6 col-sm-12 mt-4">
                <div className="text-danger font-weight-bold h5-responsive">
                  {item[1]}
                </div>
                <div className="text-dark font-weight-normal h6-responsive">
                  {item[2]}
                </div>
                <div
                  className="text-dark font-weight-normal"
                  style={{ fontSize: "12px" }}
                >
                  Posted At :- {new Date(item[4]).toDateString()}
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }

  // achivements() {
  //   return <div>achivements</div>;
  // }

  tabChange(tab) {
    switch (tab) {
      case "about":
        return this.About();
      case "faculty":
        return this.FacultyDetails();
      case "events":
        return this.Events();
      case "studentactivity":
        return this.studentActivities();
      case "laboratories":
        return this.laboratories();
      // case "achivements":
      //   return this.achivements();
      default:
        return <div>null</div>;
    }
  }

  hideEeeDepartNavbar() {
    this.state.showMenu === ""
      ? this.setState({ showmenu: "d-none-custom" })
      : this.setState({ showMenu: "" });
    document.removeEventListener("click", this.hideEeeDepartNavbar);
  }

  render() {
    return (
      <div className="mtspace">
        <div className="side-section p-3">
          <div className="side-header text-orange h2-responsive text-center">
            {deptName.toUpperCase()}
            <i
              onClick={e => {
                this.state.showMenu === ""
                  ? this.setState({ showMenu: "d-none-custom" })
                  : this.setState({ showMenu: "" });
                document.addEventListener("click", this.hideEeeDepartNavbar);
              }}
              className="fa fa-caret-down text-white float-right mr-4 dropdown-custom"
            />
          </div>
          <ul className={`side-nav-content text-white ${this.state.showMenu}`}>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "about" });
              }}
            >
              About
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "faculty" });
              }}
            >
              Faculty Details
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "events" });
              }}
            >
              Events
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "studentactivity" });
              }}
            >
              Student Achievements
            </li>
            <li
              className="h5-responsive"
              onClick={e => {
                this.setState({ tab: "laboratories" });
              }}
            >
              Laboratories
            </li>
          </ul>
        </div>
        <div className="main-section">
          {this.state.tab ? this.tabChange(this.state.tab) : ""}
        </div>
      </div>
    );
  }
}

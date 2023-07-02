import { Component } from "react";
import './Dashboard/dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div id="main-box">
                <div id="side-dash-panel">
                    <div id="first-section">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Architectural_Association_School_of_Architecture_logo.png" alt="logo-here" />
                        <h3>Kalp Constructions</h3>
                    </div>

                    <div id="user-info">
                        <h4>Anurag Gupta</h4>
                        <p>anurag.gupta@kalp.com</p>
                    </div>

                    <div id="tools-section">
                        <div><i class="fa-solid fa-house"></i>Dashboard</div>
                        <div><i class="fa-sharp fa-solid fa-star"></i>Forms</div>
                        <div><i class="fa-solid fa-bars"></i>UI Features</div>
                        <div><i class="fa-solid fa-table"></i>Tables</div>
                        <div><i class="fa-solid fa-chart-simple"></i>Charts</div>
                        <div><i class="fa-sharp fa-solid fa-swatchbook"></i>Sample Pages</div>
                        <div><i class="fa-solid fa-file"></i>Documentations</div>
                    </div>

                    <div id="settings-logout">
                        <div>Settings</div>
                        <div>|</div>
                        <div>Logout</div>
                    </div>
                </div>
                <div id="main-dash-panel">

                </div>
            </div>
        );
    } 
}

export default Dashboard;
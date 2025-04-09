import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar';
/* import AllTables from './Pages/AllTables'; */

import Alumni_Info from './Pages/Tables/Alumni_Info';
import AlumniOffice from './Pages/Tables/AlumniOffice';
import Chapters from './Pages/Tables/Chapters';
import Awards from './Pages/Tables/Awards';
import EventRegistration from './Pages/Tables/EventRegistration';
import Events from './Pages/Tables/Events';
import OtherInstitutions from './Pages/Tables/OtherInstitutions';

import AlumniDirectory from './Pages/Views/AlumniDirectory';
import AlumnisBetween2005and2015 from './Pages/Views/AlumnisBetween2005and2015';
import AwardsBetween2020and2022 from './Pages/Views/AwardsBetween2020and2022';
import MeruandNairobiChaptersAlumnis from './Pages/Views/MeruandNairobiChaptersAlumnis';
import OtherInstitutionsView from './Pages/Views/OtherInstitutionsView';
import TechnologyAlumnis from './Pages/Views/TechnologyAlumnis';
import UpcomingEvents from './Pages/Views/UpcomingEvents';
import Reports from './Pages/Reports/Reports';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#1E293B] text-white">
        <Navbar />
        <div className="flex-grow p-5 ml-60"> 
          <Routes>
            {/* Tables */}
            <Route path="/tables/Alumni_Info" element={<Alumni_Info />} />
            <Route path="/tables/AlumniOffice" element={<AlumniOffice/>} />
            <Route path="/tables/Awards" element={<Awards />} />
            <Route path="/tables/Chapters" element={<Chapters/>} />
            <Route path="/tables/EventRegistration" element={<EventRegistration />} />
            <Route path="/tables/Events" element={<Events />} />
            <Route path="/tables/OtherInstitutuions" element={<OtherInstitutions />} />
              {/* Views */}
            <Route path="/views/AlumniDirectory" element={<AlumniDirectory />} />
            <Route path="/views/AlumnisBetween2005and2015" element={<AlumnisBetween2005and2015 />} />
            <Route path="/views/AwardsBetween2020and2022" element={<AwardsBetween2020and2022 />} />
            <Route path="/views/MeruandNairobiChapters'Alumnis" element={<MeruandNairobiChaptersAlumnis/>} />
            <Route path="/views/OtherInstitutionsView" element={<OtherInstitutionsView />} />
            <Route path="/views/TechnologyAlumnis" element={<TechnologyAlumnis />} />
            <Route path="/views/UpcomingEvents" element={<UpcomingEvents />} />
            
            <Route path="/reports" element={<Reports />} /> 

            {/* Others */}        
            <Route path="/" element={<h1 className="text-2xl">Welcome!</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

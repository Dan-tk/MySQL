import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showTables, setShowTables] = useState(false);
  const [showViews, setShowViews] = useState(false);

  return (
    <nav className="w-60 h-screen bg-gray-900 text-white p-5 fixed left-0 top-0 overflow-y-auto">
      <h2 className="text-xl font-bold mb-5 text-amber-300">OUR ALUMNI'S </h2>
      <ul className="space-y-4">
        {/* Tables */}
        <li>
          <button
            onClick={() => setShowTables(!showTables)}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-700 rounded"
          >
            <span className="text-amber-100">Tables</span>
            <span className="text-lg">{showTables ? "–" : "+"}</span>
          </button>
          {showTables && (
            <ul className="ml-4 mt-2 space-y-1 text-sm ">
              <li><Link to="/tables/Alumni_Info" className="block p-1 hover:bg-gray-700 rounded">Alumni_Info</Link></li>
              <li><Link to="/tables/AlumniOffice" className="block p-1 hover:bg-gray-700 rounded">AlumniOffice</Link></li>
              <li><Link to="/tables/Awards" className="block p-1 hover:bg-gray-700 rounded">Awards</Link></li>
              <li><Link to="/tables/Chapters" className="block p-1 hover:bg-gray-700 rounded">Chapters</Link></li>
              <li><Link to="/tables/EventRegistration" className="block p-1 hover:bg-gray-700 rounded">EventRegistration</Link></li>
              <li><Link to="/tables/Events" className="block p-1 hover:bg-gray-700 rounded">Events</Link></li>
              <li><Link to="/tables/OtherInstitutuions" className="block p-1 hover:bg-gray-700 rounded">OtherInstitutions</Link></li>
            </ul>
          )}
        </li>

        {/* Views */}
        <li>
          <button
            onClick={() => setShowViews(!showViews)}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-700 rounded"
          >
            <span className="text-amber-100">Views</span>
            <span className="text-lg">{showViews ? "–" : "+"}</span>
          </button>
          {showViews && (
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li><Link to="/views/AlumniDirectory" className="block p-1 hover:bg-gray-700 rounded">AlumniDirectory</Link></li>
              <li><Link to="/views/AlumnisBetween2005and2015" className="block p-1 hover:bg-gray-700 rounded">Alumnis 2005–2015</Link></li>
              <li><Link to="/views/AwardsBetween2020and2022" className="block p-1 hover:bg-gray-700 rounded">Awards 2020–2022</Link></li>
              <li><Link to="/views/MeruandNairobiChapters'Alumnis" className="block p-1 hover:bg-gray-700 rounded">Meru & Nairobi Alumnis</Link></li>
              <li><Link to="/views/OtherInstitutionsView" className="block p-1 hover:bg-gray-700 rounded">Other Institutions View</Link></li>
              <li><Link to="/views/TechnologyAlumnis" className="block p-1 hover:bg-gray-700 rounded">Technology Alumnis</Link></li>
              <li><Link to="/views/UpcomingEvents" className="block p-1 hover:bg-gray-700 rounded">Upcoming Events</Link></li>
            </ul>
          )}
        </li>

        {/* Reports */}
        <li>
          <Link to="/reports" className="block p-2 hover:bg-gray-700 rounded text-amber-100">
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

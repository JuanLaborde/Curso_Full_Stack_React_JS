import React from 'react';
import '../styles/components/pages/ResidentEvilPage.css';

const ACPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>In the year 1998, the Raccoon City Police Department dispatched their elite unit
                    S.T.A.R.S. Bravo
                    Team to investigate a series of bizarre murders on the outskirts of the
                    Midwestern
                    city.
                    While en route, the team's helicopter is forced to make an emergency landing
                    falling
                    a sudden
                    engine failure. The team set out from the crash site only to discover that the
                    forest where they
                    landed hid an overturned military vehicle, dead soldiers, and orders for the
                    transport of Billy
                    Coen, a prisoner who had been sentenced to death.
                </p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="" alt=""/>
                        <h5>Chris Redfield</h5>
                        <h6>S.T.A.R.S Memeber</h6>
                        <p>Captain of an American operator in the Bioterrorism Security Assessment Alliance and
                            ex-member of the
                            Special Tactics and Rescue Service assigned to S.T.A.R.S. Alfa team.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ACPage;
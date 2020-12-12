import React from "react";
import Calendar from "@ericz1803/react-google-calendar"

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "4rl33ith0vjp3i21u1tn6sil60@group.calendar.google.com";

function Mentor4() {
    return (
        <div>
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Mentor4

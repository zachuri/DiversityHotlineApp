import React from "react";
import Calendar from "@ericz1803/react-google-calendar"

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "63va5jf1lo4rnsq5vnme4nap9o@group.calendar.google.com";

function Mentor2() {
    return (
        <div>
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Mentor2

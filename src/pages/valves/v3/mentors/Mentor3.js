import React from "react";
import Calendar from "@ericz1803/react-google-calendar"

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "o5vga9j77k289l776bvv37ouko@group.calendar.google.com";

function Mentor3() {
    return (
        <div>
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Mentor3

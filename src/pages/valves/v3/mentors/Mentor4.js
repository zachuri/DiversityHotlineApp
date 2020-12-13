import React from "react";
import Calendar from "@ericz1803/react-google-calendar"

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "sbb14q3drudm00gennimo9673o@group.calendar.google.com";

function Mentor4() {
    return (
        <div>
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Mentor4
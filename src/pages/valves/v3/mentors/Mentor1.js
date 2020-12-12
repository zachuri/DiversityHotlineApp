import React from "react";
import Calendar from "@ericz1803/react-google-calendar"

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "2d9l8hd4dg8j9d6ckncimhaj30@group.calendar.google.com";

function Mentor1() {
    return (
        <div>
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Mentor1

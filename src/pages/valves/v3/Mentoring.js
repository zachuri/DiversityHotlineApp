import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "diversityhotline@gmail.com";

export default class Mentoring extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
      </div>
    )
  }
}
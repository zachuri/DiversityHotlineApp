import React from "react";
import Calendar from "@ericz1803/react-google-calendar"
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "sbb14q3drudm00gennimo9673o@group.calendar.google.com";

const styles = {
    today: {
    background: "beige"
    },
    eventCircle: {
      color: "#967BB6",
    },
    multiEvent: css`
      background: #967BB6;
      &:hover {
        background: #B47BB6;
      }
      &:after {
        border-left-color: #967BB6;
      }
      &:hover::after {
        border-left-color: #B47BB6;
      }
      &:before {
        border-right-color: #967BB6;
      }
      &:hover::before {
        border-right-color: #B47BB6;
      }
    `,
  }

function Mentor4() {
    return (
        <div>
            <Calendar 
            styles={styles}
            apiKey={API_KEY} 
            calendarId={CALENDAR_ID} 
            />
        </div>
    )
}

export default Mentor4
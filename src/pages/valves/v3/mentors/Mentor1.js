import React from "react";
import Calendar from "@ericz1803/react-google-calendar"
import { css } from "@emotion/react";


const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "2d9l8hd4dg8j9d6ckncimhaj30@group.calendar.google.com";

const styles = {
    today: {
    background: "beige"
    },
    eventCircle: {
      color: "#93c572",
    },
    multiEvent: css`
      background: #93c572;
      &:hover {
        background: #bddba8;
      }
      &:after {
        border-left-color: #93c572;
      }
      &:hover::after {
        border-left-color: #bddba8;
      }
      &:before {
        border-right-color: #93c572;
      }
      &:hover::before {
        border-right-color: #bddba8;
      }
    `,
  }


function Mentor1() {
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

export default Mentor1

import React from "react";
import Calendar from "@ericz1803/react-google-calendar"
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "h8arh7ne132492teq6rlbo807s@group.calendar.google.com";

const styles = {
    today: {
    background: "beige"
    },
    eventCircle: {
      color: "#FF8243",
    },
    multiEvent: css`
      background: #FF8243;
      &:hover {
        background: #FFC143;
      }
      &:after {
        border-left-color: #FF8243;
      }
      &:hover::after {
        border-left-color: #FFC143;
      }
      &:before {
        border-right-color: #FF8243;
      }
      &:hover::before {
        border-right-color: #FFC143;
      }
    `,
  }


function Mentor3() {
    return (
        <div>
            <Calendar 
                styles={styles}
                apiKey={API_KEY} 
                calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Mentor3

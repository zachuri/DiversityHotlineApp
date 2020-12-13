import React from "react";
import Calendar from "@ericz1803/react-google-calendar"
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCwdZPdGzaJVpzMGtfBSzxpUaaaUs3Ixgw";
const CALENDAR_ID = "g7vqcvo432525ni7vv81kkep24@group.calendar.google.com";

const styles = {
    today: {
    background: "beige"
    },
    eventCircle: {
      color: "#9966CC",
    },
    multiEvent: css`
      background: #9966CC;
      &:hover {
        background: #CC66CC;
      }
      &:after {
        border-left-color: #9966CC;
      }
      &:hover::after {
        border-left-color: #CC66CC;
      }
      &:before {
        border-right-color: #9966CC;
      }
      &:hover::before {
        border-right-color: #CC66CC;
      }
    `,
  }



function Mentor2() {
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

export default Mentor2

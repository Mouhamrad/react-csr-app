import React, { Component } from "react";
import { Calendar } from "fullcalendar";
import "fullcalendar/dist/fullcalendar.min.css";

export default class ChannelCalendar extends Component {
  componentDidMount() {
    const calendarEl = this.refs.fullCalendar;

    console.log("calendarHandler");
    let calendar = new Calendar(calendarEl, {
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      editable: true,
      droppable: true,
      selectable: true,
      events: this.props.events
    });
    calendar.render();
    calendar.changeView("agendaDay");
  }

  render() {
    return <div ref="fullCalendar" />;
  }
}
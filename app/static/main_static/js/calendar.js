$(document).ready(function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {

    header: {
        left: 'today',
        center: 'prev title next',
        right: 'agendaDay,agendaWeek,month'
    },
    defaultView: 'month',
    displayEventTime: true,
    nowIndicator:true,
    eventLimit: true,

    googleCalendarApiKey: 'AIzaSyDpcjbgxjIb4p1pwa2PmWUM_aCI6kIXpUc',
    

    eventSources: [
        {
            id:'mhs-events',
            googleCalendarId: 'maldenps.org_k78emke2mur8f0sqd3tenkdhfo@group.calendar.google.com',
            className: 'mhs-events'     
        }, 
        {
            id: 'mhscc-calendar',
            googleCalendarId: '3t0blm4f1u0dteu3tjlo4fsccc@group.calendar.google.com',
            className:'mhscc-events'
        }
    ],
    eventClick: function(event) {
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
    },
    loading: function(bool) {
        document.getElementById('loading').style.display =
        bool ? 'block' : 'none';
    },

    });
    calendar.render();
});
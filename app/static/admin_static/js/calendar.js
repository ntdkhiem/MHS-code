! function($) {
    "use strict";

    var CalendarApp = function() {
        this.$body = $("body")
        this.$calendar = $('#calendar'),
            this.$extEvents = $('#calendar-events'),
            this.$modal = $('#my-event'),
            this.$modalCreate = $('#create-event'),
            this.$saveCategoryBtn = $('.save-category'),
            this.$calendarObj = null
    };
    CalendarApp.prototype.onEventClick = function(calEvent, jsEvent, view) {
        var $this = this;
        var form = $("<form></form>");
        form.append("<label>Change event name</label>");
        form.append("<div class='input-group'><input class='form-control' type=text value='" + calEvent.title + "' /><span class='input-group-btn'><button type='submit' class='btn btn-success waves-effect waves-light'><i class='fa fa-check'></i> Save</button></span></div>");
        $this.$modal.modal({
            backdrop: 'static'
        });
        $this.$modal.find('.delete-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function() {
            $this.$calendarObj.fullCalendar('removeEvents', function(ev) {
                return (ev._id == calEvent._id);
            });
            $this.$modal.modal('hide');
        });
        $this.$modal.find('form').on('submit', function() {
            calEvent.title = form.find("input[type=text]").val();
            $this.$calendarObj.fullCalendar('updateEvent', calEvent);
            $this.$modal.modal('hide');
            return false;
        });
    },
    CalendarApp.prototype.onSelect = function(start, end, jsEvent, view){
    var $this = this;
    // $this.$modalCreate.modal({
    //     backdrop: 'static'
    // });
    // $this.$modalCreate.find('form').on('submit', function() {
    //     // console.log(form);
    //     // var event = {
    //     //     title: form.find("#title").val(),
    //     //     color: form.find("#color").val(),
    //     //     start: start,
    //     //     end: end
    //     // }
    //     // calEvent.title = form.find("input[type=text]").val();
    //     // calEvent.color = form.find("#color").val();
    //     // calEvent.start = start;
    //     // calEvent.end = end;
    //     // $this.$calendarObj.fullCalendar('renderEvent', calEvent, true);
    //     // $this.$calendarObj.fullCalendar("unselect");
    //     // $this.$modalCreate.modal('hide');
    //     // return false;
    // });
    var title = prompt("Enter a title for this event", "New event");
    if (title != null) {
        var event = {
            title: title.trim() != "" ? title: "New event",
            start: start,
            end: end,
            color: '#000'
        };
        $this.$calendarObj.fullCalendar("renderEvent", event, true);
    }
    $this.$calendarObj.fullCalendar("unselect"); 
    },

    CalendarApp.prototype.enableDrag = function() {
        //init events
        $(this.$event).each(function() {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
        });
    },

    /* Initializing */
    CalendarApp.prototype.init = function() {
            this.enableDrag();
            /*  Initialize the calendar  */
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            var form = '';
            var today = new Date($.now());

            var defaultEvents = [
              
            ];

            var $this = this;
            $this.$calendarObj = $this.$calendar.fullCalendar({
                slotDuration: '00:15:00',
                /* If we want to split day time each 15minutes */
                minTime: '08:00:00',
                maxTime: '19:00:00',
                defaultView: 'month',
                handleWindowResize: true,

                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                events: defaultEvents,
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar !!!
                eventLimit: true, // allow "more" link when too many events
                selectable: true,
                // select: function(start, end, allDay) { $this.onSelect(start, end, allDay); },
                select: function(start, end, jsEvent, view) { $this.onSelect( start, end, jsEvent, view ) },

                eventClick: function(calEvent, jsEvent, view) { $this.onEventClick(calEvent, jsEvent, view); }
            });

           
        },

        //init CalendarApp
        $.CalendarApp = new CalendarApp, $.CalendarApp.Constructor = CalendarApp

}(window.jQuery),

//initializing CalendarApp
$(window).on('load', function() {

    $.CalendarApp.init()
});
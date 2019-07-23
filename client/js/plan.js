Template.plan.rendered = function() {
	$("#plan-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#trips-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.plan.onRendered(() => {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    $('#calendarDiv').fullCalendar({
        header: {
            left: 'basicDay, agendaWeek, month',
            center: 'title',
            right: 'today prev,next'
        },
        aspectRatio: 4,
        height: 800,
        editable: true,
        weekends: true,
        events: [{
            id: 1,
            title: 'Birthday',
            start: new Date(y, m, 1),
            allDay: true,
            description: 'Happy Birthday',
        }, {
            id: 2,
            title: 'Concert',
            start: '2016-12-07T21:00:00',
            end :'2016-12-07T23:00:00',
            allDay: false,
            color: '#e74c3c'
        }, {
            id: 3,
            title: 'Lunch',
            start: new Date(y, m, 16, 14),
            end: new Date(y, m, 16, 16),
            allDay: false,
            color: '#3498db'
        }, {
            id: 4,
            title: 'Class',
            start: new Date(y, m, 20, 10),
            allDay: false,
            color: '#9b59b6'
        }, {
            id: 5,
            title: 'Party',
            start: new Date(y, m, 5, 18),
            allDay: false,
            color: '#e67e22'
        }],
        dayClick: function(date) {
            alert("Clicked on " + date.format());
        },
        eventClick: function(event) {
            alert("Event title: " + event.title + "\nEvent description: " + event.description + "\nEvent time: " + moment(event.start).format("hh:mm A"));
        },
        eventMouseover: function(calEvent) {
            $(this).css('background-color', 'black');
        }
    });
});
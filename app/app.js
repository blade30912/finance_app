new Vue({

	el : "#events",
	filters: {
	    currency: function (value) {
	      if (!value) return ''
	      value = value.toFixed(2)
	      return "$"+value
	    }
	},
	data : {
		event: { name: '', description: '', date: '', spend : ''},
  		events: []
	},
	methods : {
		fetchEvents: function() {
		    this.events = [
		      {
		        id: 1,
		        name: 'Dr Appointment',
		        description: 'Went to drs for checkup',
		        spend : 50.00,
		        date: '2016-09-10'
		      },
		      {
		        id: 2,
		        name: 'Went to Movies',
		        description: 'Saw Harry Pooper the Dooberino Doobers in theatres, got a snack too',
		        spend : 25.66,
		        date: '2016-10-02'
		      },
		      {
		        id: 3,
		        name: 'Food Shopping',
		        description: 'Shopped for food, sustain me food and I will buy more of you',
		        spend : 75.00,
		        date: '2017-01-02'
		      }
		    ];
		},
		addEvent: function() {
		    if(this.event.name) {
		      this.events.push(this.event);
		      this.event = { name: '', description: '', date: '' , spend : ''};
		    }
  		},
  		deleteEvent: function(index) {
		  if(confirm("Are you sure you want to delete this event?")) {
		    // $remove is a Vue convenience method similar to splice
		    this.events.splice(index, 1);        
		  }
		}

	},
	mounted : function() {
		this.fetchEvents();
	}
})
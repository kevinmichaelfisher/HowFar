# HowFar-
Simple Chrome extension that calculates distance and time to an address using Google Maps.

Recently I was browsing this page (http://www.teamusa.org/usa-weightlifting/clubs-lwc/find-a-club) to find a gym close to me.  I was faced with a long list of addresses, but had no idea how far away each one was, so I had to copy and paste in a new tab that had Google Maps.  So for a simple project I'm just going to make a Chrome extension that allows me to do this without having to have another tab open.

I'm planning on using Javascript, along with jQuery at least.  Even though it's a really small extension that doesn't need it, I'm also thinking about using Backbone just to expose myself to using it.  So as of right now I'm going to do some tutorials on them.

How it would do this I'm thinking is the user would click the icon next to the Omnibox and a browser action would pop up.  In this browser action is a text box that allos them to enter the address, then a button to click to submit it.  The default functionality would calculate the distance from the computer current GPS location to the location entered, or the user can input a start location.  Then it would be a simple call using the Google Maps API using the users input as the input, and using the information I get back from that to display back up to the browser action.


    // Click the "Race!" button to start the function
    $('#go').click(function() {
        
        
        // function that checks if the race is completed
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'Lost the race!';
            }
            
        }
        
        // get the width of the Lamborghini and the Ninja
        var carWidth = $('#lambo').width();
		var carWidth = $('#ninja').width();
        
        // get the width of the racetrack and subtract from the car width
        var raceTrackWidth = $(window).width() - carWidth;
        
        // each time the race is started it randomly generates the outcome based of a number between 1 and 3000
        var raceTime1 = Math.floor( (Math.random() * 3000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 3000) + 1 );
        
        // set a flag variable to false by default
        var isComplete = false;
        
        // first place flag variable
        var place = 'Won the race!';
        
        // animate the Lamborghini
        $('#lambo').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            //runs the function to check if the race is complete
            checkIfComplete();
            
            //gives results in the correct container
            $('#raceInfo1 span').text( place );
            
			//end of animation
        });
        
        // animate the Ninja
        $('#ninja').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text(place);
            
			//end of the animation 
        });
        //end of the function
    });
    
    //clears the results container and resets the cars back to the initial position
    $('#reset').click(function() {
        $('.vehicles').css('left','0');
        $('.raceInfo span').text('');
    });
    
    
 


















/*

Given an array of appointment intervals where each interval is represented as [startTime, endTime]
(both inclusive), write a function that checks if a doctor can attend all the appointments without any overlaps.

Constraints:

Each appointment has a startTime and endTime where 0 <= startTime < endTime <= 10^6.
The number of appointments n is between 1 and 10^4.

Your task:

Return true if the doctor can attend all appointments without any overlap, otherwise return false.
*/

function canAttendAppointments(appointments) {
    ///WOW
    //ME TBH IDK WHAT TO DO BUT WAIT
    //TILL MY IMIND WORKS
    
    /*notes:
        - u can go through each subarray with a forEach loop. then, check if the END time for each
        sub array is less than to the START time for the second subarray

        - if the end time or starting time is greater than 5 and less than 9, cannot attend the meeting because the doctor is closed

        you are restricvted to 9 am to 5pm 

        STEPS TO TAKE:
    
    */ 
        // // [ 1, 2 ] 0
        // // [ 1, 3 ] 1
        // // [ 3, 4 ] 2
        let timeSlots = new Map();
        let earliestTime = 24 // 24 hour clock
        let  latestTime = 0 // 24 hour clock

        for(let i=0;i<appointments.length;i++){
            // find the earliest time
            // find the latest time
            earliestTime = Math.min(earliestTime,appointments[i][0])
            latestTime = Math.max(latestTime,appointments[i][1])
            //LEARN ABT PAIRS FEEFA AND TWO POINTERS
        }

        for(let i =earliestTime;i<latestTime+1;i++){
            timeSlots.set(i,true) // true meaning the time slot is open if false that means the time slot is closed

        }
        // console.log(timeSlots)
        for(let i=0;i<appointments.length;i++){
            
            let startTime = appointments[i][0];
            let endTime = appointments[i][1];
            
            for (let j=startTime; j < endTime+1; j++){
                if (timeSlots.get(j)){
                    return false;
                }
                timeSlots?.set(j, false)
            }   
        }
        // console.log(earliestTime)
        // console.log(latestTime)
        
        // for (let i=0; i<appointments.length-1; i++){

        //     let startTime = 0
        //     let endTime = 1
        //     if (appointments[i][endTime] >= appointments[i+1][startTime]) {
        //         // console.log(appointments[i-1])
        //         // console.log(appointments[i-1][endTime])
        //         // console.log(appointments[i-1][startTime])
        //         return false;
        //     }
        // }


// // [ 1, 2 ]
// // [ 1, 3 ]
// // [ 3, 4 ]
//     })
return true;

}

// Test cases
console.log(canAttendAppointments([[1, 3], [2, 4]])); // Output: false
console.log(canAttendAppointments([[1, 2], [3, 4]])); // Output: true
console.log(canAttendAppointments([[1, 5], [6, 10], [5, 6]])); // Output: true
console.log(canAttendAppointments([[1, 2], [2, 3], [3, 4]])); // Output: true
console.log(canAttendAppointments([[1, 3], [3, 5], [2, 4]])); // Output: false
console.log(canAttendAppointments([[1, 10], [5, 8], [9, 12]])); // Output: false
console.log(canAttendAppointments([[0, 1], [1, 2], [2, 3], [3, 4]])); // Output: true
console.log(canAttendAppointments([[0, 5], [5, 10], [10, 15]])); // Output: true
console.log(canAttendAppointments([[0, 1], [0, 2]])); // Output: false
console.log(canAttendAppointments([[1, 2], [1, 3], [3, 4]])); // Output: false

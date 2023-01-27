/*  Abstract class Reservation
Abstract MethodFunction OverridingAbstract Class
Close
Implement an abstract class Reservation and two subclasses ReserveTrain and ReserveBus

 

Define a Reservation abstract class with following characteristics

Method reserve which takes integer value seats and typeOfSeat as parameters and returns boolean type.
Method getAvailableSeats which return a number of seat remaining. 
 

Define a ReserveBus with following characteristics

Extends the Reservation class.
Data member totalSeats as an integer.
Parameterized constructor(int totalSeats) to initialize data member.
Method reserve to reserve the given number of seats and return true and if the required number of seats are not available return false. (typeOfSeat parameter has no importance in this method)
 

Define a ReserveTrain with following characteristics

Extends the Reservation class.
Data members upperBirthTotalSeats, middleBirthTotalSeats and lowerBirthTotalSeats as an integer.
Parameterized constructor(int lowerBirthTotalSeats, int  middleBirthTotalSeats, int upperBirthTotalSeats) to initialize data members.
Method reserve to reserve the given number of seats for given type of seat and return true and if the required number of seats are not available return false.
 

Input

    1
    10
    3
    2 3 7

 

    where,

First line represent type of reservation (1 for ReserveBus and 2 for ReserveTrain)
Second line represents the total seats for bus.
Third line represents the total number booking
Forth line represents the number of seats to be reserved.
 

Output

    Booked-2

    Booked-3
    SEATS NOT AVAILABLE FOR BUS-7

    Remaining Seats-5

 

Another example,

 

Input

    2
    10 12 40
    3
    1 7 2 15 3 1

 

    where,

First line represent type of reservation (1 for ReserveBus and 2 for ReserveTrain)
Second line represents the total seats for upperBirthTotalSeats, middleBirthTotalSeats and lowerBirthTotalSeats respectively in the train.
Third line represents the total number booking.
Forth line represents the number of seats to be reserved (combination of typeOfSeat and seats)
 

Note: Type is 1 for lower berth, type is 2 for middle birth and type is 3 for upper birth.

 

Output

    Booked-7
    SEATS NOT AVAILABLE FOR TRAIN-15
    Booked-1
    Remaining Seats-54 */


    function solution(reservationType, totalSeats, totalBooking, seatReserved) {
        const result = []; 
          if(reservationType == 1){
            for(let i = 0; i < totalBooking; i++){
                if(seatReserved[i] <= totalSeats){
                    let tmp = 'Booked-'+seatReserved[i]; 
                    result.push(tmp); 
                    totalSeats[0] = totalSeats[0] - seatReserved[i]; 
                }
                else{
                    let tmp = 'SEATS NOT AVAILABLE FOR BUS-'+seatReserved[i]; 
                    result.push(tmp); 
                }
            }
          result.push('Remaining Seats-'+totalSeats[0]); 
        }
          else{
              const trainSeatReserved = []
              for(let i = 0; i < seatReserved.length; i++){
                  if(i % 2 != 0){
                      trainSeatReserved.push(seatReserved[i])
                  }
              }
              for(let i = 0 ; i < totalBooking; i++){
                  if(trainSeatReserved[i] <= totalSeats[i]){
                    let tmp = 'Booked-'+trainSeatReserved[i]; 
                    result.push(tmp); 
                    totalSeats[i] = totalSeats[i] - trainSeatReserved[i]; 
                  }
                  else{
                    let tmp = 'SEATS NOT AVAILABLE FOR TRAIN-'+trainSeatReserved[i]; 
                    result.push(tmp); 
                }
              }
              let tmpSum = 0; 
              for(let j = 0; j < totalSeats.length; j++){
                  tmpSum += totalSeats[j]
              }
              result.push('Remaining Seats-'+tmpSum); 
          }
          return result; 
      }

      
let reservationType = 2
let totalSeats = [10,12,40]
let totalBooking = 3
let seatReserved =[1,7,2,15,3,1]
console.log(solution(reservationType,totalSeats,totalBooking,seatReserved))
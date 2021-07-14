const seats = document.querySelectorAll(".seat");
const bookedSeatsEle = document.querySelector(".booked-seats");
const remainingSeatsEle = document.querySelector(".remaining-seats");
let remainingSeats = seats.length;
let bookedSeats = 0;
let flag = false;
bookedSeatsEle.textContent = bookedSeats;
remainingSeatsEle.textContent = remainingSeats;

seats.forEach(function (seat){
    seat.addEventListener("mousedown",function (event){
        flag=true;
        seat.classList.toggle("booked");
        seat.classList.contains("booked")? bookSeats():unBookSeats();
    });
    seat.addEventListener("mouseup",function (event){
        flag=false;
    });
    seat.addEventListener("mouseover",function (event){
        if (flag){
            seat.classList.toggle("booked");
            seat.classList.contains("booked")? bookSeats():unBookSeats();
        }
    });
});

function bookSeats() {
  bookedSeats += 1; remainingSeats -= 1;
  bookedSeatsEle.textContent = bookedSeats;
  remainingSeatsEle.textContent = remainingSeats;
}

function unBookSeats() {
  bookedSeats -= 1; remainingSeats += 1;
  bookedSeatsEle.textContent = bookedSeats;
  remainingSeatsEle.textContent = remainingSeats;
}

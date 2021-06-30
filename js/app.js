'use strict';
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let locations = [];

function Location(name,min, max, averageCookies) {

    this.locationName=name;
    this.minHourlyCustomers = min;
    this.maxHourlyCustomers = max;
    this.averageCookies = averageCookies;
    this.customersPerHour=[];
    this.cookiesPerHour=[];
    this.total=0;
    locations.push(this);

};

Location.prototype.customersPerHourFun= function (min, max) {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
    };
  };

    Location.prototype.cookiesPerHourFun =function(averageCookies)  {
  for (let i = 0; i < hours.length; i++) {
   this.cookiesPerHour[i]= Math.floor( this.customersPerHour [i]* averageCookies) ;
   this.total=this.total+this.cookiesPerHour[i];
    };
  };
    let seattle = new Location('seattle', 23, 65,6.3);
    seattle.customersPerHourFun(23,65);
    seattle.cookiesPerHourFun(6.3);
// console.log(seattle.customersPerHour);
// console.log(seattle.cookiesPerHour);

let Tokyo = new Location('Tokyo', 3, 24,1.2);
    Tokyo.customersPerHourFun(3,24);
    Tokyo.cookiesPerHourFun(1.2);

let Dubai = new Location('Dubai', 11, 38,3.7);
    Dubai.customersPerHourFun(11,38);
    Dubai.cookiesPerHourFun(3.7);

let Paris = new Location('Paris',20, 38,2.3);
    Paris.customersPerHourFun(20,38);
    Paris.cookiesPerHourFun(2.3);

let lima = new Location('lima',2, 16,4.2);
    lima.customersPerHourFun(2,16);
    lima.cookiesPerHourFun(4.2);
    // console.log(lima.customersPerHour)
    // console.log(lima.cookiesPerHour);





console.log(locations);
// *******************************************************************
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function createTableHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (let i = 0; i < hours.length; i++) {
    let thEl1 = document.createElement('th');
    thEl1.textContent = `${hours[i]}`;
    trEl.appendChild(thEl1);
  };
  
  let thEl2 = document.createElement('th');
  thEl2.textContent = 'Daily  Location Total';
  trEl.appendChild(thEl2);
};

// *************************************************************************
let aDailyLocationTotalSam=0;

Location.prototype.createTable=function(){

    let trEl = document.createElement('tr');
    let td = document.createElement('td');
    trEl.appendChild(td);
    td.textContent = this.locationName;
    for (let y = 0; y < hours.length; y++) {
   
      

    let td1 = document.createElement('td');
    td1.textContent = this.cookiesPerHour[y];
    trEl.appendChild(td1);
    }
    aDailyLocationTotalSam=aDailyLocationTotalSam+this.total;
    let td2 = document.createElement('td');
    td2.textContent =`${this.total}`;
    trEl.appendChild(td2);
    tableEl.appendChild(trEl);
}




// ****************************************************************************
let arraysum = 0;
function createTablefooter() {
  let tFoot = document.createElement('tfoot');
  //the tfoot is inasted of the tr it is a row 
  tableEl.appendChild(tFoot);
  let trEl = document.createElement('tr');
  tFoot.appendChild(trEl);
  let thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  

  for (let i = 0; i < hours.length; i++) {

    let thEl1 = document.createElement('th');
    arraysum = 0;
    for (let y = 0; y < locations.length; y++) {
   
      arraysum = locations[y].cookiesPerHour[i] + arraysum
  };
  thEl1.textContent = `${arraysum}`;
  trEl.appendChild(thEl1);
  
};
let thEl2 = document.createElement('th');
  thEl2.textContent = `${aDailyLocationTotalSam}`;
  trEl.appendChild(thEl2);
};

createTableHeader();
for (let i = 0; i < locations.length; i++) {
    locations[i].createTable();
}
createTablefooter();


// *******************************************************************
   
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit',addlocation);
function addlocation(event){
  event.preventDefault();
  let locationName =event.target.locationName.value; /*.split(','); if you have array input values*/
  let minHourlyCustomers=event.target.minHourlyCustomers.value ;
  let maxHourlyCustomers=event.target.maxHourlyCustomers.value ;
  let averageCookies= event.target.averageCookies.value ;

  let newlocation = new Location(locationName,minHourlyCustomers,maxHourlyCustomers,averageCookies);
  newlocation.customersPerHourFun(minHourlyCustomers,maxHourlyCustomers);
  newlocation.cookiesPerHourFun(averageCookies);
  newlocation.createTable();
  tableEl.deleteTFoot();
  createTablefooter();
  console.log(newlocation.customersPerHour);
  console.log(newlocation.cookiesPerHour);
  
}





              


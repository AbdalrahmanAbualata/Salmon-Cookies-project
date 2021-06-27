'use strict';

let Seattle = {
   minHourlyCustomers: 23,
   maxHourlyCustomers: 65,
   averageCookies: 6.3,
   customersPerHour:[],
   cookiesPerHour:[],

  customersPerHourFun: function (min, max) {
     for (let i = 0; i <= 14; i++) {
       this.customersPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
       }
       console.log( this.customersPerHour);},
       
// *************************************************************

    cookiesPerHourFun :function(numOfCookies)  {
       for (let i = 0; i <= 14; i++) {
        this.cookiesPerHour[i]= Math.floor( this.customersPerHour [i]* numOfCookies) ;

         }
         
         console.log(this.cookiesPerHour);
       },
      //  **********************************************************
          render: function () {
         let divEl = document.getElementById('cookies');
         let articleEl = document.createElement('article');
         divEl.appendChild(articleEl)
 
         let pEl = document.createElement('p');
         pEl.textContent = `The amounts of cookies purchased for each hour in Seattle is :`;
         articleEl.appendChild(pEl);
 
         let ulEl = document.createElement('ul');
         let x=6;
         let y =1;
         let liEl = ""
         for (let i = 0; i < this.cookiesPerHour.length; i++) {
              liEl = document.createElement('li');
             if (i<=5){
             liEl.textContent =`${x}AM :  ${ this.cookiesPerHour[i]}`;
             x++;}
             else if(i==6){
              liEl.textContent =`${12}PM :  ${this.cookiesPerHour[i]}`;
            }
             
              else if(i >6){
               liEl.textContent =`${y}PM :  ${this.cookiesPerHour[i]}`;
               y++;
             };
             
             ulEl.appendChild(liEl);
            };
            let arraysum = 1;
            for (let index = 0; index <this.cookiesPerHour.length; index++) {
              arraysum = this.cookiesPerHour[index] + arraysum
             };
                 liEl.textContent =`Total : ${arraysum} cookies`;
         
                articleEl.appendChild(ulEl);
   
     },
      }
      Seattle.customersPerHourFun(23,65);
      Seattle.cookiesPerHourFun(Seattle.averageCookies);
      Seattle.render();
// ****************************************************************************
let Tokyo = {
   minHourlyCustomers: 3,
   maxHourlyCustomers: 24,
   averageCookies: 1.2,
   customersPerHour:[],
   cookiesPerHour:[],

  customersPerHourFun: function (min, max) {
     for (let i = 0; i <= 14; i++) {
       this.customersPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
       }
       console.log( this.customersPerHour);},
       
// *************************************************************

    cookiesPerHourFun :function(numOfCookies)  {
       for (let i = 0; i <= 14; i++) {
        this.cookiesPerHour[i]= Math.floor( this.customersPerHour [i]* numOfCookies) ;

         }
         
         console.log(this.cookiesPerHour);
       },
      //  **********************************************************
          render: function () {
         let divEl = document.getElementById('cookies');
         let articleEl = document.createElement('article');
         divEl.appendChild(articleEl)
 
         let pEl = document.createElement('p');
         pEl.textContent = `The amounts of cookies purchased for each hour in Tokyo is :`;
         articleEl.appendChild(pEl);
 
         let ulEl = document.createElement('ul');
         let x=6;
         let y=1;
         let liEl = ""
         for (let i = 0; i < this.cookiesPerHour.length; i++) {
              liEl = document.createElement('li');
             if (i<=5){
             liEl.textContent =`${x}AM :  ${ this.cookiesPerHour[i]}`;}
             else if(i==6){
              liEl.textContent =`${12}PM :  ${this.cookiesPerHour[i]}`;
              
            }
             
              else if(i>6){
               liEl.textContent =`${y}PM :  ${this.cookiesPerHour[i]}`;
               y++;
             };
             x++;
             ulEl.appendChild(liEl);
            };
            let arraysum = 1;
            for (let index = 0; index <this.cookiesPerHour.length; index++) {
              arraysum = this.cookiesPerHour[index] + arraysum
             };
                 liEl.textContent =`Total : ${arraysum} cookies`;
         
                articleEl.appendChild(ulEl);
   
     },
      }
      Tokyo.customersPerHourFun(3,24);
      Tokyo.cookiesPerHourFun(Tokyo.averageCookies);
      Tokyo.render();
      // *****************************************************************************************
let Dubai = {
         minHourlyCustomers: 11,
         maxHourlyCustomers: 38,
         averageCookies: 3.7,
         customersPerHour:[],
         cookiesPerHour:[],
      
        customersPerHourFun: function (min, max) {
           for (let i = 0; i <= 14; i++) {
             this.customersPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
             }
             console.log( this.customersPerHour);},
             
      // *************************************************************
      
          cookiesPerHourFun :function(numOfCookies)  {
             for (let i = 0; i <=14; i++) {
              this.cookiesPerHour[i]= Math.floor( this.customersPerHour [i]* numOfCookies) ;
      
               }
               
               console.log(this.cookiesPerHour);
             },
            //  **********************************************************
                render: function () {
               let divEl = document.getElementById('cookies');
               let articleEl = document.createElement('article');
               divEl.appendChild(articleEl)
       
               let pEl = document.createElement('p');
               pEl.textContent = `The amounts of cookies purchased for each hour in Dubai is :`;
               articleEl.appendChild(pEl);
       
               let ulEl = document.createElement('ul');
               let x=6;
               let y=1;
               let liEl = ""
               for (let i = 0; i < this.cookiesPerHour.length; i++) {
                    liEl = document.createElement('li');
                   if (i<=5){
                   liEl.textContent =`${x}AM :  ${ this.cookiesPerHour[i]}`;}
                   else if(i==6){
                    liEl.textContent =`${12}PM :  ${this.cookiesPerHour[i]}`;
                    
                  }
                   
                    else if(i>6){
                     liEl.textContent =`${y}PM :  ${this.cookiesPerHour[i]}`;
                     y++;
                   };
                   x++;
                   ulEl.appendChild(liEl);
                  };
                  let arraysum = 1;
                  for (let index = 0; index <this.cookiesPerHour.length; index++) {
                    arraysum = this.cookiesPerHour[index] + arraysum
                   };
                       liEl.textContent =`Total : ${arraysum} cookies`;
               
                      articleEl.appendChild(ulEl);
         
           },
            }
            Dubai.customersPerHourFun(11,38);
            Dubai.cookiesPerHourFun(Dubai.averageCookies);
            Dubai.render();
            // *****************************************************************************************
let Paris = {
               minHourlyCustomers: 20,
               maxHourlyCustomers: 38,
               averageCookies: 2.3,
               customersPerHour:[],
               cookiesPerHour:[],
            
              customersPerHourFun: function (min, max) {
                 for (let i = 0; i <= 14; i++) {
                   this.customersPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
                   }
                   console.log( this.customersPerHour);},
                   
            // *************************************************************
            
                cookiesPerHourFun :function(numOfCookies)  {
                   for (let i = 0; i <= 14; i++) {
                    this.cookiesPerHour[i]= Math.floor( this.customersPerHour [i]* numOfCookies) ;
            
                     }
                     
                     console.log(this.cookiesPerHour);
                   },
                  //  **********************************************************
                      render: function () {
                     let divEl = document.getElementById('cookies');
                     let articleEl = document.createElement('article');
                     divEl.appendChild(articleEl)
             
                     let pEl = document.createElement('p');
                     pEl.textContent = `The amounts of cookies purchased for each hour in Paris is :`;
                     articleEl.appendChild(pEl);
             
                     let ulEl = document.createElement('ul');
                     let x=6;
                     let y=1;
                     let liEl = ""
                     for (let i = 0; i < this.cookiesPerHour.length; i++) {
                          liEl = document.createElement('li');
                         if (i<=5){
                         liEl.textContent =`${x}AM :  ${ this.cookiesPerHour[i]}`;}
                         else if(i==6){
                          liEl.textContent =`${12}PM :  ${this.cookiesPerHour[i]}`;
                          
                        }
                         
                          else if(i>6){
                           liEl.textContent =`${y}PM :  ${this.cookiesPerHour[i]}`;
                           y++;
                         };
                         x++;
                         ulEl.appendChild(liEl);
                        };
                        let arraysum = 1;
                        for (let index = 0; index <this.cookiesPerHour.length; index++) {
                          arraysum = this.cookiesPerHour[index] + arraysum
                         };
                             liEl.textContent =`Total : ${arraysum} cookies`;
                     
                            articleEl.appendChild(ulEl);
               
                 },
                  }
                  Paris.customersPerHourFun(20,38);
                  Paris.cookiesPerHourFun(Paris.averageCookies);
                  Paris.render();
                  // *****************************************************************************************
let lima = {
                     minHourlyCustomers: 2,
                     maxHourlyCustomers: 16,
                     averageCookies: 4.6,
                     customersPerHour:[],
                     cookiesPerHour:[],
                  
                    customersPerHourFun: function (min, max) {
                       for (let i = 0; i <= 14; i++) {
                         this.customersPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
                         }
                         console.log( this.customersPerHour);},
                         
                  // *************************************************************
                  
                      cookiesPerHourFun :function(numOfCookies)  {
                         for (let i = 0; i <= 14; i++) {
                          this.cookiesPerHour[i]= Math.floor( this.customersPerHour [i]* numOfCookies) ;
                  
                           }
                           
                           console.log(this.cookiesPerHour);
                         },
                        //  **********************************************************
                            render: function () {
                           let divEl = document.getElementById('cookies');
                           let articleEl = document.createElement('article');
                           divEl.appendChild(articleEl)
                   
                           let pEl = document.createElement('p');
                           pEl.textContent = `The amounts of cookies purchased for each hour in lima is :`;
                           articleEl.appendChild(pEl);
                   
                           let ulEl = document.createElement('ul');
                           let x=6;
                           let y=1;
                           let liEl = ""
                           for (let i = 0; i < this.cookiesPerHour.length; i++) {
                                liEl = document.createElement('li');
                               if (i<=5){
                               liEl.textContent =`${x}AM :  ${ this.cookiesPerHour[i]}`;}
                               else if(i==6){
                                liEl.textContent =`${12}PM :  ${this.cookiesPerHour[i]}`;
                                
                              }
                               
                                else if(i>6){
                                 liEl.textContent =`${y}PM :  ${this.cookiesPerHour[i]}`;
                                 y++;
                               };
                               x++;
                               ulEl.appendChild(liEl);
                              };
                              let arraysum = 1;
                              for (let index = 0; index <this.cookiesPerHour.length; index++) {
                                arraysum = this.cookiesPerHour[index] + arraysum
                               };
                                   liEl.textContent =`Total : ${arraysum} cookies`;
                           
                                  articleEl.appendChild(ulEl);
                     
                       },
                        }
                        lima.customersPerHourFun(2,16);
                        lima.cookiesPerHourFun(lima.averageCookies);
                        lima.render();
                        // *****************************************************************************************
                        
                  
                  
                    
            
            
              
      
      
        
      


  
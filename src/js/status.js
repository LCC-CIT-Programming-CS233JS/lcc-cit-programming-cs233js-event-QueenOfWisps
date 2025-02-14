// Notice the import statements
import './general';
import apiCall from './services/api/apiCall';
import Chart from 'chart.js';
import * as navbarLib from './display.js';

class Status {
  constructor() {
    /* Part 1 - Finish the constructor
    - Add references to each of these elements on the page
        this.$experienceTab = document.querySelector('#experienceTab');
        this.$professionTab = 
        this.$ageTab = 
        this.$ageCanvas = 
        this.$professionCanvas = 
        this.$experienceCanvas = 
        this.$loadingIndicator = 
        this.$tabArea = 
        this.$chartArea = 
        this.$errorMessage = 
    - Add an instance variable for the data that comes back from the service
        this.statisticData;
    - Call loadData.  It will make the ajax call and create one graph
    - Call addEventListeners
    */
   this.$experienceTab = document.querySelector('#experienceTab');
     this.$professionTab = document.querySelector('#professionTab');
     this.$ageTab = document.querySelector('#ageTab');
     this.$ageCanvas = document.querySelector('#ageChart');
     this.$professionCanvas = document.querySelector('#professionChart');
     this.$experienceCanvas = document.querySelector('#experienceChart');
     this.$loadingIndicator = document.querySelector('#loadingIndicator');
     this.$tabArea = document.querySelector('#tabArea');
     this.$chartArea = document.querySelector('#chartArea');
     this.$errorMessage = document.querySelector('loadingError');
     this.statisticData;
     this.loadData();
     this.addEventListeners();
  }

/* Part 2 - Write these 2 methods. 
   Instantiate an object at the bottom of the class.
   Then TEST.  The experience chart should work at this point. */
  loadData() {
    /* Make an api call. Because it's a get request with no data,
       the only parameter is 'statistics'.
       When the Promise returns successfully
          set statisticsData to the data that's returned
          hide the loading indicator
          show the tab area and the chart area
          call loadExperience - it's the default chart
       When an error occurs
          hide the loading indicator
          show the error message
      */
     apiCall('statistics')
     .then (response =>{
       this.statisticData=response;
       this.loadExperience();
       this.$loadingIndicator.classList.add('hidden');
       this.$tabArea.classList.remove('hidden');
       this.$chartArea.classList.remove('hidden');
      })
     .catch(()=>{
       this.$loadingIndicator.classList.add('hidden');
       this.$errorMessage.classList.remove('hidden');
     });
     
  }

  addEventListeners() {
    // add a click event handler to the experienceTab.  Call loadExperience.  Bind the class.
    // add a click event handler to the professionTab...
    // add a click event handler to the ageTab...
    this.$experienceTab.addEventListener('click', this.loadExperience.bind(this));
    this.$professionTab.addEventListener('click', this.loadProfession.bind(this));
    this.$ageTab.addEventListener('click', this.loadAge.bind(this));
  }

  hideCharts() {
    this.$experienceTab.parentElement.classList.remove('active');
    this.$professionTab.parentElement.classList.remove('active');
    this.$ageTab.parentElement.classList.remove('active');
    this.$ageCanvas.classList.add('hidden');
    this.$professionCanvas.classList.add('hidden');
    this.$experienceCanvas.classList.add('hidden');
  }

  loadExperience(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$experienceCanvas.classList.remove('hidden');
    this.$experienceTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.experience,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            'Beginner',
            'Intermediate',
            'Advanced'
        ]
    };
    new Chart(this.$experienceCanvas,{
      type: 'pie',
      data,
    });
  }

  /* Part 3 - Write these 2 methods. 
   Then TEST.  All 3 chars should now work. */

  // It's just like the loadExperience but there are 4 'slices' for 
  // 'School Students', 'College Students', 'Trainees', 'Employees'
  loadProfession(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$professionTab.classList.remove('hidden');
    this.$professionTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.profession,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              
            ],
            borderColor: [
              'white',
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            'School Students',
            'College Students',
            'Trainees',
            'Employees',
        ]
    };
    new Chart(this.$professionCanvas,{
      type: 'pie',
      data,
    });
  }

  // It's just like the loadExperience but there are 3 'slices' for 
  // '10-15 years', '15-20 years', '20-25 years'
  loadAge(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$ageTab.classList.remove('hidden');
    this.$ageTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.add,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              
            ],
            borderColor: [
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            '10-15 Years',
            '15-25 years',
            '20-25 years',
        ]
    };
    new Chart(this.$ageCanvas,{
      type: 'pie',
      data,
    });
  }
  // create es6 module pass in a paremter to a function for each page, idea 
  // function(pagename){return desired html page. }; you need import and export statements see the bookmark made in chrome. heres the link incase crome dies
  //https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da

}
window.addEventListener('load', () => {
  let template = navbarLib.createNavBarTwo();
  document.getElementById("navBar").innerHTML=template;
  document.getElementById("status").classList.add("active");
 });
window.onload=()=>{new Status();}

// add a window on load handler that creates a new instance of this class

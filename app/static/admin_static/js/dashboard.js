$(function() {
    'use strict';
    var tracksLeaderboardCanvas = document.getElementById("tracksLeaderboard");
    var memberLevelCanvas = document.getElementById("memberLevel");
    var studentsRegistrationCanvas = document.getElementById("studentsRegistration");
    // ============================================================== 
    //CountUp
    // ============================================================== 
    $(function() {
        var count1 = new CountUp("Counter1", 0 , 150 , 0 , 2,{
            useEasing: true, 
            useGrouping: true, 
            separator: ',', 
        });
        var count2 = new CountUp("Counter2", 0 , 30 , 0 , 2,{
            useEasing: true, 
            useGrouping: true, 
            separator: ',', 
        });
        var count3 = new CountUp("Counter3", 0 , 100.24 , 2 , 2,{
            useEasing: true, 
            useGrouping: true, 
            separator: ',', 
            decimal:'.', 
            prefix:'$'
        });
        var count4 = new CountUp("Counter4", 0 , 10 , 0 , 2,{
            useEasing: true, 
            useGrouping: true, 
            separator: ',', 
        });
        count1.start()
        count2.start()
        count3.start()
        count4.start()
    })
    var tracksLeaderboard = new Chart(tracksLeaderboardCanvas, {
        type: 'bar',
        data: {
            labels: ["Cyber Security", "Hardware", "Graphics", "Algorithms" ],
            datasets: [{
                label: 'Total members',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    var memberLevel = new Chart(memberLevelCanvas, {
        type: 'pie',
        data: {
            labels: ["Seniors", "Sophomores", "Freshmen", "Juniors"],
            datasets: [{
                data: [14, 12, 30, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
    var studentsRegistration = new Chart(studentsRegistrationCanvas, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Total members each year',
                data: [10,20,30,20,50,15],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                pointBackgroundColor: 'rgba(0,0,0)',
                pointBorderColor: 'rgba(0,0,0)',
                pointHoverBackgroundColor: 'rgba(255, 77, 77)',
                pointHoverBorderWidth: 3,
                borderWidth: 1,
                fill: false
            }],
            labels: ['2013','2014','2015','2016','2017','2018']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
});
$("#chart1").click(function(){
	$("#TotalViews").hide();
	$("#ViewsByDay").show();
});

$("#chart2").click(function(){
	$("#TotalViews").show();
	$("#ViewsByDay").hide();
});

//Type, data, options
ctx = document.getElementById('myChart1');
var chartGraph = new Chart (ctx, {
    type: 'line',
    data: {
        datasets: [{
            borderWidth: 6,
            borderColor: 'rgba(54, 162, 235, 0.7)',//blue
            fill: false
        }, {
            borderWidth: 6,
            borderColor: 'rgba(255, 99, 132, 0.7)',//red
            fill: false
        },
        {
            borderWidth: 6,
            borderColor: 'rgba(255, 99, 132, 0.4)',//pink
            fill: false
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 18,
            text: 'Dialy views'
        },
        plugins: {
            datasource: {
                url: 'data/data.xlsx'
            }
        },
        responsive: false
    }
});

// get canvas as the context of chart
var ctx = document.getElementById('myChart2')
// generate charts
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: month,
        datasets: 
        [
            {
                borderWidth: 6,
                label: 'ND',
                data: NDi,
                borderColor:['rgba(54, 162, 235, 0.7)'],//blue
                fill: false
                                                                    
            },
            {
                borderWidth: 6,
                label: "DMD",
                data: DMDi,
                borderColor:[ 'rgba(255, 99, 132, 0.7)'],//red
                fill: false
            
            },
            {
                borderWidth: 6,
                label: "DM",
                data: DMi,
                borderColor:[ 'rgba(255, 99, 132, 0.4)'],//pink
                fill: false
            
            }
        ]
      
    },
      options: {
        title: {
            display: true,
            fontSize: 18,
            text: 'Total views'
        },
        responsive: false // custom size
    }

});


/*chartColors = [
    {
      backgroundColor: '#fff',
      borderColor: '#0062ff',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
      fill: false
    },
    // ...colors for additional data sets
    ];*/
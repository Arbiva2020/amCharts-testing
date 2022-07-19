function loadWorldWideStats(){
    console.log('loadWorldWideStats called');
    //defining the theme that we whant to use:
    am4core.useTheme(am4themes_animated);
    //creating the chart instanse:
    var chart = am4core.create("worldwide", am4charts.XYChart);
    //define the chart data
    chart.data = generateChartData();
    //creating the y axes and the x axes:
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //create the view series:
    //we will create 2 charts: the first one to display the viwes
    //and another one for all of the shares:
    let viewSeries = chart.series.push(new am4charts.LineSeries());
    //define the data column we want to use (visits, that comes from the data):
    viewSeries.dataFields.valueY = "visits";
    //defining the X axis using the dates:
    viewSeries.dataFields.dateX = "date";
    //customise the line chart (optional):
    viewSeries.strokeWidth = 1;
    //display a tooltip (optional):
    viewSeries.tooltipText = "Visits: {valueY.value}";
    //add a cursor:
    chart.cursor = new am4charts.XYCursor();
    //for this cursor we need to define the x axis:
    chart.cursor.xAxis= dateAxis;
    //configure the cursor to the view series:
    chart.cursor.snapToSeries = viewSeries;
}

function loadTop5Countries(){
    console.log('loadTop5Countries called');
} 

function generateChartData(){
    let chartData = [];
    let firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 365);
    //default values for demonstration purposes, of how many
    //visits & shares we had in our website:
    let visits = 500;
    let shares = 100;
    for(let i = 0; i<365; i++){
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);
        visits += Math.round((Math.random()<0.5 ? 1 : -1)*Math.random()*10);
        shares += Math.round((Math.random()<0.5 ? 1 : -1)*Math.random()*10);
        chartData.push({
            date: newDate,
            visits:visits,
            shares:shares
        });
        return chartData;       
    }
}
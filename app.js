function init() {
  
  var selector = d3.select("#selDate");
    
    d3.json("netflix.json").then((data) => {
      var dateIds = data.dates;
      dateIds.forEach((date) => {
        selector
        .append("option")
        .text(date)
        .property("value", date);
      });
      
    const firstdate = dateIds[0];
    updateMetadata(firstdate);
    });
  }
function updateMetadata(sample) {
  d3.json("netflix.json").then((data) => {
    var datetotal = data.datetotal;
    var filterArray = datetotal.filter(sampleObject => sampleObject.date == sample);
    var result = filterArray[0];
    var metaPanel = d3.select("#sample-metadata");
    metaPanel.html("");
    Object.entries(result).forEach(([key, value]) => {
      metaPanel.append('h6').text(`${key.toUpperCase()}: ${value}`)
    })
  });

function optionChanged(newSample) {
  updateMetadata(newSample);
}
  var trace1 = {
    values: [82, 429, 1188, 1649, 1905, 1879],
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    type: 'pie'
  };
  var data = [trace1];
  var layout = {
    width: 450,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    title: 'Number of Premiers Per Year',
    showlegend: false

  };

Plotly.newPlot("pieChart", data, layout);


}


    
 
      
    
  

    

init();

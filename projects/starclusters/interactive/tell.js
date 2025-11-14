
d3.csv('./starpart.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(rows, 'x'), y: unpack(rows, 'y'), z: unpack(rows, 'z'), 
	mode: 'markers',
	marker: {
		size: 0.5,
		color: unpack(rows, 't'),
		colorscale: 'Portland',
	},
	type: 'scatter3d'
};

var data = [trace1];
var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
  }};
Plotly.newPlot('starplot', data, layout);
});

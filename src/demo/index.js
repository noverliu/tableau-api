const div = document.querySelector('#container');

const url = 'https://public.tableau.com/views/RegionalSampleWorkbook/Economy';

var viz = new tableau.Viz(div, url);

// Define and Initialise Variables
let countyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';
let educationURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';
let countyData;
let educationData;
let canvas = d3.select('#canvas');
let tooltip = d3.select('#tooltip');

// Draw Map
let drawMap = () => {

    canvas.selectAll('path')
        .data(countyData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('class', 'county')
        .attr('fill', (countyDataItem) => {
            let id = countyDataItem['id'];
            let county = educationData.find((item) => {
                return item['fips'] === id;
            });
            let percentage = county['bachelorsOrHigher'];

            // Set Color according to percentage
            if (percentage <= 10) {
                return 'red';
            } else if (percentage <= 20) {
                return 'orange';
            } else if (percentage <= 30) {
                return 'yellow';
            } else if (percentage <= 40) {
                return 'lawngreen';
            } else if (percentage <= 50) {
                return 'mediumseagreen';
            } else {
                return 'green';
            }
        })
        .attr('data-fips', (countyDataItem) => {
            return countyDataItem['id'];
        })
        .attr('data-education', (countyDataItem) => {
            let id = countyDataItem['id'];
            let county = educationData.find((item) => {
                return item['fips'] === id;
            });
            let percentage = county['bachelorsOrHigher'];
            return percentage;
        })
        .on('mouseover', (e, countyDataItem) => {
            tooltip.transition().style('visibility', 'visible');
            let id = countyDataItem['id'];
            let county = educationData.find((item) => {
                return item['fips'] === id;
            });

            // Set Up Text on Tooltip
            tooltip.text(county['fips'] + ' - ' + county['area_name'] + ', '
                + county['state'] + ' : ' + county['bachelorsOrHigher'] + '%');
            tooltip.attr('data-education', county['bachelorsOrHigher']);
        })
        .on('mouseout', (countyDataItem) => {
            tooltip.transition().style('visibility', 'hidden');
        });

};

// Get JSON Data
d3.json(countyURL).then(
    (data, error) => {
        if (error) {
            console.log(error);
        } else {
            countyData = topojson.feature(data, data.objects.counties).features;
            console.log(countyData);

            d3.json(educationURL).then(
                (data, error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        educationData = data;
                        console.log(educationData);
                        drawMap();
                    }
                }
            );
        }
    }

);
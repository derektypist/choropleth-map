# Choropleth Map

The aim of the project is to build a Choropleth Map, using JSON Data.  It is in a functionality
similar to https://codepen.io/freeCodeCamp/full/EZKqza.

## UX

User stories taken from https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map

As a user, my choropleth should have a title with the corresponding `id='title'`.

As a user, my choropleth should have a description element with a corresponding `id='description'`.

As a user, my choropleth should have counties with a corresponding `class='county'` that
represents the data.

There should be at least 4 different fill colors for the counties.

My counties should each have `data-fips` and `data-education` properties containing their fips
and education values.

My choropleth should have a county for each provided data point.

The counties should have `data-fips` and `data-education` values that match the sample data.

My choropleth should have a legend with a corresponding `id='legend'`.

There should be at least 4 different fill colors used for the legend.

I can mouse over an area and see a tooltip with a corresponding `id='tooltip'` which displays
more information about the area.

My tooltip should have a `data-education` property that corresponds to the `data-education` of
the active area.

Datasets

**US Education Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`

Fields include fips, state, area_name and bachelorsOrHigher

**US County Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

[Wireframes](wireframes/wireframe-choropleth-map.png) are provided.  Taken from
https://codepen.io/freeCodeCamp/full/EZKqza.

## Features

Allowing the user to get more information about the area when hovering over the area.

## Technologies

Uses HTML5, CSS3, JavaScript, D3 and Topojson (https://cdnjs.com/libraries/topojson).  Uses JSON Data.
Other Technologies include Google Fonts.

## Testing

Make sure all the user stories have been met.  If some or all the tests have failed, go back and edit the
code until all tests have passed.

## Deployment

On GitHub Pages.

## Credits

### Content

Did a Google Search.

### Media

US Education Data taken from `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
US County Data taken from `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

### Acknowledgements

freeCodeCamp

[YouTube Video](https://www.youtube.com/watch?v=ha1toFtBfF8) from Ganesh H.  Also the [Notion Website](https://www.notion.so/Visualize-Data-with-a-Choropleth-Map-9d91d46e78d4406abc6a0d36f9e089dc).

This was included in the Description of the YouTube Video.  Accessed on 8 October 2020.
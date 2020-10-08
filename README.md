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

**US County Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

var squaireProject = {
  title: "Bridge condition by state",
  caption: "Some 24.6% of Connecticut's road bridges are deemed 'functionally obsolete,' meaning"
  + " they don't meet modern design standards such as lane count and lane width for the current traffic volume."
  + " Meanwhile 9.2% of bridges in the state are considered 'structurally deficient,' meaning 'significant' bridge"
  + " elements are deteriorating.",
  byline: "Jake Kara / TrendCT.org",
  sourceline: "U.S. DOT Bureau of Transportation Statistics",
  div_id: "map-container",
  datasets: [{
    name: "Structurally deficient"
  },
  {
    name: "Functionally obsolete"
  }, 
  ],
  default_set: "Functionally obsolete"
};

squaireProject.opt = {
    "default": {
      tooltip: {
        enabled: true,
        //column1: 'Year'
        //column2: "%"
      },
      el: "#" + squaireProject.div_id,
      colors: d3.scale.quantize().domain([10,25]).range([
        /*
          '#ffb3b3',
          '#ff6666',
          '#e60000',
          '#b30000',
          '#660000',
        */
          '#ffddcc',
          '#ffaa80',
          '#ff7633',
          '#e64b00',
          '#662100',

        ])
      }
  };


// extend default options to include custom options for 
// each tab
squaireProject.opt["Structurally deficient"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["Structurally deficient"]
    }
  },
    squaireProject.opt["default"]
);
squaireProject.opt["Functionally obsolete"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["Functionally obsolete"]
    }
  },
    squaireProject.opt["default"]
);
squaireProject.opt["2013"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2013"]
    }
  },
    squaireProject.opt["default"]
);

squaireProject.opt["2014"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2014"],
    }
  },
    squaireProject.opt["default"]
);
squaireProject.opt["2015"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2015"]
    }
  },
    squaireProject.opt["default"]
);

squaireProject.data = {
  "AL": {
    "Structurally deficient": "8.6%",
    "Functionally obsolete": "64.8%"
  },
  "AK": {
    "Structurally deficient": "10.0%",
    "Functionally obsolete": "43.3%"
  },
  "AZ": {
    "Structurally deficient": "3.2%",
    "Functionally obsolete": "37.1%"
  },
  "AR": {
    "Structurally deficient": "6.7%",
    "Functionally obsolete": "33.9%"
  },
  "CA": {
    "Structurally deficient": "9.9%",
    "Functionally obsolete": "27.3%"
  },
  "CO": {
    "Structurally deficient": "6.1%",
    "Functionally obsolete": "25.8%"
  },
  "CT": {
    "Structurally deficient": "9.2%",
    "Functionally obsolete": "24.6%"
  },
  "DE": {
    "Structurally deficient": "5.6%",
    "Functionally obsolete": "23.9%"
  },
  "DC": {
    "Structurally deficient": "5.5%",
    "Functionally obsolete": "22.9%"
  },
  "FL": {
    "Structurally deficient": "2.0%",
    "Functionally obsolete": "21.5%"
  },
  "GA": {
    "Structurally deficient": "5.3%",
    "Functionally obsolete": "21.1%"
  },
  "HI": {
    "Structurally deficient": "5.4%",
    "Functionally obsolete": "20.9%"
  },
  "ID": {
    "Structurally deficient": "9.1%",
    "Functionally obsolete": "19.6%"
  },
  "IL": {
    "Structurally deficient": "8.4%",
    "Functionally obsolete": "18.3%"
  },
  "IN": {
    "Structurally deficient": "10.0%",
    "Functionally obsolete": "17.9%"
  },
  "IA": {
    "Structurally deficient": "20.7%",
    "Functionally obsolete": "17.8%"
  },
  "KS": {
    "Structurally deficient": "9.6%",
    "Functionally obsolete": "17.7%"
  },
  "KY": {
    "Structurally deficient": "8.4%",
    "Functionally obsolete": "17.3%"
  },
  "LA": {
    "Structurally deficient": "14.2%",
    "Functionally obsolete": "17.0%"
  },
  "ME": {
    "Structurally deficient": "15.0%",
    "Functionally obsolete": "16.8%"
  },
  "MD": {
    "Structurally deficient": "6.0%",
    "Functionally obsolete": "16.5%"
  },
  "MA": {
    "Structurally deficient": "8.9%",
    "Functionally obsolete": "15.9%"
  },
  "MI": {
    "Structurally deficient": "11.7%",
    "Functionally obsolete": "15.6%"
  },
  "MN": {
    "Structurally deficient": "6.4%",
    "Functionally obsolete": "15.0%"
  },
  "MS": {
    "Structurally deficient": "13.3%",
    "Functionally obsolete": "14.7%"
  },
  "MO": {
    "Structurally deficient": "13.6%",
    "Functionally obsolete": "14.3%"
  },
  "MT": {
    "Structurally deficient": "7.6%",
    "Functionally obsolete": "14.3%"
  },
  "NE": {
    "Structurally deficient": "17.3%",
    "Functionally obsolete": "13.7%"
  },
  "NV": {
    "Structurally deficient": "1.8%",
    "Functionally obsolete": "13.4%"
  },
  "NH": {
    "Structurally deficient": "13.2%",
    "Functionally obsolete": "13.0%"
  },
  "NJ": {
    "Structurally deficient": "9.2%",
    "Functionally obsolete": "12.9%"
  },
  "NM": {
    "Structurally deficient": "7.2%",
    "Functionally obsolete": "11.6%"
  },
  "NY": {
    "Structurally deficient": "11.6%",
    "Functionally obsolete": "11.3%"
  },
  "NC": {
    "Structurally deficient": "12.2%",
    "Functionally obsolete": "11.0%"
  },
  "ND": {
    "Structurally deficient": "15.8%",
    "Functionally obsolete": "10.6%"
  },
  "OH": {
    "Structurally deficient": "7.7%",
    "Functionally obsolete": "10.5%"
  },
  "OK": {
    "Structurally deficient": "18.2%",
    "Functionally obsolete": "9.9%"
  },
  "OR": {
    "Structurally deficient": "5.5%",
    "Functionally obsolete": "9.8%"
  },
  "PA": {
    "Structurally deficient": "22.5%",
    "Functionally obsolete": "9.5%"
  },
  "RI": {
    "Structurally deficient": "23.1%",
    "Functionally obsolete": "9.1%"
  },
  "SC": {
    "Structurally deficient": "11.0%",
    "Functionally obsolete": "9.1%"
  },
  "SD": {
    "Structurally deficient": "20.0%",
    "Functionally obsolete": "8.5%"
  },
  "TN": {
    "Structurally deficient": "5.4%",
    "Functionally obsolete": "7.5%"
  },
  "TX": {
    "Structurally deficient": "2.1%",
    "Functionally obsolete": "7.4%"
  },
  "UT": {
    "Structurally deficient": "3.4%",
    "Functionally obsolete": "7.2%"
  },
  "VT": {
    "Structurally deficient": "7.5%",
    "Functionally obsolete": "6.8%"
  },
  "VA": {
    "Structurally deficient": "8.1%",
    "Functionally obsolete": "6.4%"
  },
  "WA": {
    "Structurally deficient": "4.7%",
    "Functionally obsolete": "5.5%"
  },
  "WV": {
    "Structurally deficient": "13.4%",
    "Functionally obsolete": "5.4%"
  },
  "WI": {
    "Structurally deficient": "8.6%",
    "Functionally obsolete": "4.9%"
  },
  "WY": {
    "Structurally deficient": "13.5%",
    "Functionally obsolete": "4.1%"
  }
};
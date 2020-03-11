import "./byeie"; // loučíme se s IE

const genderClr = {
  'žena': 'rgba(222,45,38,0.7)',
  'muž': 'rgba(49,130,189,0.7)'
}

function forName(gender, age, add) {
  if (gender === '') {
    gender = 'nezn.'
  }

  if (age != '') {
    age = ', ' + (2020 - parseInt(age)) + add
  }
  return gender + age
}

fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQa-uh5eB9_66DrWesZyIVjxrZAZCWgStzXHoeRAorYsbT2ni1bvuQtkk9Ahs6LUjUy2M1NNeu8p0N7/pub?gid=0&single=true&output=csv")
  .then(response => response.text())
  .then(data => {
    const ppl = d3.csvParse(data)
    let nds = []
    ppl.forEach(hum => {
      nds.push({
        id: hum.id,
        name: forName(hum.pohlavi, hum.rocnik, ''),
        color: genderClr[hum.pohlavi] || 'rgba(99,99,99,0.7)',
        marker: {
          radius: 8
        }
      })
    })

    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQa-uh5eB9_66DrWesZyIVjxrZAZCWgStzXHoeRAorYsbT2ni1bvuQtkk9Ahs6LUjUy2M1NNeu8p0N7/pub?gid=1923863631&single=true&output=csv")
      .then(response => response.text())
      .then(data => {
        const conns = d3.csvParse(data)
        let links = []
        conns.forEach(con => {
          links.push([con.odkud, con.kam])
        })
        // nakresli pavouka
        Highcharts.chart('corona_spider', {
            chart: {
                type: 'networkgraph',
                //height: '50%'
            },
            credits: {
              text: 'Zdroj: MZ ČR',
              href: 'https://www.mzcr.cz/obsah/2020_4107_1.html' 
            },
            title: {
                text: 'Vazby mezi nakaženými COVID-19',
            },
            plotOptions: {
                networkgraph: {
                    keys: ['from', 'to'],
                    layoutAlgorithm: {
                      enableSimulation: false,
                      linkLength: 53,
                      integration: 'verlet',
                      approximation: 'barnes-hut',
                      gravitationalConstant: 3
                    },
                    link: {
                      width: 2,
                      color: 'black'
                    },
                    
                }, 
            },
            tooltip: {
              formatter: function () {
                const vls = ppl.filter(n => n.id === this.point.id)[0]
                return `<b>${forName(vls.pohlavi, vls.rocnik, ' let')}, ${vls.narodnost}</b><br>přenos nákazy: ${vls.zpusob_nakazy}<br>umístění: ${vls.hospitalizace}<br><i>${vls.popisek}</i>`
              },
              useHTML: true,
              backgroundColor: 'white',
            },
            series: [{
                dataLabels: {
                    enabled: true,
                    linkFormat: ''
                },
                id: 'covid-links',
                data: links,
                nodes: nds
            }]
        });
      })


  });



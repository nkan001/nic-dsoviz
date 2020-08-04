mapboxgl.accessToken = 'pk.eyJ1IjoibmthbjAwMSIsImEiOiJja2M1am9rM3EwNDZpMnZsajlkdTltb3lyIn0._-c81YPoAJ7CvdgSEpVSSg'
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [103.8, 1.35],
  zoom: 11.15
})

// storing the whole geojson data here
const parks = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
      'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'
    }
  },
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_1',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42193.6328</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36479.08</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Pelatok Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Pelatok</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>BC5EA394BD8CE9F8</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.96085701087,
          1.34617500824454,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_2',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>44210.12</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41314.54</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Turnhouse Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Natheravon Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AB31CCDD36F93C1C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.978978976056,
          1.38990401870983,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_3',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/coney-island-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37994.87</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>43526.7266</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Coney Island Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Beside Punggol Promenade Nature Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>7CAC664DFF94240C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.923130995416,
          1.4099130157165,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_4',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31744.6465</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40134.5625</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Stratton Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located at the end of Stratton Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8FC92F17CF75A88A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.866966992109,
          1.37923700487091,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_5',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27527.52</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39418.4531</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Leban Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Behind Sembawang Hills Food Centre.  Upper Thomson Road behind ESSO.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EB7459375A3D10F7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.829073008381,
          1.37276100286023,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_6',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41180.700000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33663.2344</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kew Drive Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the roundabout of Kew Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3120B9A286F21587</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.951753989584,
          1.3207100152588,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_7',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41563.207</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35869.1133</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Harvey Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Harvey Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>20880D0B4E75011A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.955191986755,
          1.34065899009129,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_8',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33374.3672</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38774.520000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Poh Huat Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Poh Huat Road and Poh Huat Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>2C20594469A955C4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.881610986055,
          1.36693701735687,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_9',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28106.66</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41335.49</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lentor Street Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lentor Crescent and Lentor Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0E6DB6A242F9EEF2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.834277001944,
          1.39009800189331,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_10',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31097.3965</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40340.4453</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lilac Drive Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located at the end of Lilac Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E6F53FED0B894E21</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.861150995157,
          1.38109901056076,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_11',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31355.8457</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37272.1055</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mei Hwan Drive Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Lorong Chuan and Ang Mo Kio Ave 1</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>19AFA344C16505F9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.863473007606,
          1.35335001597094,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_12',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31637.9512</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38060.5078</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chuan Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Chuan Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>772D072B4A23E587</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.866008002092,
          1.36048001138245,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_13',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31346.3379</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41087.71</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Begonia Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Begonia Road near provision shop</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0ED8A5B4660D3DC6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.863388004105,
          1.3878569764647,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_14',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28435.7344</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41306.41</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Fudu Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lentor Road and Fudu Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>086DCD09121859AE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.837233991568,
          1.38983500975178,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_15',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28586.752</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41331.840000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Countryside Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lentor Loop and Countryside Link and Countryside Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6946A424EC57BD58</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.838591002804,
          1.39006498690252,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_16',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40644.66</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35116.0547</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Pari Burong Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Pari Burong</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A058CCE975E44EBF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.946937998833,
          1.3338490080587,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_17',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27940.62</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39292.950000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>St. Nicholas View Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Ang Mo Kio Ave 2 and Ang Mo Kio Street 11</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5788E506D0FDAB82</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.832785007318,
          1.37162600142277,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_18',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37555.41</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33918.8438</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Waringin Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Waringin Park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EF909169B81E9DEB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.919178991455,
          1.32302300071578,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_19',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33733.9922</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36352.3828</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tai Keng Place Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>A small playground at the end of Tai keng Place (Road)</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6F29197BDF70B653</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.884842001596,
          1.345032012357,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_20',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32917.31</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38674.1055</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Parry Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Parry Road, Parry Terrace and Chuan Hoe Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D4893F4D6A7A6DC4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.877503995194,
          1.36602898427679,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_21',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31600.2246</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38054.4258</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Garden View Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Conway Grove</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B702F418F69DC068</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.865669002678,
          1.36042501254669,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_22',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34622.01</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39064.9141</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Naung Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jalan Naung</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>75456CBD2D8FA780</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.892821980736,
          1.36956298336645,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_23',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28563.6035</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41173.2773</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lentor Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lentor Loop and Lentor Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F0619964ED0B58C6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.838382992442,
          1.38863100316938,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_24',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42788.71</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38223.6563</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mariam Way Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Mariam Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>24CB69EEF1E5A3E7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.966204991398,
          1.36195200532663,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_25',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>43049.3633</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37957.74</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mariam Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Mariam Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F66150300D02C36F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.968546996712,
          1.35954702875823,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_26',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27922.59</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40074.2734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thomson Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Thomson Green road, behind shop houses</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B301234EA6A5BBF3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.832622992872,
          1.37869201086068,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_27',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33652.3945</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37516.293</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Surin Avenue Neighbourhood Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Surin Ave and Aroozoo Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>88D9CB89C5ED2C1F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.884109015017,
          1.35555801355152,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_28',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31192.59</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36742.3359</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chiltern Drive Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Chiltern Drive (Road) within Braddel Height Estate and beside St. Gabriel Secondary School</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>799AC8121D7A57AE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.862005994263,
          1.3485589866523,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_29',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40828.14</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33494.92</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kew Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Kew Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B3743948D125A5E7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.948585989819,
          1.31918799226855,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_30',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28415.9277</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40803.4023</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lentor Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lentor Loop and within Lentor Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EF3BCEF9A11F2BE9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.837056005834,
          1.38528598872966,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_31',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31730.62</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40559.5</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Nim Crescent Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Nim Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AE9C00E81015C0B6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.86684100749,
          1.38307998862516,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_32',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31798.8789</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37740.3945</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Colchester Grove Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Colchester Grove</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DB02F9F1D0A2C0AB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.867454004249,
          1.3575850011328,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_33',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31565.600000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39136.066399999996</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tavistock Avenue Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Ang Mo Kio Ave 3 and Tavistock Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CF26A22674D2BC36</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.865358006982,
          1.37020698685564,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_34',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38126.0273</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33097.957</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Elite Terrace Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Elite Park Avenue and Elite Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>055A39B259377CFB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.924306015806,
          1.31559901614235,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_35',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32458.5449</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40838.3828</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Selaseh Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Jalan Selaseh, Seletar Hills Drive & Jalan Keruing</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AA6469B3C9CF05CF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.873382001962,
          1.38560200214797,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_36',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33292.4922</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37270.81</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Geneng Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jalan Geneng</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1852078C6668522B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.880875016585,
          1.35333801951661,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_37',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31302.8281</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31643.29</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kampong Glam Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along beach road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5F26F987DF1B33E6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.862996003651,
          1.30244501399783,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_38',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29407.404300000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36916.92</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Clover Way Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Clover Way and Binchang Rise</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1A59DE3A345F4205</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.845964994247,
          1.35013800008884,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_39',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>36326.05</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31914.5215</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Marine Parade Road Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>A linear park along Marine Parade Road between Still Road South (Road) and East Coast Road. It flanked itself at terminal roads of private houses with one courtyard in front of Grand Mercue Roxy Hotel.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4DBD588CA9153C17</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.908132009336,
          1.30489699274238,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_40',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32898.79</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35180.4922</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Butterfly Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Butterfly Avenue, Sennett Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4FF401FD8E317547</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.877337012157,
          1.3344340005684,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_41',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28784.1875</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36785.8867</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Marymount Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>End of Marymount Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>BF55993565B41D6E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.840364994858,
          1.34895300431616,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_42',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31316.0176</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36085.8555</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Carmichael Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Carmichael Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>53DA086B747F82E2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.863114996244,
          1.34262199857387,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_43',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20481.7715</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35163.5234</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Greenridge Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Greenridge Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3DC1E90FB5DDF7DD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.765763004383,
          1.3342800030382,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_44',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28024.0859</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38241.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Fulton Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Fulton Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1C301C15FB8F9285</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.833535006924,
          1.36211900551873,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_45',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20952.0781</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35070.4063</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Savoy Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located at the end of Eng Kong Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E439DF16FD095FF9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.769988997386,
          1.33343799865579,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_46',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20646.9258</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35214.2734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Eng Kong Place Fitness Corner</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Eng Kong Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9B2E40862E5853BF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.767246997122,
          1.33473900830612,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_47',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>18582.3281</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33313.7734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pandan Reservoir Fitness Corner</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Juntion of West Coast Road & Pandan Gardens</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>46F986B3C0659F1F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.74869600057,
          1.31755100565495,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_48',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/bukit-timah-nature-reserve</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21402.1816</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37255.4648</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bukit Timah Nature Reserve</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>End of Hindhede Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3BDE3205F96F1B62</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.774032955111,
          1.35319898245639,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_49',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/one-north-park-mediapolis</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23493.9238</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30813.2578</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>one-north Park: Mediapolis</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Media Circle, next to MediaCorp campus</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0A0B96D99AE2AD78</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.792829540115,
          1.29493834487393,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_50',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>15072.7891</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35774.543</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lakeside Grove Fitness Corner</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Corporation Rise, along Lakeside PCN.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>49F83FD6C22D5865</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.717160003251,
          1.33980400972371,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_51',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>13279.7637</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37097.996100000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Westwood Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Westwood Crescent/Ave.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3A7423776B643EA3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.701048000098,
          1.35177199512194,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_52',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20360.0234</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39179.61</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Cashew Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Cashew Road and Upper Bukit Timah Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9B2F0980DFE85F18</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.764668007983,
          1.37060000450024,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_53',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19730.9824</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37857.1523</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chu Yen Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Jln Remaja and Chu Yen Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CB9D8F2AC6FB3D32</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.759016001687,
          1.35864000916998,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_54',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19954.55</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37494.57</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hillview Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Hillview Cescent, along Hillview Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C03B764FE9E80701</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.761025000317,
          1.35536100795603,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_55',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20553.3086</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34335.0938</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunset Way Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Sunset Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D02DFEA28D368014</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.76640600767,
          1.32678800198744,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_56',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/jurong-lake-gardens</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>16630.9316</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35360.1055</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jurong Lake Gardens</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Yuan Ching Road and Boon Lay Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DB390E826A98D15C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.731160967029,
          1.33605661779116,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_57',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/one-north-park-fusionopolis-north</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23249.6484</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31483.7539</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>one-north Park: Fusionopolis North</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Central Exchange Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FECD599E4B43D4AB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.790634518931,
          1.30100203775994,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_58',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20370.07</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32340.6582</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Taman Mas Merah Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Taman Mas Merah, West Coast Peak Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6C744303E59213AC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.764760003254,
          1.30875099860659,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_59',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20833.7773</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39263.5234</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Cashew Link Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Cashew Link and Cashew Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>76672EABB60FDEBA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.768924998308,
          1.37135900584168,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_60',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/hindhede-nature-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21621.8633</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36924.29</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hindhede Nature Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Hindhede Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A915DD4C9B00E016</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.776007005438,
          1.35020400464513,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_61',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19615.11</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33558.7734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Faber Hill Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Faber Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>76825A42FC8AC938</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.757975999596,
          1.31976699701647,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_62',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19941.144500000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35776.9</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Burgundy Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Burgundy Crescent, within Burgundy Hill Residences</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>39625DFC79777B4B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.760905002133,
          1.33982701990743,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_63',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19947.22</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38053.97</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lorong Kemunchup Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Lorong Kemunchup</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C767FF100CA63B91</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.76095898509,
          1.36042001623966,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_64',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21388.3</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38307.4766</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Dairy Farm Nature Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Dairy Farm Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D2E818169A369EA4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.773907987741,
          1.36271299419191,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_65',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20823.1934</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38851.6328</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chestnut Drive Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Chestnut Drive and Chestnut Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A29D55628024A73B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.768829994104,
          1.36763401414182,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_66',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20372.2422</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34435.39</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunset Way Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Sunset Way, located just outside Clementi Park Condo</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D2E19B02FA1C3F3B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.764779003407,
          1.32769499983866,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_67',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>18947.6738</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39366.082</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pavilion Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Pavilion Circle, off Bukit Batok Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3C808BDDC9DDA21F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.751977003043,
          1.37228598896427,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_68',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19435.25</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33093.590000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>West Coast Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>West Coast Green, West Coast Gardens Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E7E7429FF42D5F9F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.756359994439,
          1.31555999669294,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_69',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19685.3613</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38078.19</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Dermawan Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jln Dermawan</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>026A96ECFD0DE9D4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.75860600478,
          1.36063898092479,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_70',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/one-north-park-rochester-east</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23085.7988</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31990.100000000002</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>one-north Park: Rochester East</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Vista Exchange Green, in front of Rochester Mall</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6737176BF81736D6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.789162176587,
          1.30558122667376,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_71',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/jurong-central-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>14039.5664</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35576.996100000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jurong Central Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction off Jalan Boon Lay & Boon Lay Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8A8EE7F0A86B2251</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.707875996198,
          1.33801700926634,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_72',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19580.841800000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33861.418</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Faber Height Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Faber Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8C43839BF220936F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.757667999449,
          1.32250399598282,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_73',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19667.843800000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32949.17</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>West Coast Place Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>West Coast Place, West Coast Gardens Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D7D8AEC6567902E5</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.758450004373,
          1.31425397832238,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_74',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>13011.35</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37370.58</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Westville Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Westwood Crescent, along Jalan Bahar</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0875BCBCF3532C19</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.698636002705,
          1.35423700663436,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_75',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>18884.75</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41274.94</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Villa Verde Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Choa Chu Kang North 5 and Stagmont Ring Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>825841DB4B9E80ED</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.751410997398,
          1.38954898021615,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_76',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20449.4258</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36630.19</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bukit Batok Nature Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Bukit Batok East Avenue 2 and Bukit Batok East Avenue 6 </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>687BC328F41D4BB4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.765471994671,
          1.34754399774384,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_77',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21327</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39032.520000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chestnut Close Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located at end of Chestnut Close</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>66CC564969878943</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.773357003454,
          1.36927001062503,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_78',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/upper-seletar-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24929.095699999998</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42402.668</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Upper Seletar Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Mandai Road Track 7, off Mandai Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>750596296F1D4DC4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.805723997797,
          1.39974901320673,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_79',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26344.8828</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42433.9453</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thong Soon Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Beside petrol kiosk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>2733F67AEA96B1A9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.8184459979,
          1.40003198984827,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_80',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26783.1289</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42526.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Springleaf Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Springleaf avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CB24BE507115244E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.822383993324,
          1.40087098567589,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_81',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/the-southern-ridges</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24829.8965</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29147.834000000003</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>The Southern Ridges</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Southern Singapore</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5DEB8A91BCAA7962</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.80483399736,
          1.27987700300301,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_82',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/tiong-bahru-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26965.9258</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30003.668</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tiong Bahru Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Tiong Bahru Road and Lower Delta Road </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E7396C4A8BD86249</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.824027002227,
          1.28761700771254,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_83',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/clementi-woods-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20687.998</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31255.1367</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Clementi Woods Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along West Coast Road next to West Coast Plaza</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DB6AC9C66DF7E39E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.767616991901,
          1.29893400799437,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_84',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20065.9121</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32367.6465</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Mas Puteh Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Mas Puteh, West Coast Peak Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E251D11ADDEF4483</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.762026993326,
          1.30899499439468,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_85',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20174.1543</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30947.6738</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>West Coast Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Parallel to West Coast Highway</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>857734FB60B3361E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.762999956965,
          1.29615329873174,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_86',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/one-north-park-fusionopolis-south</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23259.3086</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31330.1641</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>one-north Park: Fusionopolis South</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Central Exchange Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EA18912EEAD8317A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.790721343478,
          1.29961302753491,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_87',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20897.2148</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39361.4922</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Cashew Crescent Fitness Corner Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Cashew Road and Cashew Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6B361A762DD3F663</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.769495005402,
          1.37224501547955,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_88',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20790.5566</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37721.0039</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Fuyong Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Jalan Asas</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>27950593DED69D81</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.768537003146,
          1.35740900815882,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_89',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/choa-chu-kang-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>18553.3359</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41229.6172</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Choa Chu Kang Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Choa Chu Kang Drive, next to KJE</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>84998193765E95EA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.748433001808,
          1.38913899170983,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_90',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20246.1777</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39294.06</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hazel Park Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Upper Bukit Timah Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A50FBDC42FFC5543</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.763644994757,
          1.37163501891167,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_91',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20241.6367</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32236.39</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Mas Kuning Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Mas Kuning, West Coast Peak Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>52CC5AD24CCC049E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.763605995133,
          1.30780800245289,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_92',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20827.3066</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34463.0234</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunset Heights Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Sunset Heights</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>889F376DE6E359DC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.768867997661,
          1.32794501705898,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_93',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21163.084</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39468.7422</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Almond Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Almond Crescent and Almond Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>266324D3F3D2CD6C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.771884003432,
          1.37321500854805,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_94',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19533.394500000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39764.58</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Phoenix Heights Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Phoenix Rd, off Choa Chu Kang Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>52C91CF6F5780AA7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.757240001981,
          1.37589003353554,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_95',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>15232.3789</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35804.2773</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lakeside Grove Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Corporation Rise</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>342ED74CBE233662</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.718593996798,
          1.34007298363987,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_96',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/one-north-park-rochester-west</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22959.7285</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32048.9141</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>one-north Park: Rochester West</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Vista Exchange Green, opposite The Star Vista</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9906605784F7494E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.788029366525,
          1.30611310021726,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_97',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>12373.1123</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35518.2578</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Yunnan Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Yunnan Crescent.Opp Jurong west sports hall.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F1A06128098C43A8</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.69290199957,
          1.33748498597278,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_98',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/bukit-batok-town-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19403.1211</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37715.7344</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bukit Batok Town Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Bukit Batok East Avenue 5</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3E22C0281F3E04E2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.756069994032,
          1.35736098423476,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_99',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19926.845699999998</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37739.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Remaja Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jln Remaja</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6F7E275FDB39B5A5</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.760775993338,
          1.35757800094458,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_100',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33337.3164</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38457.832</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Parry Avenue Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Parry Ave and Glasgow Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8238C86374B86AD2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.881278002318,
          1.36407301180073,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_101',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31163.3164</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37207.6367</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mei Hwan Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Mei Hwan Drive and Mei Hwan Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>021312435E6361A0</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.861743001571,
          1.35276700416957,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_102',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27573.8281</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>48029.700000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pebble Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Off Sembawang Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>2758596DB4AEE800</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.829488991841,
          1.45063801719106,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_103',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>16928.916</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>47334.7539</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kranji Nature Trail</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Off Kranji Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>69376E14E4629E66</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.73383399198,
          1.44435098869543,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_104',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/sembawang-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28392.4336</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>49231.0938</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sembawang Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the end of Sembawang</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0816A6B2F3313B3E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.836845008751,
          1.4615029860945,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_105',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/sengkang-riverside-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33676.4375</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42369.4258</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sengkang Riverside Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Anchorvale Street abutting Sungei Punggol</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B69DD8E34A62DB2C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.884325989939,
          1.39944798848949,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_106',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26820.8613</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>43047.87</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Brooks Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Springside Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>174F7682F6024278</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.822723028657,
          1.4055841273393,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_107',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/punggol-waterway-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35956.55</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>43646.520000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Punggol Waterway Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Sentul Crescent Road (Cuts through the whole of Punggol Town) </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>546A6DB1EFE4DB9C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.904814998591,
          1.4109970215842,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_108',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27198.793</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>45476.19</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Platina Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Platina estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>076102BC56072481</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.826118993934,
          1.42754499031824,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_109',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/springleaf-nature-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26236.12</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42558.5625</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Springleaf Nature Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Nee Soon Road, Upper Thomson Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B56D2B1467E9E6C0</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.817468667699,
          1.40115897651427,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_110',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/kranji-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>17621.416</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46721.5859</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kranji Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Kranji Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8B757636FB879EBD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.740057006009,
          1.43880599266327,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_111',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28262.1211</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>48647.15</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kandis Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Off Sembawang Road/Kandis Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>954DC81886757C48</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.835674007799,
          1.45622201251589,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_112',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27290.8262</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38010.7031</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Windsor Nature Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>30 Venus Drive, Singapore 573858 (Located close to Singapore Island Country Club)</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>61D4606FCA9F524B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.826946179093,
          1.36002980955599,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_113',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/punggol-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35270.1328</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39880.5352</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Punggol Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Hougang Avenue 8 and 10</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A997071F044A0F3D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.898646016222,
          1.37693901170228,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_114',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/lower-seletar-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27872.291</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>43533.2773</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lower Seletar Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Yishun Ave 1 and Lentor Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CB5DC6630AF255AF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.832171003957,
          1.40997400015505,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_115',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26776.2285</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42213.5664</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Springleaf Garden Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Straight from springleaf estate entrance road.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>54B23DCCBBA064D4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.822322000777,
          1.39803898385092,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_116',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/admiralty-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22295.6016</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>47314.61</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Admiralty Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>31 Riverside Road, Singapore 730000  </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4E353F2A56C83E22</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.782058929229,
          1.44417042427999,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_117',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/yishun-pond-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28686.4531</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>45481.94</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Yishun Pond Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Yishun Central, in front of Khoo Teck Puat Hospital</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EECA2F4988DD7F22</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.839486993379,
          1.42759699434119,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_118',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>19733.7422</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>44256.3477</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Rasok Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jln Rasok</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DBC341F53A0B6293</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.759038994785,
          1.41651199011886,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_119',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27113.3262</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>45447</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Goodlink Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Turn right after Goodlink estate entrance</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C6898AE8670B0E68</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.825350996754,
          1.42728100396175,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_120',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/yishun-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29033.998</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>45125.78</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Yishun Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Yishun Ave 4, Yishun Central, Yishun Ave 11 and Yishun Ring Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1370FC84BCD77908</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.84260999229,
          1.42437600154029,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_121',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/lower-peirce-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27218.4727</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39009.770000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lower Peirce Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Old Upper Thomson Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8B9EBA8A4FBE27B0</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.826296008364,
          1.36906501231608,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_122',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37135.1055</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42677.4766</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Punggol Waterway</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Sentul Crescent Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3B67C7294C35D913</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.9154050167,
          1.40223299924483,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_123',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/marsiling-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20946.2656</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46591.770000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Marsiling Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Woodlands Centre Road adjacent to Bukit Timah Expressway</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>96486E19EF57B312</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.769933998893,
          1.43763301771893,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_124',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/pulau-ubin-and-chek-jawa</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42701.0625</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>43391.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pulau Ubin and Chek Jawa</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Pulau Ubin</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E415D97687EAFB85</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.965420009834,
          1.40868999314912,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_125',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23214.502</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29642.79</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kent Ridge Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Vigilante Drive off South Buona Vista Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>034656BDAFA8BF68</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.790318992831,
          1.28435300657627,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_126',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28165.4922</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>21869.93</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sisters’ Islands Marine Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Sisters’ Islands </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D5016B28ECC28A3D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.834805553003,
          1.21405833267371,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_127',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/telok-blangah-hill-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>25465.4844</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29033.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Telok Blangah Hill Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Telok Blangah Green off Henderson Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5DFA1F5042BC1C4D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.810545004407,
          1.27884500650228,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_128',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/hortpark</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24456.7539</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29010.0234</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>HortPark</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>33 Hyderabad Road (off Alexandra Road), Singapore 119578</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A5846571A555DFD6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.801481185309,
          1.27863065273452,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_129',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/raffles-place-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30005.0781</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29630.7031</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Raffles Place Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Battery Road and Collyer Quay. It can also be accessed from D'Almeida Street.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>06833C82218C53F5</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.851334997301,
          1.28424399735648,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_130',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/hong-lim-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29475.6621</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29895.5273</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hong Lim Park - Speakers' Corner</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>The park is bounded by North Canal Road, South Bridge Road, Upper Pickering Street and New Bridge Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AC8CA17A21868178</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.846577998059,
          1.28663900368187,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_131',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33562.582</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32007.0059</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mount Batten Rd/Old Airport Rd Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Mt Batten Rd & Old Airport Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>78E6B093FF09F721</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.88330098901,
          1.30573400841613,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_132',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34008.090000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31546.8</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Wilkinson Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Wilkinson Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AA5EC52A19C4E25A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.887303997701,
          1.30157198694066,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_133',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33670.9023</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35846.06</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bunga Rampai Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Jalan Bunga Rampai (Road) is a transitional zone among Bartley MRT, Bartley Secondary School and Jalan Bunga Rampai Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>2F1D45EED0C983BA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.884275005667,
          1.34045302254281,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_134',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29608.8711</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31259.1367</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Handy Road Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Handy Road, Orchard Road and Zubir Said Drive; In front of The Cathay ▀</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B4B92BB1A0D125DA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.84777500427,
          1.29897100091601,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_135',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30917.4219</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32180.6777</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kitchener Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Kitchener Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D56EAEF187A152BD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.859533002821,
          1.30730499713228,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_136',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28881.3613</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31383.64</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Penang Road Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Penang Road and Oxley Road ▀</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8536B482FE51D6CD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.841238007513,
          1.30009699401837,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_137',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/national-orchid-garden</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>25838.2285</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32773.9063</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>National Orchid Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>In the Central Core of the Singapore Botanic Gardens. Address: 1 Cluny Road, Singapore 259569</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>119021D2C0A30D47</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.813893992211,
          1.31267000887848,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_138',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20860.1641</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35455.875</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Eng Kong Garden Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Lorong Kismis and Eng Kong Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>ADB5ACEDD0C508B1</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.769163007842,
          1.33692401719002,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_139',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>39808.5</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33450.3125</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sennett Avenue Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Sennett Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AABAA7518ACA5AC5</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.939423995901,
          1.31878498855893,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_140',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37061.043</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34398.832</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Interim Park At Lengkong Enam</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jalan Selamat and Lengkong Tujuh</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>BA00DDAB0F3E954D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.914736987314,
          1.32736399042993,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_141',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41428.6367</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34074.3633</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pesari Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Taman Bedok</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>171B1A8D0BCD056B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.953982005401,
          1.32442800353246,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_142',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>43451.0938</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38322.770000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi Heights Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Terang Bulan</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>09DE4312CEE2D693</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.972156990988,
          1.36284801405719,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_143',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37163.5352</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34579.293</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Senang Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jalan Senang</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>927944CDCCC7E47B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.915657988943,
          1.32899598345262,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_144',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37010.8945</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33072.043</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Telok Kurau Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>A green space along Bedok Reservoir PCN. Entrance along Joo Chiat Place, Joo Chiat Walk, Joo Chiat Ave and Lorong J Telok Kurau (Road)</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6FCD6CEF6885DDAA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.914285987588,
          1.31536500670409,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_145',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30590.9219</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40986.6367</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunrise Place Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Sunrise Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>622FBEF14C816531</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.856600000567,
          1.38694298284096,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_146',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31939.73</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40381.2578</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Seletar Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Seletar Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6C996D80208497AB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.868719994142,
          1.38146800285887,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_147',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/upper-peirce-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>25555.502</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39611.75</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Upper Peirce Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Old Upper Thomson Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EC9FDBFD4393F73A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.811353002102,
          1.37450901296906,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_148',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31013.2949</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37604.82</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tai Hwan Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Tai Hwan Grove and Tai Hwan Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>51DC303FD7651D0F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.860395002318,
          1.35635900364815,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_149',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21980.32</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46469.1133</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Woodlands Town Park East</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Woodlands street 13</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>7ED2BECE2F8269E3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.779225994086,
          1.43652399605571,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_150',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/sungei-buloh-wetland-reserve</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>17110.896500000003</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46876.9766</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sungei Buloh Wetland Reserve</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Visitor Centre: 60 Kranji Way, #01-00 Singapore 739453 Wetland Centre: 301 Neo Tiew Crescent Singapore 718925 Parking lots are available near both entrances.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>085E18CF2019E327</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.735469441118,
          1.44021109438519,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_151',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30990.6621</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41291.72</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tamarind Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Tamarind Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>09819F1DC27928BB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.860192003962,
          1.38970200824166,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_152',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22079.2949</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>48257.7734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Woodlands Waterfront Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Admiralty Road West</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>01E36C27ADF1A692</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.780115001631,
          1.45270000280122,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_153',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28134.8164</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39334.5273</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Ellington Square Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Ang Mo Kio Ave 2/ Ang Mo Kio Street 11 and Ellington Square</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F5CF4377C8B5A14D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.8345300001,
          1.37200201143139,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_154',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33556.49</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36225.770000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thrift Drive Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Green open space along Upper Paya Lebar (Road) and along Thrift Drive (Road), facing Jalan Gotong Royong (Road)</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0CD00CC02BF36ADD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.883247013056,
          1.34388700495724,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_155',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30105.2617</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41336.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Cactus Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located in Cactus Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>BEF6EFD284E92D21</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.852235996241,
          1.39010900260341,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_156',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28138.154300000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40210.168</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Serenade Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Serenade walk road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C2CF14521E3B39D4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.834559997553,
          1.37992099278184,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_157',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27614.88</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39497.5156</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Gelenggang Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Upper Thomson Road behind ESSO station.  Junction of Jalan Kuras/Jalan Gelenggang</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B59FA0E862861781</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.82985799937,
          1.3734760171315,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_158',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33199.418</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39000.64</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Park Villas Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Hougang Ave 2 and Park Villas Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A9434EB7E9677E3D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.880038986362,
          1.36898199651608,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_159',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27292.834000000003</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46782.4141</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Kemuning Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Off Sembawang Road/Jalan Kemuning Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CE4D5D08BBC01CCD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.826964006486,
          1.43935801058573,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_160',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30537.6133</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41132.043</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunrise Terrace Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Sunrise Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>122B1D3AFC079CA8</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.85612099449,
          1.38825798987759,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_161',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30692.1934</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40994.270000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunrise Close Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located at the junction of Sunrise Ave & Sunrise Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>05830DBD3D09DA63</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.85751000337,
          1.38701200648595,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_162',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27908.791</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39776.2734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thomson Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Thomson Walk Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D257368CC200724B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.832498999628,
          1.37599700541463,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_163',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31300.27</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40690.1953</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mimosa Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located at Mimosa Crescent next to Mimosa Park Condo</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>7123569049B86143</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.862974003853,
          1.38426200171396,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_164',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31400.24</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37966.625</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chartwell Drive Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Chartwell Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>48DD42ABD462F168</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.863871997607,
          1.35963099707599,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_165',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26585.377</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>43057.5859</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Springside Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Can be seen from the main road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>848D9F18FD8CAA80</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.820607004324,
          1.40567198380168,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_166',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28195.1328</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40987.8438</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Florissa Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lentor Loop and within Florissa Park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C635184863DD7F95</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.835071996736,
          1.38695401385743,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_167',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/kranji-marshes</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>15377.1445</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>44667.3125</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kranji Marshes</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Kranji Gate: 11 Neo Tiew Lane 2, Singapore 718814</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F776651BCCCA71C7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.719891001209,
          1.4202270044737,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_168',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28407.9023</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>48792.8867</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Janggus Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Off Sembawang Road/Janggus  Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C5BEF6020AC6C9BF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.836984004973,
          1.45754000043802,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_169',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29424.582000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29209.8516</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Ann Siang Hill Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Entrance via Ann Siang Road, Ann Siang Hill and Amoy Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A3861CAF6D92A3C6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.846118991983,
          1.28043799569511,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_170',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28901.511700000003</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29285.4824</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Duxton Plain Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Entrance via New Bridge Road, Neil Road, Kreta Ayer Road and Yan Kit Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>26B7D581B2162D25</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.841419008008,
          1.28112199338038,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_171',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/yishun-neighbourhood-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28195.6855</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46590.4531</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Yishun Neighbourhood Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bound by Yishun Ave 2, Ave 7 and St 22. Yishun St 20 leads straight to the park.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9D531CC4CC25FAEE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.835077000931,
          1.43762199315966,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_172',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38918.97</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33128.28</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tanah Puteh Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Tanah Puteh</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C32F84850A50B2E9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.931431007828,
          1.31587297458671,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_173',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40304.340000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35024.48</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Pari Dedap Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Pari Dedap</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B253351D85E65E0A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.943879998136,
          1.33302098061918,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_174',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40583.168</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34025.1172</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Limau Kasturi Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Jalan Limau Kasturi and Jalan Limau Nipis</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9257829B06B65D33</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.946385010592,
          1.32398300052142,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_175',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32200.668</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42349.2734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Dew Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Tari Payong</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B1087E9F050C5D64</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.871064999127,
          1.39926598983919,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_176',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30607.8359</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41066.14</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunrise Way Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Sunrise Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5AD78C5AAD9DF46D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.8567519929,
          1.38766198061858,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_177',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33398.23</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36545.88</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Kelichap Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Jalan Kelichap (Road) is a central green space surrounded by residential houses in Tai keng gardens Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E320990175BAA58F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.881825008434,
          1.34678199384784,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_178',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37822.29</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33765.1523</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Interim Park at Terang Bulan Avenue</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Between New Upper Changi Road and Terang Bulan Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B6D8116DB09F97B6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.921576998431,
          1.32163298613197,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_179',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41901.76</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35690</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunbird Circle Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Sunbird Circle</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F29F4C63B7397725</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.958233998139,
          1.33903900258699,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_180',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42136.54</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36470.23</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Pelatok Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Pelatok</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5C59D5B40A6ADC9A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.96034399401,
          1.34609499913104,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_181',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40565.69</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34058.4</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Limau Kasturi Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Jalan Limau Kasturi and Jalan Limau Nipis</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E576647428D29775</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.946227975324,
          1.32428400500475,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_182',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>45029.7422</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41523.58</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi East Boardwalk</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Changi Village Road near Civil Service Club</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>75B94ABAD360C035</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.98634401654,
          1.39179402610172,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_183',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27541.654300000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40439.168</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Teacher's Estate Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Teacher's estate , opposite shop houses</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>77203A0769DABF8D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.829199999261,
          1.38199198350515,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_184',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38070.4</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32588.9766</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>East Coast Terrace Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>2 parts of the Park, bounded by East Coast Avenue and Marine Parade Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6D0045A80FDBB63B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.923806011504,
          1.31099600110692,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_185',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26100.54</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32594.55</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Singapore Botanic Gardens</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located in central Singapore and just five minutes away (by bus) from Orchard Road. Address: 1 Cluny Road, Singapore 259569</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B9A3B07267C422E1</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200424165515</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.8162510018,
          1.31104799117615,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_186',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24640.57</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>27586.96</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Labrador Nature Reserve</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Labrador Villa Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>75F7C879647D4FBA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200424165515</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.803132991334,
          1.26576098729676,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_187',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/sembawang-hot-spring-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26812.40275</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>46208.64166</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sembawang Hot Spring Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Gambas Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DB357C60AF775573</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200424165515</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.822646892476,
          1.43416900745054,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_188',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>39451.043</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33254.36</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sennett Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Sennett Ave and Sennett Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0FCE10E5E6E256C6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.936211992606,
          1.31701300192687,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_189',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40025.74</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33505.832</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lucky Gardens Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Lucky Gardens</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1C026F0B6C8B6B1F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.941376027843,
          1.31928700190599,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_190',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/bedok-town-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37743.57</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35169.7227</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bedok Town Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bedok North Avenue 3. Bounded by Bedok North Road, Bedok North Avenue 3 and the Pan Island Expressway</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D24B1FE235BEE9F4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.920870105439,
          1.33433543386641,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_191',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28556.7051</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40924.26</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lentor Grove Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lentor Road and Lentor Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C38D382A967F2E94</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.838321000262,
          1.38637898011574,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_192',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>36846.0938</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32514.7383</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Telok Kurau Lorong N Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Lorong N Telok Kurau</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>586903718DAAF613</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.912805012433,
          1.31032499244793,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_193',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31905.5547</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41081.1953</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Dedap Place Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Dedap Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>BC4B404B91317126</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.868412996645,
          1.38779799024028,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_194',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31809.8965</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37700.2539</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chuan Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Chuan Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FE592D76E41AC86E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.867552999516,
          1.35722198250143,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_195',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/bedok-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38404.5977</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35695.9258</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bedok Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Bedok Reservoir Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3F999E73F889E1C3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.926809990659,
          1.33909400181013,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_196',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31792.440000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36582.01</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Riang Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Jalan Riang (Road) is a central green space surrounded by shophouses and residential houses in Braddel Height Estate.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6E418CC1927067D6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.867396000461,
          1.34710898656633,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_197',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>43865.020000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41329.9961</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi West Boardwalk</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Andover and Cranwell Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A7845D36BCDC1CFC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.975878001995,
          1.39004398808481,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_198',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21140.61</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35341.090000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Cheng Soon Garden Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Kismis Road and Toh Yi Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A67AD95D8F7A42BC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.771683001973,
          1.33588600793432,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_199',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20594.543</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36474.72</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Tekukor Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Selanting, along Jalan Jurong Kechil</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1F38F9A714071F75</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.766776000112,
          1.34613801947644,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_200',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23911.4746</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33949.2266</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Namly Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Namly Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D4098D99D8A898F9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.796581000747,
          1.32329899251823,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_201',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29047.1738</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34119.375</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Novena Rise Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Novena Rise</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3239DA75EB85361C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.842727999825,
          1.3248380105169,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_202',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29100.1523</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32743.9336</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hooper Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Hooper Road and Makepeace Road/Jalan Aruan</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3EB910FEC676D119</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.843203991187,
          1.31239900279065,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_203',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23062.58</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29073.7734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chwee Chian Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Chwee Chian Road, Springwood Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4FD06B73056FE731</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.788954002616,
          1.27920699805128,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_204',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/esplanade-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30256.8164</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30202.709</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Esplanade Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Connaught Drive, opposite Padang and City Hall</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>796C29E57BAEE0E3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.853597006001,
          1.28941700056052,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_205',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29555.4121</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38168.4063</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bishan-Ang Mo Kio Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Bishan Road and Ang Mo Kio Ave 1 </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>ED24812599665100</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.847295002494,
          1.3614559889116,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_206',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34109.36</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31746.834</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Arthur Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Arthur Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FE5148DF1325C119</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.88821399352,
          1.30338100339795,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_207',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/one-north-park-biopolis</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23219.9941</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31845.9941</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>one-north Park: Biopolis</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>North Buona Vista Road, opposite Ministry of Education</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9E56510CDF41EAFD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.790368006179,
          1.30427800508224,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_208',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33903.82</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31060.6016</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Katong Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Meyer Road & Fort Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>872C841CC5199FAA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.88636699295,
          1.29717500161512,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_209',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34775.2266</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31214.7617</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Meyer Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Meyer Road & Crescent Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FE035938BE2DF0F3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.894196994238,
          1.29856899320857,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_210',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29172.2676</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33159.03</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thomson Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Licoln Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F22245ECFDC85E78</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.843851998491,
          1.31615298537997,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_211',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/jacob-ballas-childrens-garden</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26286.09</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33661.32</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jacob Ballas Children's Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>In the Bukit Timah Core of the Singapore Botanic Gardens Address: 481, Bukit Timah Road, Singapore 259769</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>70AD9F934D3DC44D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.81791820006,
          1.32069549289459,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_212',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27092.156300000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37816.1133</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jupiter Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jupiter road playground</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B8558938C839E971</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.825161003409,
          1.35827000334118,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_213',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28821.3672</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33624.33</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Gentle Drive Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the end of Gentle Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>6433E1F4C5E4ACB5</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.840698992687,
          1.32036100553335,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_214',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27983.91</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33709.69</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Goldhill Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Goldhill Place and Goldhil Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E4B5AF291E6150FE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.833174001996,
          1.32113298217552,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_215',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23410.0273</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>28685.8711</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pasir Panjang Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Off Pasir Panjang Road, beside Pasir Panjang Food Centre</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0D115E6FDFCD277D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.792076002745,
          1.27569899889613,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_216',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34237.875</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32882.332</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lorong 40 Geylang Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Lor 40 Geylang</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8E53310885968D73</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.889368987508,
          1.31365001641553,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_217',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29487.7988</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>28959.9531</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Telok Ayer Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Maxwell Road, Cecil Street and Telok Ayer Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>611FE49DC6D16BDF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.84668700735,
          1.27817799839718,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_218',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33191.0469</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34594.8945</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Aljunied Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Aljunied Road within Happy Garden Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AEDED76F676EB90A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.879963007648,
          1.3291380155208,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_219',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23199.58</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29053.7578</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jambol Place Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jambol Place, Springwood Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3420DA28EF5B5655</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.790185001957,
          1.27902600515874,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_220',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/pearls-hill-city-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28692.5039</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29424.6953</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pearl's Hill City Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Chin Swee Road and Pearl's Hill Road </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4263D837CC5538E9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.839540995736,
          1.28238099129417,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_221',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33021.1</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34947.293</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Oasis@Mulberry Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Upper Aljunied Road & Mulberry Avenue, Sennett Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AC7AA1819698A319</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.878435998931,
          1.33232501027716,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_222',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35503.3828</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32093.8516</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Haig Walk</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Adjacent to Seraya Lane and Mugliston Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>50CB7B0AD7A8537E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.900740008896,
          1.30651900009923,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_223',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28737.4453</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37347.9375</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Pintau Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>along Jalan Pintau</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>EE93BB5C3B7D382C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.839945000658,
          1.35403599295373,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_224',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35610.0859</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32966.18</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Joo Chiat Terrace Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Joo Chiat Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>257CCFABE97D31F2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.901698999963,
          1.3144079987312,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_225',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24482.6328</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35320.9023</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Orchid Village Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Liden Dr</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>179F0FF2BDAE0A76</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.801713002995,
          1.33570401108734,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_226',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21316.0781</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33927.7148</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Clementi Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Within Clementi Crescent Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>ADC0488E38A1F9B4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.773259992457,
          1.3231039894972,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_227',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29046.271500000003</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37274.2969</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pemimpin Place Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Pemimpin Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F6C50CD9F00C7DFC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.842720000709,
          1.35337000437201,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_228',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27856.373</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37304.92</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Soo Chow Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>along Soo chow walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>462A8A66480A45CC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.832027997859,
          1.35364696671371,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_229',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20506.3848</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35853.0664</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Highgate Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Highgate walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A888D0B2ADED9910</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.765983998843,
          1.34051598711497,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_230',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27456.96</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38228.4453</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Island Gardens Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Island Garden Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D3DEEB0BBA176DD7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.828438998161,
          1.36199899589951,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_231',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/macritchie-reservoir-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28030.207000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35964.3125</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>MacRitchie Reservoir Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Lornie Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D89B4580EEF9CB19</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.833590006976,
          1.34152298935114,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_232',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31490.1465</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30330.4355</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Marina Promenade</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Republic Boulevard and Republic Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>00E1DB2943D1749C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.864678999149,
          1.29057200094772,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_233',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/ang-mo-kio-town-garden-east</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29888.2676</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39176.3</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Ang Mo Kio Town Garden East</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Ang Mo Kio Ave 3 and 8, behind Ang Mo Kio MRT Station</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>92EF3F1DFACC5D11</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.850285996786,
          1.37057100018187,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_234',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22375.4258</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32753.2754</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Holland Grove View Fitness Corner</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Holland Grove View</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>719020429F7BECFD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.782779005345,
          1.31248299217226,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_235',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23321.6367</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33853.8125</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sixth Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Sixth Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DCD74FFF6BA84174</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.791281008483,
          1.32243601665582,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_236',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/war-memorial-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30392.7</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30579.5488</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>War Memorial Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Nicoll Highway, Stamford Road, Beach Road and Bras Basah Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CA1E86CCF0B4B07B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.854818004778,
          1.29282499699848,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_237',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31618.752</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34005.28</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Beng Wan Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Beng Wan Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F571533F1A656670</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.86583500031,
          1.32380597927059,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_238',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22411.8262</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33168.1523</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Henry Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along holland grove road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>ED401EE20873C3AB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.783106005851,
          1.31623499758018,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_239',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29290.582000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30608.8438</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>River Valley Road / Clemenceau Avenue Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by River Valley Road and Clemenceau Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5EA9119C5C096F48</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.84491500795,
          1.29308999556797,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_240',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/ang-mo-kio-town-garden-west</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29064.8477</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39558.2227</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Ang Mo Kio Town Garden West</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Opposite Ang Mo Kio Town Library, along Ang Mo Kio Avenue 6</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D5F6AA05F4EBB8F2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.842887001241,
          1.37402501376588,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_241',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22165.8223</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35950.332</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mayfair Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Jalan Gaharu</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>24E912B43EB95878</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.780895006173,
          1.34139598931109,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_242',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34574.8633</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32981.9648</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Guillemard Road Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Besides City Plaza towards Geylang Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>069CCF717AF5088A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.892397015046,
          1.3145509896298,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_243',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28079.7285</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37626.6953</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thomson Park Estate Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A59816CD9F1E86FD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.834034991637,
          1.35655698822033,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_244',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38073.918</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33718.168</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bangsawan Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Bangsawan</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E8D1D421BBAB98DB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.923837990533,
          1.32120799539342,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_245',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41833.07</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33929.2</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Eastwood Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Between Eastwood Way and Bedok PCN</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F4FD697FF3D7BEB4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.957615982182,
          1.32311502040416,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_246',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>25292.1484</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34878.48</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Watten Heights Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Watten Estate Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C753D8230DE8A523</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.80898700707,
          1.33170298432389,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_247',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22534.24</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32894.81</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Grove Lane Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Grove Lane, Grove Crescent and Grove Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4C9A125C82C49F0D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.784206003929,
          1.31376300928782,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_248',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35304.38</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32644.841800000002</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Carpmael Road Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Carpmael Road▀ and Ceylon Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>53A5108956DD999A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.898952005306,
          1.31150200552321,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_249',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28477.707000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31548.3965</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Orchard Fountain Corner</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Grange Road and Orchard Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>BFF845B255FD0BDE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.837610994321,
          1.30158700260588,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_250',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/holland-village-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23796.0469</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32669.9883</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Holland Village Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Holland Road and Holland Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>10230E7C94A5172E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.795543995849,
          1.31173000006272,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_251',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30243.0176</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29970.834000000003</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Waterboat House Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Fullerton Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AFF1460341FB3F9A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.853473001627,
          1.28732000560153,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_252',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30396.1348</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32304.1855</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Rowell Road Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Rowell Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3A9F65E90F23A4FD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.854849,
          1.30842200284088,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_253',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/youth-olympic-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31040.5313</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30100.2129</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Youth Olympic Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Raffles Avenue. Junction of Raffles Avenue and Bayfront Bridge</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FFEB8DC08F15C9DE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.860638997467,
          1.28848999572479,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_254',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24902.6387</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35299.0039</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Greenwood Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Greenwood crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>663619BA22257536</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.805487000523,
          1.33550601569391,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_255',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24591.6113</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>28317.1973</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Berlayer Creek</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Behind Labrador Park MRT Station, 701 Telok Blangah Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8467604070BF4B31</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.802693003573,
          1.27236499187616,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_256',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/kim-pong-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27628.11</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29586.5781</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kim Pong Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Kim Pong Road and Kim Tian Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FBF2CCADBB5BAF97</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.829977001375,
          1.28384500791232,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_257',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29056.6348</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33840.17</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Novena Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Jalan Novena</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>58741C149776580F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.842813002418,
          1.32231297895579,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_258',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>20382.2852</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35389.543</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Golden Rise Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lorong Kismis and Toh Tuck Rise</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>179D861B34F7D0F9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.764869007062,
          1.33632401782669,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_259',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30388.010000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32452.0234</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lembu Road Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Lembu Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DB0C82B620ED0B07</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.854776006135,
          1.30975899721142,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_260',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>21291.65</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36223.14</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hoover Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Lorong Pisang Batu</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E472D9BDFF470AB7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.773039987989,
          1.34386298455144,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_261',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35123.0078</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31392.2441</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tanjong Katong Road South Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Tg Katong Road South</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>346A2DD6DADE8CD8</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.89732200163,
          1.30017400290536,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_262',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22093.53</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32933.7422</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Kebaya Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>junction of Jln Kebaya and Holland Grove Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B3CDBBD33E9E5638</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.780245998799,
          1.31411501669973,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_263',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>25461.5273</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34507.06</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Shelford Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Watten Rise and Shelford Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>1C58B562BCE93BB3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.810509002674,
          1.32834400830712,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_264',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27303.260000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33914.7</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Malcolm Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Malcolm Rd and Whiteley Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A8E6BEBC85BB54D1</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.827057999456,
          1.32298701214919,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_265',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29376.9434</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30516.8457</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>The Foothills Fort Canning Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along River Valley Road, opposite Liang Court</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>99BE2CEDB1A1BFA8</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.84569099786,
          1.29225799342141,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_266',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33385.0156</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35110.1758</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>MacPherson Linear Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>A linear park between Blk 20, Joo Seng Road and MacPherson Road in MacPherson Garden Estate. Also a transitional zone for commuters in industrial areas and for transport purposes.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>2399BFAA54288753</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.881706014162,
          1.33379800164764,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_267',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27830.7734</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30351.2012</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Ganges Avenue Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Ganges Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>0FF74BF951ED6729</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.83179800761,
          1.29075999254776,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_268',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32707.2637</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34897.418</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chempaka Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Chempaka Avenue, Sennett Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>740DB9D7A2814784</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.875615995335,
          1.33187400889662,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_269',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34047.55</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33780.4141</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Geylang East Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Besides Geylang East Swimming Complex along Aljunied Ave 1</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>79C5841226829C46</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.887658999231,
          1.32177198800448,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_270',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/fort-canning-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29479.11</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30463.7715</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Fort Canning Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Fort Canning Park is bounded by Hill Street, Canning Rise, Clemenceau Avenue and River Valley Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D3CA7E673B90B48F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.846609005448,
          1.29177800435869,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_271',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/changi-beach-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>46735.9531</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40595.6328</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi Beach Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Nicoll Drive and Changi Coast Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8C0F232B46BD112E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          104.001675008726,
          1.38340098971507,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_272',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41004.15</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34662.3828</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Chempaka Kuning Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Chempaka Kuning</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>811AD50F8608532A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.950168022101,
          1.32974601652478,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_273',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30831.08</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40876.0664</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Saraca Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Saraca Rd & Saraca Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>59814E4B09F6FE7C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.858757994618,
          1.38594300243715,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_274',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31131.7813</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40562.2578</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mimosa Walk Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Mimosa Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B913153879777CA2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.861459991791,
          1.38310499948583,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_275',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42488.43</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36614.9922</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mera Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Seagull Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FD3CD16FF0D16269</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.963506003857,
          1.34740400583367,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_276',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41678.19</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35484.87</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Angin Laut Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Jalan Angin Laut</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>73EB6C1271B1DC36</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.956225002141,
          1.33718398610323,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_277',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30440.9043</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41357.950000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunrise Drive Playground 2</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Sunrise Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9BE4069974834C80</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.855252008289,
          1.39030101988892,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_278',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28473.3516</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41135.793</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lentor Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lentor Road and Lentor Loop</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>166C60CDAE11A5FE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.837572008652,
          1.38829201020433,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_279',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/pasir-ris-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41227.020000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40073.72</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pasir Ris Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Pasir Ris Park stretches from Pasir Ris Road to Jalan Loyang Besar and can be accessed through Elias Road and Pasir Ris Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>41ED0CEE6A43FA08</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.952173012299,
          1.37868402178859,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_280',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42725.4922</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38343.8477</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Loyang View Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Loyang view</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>16E8EE8751EDE02C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.965636997663,
          1.36303900201943,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_281',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37578.28</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32311.084</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Buloh Perindu Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Jln Buloh Perindu and Keris Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FF174AC2E0F7B7EE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.919383992137,
          1.30848299814914,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_282',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40637.7852</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34583.082</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tanah Merah Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Tanah Merah Kechil Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DA05434EA9991889</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.94687600443,
          1.32902900416768,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_283',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32659.3184</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40162.7734</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Luxus Hills Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Ang Mo Kio Ave 5 and Yio Chu Kang Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>2CE34B8946F4115F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.875185997533,
          1.37949200292749,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_284',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28612.904300000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41020.5742</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Banyan Villas Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lentor Road and Lentor Plains</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DA9218CFEB990E1B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.838825995108,
          1.38725001009072,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_285',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37023.770000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34137.7656</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Taman Kembangan Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Taman Selamat and Taman Kembangan</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CC2570746FC5DF0A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.914401992508,
          1.32500301174325,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_286',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40879.5273</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34107.5078</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Jalan Limau Manis Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Jalan Limau Nipis and Jalan Limau Manis</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E2E2592EB83AD7F2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.949047986876,
          1.32472798680362,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_287',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33432.03</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38110.183600000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Richards Avenue Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Richards Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>DDA293041C8C4401</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.882129005066,
          1.36092898756718,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_288',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32510.3789</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>42323.74</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lorong Tanggam Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Lorong Tanggam</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B46F9A64955BD430</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.873847999194,
          1.39903502830064,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_289',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>25144.2383</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34327.0469</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bougainvillea Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Dunearn Road and Watten Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>CA4851EDE75AEDFE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.807658003097,
          1.32671600556136,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_290',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22379.3535</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34343.12</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Holland Green Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>End of Holland Green road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B12A777F24E41F01</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.782814007566,
          1.32686097997825,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_291',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31208.2285</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31827.2832</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>North Bridge Garden</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along North bridge Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>61388BE2BB2E2435</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.862146001865,
          1.30410899340616,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_292',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/istana-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29170.8281</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31291.5332</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Istana Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Orchard Road, Penang Road, Penang Lane and Buyong Road.</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F83007523ABDA15B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.843838993634,
          1.29926400300755,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_293',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/toa-payoh-town-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29630.33</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34754.2969</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Toa Payoh Town Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Toa Payoh Lor 2 and Toa Payoh Lor 6</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C45A8A635B5C3F8B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.847968006121,
          1.33057999366942,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_294',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28182.341800000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30581.1973</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kim Seng Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Entrance via River Valley Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>00FD96AE03E7E4EA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.834956997814,
          1.29283999640308,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_295',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22202.1523</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33109.996100000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mount Sinai Plain Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>mount sinai plain, mount sinai crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C08AFFA29839130C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.78122199104,
          1.3157090147631,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_296',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28116.343800000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37376.1328</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Thomson Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>along Jalan Sembilang Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>00CFA46FDF491EDD</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.834364003112,
          1.35429099006295,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_297',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22203.0371</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32805.0273</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Holland Grove View Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Holland Grove View</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A98C186F51D9414E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.781229998572,
          1.31295098590754,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_298',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/dhoby-ghaut-green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29398.1973</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31189.6953</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Dhoby Ghaut Green</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Adjacent to Dhoby Ghaut MRT Station, opposite the Park Mall Shopping Centre</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>9D21F9CFC0C0E487</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.845882003067,
          1.29834300751732,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_299',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29574.033199999998</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31870.2832</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mount Emily Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Mt Emily Rd and Upper Wilkie Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>043225DC16008504</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.847462000956,
          1.30449799629073,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_300',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/kallang-riverside-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31746.0938</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32012.8359</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kallang Riverside Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Kallang Road, Stadium Road and Crawford Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8BD1CD702AE3F9F7</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.866978993095,
          1.30578700601773,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_301',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30074.2988</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29915.9863</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Empress Place</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Entrance via Empress Place</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>584CB62EF1ED852B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.851956991278,
          1.2868239938791,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_302',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/mount-faber-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26319.87</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>28639.62</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mount Faber Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Kampong Bahru Road and Telok Blangah Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D96EF1306309FB7E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.818222000624,
          1.27528100835684,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_303',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37714.1875</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>31723.4941</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>East Coast Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along East Coast Parkway and East Coast Park Service Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E4658AB7BFDC0DB5</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.920605001614,
          1.30316900590952,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_304',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41071.5156</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33855.96</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Limau Garden Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Limau Garden and Salam Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B8289869042E85E1</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.950772994504,
          1.3224530006075,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_305',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>42129.76</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36280.9258</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Meragi Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Meragi Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FBEBA0B887452AE6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.960282983203,
          1.34438300662538,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_306',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34289.2656</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38814.9</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Realty Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Lor 1 Realty Park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>828FD782D8A57226</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.889831987144,
          1.367302019013,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_307',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41249.87</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39300.3555</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Pasir Ris Town Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Pasir Ris Central, Opposite Pasir Ris MRT Station</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>682A4F3AC560CD9B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.952377989422,
          1.37168999463144,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_308',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41328.457</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34404.8672</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bedok Ria Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Between Bedok Ria Crescent and Bedok PCN</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>804F060931653541</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.953081982587,
          1.3274170012123,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_309',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>23891.3281</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33808.4648</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Coronation Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Jalan Hagi Alias and Coronation Road West</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>408D16EA6460027C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.796399992559,
          1.32202599013522,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_310',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27650.0449</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38119.5273</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>The Inglewood Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along the Inglewood</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AF2C2058DC5E9B57</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.830173997508,
          1.36101398325524,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_311',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24901.7344</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34058.793</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Duchess Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Duchess Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A1D39EA678EDFFFA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.805479000604,
          1.32428998877263,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_312',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29257.9434</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37019.090000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Clover Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Clover Crescent and Clover Ave</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B1F341352F20F9F9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.844621998074,
          1.35106199585901,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_313',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29138.420000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36755.0352</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Binchang Rise Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the end of Binchang Rise</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>ACAB3D6A3F7E02FE</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.843547994579,
          1.34867398297342,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_314',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28206.600000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36918.9063</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Taman Permata Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Upper Thomson Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AEFDE6CC600E00FB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.835175010264,
          1.35015599579781,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_315',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22629.332000000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>35465.4531</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Hua Guan Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Hua Guan Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>74CC369AA90F4995</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.785060002552,
          1.33701100440066,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_316',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/central-catchment-nature-reserve</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24901.2441</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39920.92</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Central Catchment Nature Reserve</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>601 Island Club Road (Located close to Singapore Island Country Club, via Venus Drive )</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>3621026BD1D211A3</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.805473991222,
          1.37730497383028,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_317',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32421.7</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34659.3438</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Siang Kuang Avenue Interim Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Siang Kuang Avenue, Sennett Estate</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C0F24BDD65199A53</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.873050010599,
          1.32972099363571,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_318',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30763.7246</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32642.77</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Somme Road Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Petain Rd and Kitchener Link</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>84145C82116A130E</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.858152000653,
          1.31148401066078,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_319',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29729.7344</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>30899.3262</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Stamford Green</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Canning Rise and Stamford Road; Next to National Museum of Singapore</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>C73F1EE0BEE9D1B4</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.848860995111,
          1.29571699496852,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_320',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>24965.9414</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33486.0156</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>King's Drive  Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>junction of king's road and king's drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D2871F4E89CF3AEF</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.806055991416,
          1.31910999951731,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_321',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>26258.0254</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34187.270000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>University Road Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the end of University Walk</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>382980E5C992C4D6</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.817665995097,
          1.32545199692878,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_322',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22964.9512</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33837.4531</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Greenleaf View Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the end of Greenleaf View</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E3D8EBD783D3B367</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.788076003791,
          1.32228801135119,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_323',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/chestnut-nature-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>22159.4824</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39220.65</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Chestnut Nature Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Chestnut Avenue and is abutting Central Catchment Nature Reserve, stretches along BKE, from Gali Batu Flyover to Dairy Farm Flyover. PUB Waterworks is situated at the end of Chestnut Avenue, demarking the access road across the middle of Chestnut Nature Park.  </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AFBB1AAB4CEF1004</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.78083740117,
          1.37097156701338,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_324',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>29594.3027</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>29323.4141</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Telok Ayer Green</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Amoy Street, Boon Tat Street and Telok Ayer Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>07CFE6567539200A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.847644002876,
          1.28146500698614,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_325',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28695.595699999998</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39413.700000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mayflower Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>At the junction of Mayflower Crescent and Mayflower Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B01AE2FF8B58F5CA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.839569003072,
          1.3727180131601,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_326',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>30676.6113</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41137.35</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sunrise Drive Playground 1</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Sunrise Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>66086C14E8DACE2D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.857369999308,
          1.38830597203414,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_327',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>39994.0938</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39355.5859</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Elias Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Elias Terrace and Elias Green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8B06ED4574E90FC9</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.941093992579,
          1.37219001582779,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_328',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40813.1055</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33764.6133</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Kew Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Kew Avenue and Kew Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>E3FD62E109D01A9C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.948451009513,
          1.32162700448726,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_329',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>37385.9531</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>32814.4141</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Greenfield Drive Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Greenfield Drive</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>8B896BD1155428FB</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.917655996762,
          1.31303499211434,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_330',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/sun-plaza-park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40371.2031</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37926.31</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sun Plaza Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Tampines Avenue 7, Tampines Avenue 9</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5BBA8A8EB630BA01</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.944481988262,
          1.359264023047,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_331',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>45135.69</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41460.7773</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi Point Ferry Terminal</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lor Bekukong</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AA9DDE6381971B22</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.987296000544,
          1.39122600073616,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_332',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>27896.8828</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>39226.05</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Shangri-La Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Ang Mo Kio Ave 2 and Jalan Lanjut</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>FF16ED3C3767BD2C</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.832391997745,
          1.37102098159919,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_333',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38142.700000000004</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33595.7656</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Opera Estate Football Field</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Swan Lake Avenue</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>AD2BA4AF1306E38A</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.924455991866,
          1.32010101002963,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_334',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28314.656300000002</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41109.4766</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Lentor Vale Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Lentor Vale and Lentor Way</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>00D14D4E70684188</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.836146008453,
          1.3880540162578,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_335',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>41029.44</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34010.6523</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Limau Villas Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>End of Limau Terrace from Jalan Langgar Bedok</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>D2D5F65DB241AD6D</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.950394989304,
          1.32385199809351,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_336',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33592.3125</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36787.4922</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Paya Lebar Crescent Open Space</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Central open space at round about along Paya lebar cresent (road)</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>533A17097CE72D63</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.883569003858,
          1.34896701230879,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_337',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>32962.0078</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40821.14</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mugliston Park Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Junction of Gerald Drive & Mugliston Park</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>03F3E458EBEEFCEC</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.87790599596,
          1.38544598318684,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_338',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40502.98</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40079.1</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Sungei Api Api Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Entrance via Pasir Ris Drive 3, Riverina View and Elias Road</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4894713B31B66C67</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.9456669951,
          1.37873299431662,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_339',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>28463.8926</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40294.207</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Yio Chu Kang Gardens Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Turn right after Yio Chu Kang estate entrance</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4BD7AB1ED2B7588F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.837486998981,
          1.3806810080854,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_340',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td>www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/tampines-eco-green</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40839.48</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38440.6133</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tampines Eco Green</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Tampines Avenue 9 and Tampines Avenue 12 </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>4B8A3DF67A51E9DA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.948689980155,
          1.36391499068087,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_341',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31019.38</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40666.75</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Mimosa Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Located along Mimosa Rd</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>78C61210DF1CC17B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.860449992285,
          1.38405000123823,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_342',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>31608.5332</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>40836.9336</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Neram Crescent Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Neram Crescent</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>F61B266734F722E2</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.865743999885,
          1.38558901364397,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_343',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>45223.9453</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41396.76</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi Point Waterfront Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lor Bekukong</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>554EFA4C1308DF81</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.98808900299,
          1.39064700115984,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_344',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>38528.9922</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>33516.0547</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Aida Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Between Bedok South Road and Aida Street</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>B1967F93364DFF89</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.927926997004,
          1.31938000337146,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_345',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33751.35</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>36467.270000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Tai Keng Gardens Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>A garden with hill top flanked by Jalan Lokam (Road), Tai keng Lane and Tai keng Garden (Road)</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5849B290D7DCE062</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.884997993848,
          1.34607100763102,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_346',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>34348.5273</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>38888.0625</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Realty Park</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Along Hougang Ave 4 </td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>A7BB1BF496807A8B</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.890364510014,
          1.36796366154687,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_347',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>45346.4766</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41344.2461</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Changi Point Promenade</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Near Lor Bekukong</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>5FEA22BCC48153DA</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.989190007291,
          1.39017201315715,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_348',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>33857.832</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>37476.270000000004</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Aroozoo Avenue Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Bounded by Aroozoo Ave and Jalan Mastuli</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>ACBC9E152D19BD06</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.885954996071,
          1.35519602028456,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_349',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>35836.5352</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>41506.1133</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>St. Anne's Wood Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Inside the private housing estate at St Anne's Wood</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>43A081292A7AE024</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.903735985364,
          1.3916400007576,
          0
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'Name': 'kml_350',
        'Description': "<center><table><tr><th colspan='1' align='center'><em>Attributes</em></th></tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSBLOCKHOUSENUMBER</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSBUILDINGNAME</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSTYPE</th> <td></td> </tr><tr bgcolor=\"\"> <th>HYPERLINK</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>LANDXADDRESSPOINT</th> <td>40706.1328</td> </tr><tr bgcolor=\"\"> <th>LANDYADDRESSPOINT</th> <td>34196.625</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>NAME</th> <td>Bedok Terrace Playground</td> </tr><tr bgcolor=\"\"> <th>PHOTOURL</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSPOSTALCODE</th> <td></td> </tr><tr bgcolor=\"\"> <th>DESCRIPTION</th> <td>Between Bedok Rise and Bedok Terrace</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSSTREETNAME</th> <td></td> </tr><tr bgcolor=\"\"> <th>ADDRESSFLOORNUMBER</th> <td></td> </tr><tr bgcolor=\"#E3E3F3\"> <th>INC_CRC</th> <td>7FFC95EC84EF2F0F</td> </tr><tr bgcolor=\"\"> <th>FMEL_UPD_D</th> <td>20200218182414</td> </tr><tr bgcolor=\"#E3E3F3\"> <th>ADDRESSUNITNUMBER</th> <td></td> </tr></table></center>"
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          103.947489983993,
          1.32553400234434,
          0
        ]
      }
    }
  ]
}

console.log((parks.features).length)

for (var i = 0; i < (parks.features).length; i++) {
  delete parks.features[i].properties['Name']

  temp = parks.features[i].properties['Description']
  parks.features[i].properties['description'] = temp

  delete parks.features[i].properties['Description']
  parks.features[i].properties['icon'] = 'park'
}

console.log(parks.features[1].properties)

map.on('load', function () {
  map.addSource('places', {
    'type': 'geojson',
    'data': parks
  })

  // Add a layer showing the places.
  map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'icon-image': '{icon}-15',
      'icon-allow-overlap': true
    }
  })

  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    maxWidth: '400px'
  })

  map.on('mouseenter', 'places', function (e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer'

    var coordinates = e.features[0].geometry.coordinates.slice()
    var description = e.features[0].properties.description

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map)
  })

  map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = ''
    popup.remove()
  })
})

const express = require('express');

const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

const generateComputationOptionsData = () => {
  return {
    items: [
      {
        id: "ship",
        items: [
          {
            name: 'HMM Helsinki',
            photoUrL: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/HMM_Helsinki_%282%29_-_Le_Havre.jpg',
            id: 'hmm_helsinki'
          },
          {
            name: 'MSC Leni',
            photoUrL: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/MSC_LENI_%2849091698082%29_%28cropped%29.jpg',
            id: 'msc-leni'
          },
          {
            name: 'CMA CGM Palais Royal',
            photoUrL: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/CMA_CGM_PALAIS_ROYAL_%2850863941591%29_%28cropped%29.jpg',
            id: 'cma-cgm-palais-royal'
          },
          {
            name: 'Monaco Maersk',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
            id: 'monaco-maersk'
          },
          {
            name: 'Ever Glory',
            photoUrL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Aankomst_Ever_Glory%2C_groen_gestuwd_20.000_TEU_containerschip_%2848060356978%29_%28cropped%29.jpg/1024px-Aankomst_Ever_Glory%2C_groen_gestuwd_20.000_TEU_containerschip_%2848060356978%29_%28cropped%29.jpg',
            id: 'ever-glory'
          },
        ],
        name: "Ships"
      },
      {
        id: "maritime-line",
        items: [
          {
            name: 'Eurosal XL',
            photoUrL: 'https://www.cma-cgm.fr/produits-services/lignes-maritimes/serviceflyermap?serviceCode=WCC',
            id: 'eurosal-xl'
          },
          {
            name: 'Asea Tanzania',
            photoUrL: 'https://www.cma-cgm.fr/produits-services/lignes-maritimes/serviceflyermap?serviceCode=ASEA',
            id: 'asea-tanzania'
          },
          {
            name: 'North Europe French West Indies',
            photoUrL: 'https://www.cma-cgm.fr/produits-services/lignes-maritimes/serviceflyermap?serviceCode=NEFWI',
            id: 'north-europe-french-west-indies'
          },
          {
            name: 'Tanger Med - West Africa',
            photoUrL: 'https://www.cma-cgm.fr/produits-services/lignes-maritimes/serviceflyermap?serviceCode=EURAF4',
            id: 'tanger-med-west-africa'
          },
          {
            name: 'North Europe - West Africa',
            photoUrL: 'https://www.cma-cgm.fr/produits-services/lignes-maritimes/serviceflyermap?serviceCode=EURAF1',
            id: 'north-europe-west-africa'
          }
        ],
        title: "Maritime Lines"
      },
      {
        id: "wasps",
        items: [
          {
            name: 'Norsepower rotor sail',
            photoUrL: 'https://shipinsightv2.wpenginepowered.com/wp-content/uploads/2020/11/norsepower_tilt-768x512.jpg',
            id: 'norsepower-rotor-sail'
          }
        ],
        name: "Wind propulsion system"
      }
    ],
  }
}

const computationOptionsData = generateComputationOptionsData();

app.get('/api/computation-options', (req, res) => {
  res.json(computationOptionsData);
  console.log('Sent computation options list');
});

console.log('App is listening on port ' + port);
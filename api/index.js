const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors()) // Use this after the variable declaration
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
          },
          {
            name: 'Michelin Wisamo',
            photoUrL: 'https://www.usinenouvelle.com/mediatheque/9/5/3/000976359_896x598_c.png',
            id: 'michelin-wisamo'
          },
          {
            name: 'Ayro Oceanwings',
            photoUrL: 'https://assets.meretmarine.com/s3fs-public/styles/large_xl/public/images/2020-12/c4_14.jpg?h=4997dc06&itok=5RN55_mF',
            id: 'ayro-oceanwings'
          },
          {
            name: 'Beyond the sea Seakite',
            photoUrL: 'https://www.kiteboarder-mag.com/media/2022/3-mars/beyond_the-sea__fit_687x242.jpg',
            id: 'beyond-the-sea-seakite'
          },
          {
            name: 'Aeoldrive Solidsail',
            photoUrL: 'https://chantiers-atlantique.com/wp-content/uploads/2020/01/ca2fb8133070edb4aae459d2bc25b2b7cfe573b4.png',
            id: 'aeoldrive-solidsail'
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
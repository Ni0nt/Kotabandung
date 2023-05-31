const { promisify } = require('util');

function getProvinces(countryId, callback) {
  setTimeout(() => {

    if (countryId === 'id') {

      callback(null, [

        { id: 'id-jk', name: 'Jakarta' },

        { id: 'id-bt', name: 'Banten' },

        { id: 'id-jr', name: 'Jawa Barat' },

      ]);

      return;

    }

    callback(new Error('Country not found'), null);

  }, 1000);

}

const getPromiseProvinces = promisify(getProvinces);

getPromiseProvinces('id')

  .then((user) => console.log(user))

  .catch((err)=>console.log(err.message))

module.exports = { getProvinces: getPromiseProvinces };

//SubKuis Coding : Asynchronous Proses secara Berantai
const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
  try {
    const card1 = await buyTollRoadCard(25);
    const card2 = await topUpBalance(card1, 10);
    const result = await useTollRoad(card2);
  
  } catch (error) {
    console.log(error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess()
.then((result) => console.log(result))
.catch((error) => console.log(error.message));
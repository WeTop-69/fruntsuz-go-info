import React, { useState } from "react";
import ReactDOM from 'react-dom';
import car from '../image/pngwing 64.png'
import carDesi from '../image/pngwing 59.png'
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";
let infocar3 = []
    let i =[]

function Car4() {
  const dbRef3 =  getDatabase();
  const btnInfo25 = ref(dbRef3, 'driver/P769YT/driverName');
  const [infocar, setInfo] = useState(infocar3)
  onValue(btnInfo25, (snapshot) => {
      let infocar2 = snapshot.val()
      let infocar4 = Object.values(infocar2)
      if (i == infocar2){
      } else {
          i = infocar2
          setTimeout(() => {
              setInfo(infocar3 = infocar2);
          }, 2000);
      }
  });
  const [namecar, cinstnam] = useState('');
  const dbRef = getDatabase();
  const btnInfo2 = ref(dbRef, 'cars/P769YT/carNumber');
  onValue(btnInfo2, (snapshot) => {
    const namecar = snapshot.val();
    document.getElementById('namber4').innerHTML = namecar;
  })
  let chel = false
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'cars/P769YT/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar4').innerHTML = her2;
    } else{
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber';
      document.getElementById('infoCar4').innerHTML = her2;
    }
  })
  function btnInfoCarTwo() {
  const dbRefTwo = ref(getDatabase());
  get(child(dbRefTwo, `cars/P769YT/free`)).then((snapshot) => {
    const btnInfoOne = snapshot.val();
    if (chel == true){
      const db = getDatabase();
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar4').innerHTML = her2;
      chel = false
    } else {
      const db = getDatabase();
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber';
      document.getElementById('infoCar4').innerHTML = her2;
      chel = true
      }
    })
  }
  var blocBlac = false;
  function infoBlockCarFree() {
    if (blocBlac == false){
      var bb = document.querySelector('#blockBlack');
      bb.className = 'block-black block';
      var ibc = document.querySelector('#infoBlocCar');
      ibc.className = 'info-bloc-car block';
      blocBlac = true
    } else{
      var bb = document.querySelector('#blockBlack');
      bb.className = 'block-black';
      var ibc = document.querySelector('#infoBlocCar');
      ibc.className = 'info-bloc-car';
      blocBlac = false
    }
  }
     return (
      <div className="rast-blok">
        <div id="blockCarColor4" className="BlockCar">
            <div className="block-car-btn">
              <img id="carDesOne4" className="image-car none" src={car} alt="" />
              <img id="carDesTwo4" className="image-car " src={carDesi} alt="" />
              <span id='namber4' className='item-block namber'>K999TA</span>
            </div>
        </div>
        <div onClick={btnInfoCarTwo} className="filter-status-car">
          <div id="infoCar4" className="item-info"></div>
        </div>
    </div>
    );
  }

export default Car4;
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log("緯度: " + data.coord.lat);
console.log("経度: " + data.coord.lon);
console.log("天気: " + data.weather[0].description);
console.log("最低気温: " + data.main.temp_min + " °C");
console.log("最高気温: " + data.main.temp_max + " °C");
console.log("湿度: " + data.main.humidity + " %");
console.log("風速: " + data.wind.speed + " m/s");
console.log("風向: " + data.wind.deg);
console.log("都市名: " + data.name);

//////////課題4-2

// let div = document.querySelector('div#result');
// let div0 = document.createElement('li');
// div0.textContent = '緯度: ' + data.coord.lat;
// div.insertAdjacentElement('beforeend', div0);
// div0.style.textAlign = "center";

// let div1 = document.createElement('div');
// div1.textContent = "経度: " + data.coord.lon;
// div.insertAdjacentElement('beforeend', div1);
// div1.style.textAlign = "center";

// let div2 = document.createElement('div');
// div2.textContent = "天気: " + data.weather[0].description;
// div.insertAdjacentElement('beforeend', div2);
// div2.style.textAlign = "center";

// let div3 = document.createElement('div');
// div3.textContent = "最低気温: " + data.main.temp_min + " °C";
// div.insertAdjacentElement('beforeend', div3);
// div3.style.textAlign = "center";

// let div4 = document.createElement('div');
// div4.textContent = "最高気温: " + data.main.temp_max + " °C"
// div.insertAdjacentElement('beforeend', div4);
// div4.style.textAlign = "center";

// let div5 = document.createElement('div');
// div5.textContent = "湿度: " + data.main.humidity + " %"
// div.insertAdjacentElement('beforeend', div5);
// div5.style.textAlign = "center";

// let div6 = document.createElement('div');
// div6.textContent = "風速: " + data.wind.speed + " m/s"
// div.insertAdjacentElement('beforeend', div6);
// div6.style.textAlign = "center";

// let div7 = document.createElement('div');
// div7.textContent = "風向: " + data.wind.deg;
// div.insertAdjacentElement('beforeend', div7);
// div7.style.textAlign = "center";

// let div8 = document.createElement('div');
// div8.textContent = "都市名: " + data.name;
// div.insertAdjacentElement('beforeend', div8);
// div8.style.textAlign = "center";

let btn = document.querySelector('button#search');
btn.addEventListener('click', search);

function search() {
  let s= document.querySelector('select#toshi');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

    let kensaku = o.value;
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+kensaku+".json";
    console.log(url);

  axios.get(url)
       .then(showResult)   // 通信成功
       .catch(showError)   // 通信失敗
       .then(finish);      // 通信の最後の処理
}

//通信が成功
function showResult(resp){
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  //データの表示
  let tenki1 = document.querySelector("span#w1");
  tenki1.textContent = data.name;
  let tenki2 = document.querySelector("span#w2");
  tenki2.textContent = data.coord.lat;
  let tenki3 = document.querySelector("span#w3");
  tenki3.textContent = data.coord.lon;
  let tenki4 = document.querySelector("span#w4");
  tenki4.textContent = data.weather[0].description;
  let tenki5 = document.querySelector("span#w5");
  tenki5.textContent = data.main.temp_min + " °C";
  let tenki6 = document.querySelector("span#w6");
  tenki6.textContent = data.main.temp_max + " °C";
  let tenki7 = document.querySelector("span#w7");
  tenki7.textContent = data.main.humidity + " %";
  let tenki8 = document.querySelector("span#w8");
  tenki8.textContent = data.wind.speed + " m/s";
  let tenki9 = document.querySelector("span#w9");
  tenki9.textContent = data.wind.deg;
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

console.log(data.name);
console.log(data.weather[0].description);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.wind.deg);
console.log(data.wind.speed);
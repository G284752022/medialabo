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

ul.remove();

let div = document.querySelector('div#result');
let div0 = document.createElement('li');
div0.textContent = '緯度: ' + data.coord.lat;
div.insertAdjacentElement('beforeend', div0);

let div1 = document.createElement('div');
div1.textContent = "経度: " + data.coord.lon;
div.insertAdjacentElement('beforeend', div1);

let div2 = document.createElement('div');
div2.textContent = "天気: " + data.weather[0].description;
div.insertAdjacentElement('beforeend', div2);

let div3 = document.createElement('div');
div3.textContent = "最低気温: " + data.main.temp_min + " °C";
div.insertAdjacentElement('beforeend', div3);

let div4 = document.createElement('div');
div4.textContent = "最高気温: " + data.main.temp_max + " °C"
div.insertAdjacentElement('beforeend', div4);

let div5 = document.createElement('div');
div5.textContent = "湿度: " + data.main.humidity + " %"
div.insertAdjacentElement('beforeend', div5);

let div6 = document.createElement('div');
div6.textContent = "風速: " + data.wind.speed + " m/s"
div.insertAdjacentElement('beforeend', div6);

let div7 = document.createElement('div');
div7.textContent = "風向: " + data.wind.deg;
div.insertAdjacentElement('beforeend', div7);

let div8 = document.createElement('div');
div8.textContent = "都市名: " + data.name;
div.insertAdjacentElement('beforeend', div8);
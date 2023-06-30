//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム

let pm = document.createElement('p');
pm.textContent = '写真表と都市の経度緯度のページです。';
pm.style.textEmphasis = 'sesame green';
ex42.insertAdjacentElement('afterend', pm);

// 練習4-3 写真表作成プログラム

// let phototable = document.getElementById('phototable');
// let div = document.createElement('div');
// phototable.appendChild(div);
// let img = document.createElement('img');
// img.src = 'taro.png';
// div.appendChild(img);

// let div1 = document.createElement('div');
// phototable.appendChild(div1);
// let img1 = document.createElement('img');
// img1.src = 'jiro.png';
// div.appendChild(img1);

// let div2 = document.createElement('div');
// phototable.appendChild(div2);
// let img2 = document.createElement('img');
// img2.src = 'hanako.png';
// div.appendChild(img2);

// let divs = [
// 	div,
// 	div1,
// 	div2,
// ]
// for (let i = 0; i < divs.length; i++) {
// 	divs[i].style.width = '200px';
// 	divs[i].style.height = '200px';
// 	divs[i].style.display = 'inline-block';
// }

let div = document.querySelector('div#phototable'); 
let img = document.createElement('img'); 
img.setAttribute('src','taro.png'); 
let p = document.createElement('p');
p.insertAdjacentElement('beforeend', img); 
div.insertAdjacentElement('beforeend', p); 

let div1 = document.querySelector('div#phototable'); 
let img1 = document.createElement('img'); 
img1.setAttribute('src','jiro.png'); 
let p1 = document.createElement('p');
p1.insertAdjacentElement('beforeend', img1); 
div1.insertAdjacentElement('beforeend', p1); 

let div2 = document.querySelector('div#phototable'); 
let img2 = document.createElement('img'); 
img2.setAttribute('src','hanako.png'); 
let p2 = document.createElement('p');
p2.insertAdjacentElement('beforeend', img2); 
div2.insertAdjacentElement('beforeend', p2); 

// 練習4-4 箇条書き削除プログラム

let locations = document.querySelectorAll('#location > li');
for (let location of locations) {
  location.remove();
}

// 練習4-5 箇条書き追加プログラム

let ul = document.querySelector('ul#location');
for(let element of data){
	let kLink = document.createElement('li');
	kLink.textContent = element.name + "... 緯度:" + element.lat + " 経度:" + element.lng;
	ul.insertAdjacentElement('beforeend', kLink);
}
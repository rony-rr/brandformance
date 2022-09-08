const KEY = 'TRACKING';
let getUUID = localStorage.getItem(KEY);

if (!getUUID && window) {
	getUUID = window.uuidv4();
	localStorage.setItem(KEY, getUUID);
}

/* Pixel beacon */
const ssaUrl2 = `https://3ma79ae7cua.com/beacon?org=e69ddzkxuctk9mdexqx7cod2b5ottviw&id=n7wtlpjkigc6f7ujm1xlxiwx7uv1gjvn&udid=${getUUID}`;
const imgPixelBeacon = document.createElement('img');
imgPixelBeacon.src = ssaUrl2;
imgPixelBeacon.style.position = 'absolute';
imgPixelBeacon.style.visibility = 'hidden';
imgPixelBeacon.style.width = '1px';
imgPixelBeacon.style.height = '1px';
imgPixelBeacon.style.top = '-100px'; // remove space final page
document.body.appendChild(imgPixelBeacon);
/* End Pixel beacon */

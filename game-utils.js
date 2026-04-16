function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
    return false;
  }
  return true;
}

function circleIntersect(x1, y1, r1, x2, y2, r2) {
  const squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  return squareDistance <= (r1 + r2) * (r1 + r2);
}

function timeToString(time) {
  const diffInHrs = time / 3600000;
  const hh = Math.floor(diffInHrs);

  const diffInMin = (diffInHrs - hh) * 60;
  const mm = Math.floor(diffInMin);

  const diffInSec = (diffInMin - mm) * 60;
  const ss = Math.floor(diffInSec);

  const diffInMs = (diffInSec - ss) * 100;
  const ms = Math.floor(diffInMs);

  const formattedMM = mm.toString().padStart(2, "0");
  const formattedSS = ss.toString().padStart(2, "0");
  const formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

module.exports = {
  getRandomInt,
  rectIntersect,
  circleIntersect,
  timeToString
};
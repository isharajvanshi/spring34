var PI = Math.PI;

exports.circlearea = function (r) {
  return PI * r * r;
};

exports.circlecircumference = function (r) {
  return 2 * PI * r;
};

exports.squarearea = function (s) {
  return s * s;
};

exports.squareperimeter = function (s) {
  return s * 4;
};

exports.trianglearea = function (b,h) {
  return .5 * b * h;
};

exports.triangleperimeter = function (b,h,l) {
  return b + h + l;
};
if (! _$jscoverage['ignore.js']) {
  _$jscoverage['ignore.js'] = [];
  _$jscoverage['ignore.js'][1] = 0;
  _$jscoverage['ignore.js'][3] = 0;
  _$jscoverage['ignore.js'][4] = 0;
  _$jscoverage['ignore.js'][6] = 0;
  _$jscoverage['ignore.js'][7] = 0;
  _$jscoverage['ignore.js'][10] = 0;
  _$jscoverage['ignore.js'][14] = 0;
  _$jscoverage['ignore.js'][16] = 0;
  _$jscoverage['ignore.js'][17] = 0;
  _$jscoverage['ignore.js'][22] = 0;
  _$jscoverage['ignore.js'][23] = 0;
  _$jscoverage['ignore.js'][27] = 0;
  _$jscoverage['ignore.js'][32] = 0;
  _$jscoverage['ignore.js'][34] = 0;
  _$jscoverage['ignore.js'][35] = 0;
  _$jscoverage['ignore.js'][37] = 0;
  _$jscoverage['ignore.js'][38] = 0;
  _$jscoverage['ignore.js'][42] = 0;
  _$jscoverage['ignore.js'][43] = 0;
  _$jscoverage['ignore.js'][44] = 0;
}
_$jscoverage['ignore.js'].conditionals = [];
_$jscoverage['ignore.js'][1]++;
function createRequest() {
  _$jscoverage['ignore.js'][3]++;
  if (window.XMLHttpRequest) {
    _$jscoverage['ignore.js'].conditionals[6] = 11;
    _$jscoverage['ignore.js'][4]++;
    return new XMLHttpRequest();
  }
  else {
    _$jscoverage['ignore.js'].conditionals[4] = 5;
    _$jscoverage['ignore.js'][6]++;
    if (window.ActiveXObject) {
      _$jscoverage['ignore.js'].conditionals[9] = 11;
      _$jscoverage['ignore.js'][7]++;
      return new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
      _$jscoverage['ignore.js'].conditionals[7] = 8;
      _$jscoverage['ignore.js'][10]++;
      throw "no XMLHttpRequest implementation available";
    }
  }
}
_$jscoverage['ignore.js'][14]++;
function createRequest2() {
  _$jscoverage['ignore.js'][16]++;
  if (window.XMLHttpRequest) {
    _$jscoverage['ignore.js'][17]++;
    return new XMLHttpRequest();
  }
  else {
    _$jscoverage['ignore.js'].conditionals[17] = 18;
  }
  _$jscoverage['ignore.js'][22]++;
  if (window.ActiveXObject) {
    _$jscoverage['ignore.js'][23]++;
    return new ActiveXObject("Msxml2.XMLHTTP");
  }
  else {
    _$jscoverage['ignore.js'].conditionals[23] = 24;
  }
  _$jscoverage['ignore.js'][27]++;
  throw "no XMLHttpRequest implementation available";
}
_$jscoverage['ignore.js'][32]++;
function log(s) {
  _$jscoverage['ignore.js'][34]++;
  if ((window.console && window.console.log)) {
    _$jscoverage['ignore.js'].conditionals[37] = 39;
    _$jscoverage['ignore.js'][35]++;
    console.log(s);
  }
  else {
    _$jscoverage['ignore.js'].conditionals[35] = 36;
    _$jscoverage['ignore.js'][37]++;
    if ((window.opera && window.opera.postError)) {
      _$jscoverage['ignore.js'][38]++;
      opera.postError(s);
    }
    else {
      _$jscoverage['ignore.js'].conditionals[38] = 39;
    }
  }
}
_$jscoverage['ignore.js'][42]++;
var request = createRequest();
_$jscoverage['ignore.js'][43]++;
var request2 = createRequest2();
_$jscoverage['ignore.js'][44]++;
log("created requests");
if (!( 0)) {
  _$jscoverage['ignore.js'].conditionals[26] = 28;
}
if (!( ! window.XMLHttpRequest)) {
  _$jscoverage['ignore.js'].conditionals[20] = 29;
}

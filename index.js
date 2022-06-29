/**
 * 获取GMT+X的时间字符串
 * @param zoneOffset
 * @constructor
 */
function GTMTimeString (zoneOffset = 8){
  const localOffsetTS = new Date().getTimezoneOffset() * 60 * 1000;
  return new Date(Date.now() + localOffsetTS + zoneOffset * 60 * 60 * 1000);
}


function getMysqlTimestamp(ts) {
  const now = ts || new Date();
  const yy = now.getFullYear();      //年
  const mm = now.getMonth() + 1;     //月
  const dd = now.getDate();          //日
  const hh = now.getHours();         //时
  const ii = now.getMinutes();       //分
  const ss = now.getSeconds();       //秒
  let clock = yy + "-";
  if(mm < 10) clock += "0";
  clock += mm + "-";
  if(dd < 10) clock += "0";
  clock += dd + " ";
  if(hh < 10) clock += "0";
  clock += hh + ":";
  if (ii < 10) clock += '0';
  clock += ii + ":";
  if (ss < 10) clock += '0';
  clock += ss;
  return clock;
}

module.exports = {
  GTMTimeString: GTMTimeString,
  getMysqlTimestamp: getMysqlTimestamp,
  currentTime: function () {
    return getMysqlTimestamp(GTMTimeString())
  },
  dLog: function (...args) {
    console.log(getMysqlTimestamp(), ...args)
  }
}

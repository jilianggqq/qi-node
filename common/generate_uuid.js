var EPOCH = 1300000000000;
function generateRowId(subid) {
  var ts = new Date().getTime() - EPOCH; // limit to recent
  var randid = Math.floor(Math.random() * 512);
  ts = (ts * 64);   // bit-shift << 6
  ts = ts + randid;
  return (ts * 512) + (randid % 512);
}
var newPrimaryHashKey = "obj_name:" + generateRowId(4);
console.log(newPrimaryHashKey);

// "customer_name" : {"s": event.customer_name},
// "credit_info" : {"s": event.credit_info},
// "address" : {"s": event.address},
// "phone_number" : {"s": event.phone_number},
// "confirm_number" : {"s": event.confirm_number},
// "date" : {"s": datetime}
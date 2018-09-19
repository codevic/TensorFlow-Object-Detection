function cserviceImage(req, resp) {

  log(req)
  ClearBlade.init({request:req});
  var msg = ClearBlade.Messaging();
  msg.publish("predict",req.params.content);
  resp.success('Success');
  
}

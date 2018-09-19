function testFromPortal(req, resp) {
  log(req)
  ClearBlade.init({request:req});
  // var callback = function (err, data) {
	// 	if(err) {
	// 		resp.error("Unable to retrieve current topics: " + JSON.stringify(data));
	// 	} else {
	// 		resp.success(data);
	// 	}
  //   };

    var msg = ClearBlade.Messaging();
    //msg.getCurrentTopics(callback);
    // msg.publish("predict","hi")
  // try{  
  // msg.publish("predict",req.params.content);
  // }catch(err){
  //   msg.publish("predict","didn't work")
  // }

  resp.success('Success');
}

var http=require('http');
var dt=require ('./myfirstmodule');

http.createserver(function (req,res)
{
    res.writehead(200,{'content-type':'text/html'});
    res.write("the date and time is currently:"+ dt.myDateTime());
    res.end();
}).listen(8080);

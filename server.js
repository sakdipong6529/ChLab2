var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
let ans = (7) //Enter the answer
var n = 0

net.createServer(function(sock){
    console.log('Server is online on ' + sock.remoteAddress +':'+ sock.remotePort)
    console.log('-YOUR ANSWER:'+ans+'-')
    sock.on('data', function(data){
        console.log('DATA : ' + sock.remoteAddress +':' + data)
      
        
        if(n++ < 50)
            if(data == ans){
                sock.write('BINGO : ' + ans)
                process.exit()
            }
        else{
                sock.write('WRONG')
                n++
            }
    })
sock.on('close', function(){
    console.log('Server is closed!' + sock.remoteAddress + ':' + sock.remotePort)
    })
}).listen(PORT, HOST)
console.log('Server is running ' + HOST + ':' + PORT)
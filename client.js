var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var client = new net.Socket()
var num ;
var i = 1
client.connect(PORT, HOST, function(){
    console.log('Connected to : ' + HOST + ':' + PORT)
    client.write('SAKDIPONG')
})

client.on('data', function(data){
    console.log('DATA : ' + data)
    num = Math.floor(Math.random() * 21)
   
    if(i < 6 && data == 'WRONG'||data =='wrong')
        {
            client.write('' + num)
            console.log('Send :' + num)
            console.log('no.:' + i)
            i++
        }
    else if(data == 'BINGO'||data == 'bingo'){
            client.destroy()
        }
    
    else{
        client.destroy()
    }
})

client.on('close', function(){
    console.log('disconnected')
})
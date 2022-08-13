if(window.Worker){
    const worker = new Worker('worker.js');
    const worker2 = new Worker('worker2.js');
    let i =0;
    worker.postMessage({addThis:{num1:15, num2:30}});
    worker2.postMessage({multiplyThis: {num1:15, num2:30}});
    worker.onmessage = (e) => {
        console.log("From server.js",e)
        console.log(e.data.result);
    }
    worker2.onmessage = (e) => {
        console.log(e);
    }
}
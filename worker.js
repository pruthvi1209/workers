this.onmessage  =  (e) => {
    let i =0;
    console.log("Message from worker");
        while(i<5000000001)
{
        if(i===0){
            console.log("While started");
        }
        if(i===500000){
            console.log("while ended");
        }
        i++;
    }
    this.postMessage({result:(e.data.addThis.num1+e.data.addThis.num2)})
}
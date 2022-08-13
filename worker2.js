this.onmessage = (e) => {
    this.postMessage({result: e.data.multiplyThis.num1 * e.data.multiplyThis.num2})
}
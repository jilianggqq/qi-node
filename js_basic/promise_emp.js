// Function that returns a promise
const checkIfEven = function (num) {
    let prom = new Promise((resolve, reject) => {
        // Simulate an asynchronous operation like fetching data

        if (num % 2 == 0) {
            // resolve(num + " is an even number");
            setTimeout(() => {
                resolve(num + " is an even number");
            }, 5000);
        } else {
            reject(num + " is an odd number");
            // setTimeout(() => {
            //     reject(num + " is an odd number");
            // }, 5000);
        }
    });
    return prom;
};

const normalFunc = () => {
    console.log("this is a normal function");
};

checkIfEven(4).then(
    (result) => {
        console.log("after calling a promise with resolve:");
        console.log(result);
    },
    (error) => {
        console.log("after calling a promise with reject:");
        console.log(error);
    }
);

checkIfEven(3).then(
    (result) => {
        console.log("after calling a promise with resolve:");
        console.log(result);
    },
    (error) => {
        console.log("after calling a promise with reject:");
        console.log(error);
    }
);

normalFunc();
console.log("doing something else.");

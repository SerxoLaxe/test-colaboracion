function bucleAbsurdo(){
    const arrayAbsurdo = [];
    for (let i = 0; i< 10; i++){
        arrayAbsurdo.push('muy');
    }
    const stringAbsurdo = arrayAbsurdo.join(',')
    console.log(`este bucle es ${stringAbsurdo} absurdo`);
}

module.exports = bucleAbsurdo;
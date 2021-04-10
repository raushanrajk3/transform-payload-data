let transform = {};

transform.transformJsonData = (mainObj) => {
    try {
        let { payload, referenceData } = mainObj;
        payload  =JSON.stringify(payload);
        for(const value in referenceData){
            payload =  findAndReplace(payload, value, referenceData[value])
        }
        return JSON.parse(payload);
    } catch (err) {
        console.log('ERROR++++', err);
        return err;
    }
};

function findAndReplace(value, refKey, refValue) {
    return  value.replace(new RegExp("{"+refKey+"}", 'g'), refValue);
};

module.exports = transform;
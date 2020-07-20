



const removeQoute = data =>{
    return data.replace(new RegExp('"', "g"), "");
}


export {removeQoute}
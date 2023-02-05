function enabled_vars (vars) {
    for (let i = 0; i < vars.length; i++) {
        if(vars[i] = false) {
            return false
        }
    }
    return true
}

 module.exports = { 
     enabled_vars
};
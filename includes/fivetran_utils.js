function enabled_vars (vars) {
    for (let i = 0; i < vars.length; i++) {
        if(vars[i] != true) {
            return false
        }
    }
    return true
}

function add_pass_through_columns (base_columns, pass_through_var) {
    if (pass_through_var){
        for (let i = 0; i < pass_through_var.length; i++) {
            base_columns.push(pass_through_var[i])
        }
    }
    return base_columns
}


 module.exports = { 
     enabled_vars,
     add_pass_through_columns
};
config {
  type: "table"
}


js {

  function run() {
    if (fivetran_utils.enabled_vars([constants.hubspot_sales_enabled, constants.hubspot_owner_enabled]) == true ) {
      query =  `
        select * from ${constants.SOURCE_PROJECT}.${constants.SOURCE_DATASET}.owner`
      return query
    }
    return ``
  }


}

${run()}
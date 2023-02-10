config {
  type: "table"
}


js {

  function run() {
    if (fivetran_utils.enabled_vars([constants.hubspot_service_enabled]) == true ) {
      query =  `
        select * from ${constants.SOURCE_PROJECT}.${constants.SOURCE_DATASET}.ticket_contact`
      return query
    }
    return ``
  }


}

${run()}
config {
  type: "table"
}


js {

  function run() {
    if (fivetran_utils.enabled_vars([constants.hubspot_service_enabled, constants.hubspot_ticket_deal_enabled]) == true ) {
      query =  `
        select * from ${constants.SOURCE_PROJECT}.${constants.SOURCE_DATASET}.ticket_deal`
      return query
    }
    return ``
  }


}

${run()}
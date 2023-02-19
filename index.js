// TODO: import files from includes
// const file_one = require("./includes/file_one");
// const file_two = require("./includes/file_two");

const stg_hubspot__company_property_history_tmp = require("./definitions/models//tmp/stg_hubspot__company_property_history_tmp");

module.exports = (params) => {

    params = {
      // TODO: set default params

      ...params
    };

    // Publish and return datasets.
    let result = {
    // TODO: update files to call with params
    //   file_one: file_one(params),
    //   file_two: file_two(params)
    stg_hubspot__company_property_history_tmp: stg_hubspot__company_property_history_tmp(params),
    };

    return result;
}
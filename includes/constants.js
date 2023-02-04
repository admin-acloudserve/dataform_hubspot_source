 const SOURCE_DATASET = "fivetran_log_copy";
 const SOURCE_PROJECT = "sample1-328718";
 const fivetran_log_using_sync_alert_messages = true
 const fivetran_log_using_transformations = false
 const fivetran_log_using_triggers = true
 const fivetran_log_using_account_membership = true
 
 module.exports = { 
     SOURCE_DATASET, 
     SOURCE_PROJECT, 
     fivetran_log_using_sync_alert_messages, 
     fivetran_log_using_transformations, 
     fivetran_log_using_triggers, 
     fivetran_log_using_account_membership 
};


// cd **/seeds/
// for d in * ; do
//     FILE_NAME="$d"
//     TABLENAME="${d%_data.*}"
//     echo $FILE_NAME
//     echo $TABLENAME

//     echo "bq load --source_format=CSV --skip_leading_rows=1 --autodetect=true hubspot.${TABLENAME} ./${FILE_NAME}"
//     bq load --source_format=CSV --skip_leading_rows=1 --autodetect=true hubspot.$TABLENAME ./$FILE_NAME
// done
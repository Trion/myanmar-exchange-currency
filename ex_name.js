

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    cbm_currency_url_ = 'http://forex.cbm.gov.mm/api/currencies'
var cbm_info_ ;
fetch(proxyUrl + cbm_currency_url_)
  .then(blob => blob.json())
  .then(data => {
    //console.table(data);
    var json_data_ = JSON.stringify(data);
   // console.log(json_data_);
    var json_prase_ = JSON.parse(json_data_);
    //console.log(json_prase_);
    var json_parse_data_info_ = json_prase_.currencies;
    console.table(json_parse_data_info_);
    return data;
  })
  . then (function (data){
    var currency = Object.values(data.currencies);
    var currency_name_ = Object.getOwnPropertyNames(data.currencies);
    var cbm_info_name_ = data.info;
  //   document.getElementById("info_").innerHTML = cbm_info_name_;


  for (var i = 0; i <currency.length; i++) {

        var li = document.createElement("li");
            li.className = "list-group-item bg-dark d-flex justify-content-between align-items-center";
        var span = document.createElement("span");
            span.className = "badge badge-primary badge-pill shadow";
        var rate_change_name_ = document.createTextNode(currency_name_[i]);
        var rate_change_ = document.createTextNode(currency[i]);
        li.appendChild(rate_change_name_);
            span.appendChild(rate_change_);
            li.appendChild(span);
        
        
        document.getElementById("cbm").appendChild(li);
  }
    

  })
  .catch(e => {
    console.log(e);
    return e;
  });


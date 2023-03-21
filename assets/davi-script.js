var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    form_submit()
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    } 
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}


function form_submit(){

  var field_settings = [];
  jQuery( "input[name=davi_input_text]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_input_text = {};
    davi_input_text['label'] = label;
    davi_input_text['type'] = 'text';
    davi_input_text['value'] = $( this ).val();
    field_settings.push(davi_input_text);

  });
  jQuery( "input[name=davi_input_email]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_input_email = {};
    davi_input_email['label'] = label;
    davi_input_email['type'] = 'text';
    davi_input_email['value'] = $( this ).val();
    field_settings.push(davi_input_email);
  });
  jQuery( "input[name=davi_input_pdf]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_input_pdf = {};
    davi_input_pdf['label'] = label;
    davi_input_pdf['type'] = 'file';
    davi_input_pdf['value'] = $( this ).val();
    field_settings.push(davi_input_pdf);
  });
  jQuery( "input[name=davi_input_file]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_input_file = {};
    davi_input_file['label'] = label;
    davi_input_file['type'] = 'file';
    davi_input_file['value'] = $( this ).val();
    field_settings.push(davi_input_file);
  });
  jQuery( "input[name=davi_input_files]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_input_files = {};
    davi_input_files['label'] = label;
    davi_input_files['type'] = 'file';
    davi_input_files['value'] = $( this ).val();
    field_settings.push(davi_input_files);
  });
  jQuery( "input[name=davi_input_date]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_input_date = {};
    davi_input_date['label'] = label;
    davi_input_date['type'] = 'text';
    davi_input_date['value'] = $( this ).val();
    field_settings.push(davi_input_date);
  });
  jQuery( "select[name=davi_products]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_products = {};
    davi_products['label'] = label;
    davi_products['type'] = 'select';
    davi_products['value'] = $( this ).val();
    field_settings.push(davi_products);
  });
  jQuery( "select[name=davi_dropdown]" ).each(function( index ) {
    label = $(this).prev().prev().text();
    var davi_dropdown = {};
    davi_dropdown['label'] = label;
    davi_dropdown['type'] = 'select';
    davi_dropdown['value'] = $( this ).val();
    field_settings.push(davi_dropdown);
  });
  jQuery( "select[name=davi_multiple_dropdown]" ).each(function( index ) {davi_multiple_dropdown = {};
    label = $(this).prev().prev().text();
    var davi_multiple_dropdown = {};
    davi_multiple_dropdown['label'] = label;
    davi_multiple_dropdown['type'] = 'select';
    davi_multiple_dropdown['value'] = $( this ).val();
    field_settings.push(davi_multiple_dropdown);
  });
  var davi_input_address = {};
  jQuery( "input[name=davi_input_address]" ).each(function( index ) {davi_input_address = {};
    label = $(this).prev().prev().text();
    davi_input_address['label'] = label;
    davi_input_address['type'] = 'text';
    davi_input_address['value'] = $( this ).val();
  });
  jQuery( "input[name=davi_input_appartment_no]" ).each(function( index ) { davi_input_appartment_no = {};
      davi_input_address['value'] += $( this ).val();
  });
  jQuery( "input[name=davi_input_zip_code]" ).each(function( index ) {  davi_input_zip_code = {};
      davi_input_address['value'] += $( this ).val();
  });
  jQuery( "input[name=davi_input_state]" ).each(function( index ) { davi_input_state = {};
      davi_input_address['value'] += $( this ).val();
  });
  field_settings.push(davi_input_address);

  // for (var key in field_settings) {
  //   console.log("key " + key + " has value " + field_settings[key]);
  // }
  // var data = new FormData()
  jQuery( "input[name=davi_input_pdf]" ).each(function( index ) {
    var davi_input_pdf = {};
    label = $(this).prev().prev().text();
      field_settings[label] = $( this ).val();
      // data.append('davi_input_pdf', $( this ).files[index])
  });
  jQuery( "input[name=davi_input_file]" ).each(function( index ) {
    var davi_input_file = {};
    label = $(this).prev().prev().text();
      field_settings[label] = $( this ).val();
      // data.append('davi_input_file', $( this ).files[index])
  });
  jQuery( "input[name=davi_input_files]" ).each(function( index ) {
    var davi_input_files = {};
    label = $(this).prev().prev().text();
      field_settings[label] = $( this ).val();
      // data.append('davi_input_files', $( this ).files[index])
  });


  var shop = $('#shop').val();
  var data = {
    shop: shop,
  };
  fetch("/apps/sdta/get_settings", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then(function (response) {
      return response.json();
  })
  .then(function (settings) {
    console.log(settings);
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.prop['files'];
    var formData = new FormData();
    formData.append('file', file);
    console.log(fileInput);
    console.log(file);
    console.log(formData);
    var shop = $('#shop').val();
    fetch('https://'+shop+'/admin/api/'+settings.api_version+'/assets.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Shopify-Access-Token': settings.access_token,
        'X-Shopify-API-Version': settings.api_version,
        'X-Shopify-API-Key': settings.api_key,
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  // console.log(data);  
  // fetch("/apps/sdta/file_upload", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  // })
  // .then(function (response) {
  //     return response.json();
  // })
  // .then(function (settings) {
      var form_type = $( 'input[name=davi_form_type]' ).val();
      var shop = $('#shop').val();
      var data = {
        shop: shop,
        form_type: form_type,
        field_settings: field_settings,
      };
      fetch("/apps/sdta/save_form", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(function (response) {
          return response.json();
      })
      .then(function (settings) {
        window.location = 'https://'+window.location.host+'/pages/quotes';
      });
  });       
};
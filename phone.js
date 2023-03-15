
function phonenumber(inputtxt)
{
  var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(inputtxt.value.match(phoneno))
  {
      document.write('<p id="ip">'+"Valid Phone Number" + '</p>');
  }
  else
  {
     document.write('<p id="ip">' + "Not a Valid Phone Number" + '</p>');
  }
  document.body.style.backgroundImage = "url('https://img.freepik.com/premium-vector/gps-gps-technology-abstract-background_99087-4.jpg?w=2000')";
  document.body.style.backgroundSize = "cover";
  document.body.style.overflow="hidden";

  var link = document.createElement('link');
 
        // set the attributes for link element
           link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'phone.css';
 
        // Get HTML head element to append
        // link element to it
        document.getElementsByTagName('HEAD')[0].appendChild(link);
 
}
function ipaddress1()
{
  $.getJSON("http://ipinfo.io", function(data) {
        
        // Setting text of element P with id gfg
        //$("#gfg").html(data.ip);
        //console.log($("#gfg").html(data));
        //console.log(data)
        document.write('<p id="ip1">City : ',data.city+'</p>');
        document.write('<p id="ip1">Ip :',data.ip+'</p>');
        document.write('<p id="ip1">Country:',data.country+'</p>');
        document.write('<p id="ip1">Region :',data.region+'</p>');
        document.write('<p id="ip1">Loc :',data.loc+'</p>');
        document.write('<p id="ip1">Pin Code :',data.postal+'</p>');
        document.write('<p id="ip1">Timezone :',data.timezone+'</p>');
        
        $.getJSON("http://ip-api.com/json", function(data1) {
        let text="Click";
        let result = text.link("https://www.google.com/maps?q="+data1.lat+","+data1.lon);
        document.write('<p id="ip1">',result+'</p>');
    },"jsonp")

        document.body.style.backgroundImage = "url('https://image.shutterstock.com/image-illustration/threedimensional-network-topology-infographics-ip-260nw-755104522.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.overflow="hidden";
        var link1 = document.createElement('link');
 
        // set the attributes for link element
           link1.rel = 'stylesheet';
     
        link1.type = 'text/css';
     
        link1.href = 'phone.css';
 
        // Get HTML head element to append
        // link element to it
        document.getElementsByTagName('HEAD')[0].appendChild(link1);
        

    },"jsonp")
  

}

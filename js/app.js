    document.addEventListener("DOMContentLoaded", function() {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const myList = document.getElementById('userlist');

    fetch(url)
      .then(function(response) { return response.json(); })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.innerHTML = '<strong>' + data[i].name + '&nbsp' +
                               data[i].username + '&nbsp' +
                               data[i].email + '&nbsp' +
                               '</strong>';
          var ListAdress = document.createElement('span');
          ListAdress.innerHTML = '<strong>'+ 'Address'+ '</strong>'+'&nbsp' +
                                 data[i].address.street + '&nbsp' +
                                 data[i].address.suite + '&nbsp' +
                                 data[i].address.city + '&nbsp' +
                                 data[i].address.zipcode + '&nbsp' +
                                 '<strong>'+ 'Phone and website'+ '</strong>'+'&nbsp' +
                                 data[i].address.phone + '&nbsp' +
                                 data[i].address.website + '&nbsp';
          var ListGeo = document.createElement('span');
          ListGeo.innerHTML = '<strong>'+ "Geodata" + '</strong>'+
                                 data[i].address.geo.lat + '&nbsp' +
                                 data[i].address.geo.lng  + '&nbsp';
          var ListCompany = document.createElement('span');
          ListCompany.innerHTML = '<strong>'+ "Company" + '</strong>'+
                                 data[i].company.name + '&nbsp' +
                                 data[i].company.catchPhrase  + '&nbsp' +
                                 data[i].company.bs;
          var delbtn = document.createElement('button');
                  delbtn.innerHTML = "delete";
                  delbtn.classList.add('delete');
                  listItem.classList.add('list')
                  myList.appendChild(listItem);
                  myList.appendChild(delbtn);
                  listItem.appendChild(ListAdress);
                  ListAdress.appendChild(ListGeo);
                  ListGeo.appendChild(ListCompany);

        }
      })
      .catch(function(error) {
         console.log(error);
       });
       var button = document.getElementsByClassName('delete');
       var listId = document.getElementsByTagName('ul');
       for (var i = 0; i < button.length; i++) {
         button[i].addEventListener.onclick = function(){
           lisId[0].targetNode.removeChild()
         }
       }
       
       var eraser = document.getElementsByClassName('eraser')[0];
       eraser.addEventListener('click', function(){
         cls = document.getElementsByClassName('delete')
         cld = document.getElementsByClassName('list')
         for(var i = 0; i < cld.length; i++) {
            cld[i].remove();
            cls[i].remove()
            
         }
       })

       document.getElementById('add').onclick = function(){
          var node = document.createElement("Li"); 
          var addedbtn = document.createElement("button")
          node.classList.add('list');
          addedbtn.classList.add('delete');
          addedbtn.innerHTML = 'delete';
          var text = document.getElementById("name").value +' '+
                     document.getElementById("username").value +' '+
                     document.getElementById("email").value +' '+
                     document.getElementById("street").value +' '+
                     document.getElementById("suite").value +' '+
                     document.getElementById("city").value +' '+
                     document.getElementById("zipcode").value +' '+
                     document.getElementById("phone").value +' '+
                     document.getElementById("website").value +' '+
                     document.getElementById("lat").value +' '+
                     document.getElementById("lng").value +' '+
                     document.getElementById("compname").value +' '+
                     document.getElementById("catchp").value +' '+
                     document.getElementById("bs").value;
          var textnode=document.createTextNode(text); 
          node.appendChild(textnode);
          node.appendChild(addedbtn);
          document.getElementById('userlist').appendChild(node); 
     }
    });

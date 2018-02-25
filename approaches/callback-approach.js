(function() {

  'use strict';

  var getClients = function(callback) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "/data/clients.json", true);
    xhttp.send();

  }

  var getProjects = function(clientsIds, callback) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "/data/projects.json", true);
    xhttp.send();

  }

  var getTasks = function(projectsIds, callback) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "/data/tasks.json", true);
    xhttp.send();

  }

  getClients(function(data) {

    var clientsIds = data.map(c => c._id);

    getProjects(clientsIds, function(data) {

      var projectsIds = data.map(p => p._id);

      getTasks(projectsIds, function(data) {
        console.log(['tasks', data]);
      });

    });

  });

})();

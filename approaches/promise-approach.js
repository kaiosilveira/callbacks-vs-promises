(function() {

  'use strict';

  const stdErrOutput = err => console.log(err);

  const getClients = () => {

    return new Promise((resolve, reject) => {

      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          resolve(JSON.parse(this.responseText));
        }
      };

      xhttp.open("GET", "/data/clients.json", true);
      xhttp.send();

    });

  }

  const getProjects = (clientsIds, callback) => {

    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          resolve(JSON.parse(this.responseText));
        }
      };

      xhttp.open("GET", "/data/projects.json", true);
      xhttp.send();
    });

  }

  let getTasks = (projectsIds, callback) => {

    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          resolve(JSON.parse(this.responseText));
        }
      };

      xhttp.open("GET", "/data/tasks.json", true);
      xhttp.send();
    });

  }

  getClients()
  .then(data => {
    let clientsIds = data.map(c => c._id);
    return getProjects(clientsIds);
  })
  .then(data => {
    let projectsIds = data.map(p => p._id);
    return getTasks(projectsIds);
  })
  .then(data => {
    console.log(['tasks', data]);
  })
  .catch(stdErrOutput);

})();

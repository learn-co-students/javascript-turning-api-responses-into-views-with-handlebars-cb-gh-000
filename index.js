//initialize a new XMLHttpRequest and make a GET request to the URI for the list user repositories API
function getRepositories() {
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', showRepositories);
  
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  
  req.send();
}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML);
});

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById("repository-template").innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  
  document.getElementById("repositories").innerHTML = repoList;
}
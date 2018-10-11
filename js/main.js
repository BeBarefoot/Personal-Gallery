console.log('Starting up');

function initPage() {
    renderProj()
}

function renderProj() {
    var projects = getProj()
    console.log(projects);
    
    elModalBody = projects.map((project)=>{return (
        `
    <h2>${project.name}</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.img}" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: ${project.publishedAt}</li>
      <li>Client: Threads</li>
      <li>Category: ${project.cat}</li>
      <li>Link: <a  href=${project.url}>Project</a></li>
    </ul>
    <button class="btn btn-primary" onclick="showModal(${project.id})" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
        `)
    })
    $('.modal-body').html(elModalBody.join(''))



}
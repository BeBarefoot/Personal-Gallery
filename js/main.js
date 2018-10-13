function initPage() {
    renderProj()
    renderModals()
}

function renderProj() {
    var projects = getProj()
    elModalBody = projects.map((project) => {
        return (
            `
             <div class="col-md-4 col-sm-6 portfolio-item">
                    <a id="modal${project.id}" class="portfolio-link" onclick="showModal(${project.id})" data-toggle="modal${project.id}" href="#portfolioModal${project.id}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${project.img}" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${project.title}</h4>
                        <p class="text-muted">${project.desc}</p>
                    </div>
                </div>
        `)
    })
    $('.project-body').html(elModalBody.join(''))
}

function renderModals() {
    var projects = getProj()
    elModalBody = projects.map((project) => {
        return (
            `
 <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                                <h2>${project.name}</h2>
                                <p class="item-intro text-muted">${project.title}</p>
                                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.img}" alt="">
                                <p>${project.desc}</p>
                                <ul class="list-inline">
                                    <li>Date: ${project.date}</li>
                                    <li>Category: ${project.cat}</li>
                                    <li>Link: <a href="${project.url}" target="_blank">Github</a> </li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `)
    })
    $('.modal-section').html(elModalBody.join(''))
}
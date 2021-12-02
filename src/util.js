const generateManagerCard = (manager) => {
  return `<div class="card employee-card mr-1 mt-3">
    <div class="card-header">
      <h2 class="card-title">${manager.name}</h2>
      <h3 class="card-title">Manager</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="material-icons">fingerprint</span> ID: ${manager.id}
        </li>
        <li class="list-group-item text-dark">
          <span class="material-icons">email</span> Email:
          <a href="mailto:{{ email }}">${manager.email}</a>
        </li>
        <li class="list-group-item">
          <span class="material-icons">business</span> Office Number:
          ${manager.officeNumber}
        </li>
      </ul>
    </div>
  </div>
  `;
};

const generateEngineerCard = (engineer) => {
  return `<div class="card employee-card mr-1 mt-3">
    <div class="card-header">
      <h2 class="card-title">${engineer.name}</h2>
      <h3 class="card-title bg-info">Engineer</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="material-icons"></span> ID: ${engineer.id}
        </li>
        <li class="list-group-item text-dark">
          <span class="material-icons">email</span> Email:
          <a href="mailto:{{ email }}">${engineer.email}</a>
        </li>
        <li class="list-group-item text-dark">
          <span class="material-icons">code</span> GitHub:
          <a href="https://github.com/{{ github }}" target="_blank"
            >${engineer.github}</a
          >
        </li>
      </ul>
    </div>
  </div>
  `;
};

const generateInternCard = (intern) => {
  return `<div class="card employee-card mr-1 mt-3">
    <div class="card-header">
      <h2 class="card-title">${intern.name}</h2>
      <h3 class="card-title">Intern</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="material-icons">fingerprint</span> ID: ${intern.id}
        </li>
        <li class="list-group-item text-dark">
          <span class="material-icons">email</span> Email:
          <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <li class="list-group-item">
          <span class="material-icons">school</span> School: ${intern.school}
        </li>
      </ul>
    </div>
  </div>
  `;
};

module.exports = {
  generateManagerCard,
  generateEngineerCard,
  generateInternCard,
};

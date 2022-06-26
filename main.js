const tableBody = document.querySelector('#table-body');

const btnAddParticipant = document.querySelector('#btn-add');
const btnUpdateParticipant = document.querySelectorAll('.update-participant');
const btnSaveUpdatedParticipant = document.querySelector('#update-participant');

const updateParticipantModal = new bootstrap.Modal('#participantModal')

let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let skills = document.querySelector('#skills');


const addParticipant = () => {
  const tableRow = document.createElement('tr');

  const participantName = document.querySelector('#first-name').value;
  const participantLastName = document.querySelector('#last-name').value;
  const participantSkills = document.querySelector('#skills').value;

  let updateFirstName = document.querySelector('#update-first-name');
  let updateLastName = document.querySelector('#update-last-name');
  let updateSkills = document.querySelector('#update-skills');

  const tableDataFirstName = document.createElement('td');
  tableDataFirstName.className = 'first-name';
  tableDataFirstName.innerText = participantName;

  const tableDataLastName = document.createElement('td');
  tableDataLastName.className = 'last-name';
  tableDataLastName.innerText = participantLastName;

  const tableDataSkills = document.createElement('td');
  tableDataSkills.className = 'skills';
  tableDataSkills.innerText = participantSkills;

  const tableDataActions = document.createElement('td');
  tableDataActions.className = 'actions';

  const btnUpdate = document.createElement('button');
  btnUpdate.className = 'btn btn-sm btn-warning update-participant';
  btnUpdate.innerText = 'Update';
  btnUpdate.setAttribute('data-bs-toggle', 'modal');
  btnUpdate.setAttribute('data-bs-target', '#participantModal');

  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn btn-sm btn-danger ms-1';
  btnRemove.innerText = 'Remove';
  btnRemove.addEventListener('click', () => tableRow.remove());

  tableDataActions.append(
    btnUpdate,
    btnRemove
  )

  tableRow.append(
    tableDataFirstName,
    tableDataLastName,
    tableDataSkills,
    tableDataActions,
  );

  tableBody.appendChild(tableRow);

  btnSaveUpdatedParticipant.addEventListener('click', () => {
    tableDataFirstName.innerText = updateFirstName.value;
    tableDataLastName.innerText = updateLastName.value;
    tableDataSkills.innerText = updateSkills.value;
    updateParticipantModal.hide();
  })
}

const fetchParticipant = ({
  name,
  username,
}) => {
  const tableRow = document.createElement('tr');

  // const participantName = document.querySelector('#first-name').value;
  // const participantLastName = document.querySelector('#last-name').value;
  const participantSkills = document.querySelector('#skills').value;

  let updateFirstName = document.querySelector('#update-first-name');
  let updateLastName = document.querySelector('#update-last-name');
  let updateSkills = document.querySelector('#update-skills');

  const tableDataFirstName = document.createElement('td');
  tableDataFirstName.className = 'first-name';
  tableDataFirstName.innerText = name;

  const tableDataLastName = document.createElement('td');
  tableDataLastName.className = 'last-name';
  tableDataLastName.innerText = username;

  const tableDataSkills = document.createElement('td');
  tableDataSkills.className = 'skills';
  tableDataSkills.innerText = participantSkills;

  const tableDataActions = document.createElement('td');
  tableDataActions.className = 'actions';

  const btnUpdate = document.createElement('button');
  btnUpdate.className = 'btn btn-sm btn-warning update-participant';
  btnUpdate.innerText = 'Update';
  btnUpdate.setAttribute('data-bs-toggle', 'modal');
  btnUpdate.setAttribute('data-bs-target', '#participantModal');

  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn btn-sm btn-danger ms-1';
  btnRemove.innerText = 'Remove';
  btnRemove.addEventListener('click', () => tableRow.remove());

  tableDataActions.append(
    btnUpdate,
    btnRemove
  )

  tableRow.append(
    tableDataFirstName,
    tableDataLastName,
    tableDataSkills,
    tableDataActions,
  );

  tableBody.appendChild(tableRow);

  btnSaveUpdatedParticipant.addEventListener('click', () => {
    tableDataFirstName.innerText = target.updateFirstName.value;
    tableDataLastName.innerText = target.updateLastName.value;
    tableDataSkills.innerText = target.updateSkills.value;
    updateParticipantModal.hide();
  })
}

btnAddParticipant.addEventListener('click', (event) => {
  event.preventDefault();
  addParticipant();
  firstName.value = '';
  lastName.value = '';
  skills.value = '';
}
);

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((participants) => participants.forEach(fetchParticipant));


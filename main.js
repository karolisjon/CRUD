const tableBody = document.querySelector('#table-body');
const btnAddParticipant = document.querySelector('#addParticipant');
const participantModal = new bootstrap.Modal('#participantModal');
const btnUpdateParticipant = document.querySelector('.js-button-update')

const updateParticipant = () => {

}

const addParticipant = () => {
  const tableRow = document.createElement('tr');

  const participantName = document.querySelector('#participantName').value;
  const participantLastName = document.querySelector('#participantLastName').value;
  const participantSkills = document.querySelector('#participantSkills').value;

  let tableDataFirstName = document.createElement('td');
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
  btnUpdate.className = 'btn btn-sm btn-warning js-button-update';
  btnUpdate.innerText = 'Update';
  btnUpdate.addEventListener('click', () => {
    console.log('click');
    participantModal.show();
  });

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
}

btnAddParticipant.addEventListener('click', () => {
  addParticipant();
  participantModal.hide();
}
);

// btnUpdateParticipant.addEventListener('click', () => {
//   console.log('click');
//   participantModal.show();
// });
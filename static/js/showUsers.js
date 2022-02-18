const table = document.getElementById('usersTable');

const getUsers = async () => {
    data = await fetch('/api/users');
    return data.json()
}

const users = getUsers().then(users => showData(users));

const showData = (data) => {
  table.innerHTML = `
  <tr>
  <th>ID</th>
  <th>Nombre</th>
  <th>Usuario</th>
  <th>Email</th>
  <th>Activo</th>
  <th>
    
  </th>
</tr>
  `;
  for (user of data) {
    table.innerHTML += `
    <tr>
    <td>${user.iduser}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.user_status}</td>
    <td>
      <span id="edit"><i value="${user.iduser}" class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
      <span id="delete"><i value="${user.iduser}" class="fa fa-trash-o" aria-hidden="true"></i></span>
    </td>
    </tr>
    `;
  }
}

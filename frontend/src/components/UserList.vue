<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }} - {{ user.email }}
        <button @click="editUser(user)">Edit</button>
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
    <button @click="createUser">Create New User</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editUser(user) {
      this.$router.push({ name: 'EditUser', params: { id: user.id } });
    },
    deleteUser(id) {
      axios.delete(`http://localhost:3000/api/users/${id}`)
        .then(() => this.fetchUsers())
        .catch(error => console.error(error));
    },
    createUser() {
      this.$router.push({ name: 'CreateUser' });
    }
  }
};
</script>

<template>
  <div>
    <h1>User Detail</h1>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.fetchUser(this.$route.params.id);
  },
  methods: {
    async fetchUser(id) {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    goBack() {
      this.$router.push({ name: 'UserList' });
    }
  }
};
</script>

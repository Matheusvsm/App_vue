<template>
  <div>
    <h2>Lista de Usuários</h2>
    <ul>
      <li v-for="user in userList" :key="user.id">{{ user.user_name }}</li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    async fetchUserList() {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        const data = await response.json();
        this.userList = data;
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    },
  },
};
</script>
  
  <style scoped>
/* Add your component styles here */
</style>
  
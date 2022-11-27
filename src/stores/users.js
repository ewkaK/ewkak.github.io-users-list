import { defineStore } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    usersList: null,
    userDetails: null,
    currentPage: 1,
    totalPages: 1,
  }),

  actions: {
    async getUsersList() {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${this.currentPage}`
        );

        this.usersList = response.data.data;
        this.totalPages = response.data.total_pages;
      } catch(error) {
        console.log(error);
      }
    }
  }
})

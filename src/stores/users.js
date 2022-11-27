import { defineStore } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    usersList: null,
    userDetails: null,
    currentPage: 1,
    totalPages: 1,
    favoritesList: []
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
    },

    async getUserDetails(id) {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users/${id}`
        );

        this.userDetails = response.data.data;
      } catch(error) {
        console.error(error);
      }
    },

    async getFavoritesList() {
      console.log('getFavoritesList');

      const favorites = await JSON.parse(
        window.localStorage.getItem('favoritesList')
      );

      console.log(favorites);

      this.favoritesList = favorites || [];
    },

    async setFavorite(id) {
      let _favoritesList = this.favoritesList;
      _favoritesList.push(id);
      this.favoritesList = _favoritesList;

      const jsonFavoritesList = JSON.stringify(this.favoritesList);
      await window.localStorage.setItem('favoritesList', jsonFavoritesList);
    },

    async removeFavorite(id) {
      const index = this.favoritesList.indexOf(id);
      this.favoritesList.splice(index, 1);

      const jsonFavoritesList = JSON.stringify(this.favoritesList);
      await window.localStorage.removeItem('favoritesList');
      await window.localStorage.setItem('favoritesList', jsonFavoritesList);
    }
  }
})

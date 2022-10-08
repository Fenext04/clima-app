import { createStore } from 'vuex'
import axios from "axios"
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/"
export default createStore({
  state: {
    clima: {
      data: {},
      is_loading: false,
      error: ""
    }
  },
  getters: {
  },
  mutations: {
    insertClima(state,clima){
      state.clima.data = clima
    },
    loadingClima(state,status){
      state.clima.is_loading = status
    },
    insertError(state,error){
      state.clima.error = error
    }
  },
  actions: {
    async getClima({commit}, city){
      commit("loadingClima", true)
      await axios.get(`weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric&lang=pt_br`)
        .then(response =>{
          commit("insertClima", response.data)
          commit("insertError", "")

        const body = document.querySelector("body")
        
        body.style.backgroundImage = `url("https://source.unsplash.com/${screen.width}x${screen.height}/?${response.data.name}")`
        })
        .catch((error) =>{
          commit("insertClima", {})
          if(error.response.status == 404){
            commit("insertError", "Cidade não encontrada.")
          }
          else{
            commit("insertError", "Ops! Ocorreu um erro inesperado.")
          }
        })
        .finally(() =>{
          commit("loadingClima", false)
        })
    }
  },
  modules: {
  }
})

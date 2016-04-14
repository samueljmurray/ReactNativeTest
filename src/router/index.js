import React, { Navigator } from "react-native";

import HomeContainer from '../components/HomeContainer'
import MoviesContainer from '../components/MoviesContainer'
import ToiletFreeContainer from '../components/ToiletFreeContainer'

const Router = {
  getHomeRoute() {
    return {
      id: "home",
      renderScene(navigator) {
        return <HomeContainer navigator={navigator} />
      }
    }
  },

  getMoviesRoute() {
    return {
      id: "movies",
      renderScene(navigator) {
        return <MoviesContainer navigator={navigator} />
      }
    }
  },

  getToiletFreeRoute() {
    return {
      id: "toilet_free",
      renderScene(navigator) {
        return <ToiletFreeContainer navigator={navigator} />
      }
    }
  }
}

export default Router
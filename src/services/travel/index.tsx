import { API } from "@src/constants/apiRoute";
import api from "@src/services/configApi";

export const TravelService = {
  async getTravel() {
    try {
      const result = await api.get(API.TRAVEL);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};

import { API } from "@src/constants/apiRoute";
import api from "@src/services/configApi";

export const ExperienceService = {
  async getExperience() {
    try {
      const result = await api.get(API.EXPERIENCES);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};

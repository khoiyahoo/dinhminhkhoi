import { API } from "@src/constants/apiRoute";
import api from "@src/services/configApi";

export const SkillsService = {
  async getSkills() {
    try {
      const result = await api.get(API.SKILLS);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};

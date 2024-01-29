import { API } from "@src/constants/apiRoute";
import api from "@src/services/configApi";

export const ProjectsService = {
  async getProjects() {
    try {
      const result = await api.get(API.PROJECTS);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};

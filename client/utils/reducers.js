import {
  ADD_DEVELOPER,
  ADD_RECRUITER,
  DEV_LOGIN,
  REC_LOGIN,
  ADD_PROJECT,
  ADD_TECH,
  REMOVE_PROJECT,
  REMOVE_TECH
} from './actions'

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_DEVELOPER: {
      const newDevId = state.developers[state.developers.length - 1].id + 1;
      const newDev = { ...action.payload, id: newDevId };

      return {
        ...state,
        developers: [...state.developers, newDev],
      };
    }

    case ADD_RECRUITER: {
      const newRecruiterId = state.recruiters[state.recruiters.length - 1].id + 1;
      const newRecruiter = { ...action.payload, id: newRecruiterId };

      return {
        ...state,
        recruiters: [...state.recruiters, newRecruiter],
      };
    }

    case DEV_LOGIN: {
      //TODO
    }

    case REC_LOGIN: {
      //TODO
    }

    case ADD_PROJECT: {
      const newProjectId = state.projects[state.projects.length - 1].id + 1;
      const newProject = { ...action.payload, id: newProjectId}

      return {
        ...state,
        projects: [...state.projects, newProject],
      };
    }
    
    case ADD_TECH: {
      const newTechId = state.techs[state.techs.length - 1].id + 1;
      const newTech = { ...action.payload, id: newTechId }

      return {
        ...state,
        techs: [...state.projects, newTech],
      };
    }

    case REMOVE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((projects) => projects.id !== action.payload),
      };
    }

    case REMOVE_TECH: {
      return {
        ...state,
        techs: state.techs.filter((techs) => techs.id !== action.payload),
      };
    }

    default: {
      return state;
    };
  }
}


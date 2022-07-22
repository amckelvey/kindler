import {
  ADD_DEVELOPER,
  ADD_RECRUITER,
  LOGIN,
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
    case LOGIN: {
      //TODO
    }
    case ADD_PROJECT: {
      const newProjectId = state.projects[state.projects.length - 1].id + 1;
      const newProject = 
  }
}
}


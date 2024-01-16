import { ADD_DRIVER, DRIVER_FOUND, ADD_TEAM, FILTER_TEAM, FILTER_ORIGIN, ORDER, ORDER_DATE } from "./action-types";

const initialState = {
    allDrivers: [],
    allDriversCopy: [],
    allTeams: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DRIVER:
            state.allDriversCopy = action.payload;
            return { ...state, allDrivers: action.payload }

        case ADD_TEAM:
            return { ...state, allTeams: [...action.payload] }

        case DRIVER_FOUND:
            return { ...state, allDrivers: [...action.payload] }

        case FILTER_TEAM:
            const copyDrivers = [...state.allDrivers];

            const teamFilter = copyDrivers.filter((drive) => {

                if (drive.teams) {
                    // Dividir la cadena de equipos en un array
                    const teamDri = drive.teams.split(',').map((team) => team.trim());

                    // Verificar si el equipo seleccionado está presente en el array
                    return action.payload === 'all' || teamDri.includes(action.payload);
                }
            })

            return {
                ...state,
                allDrivers:
                    action.payload === 'all' ?
                        state.allDriversCopy :
                        teamFilter
            }

        case FILTER_ORIGIN:
            const driverFilter = [...state.allDrivers].filter((driver) => driver.created === action.payload);
            return {
                ...state,
                allDrivers:
                    action.payload === 'all' ?
                        state.allDriversCopy :
                        driverFilter
            }

        case ORDER:
            const allDriverCopy = [...state.allDrivers];
            return {
                ...state,
                allDrivers: action.payload === 'A' ? allDriverCopy.sort((a, b) => a.name.forename.localeCompare(b.name.forename)) :
                    allDriverCopy.sort((a, b) => b.name.forename.localeCompare(a.name.forename))
            }

        case ORDER_DATE:
            const allDriver = [...state.allDrivers];

            const allDriverDate = allDriver.map((driver) => {
                return {
                    ...driver,
                    birthdate: new Date(driver.dob),
                };
            });
            return {
                ...state,
                allDrivers: action.payload === 'a' ? allDriverDate.sort((a, b) => a.birthdate - b.birthdate) :
                    allDriverDate.sort((a, b) => b.birthdate - a.birthdate)
            }

        default:
            return { ...state };
    }
};

export default reducer;
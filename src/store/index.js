import { createStore } from "vuex";
// import api from "../services/users";

export default createStore({
    state: {
        users: null,
        blocks: [
            {
                token: 'PERSON_NAME',
                type: 'text',
                props: {
                    title: 'Enter your Name',
                    required: true,
                    placeholder: 'e.g. john doe'
                }
            },
            {
                token: 'IS_PERSON_MINOR',
                type: 'checkbox',
                props: {
                    title: 'Is the current person minor?',
                    default: false,
                }
            },
            {
                token: 'PERSON_DOB',
                type: 'date',
                props: {
                    title: 'Enter your DOB',
                    required: false,
                    placeholder: 'e.g. 01/01/2000'
                }
            }
        ]
    },
    getters: {
        getUsers: (state) => {
            return state.users
        },
        getBlocks: (state) => {
            return state.blocks
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
    },
    actions: {
        setUsers(context, payload) {
            context.commit('setUsers', payload);
        }
    }
})

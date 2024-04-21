const student = {
    namespaced: true,
    state() {
        return {
            firstname: 'Emre',
            lastname: 'Cihan',
            school:'METU'
        }
    },
    getters: {
        getStudent(state) {
            return state.firstname;
        }
    }
}

export default student;
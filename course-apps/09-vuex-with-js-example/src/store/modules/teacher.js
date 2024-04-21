const teacher = {
    namespaced: true,
    state() {
        return {
            firstname: 'Mehmet',
            lastname: 'Selim',
            school:'ITU'
        }
    },
    getters: {
        getTeacher(state) {
            return state.firstname;
        },
        getTeacherSchool(state) {
            return state.school
        }
    }
}

export default teacher;
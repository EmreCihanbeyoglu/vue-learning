import { createStore } from 'vuex';
import student from "@/store/modules/student";
import teacher from "@/store/modules/teacher";

const store = createStore( {
    modules: {
        student: student,
        teacher: teacher
    }
})

export default store;
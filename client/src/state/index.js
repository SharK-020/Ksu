import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: null,
	faculty: [],
	department: [],
	images: [],
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogin: (state, action) => {
			state.token = action.payload;
		},
		setLogout: (state) => {
			state.token = null;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setFaculties: (state, action) => {
			state.faculty = action.payload;
		},
		setFaculty: (state, action) => {
			const updatedFaculty = state.faculty.map((faculty) => {
				if (faculty._id === action.payload._id) {
					return action.payload.faculty;
				}
				return faculty;
			});

			state.faculty = updatedFaculty;
		},
		setDepartments: (state, action) => {
			state.department = action.payload;
		},
		setDepartment: (state, action) => {
			const updatedDepartment = state.department.map((department) => {
				if (department._id === action.payload._id) {
					return action.payload.department;
				}
				return department;
			});
			state.department = updatedDepartment;
		},
		setImages: (state, action) => {
			state.images = action.payload;
		},
		setImage: (state, action) => {
			const updatedImages = state.images.map((image) => {
				if (image._id === action.payload._id) {
					return action.payload.image;
				}
				return image;
			});
			state.images = updatedImages;
		},
	},
});

export const {
	setToken,
	setFaculties,
	setFaculty,
	setDepartments,
	setDepartment,
	setImages,
	setImage,
} = authSlice.actions;
export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Faculty {
	_id: string;
	// Add other faculty properties as needed
}

interface Department {
	_id: string;
	// Add other department properties as needed
}

interface Image {
	_id: string;
	// Add other image properties as needed
}

interface AuthState {
	token: string | null;
	faculty: Faculty[];
	department: Department[];
	images: Image[];
}

const initialState: AuthState = {
	token: null,
	faculty: [],
	department: [],
	images: [],
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setLogout: (state) => {
			state.token = null;
		},
		setFaculties: (state, action: PayloadAction<Faculty[]>) => {
			state.faculty = action.payload;
		},
		setFaculty: (
			state,
			action: PayloadAction<{ _id: string; faculty: Faculty }>
		) => {
			const updatedFaculty = state.faculty.map((faculty) => {
				if (faculty._id === action.payload._id) {
					return action.payload.faculty;
				}
				return faculty;
			});

			state.faculty = updatedFaculty;
		},
		setDepartments: (state, action: PayloadAction<Department[]>) => {
			state.department = action.payload;
		},
		setDepartment: (
			state,
			action: PayloadAction<{ _id: string; department: Department }>
		) => {
			const updatedDepartment = state.department.map((department) => {
				if (department._id === action.payload._id) {
					return action.payload.department;
				}
				return department;
			});
			state.department = updatedDepartment;
		},
		setImages: (state, action: PayloadAction<Image[]>) => {
			state.images = action.payload;
		},
		setImage: (
			state,
			action: PayloadAction<{ _id: string; image: Image }>
		) => {
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
	setLogin,
	setFaculties,
	setFaculty,
	setDepartments,
	setDepartment,
	setImages,
	setImage,
} = authSlice.actions;

export default authSlice.reducer;

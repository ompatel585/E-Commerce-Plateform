import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    reviews: [],
};

export const addReview = createAsyncThunk(
    "/order/addReview",
    async (formdata, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `https://e-commerce-plateform.onrender.com/api/shop/review/add`,
                formdata
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);


export const getReviews = createAsyncThunk("/order/getReviews", async (id) => {
    const response = await axios.get(
        `https://e-commerce-plateform.onrender.com/api/shop/review/${id}`
    );

    return response.data;
});

const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviews.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews = action.payload.data;
            })
            .addCase(getReviews.rejected, (state) => {
                state.isLoading = false;
                state.reviews = [];
            });
    },
});

export default reviewSlice.reducer;
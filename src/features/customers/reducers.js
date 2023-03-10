import { createSlice } from "@reduxjs/toolkit";
import * as status from "../status";


const name = 'customers';
const initialState = {
    list : {
        customers : [],
    },
    form : {
        fields : {
            name: '',
            surname: '',
            phone: '',
            region: null,
            email: '',
        }
    },
    create: {
        status: status.PENDING
    },
    edit: {
        status: status.PENDING
    }
}


const reducers = {
    setFormField: (state, action) => {
        const { field, value } = action.payload;
        state.form.fields = { ...state.form.fields, [field]: value };
    },
    createCustomer: (state) => {
        state.create.status = status.PENDING;
    },
    createCustomerResult: (state, action) => {
        state.create.status = status.SUCCESS;
        state.list.customers = action.payload;
    },
    createCustomerError: (state, action) => {
        state.create.status = status.ERROR;
    },
    editCustomer: (state) => {
        state.edit.status = status.PENDING;
    },
    editCustomerResult: (state, action) => {
        state.edit.status = status.SUCCESS;
        state.list.customers = action.payload;
    },
    editCustomerError: (state, action) => {
        state.edit.status = status.ERROR;
    },
    loadCustomers: (state) => {
        state.list.status = status.PENDING;
    },
    loadCustomersResult: (state, action) => {
        state.list.status = status.SUCCESS;
        state.list.customers = action.payload;
    }


    
}

const slice = createSlice({
    name,
    initialState,
    reducers
});

export const { createCustomer, createCustomerResult, createCustomerError, setFormField, loadCustomers, loadCustomersResult, editCustomer, editCustomerResult, editCustomerError} = slice.actions;

export default slice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import * as status from "../status";


const name = 'customer';
const initialState = {
    list : {
        customers : [],
    },
    form : {
        fields : {
            name: '',
            surname: ''
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
    createCustomer: (state) => {
        state.create.status = status.PENDING;
    },
    createCustomerResult: (state, action) => {
        console.log ('cerated customer successfully');
        state.create.status = status.SUCCESS;
        state.list.customers = action.payload;
    },
    createCustomerError: (state, action) => {
        console.log ('error creating customer');
        state.create.status = status.ERROR;
    }

    
}

const slice = createSlice({
    name,
    initialState,
    reducers
});

export const { createCustomer, createCustomerResult, createCustomerError } = slice.actions;

export default slice.reducer;
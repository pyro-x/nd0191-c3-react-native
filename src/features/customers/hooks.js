// src/components/features/Animals/hooks.js
import { useDispatch, useSelector } from "react-redux"

import { useEffect } from "react"
import *  as actions  from "./reducers"

export const useUpdateFields = () => {

    
    const dispatch = useDispatch()
    const regions = useSelector(state => state.regions.list.regions)


    const fields = useSelector(state => state.customers.form.fields)
    return {
      fields,
      setFormField: (field, value) => { 
        return dispatch (actions.setFormField({ field, value }))
      },
    }
  }


  export const  useCreateCustomer = () => {
    const dispatch = useDispatch()
    return {
      onSubmit: () => dispatch(actions.createCustomer())
    }
  }

  export const useEditCustomer = ({id}) => {
    const dispatch = useDispatch()
    return {
      onSubmit: () => dispatch(actions.editCustomer({id}))
    }
  }
  export const useListCustomers = () => {
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(actions.loadCustomers())
    }, [dispatch])
    
    return useSelector(state => state.customers.list.customers)
  }
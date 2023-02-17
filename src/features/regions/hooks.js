import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'




export function useListRegions() {

    const dispatch = useDispatch()

    const regionsList = useSelector((state) => state.regions.list.regions);
    const loading = useSelector((state) => state.regions.loading);
    const error = useSelector((state) => state.regions.error);
  
    console.log ('regionsList:', regionsList);
    useEffect(() => {
        dispatch(actions.loadRegions())
    }, [dispatch])

    return {
        regions: regionsList,
        loading,
        error
    }
}
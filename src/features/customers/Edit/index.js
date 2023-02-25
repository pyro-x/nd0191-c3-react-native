import CustomerForm from '../../../component/CustomerForm';

import { useEditCustomer } from '../hooks';

import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styleFn from './styles';

const CustomerEdit = () => {
    const styles = styleFn();

    const route = useRoute();
    console.log ('route:', route);

    const { customerId } = route.params;
    console.log (':customer id:', customerId)

    const { onSubmit } = useEditCustomer(customerId)
    
    return (<CustomerForm onSubmit={onSubmit} customerId={customerId}/>
    );
}

export default CustomerEdit;
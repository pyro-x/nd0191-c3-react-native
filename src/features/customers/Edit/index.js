import CustomerForm from '../../../component/CustomerForm';

import { useEditCustomer } from '../hooks';

import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styleFn from './styles';

const CustomerEdit = () => {
    const styles = styleFn();

    const route = useRoute();

    const { customerId } = route.params;

    const { onSubmit } = useEditCustomer({id: customerId});
    
    return (<CustomerForm onSubmit={onSubmit} customerId={customerId}/>
    );
}

export default CustomerEdit;
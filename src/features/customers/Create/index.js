import { View, Text } from 'react-native';
import CustomerForm from '../../../component/CustomerForm';

import { useCreateCustomer } from '../hooks';
import styleFn from './styles';

const CustomerCreate = () => {
    const styles = styleFn();

    const { onSubmit } = useCreateCustomer()


    return (<CustomerForm onSubmit={onSubmit}/>
    );
}

export default CustomerCreate;
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useEffect, useMemo, useState } from 'react';

import { useUpdateFields, useCreateCustomer , useListCustomers} from '../../features/customers/hooks';
import { useListRegions } from '../../features/regions/hooks';
import DropDownPicker from 'react-native-dropdown-picker';

import { useNavigation } from '@react-navigation/native';

import styleFn from './styles';
import Button from '../Button';


const CustomerForm = ({onSubmit, customerId}) => {

    const { fields, setFormField } = useUpdateFields()

    const { regions, loading, error } = useListRegions();
    const customers = useListCustomers();

  // if customer id is passed, load customer data from store into the form
  useEffect(() => {
    if (customerId) {
      const customer = customers.find(customer => customer.id === customerId);
      setFormField('name', customer.name);
      setFormField('surname', customer.surname);
      setFormField('region', customer.region);
      setValue(customer.region);
      setFormField('email', customer.email);
      setFormField('phone', customer.phone);
      
    }},[customerId]);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const items = useMemo(() => regions.map((region) => ({label: region.name, value: region.id})), [regions]);
    

    const navigation = useNavigation();

    useEffect(() => {
      setFormField('region', value);
    }, [value]);
    
    const resetForm = () => {
      setFormField('region', null);
      setFormField ('name', '');
      setFormField ('surname', '');
      setFormField ('email', '');
      setOpen(false);
      setValue(null);

      navigation.goBack();
    };

    const {
      name,
      surname,
      region,
      email,
      phone
    } = fields
    const styles = styleFn();

    return (
    loading ? <Text>Loading...</Text> :
  <View style={styles.container}>
    <View style={styles.formContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <TextInput
            key={'name'}
            placeholder='Name'
            value={name || ''}
            style={styles.textInput}
            onChangeText={v => setFormField('name', v)}
          />
      </View>
      <View style={styles.row}>
          <Text style={styles.label}>Surname</Text>
          <TextInput
              label='Surname'
              key={'surname'}
              placeholder='Surname'
              value={surname || ''}
              style={styles.textInput}
              onChangeText={v => setFormField('surname', v)}
          />
      </View>
      <View style={styles.row}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
              label='Phone'
              key={'phone'}
              placeholder='phone'
              value={phone || ''}
              style={styles.textInput}
              onChangeText={v => setFormField('phone', v)}
          />
      </View>
      <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            key={'email'}
            placeholder='Email'
            value={email || ''}
            style={styles.textInput}
            onChangeText={v => setFormField('email', v)}
            />
      </View>
      <View style={styles.row}>
          <Text style={styles.label}>Region</Text>
        <DropDownPicker
            dropDownDirection='TOP'
            loading={loading}
            disabled={loading}
            open={open}
            value={region}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={regions.map((region) => ({label: region.name, value: region.id}))}
            style={styles.picker} 
            containerStyle={styles.pickerContainer}
          />
      </View>
      <View style={styles.button}>
        <Button onPress={() => {
                      onSubmit();
                      resetForm();
                  }} title="Submit"/>
      </View>
    </View>
  </View>
        
  )
}

export default CustomerForm;
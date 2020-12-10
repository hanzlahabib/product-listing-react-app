/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useDidMounted } from '../../utils';
import { Container, Title, Submit, Field } from './FormStyles';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/modules'
const Form = () => {
  const didMounted = useDidMounted()
  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    inventoryDate: ''
  })
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    price: '',
    description: '',
    inventoryDate: ''
  })
  const [isError, setIsError] = useState(true)
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    combineValidateHandling()
  }

  const handleOnChange = (evt) => {
    evt.preventDefault(); 
    const {value, name} = evt.target;
    setProduct({...product, [name]: value })
    const errors = validateForm({name, value})
    setFormErrors({...errors})
  }

  const combineValidateHandling = () => {
    let errors = {};
    // Validate Form Keys
    Object.keys(product).map(name => {
      errors = validateForm({ name, value: product[name] });
    });
    // Check if error exist
    let checkError = Object.keys(errors).filter(error => {
      if(errors[error] !== '' ){
        return error
      }
    })
    checkError.length > 0 ? setIsError(true) : setIsError(false)
    setFormErrors({ ...errors });
  }

  const validateForm = ({ name, value }) => {
    const errors = formErrors
    switch (name) {
      case 'price': 
        errors.price = 
          value < 1
            ? 'Please enter price higher then 0'
            : '';
        break;
      default:
        errors[name] = value === '' ? `Please fill ${name} field` : ''
        break;
    }
    return errors
  }

  useEffect(() => {
      if(!didMounted){
        if(!isError){
          combineValidateHandling()
          setIsError(true)
        }
      }
  }, [product])

  useEffect(() => {
    if(!isError){
      dispatch(addProduct(product))
      setIsError(true)
      setProduct({
        name: '',
        price: 0,
        description: '',
        inventoryDate: ''
      })
    }
  }, [isError])
  
  return (
    <Container>
      <Title>Add Product</Title>
      <Field>
        <input required type="text" aria-label="Name" placeholder="Name" name="name" value={product.name} onChange={handleOnChange} />
        {formErrors.name !== '' ? <span>{formErrors.name}</span> : ''}
      </Field>
      <Field>
        <input required type="text" aria-label="Description" placeholder="Description" name="description" value={product.description} onChange={handleOnChange} />
        {formErrors.description !== '' ? <span>{formErrors.description}</span> : ''}
      </Field>
      <Field>
        <input required type="number" aria-label="Price" placeholder="Price" name="price" value={product.price} onChange={handleOnChange} />
        {formErrors.price !== '' ? <span>{formErrors.price}</span> : ''}
      </Field>
      <Field>
        <input required type="date" aria-label="Date" placeholder="Date" name="inventoryDate" value={product.inventoryDate} onChange={handleOnChange} />
        {formErrors.inventoryDate !== '' ? <span>{formErrors.inventoryDate}</span> : ''}
      </Field>
      <Submit onClick={handleOnSubmit}> Submit</Submit>
    </Container>
  );
};

export default Form;



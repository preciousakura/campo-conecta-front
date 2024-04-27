import { StyleSheet, View } from 'react-native';
import { Button, InputText, RegularText } from '../../../../components';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { fetcher } from '../../../../lib/auth';
import { useNavigation } from '@react-navigation/native';

const schema = zod.object({
  name: zod.string().min(1),
  last_name: zod.string().min(1),
  email: zod.string().email().min(1),
  password: zod.string().min(1),
})

export type RegisterType = zod.infer<typeof schema>;

export function Form() {  
  const navigation = useNavigation<any>();

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    // const response = await fetcher('/auth/signup', { 
    //   method: 'POST', 
    //   headers: {
    //     "content-type": "application/json"
    //   }, 
    //   body: JSON.stringify(data) 
    // });

    navigation.navigate('User', {
      screen: 'Home'
    })
  }

  return (
    <View style={styles.container}>
      <Controller 
        name='name'
        control={control} 
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
            hasError={!!errors.name}
            props={{
              placeholder: "Digite seu nome",
              onBlur: onBlur,
              onChangeText: onChange,
              value
            }}
            title='Nome' 
          />
      )}/>

      <Controller 
        name='last_name'
        control={control} 
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
            hasError={!!errors.last_name}
            props={{
              placeholder: "Digite seu sobrenome",
              onBlur: onBlur,
              onChangeText: onChange,
              value
            }}
            title='Sobrenome' 
          />
      )}/>

      <Controller 
        name='email'
        control={control} 
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
            hasError={!!errors.email}
            props={{
              placeholder: "Digite seu e-mail",
              onBlur: onBlur,
              onChangeText: onChange,
              value
            }}
            title='Email' 
          />
      )}/>

      <Controller 
        name='password'
        control={control} 
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
            hasError={!!errors.password}
            props={{
              placeholder: "Digite sua senha",
              onChangeText: onChange,
              onBlur,
              value,
              secureTextEntry: true
            }}
            title='Senha' 
          />
        )}/>

      <Button 
        props={{
          title: 'Cadastrar',
          onPress: handleSubmit(onSubmit)
        }}
        buttonStyle={{ width: '70%', marginTop: 30 }} 
        title='Cadastrar' />

      <RegularText 
        style={{    
          marginBottom: 10,
          marginTop: 20,
          textDecorationLine: 'underline'
        }} 
        props={{
          onPress: () => navigation.goBack()
        }}
        text='Já tenho uma conta' 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    marginTop: 10
  },
  field: {
    flex: 1,
    flexDirection: 'column', 
    gap: 15,
    width: '100%'
  }
});

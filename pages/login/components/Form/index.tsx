import { StyleSheet, View } from 'react-native';
import { Button, InputText, RegularText } from '../../../../components';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

const schema = zod.object({
  email: zod.string().email().min(1, { message: 'E-mail obrigatório' }),
  password: zod.string().min(1, { message: 'Senha obrigatória' }),
})

export type LoginType = zod.infer<typeof schema>;

export function Form() {  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<LoginType> = (data: LoginType) => console.log(data);

  return (
    <View style={styles.container}>
      <Controller 
        name='email'
        control={control} 
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
            hasError={!!errors.email}
            props={{
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
              onChangeText: onChange,
              onBlur,
              value,
              secureTextEntry: true
            }}
            title='Password' 
          />
        )}/>

      <RegularText 
        style={{    
          marginBottom: 10,
          marginTop: 20,
          textDecorationLine: 'underline'
        }} 
        text='Não tem conta? Cadastre-se' 
      />

      <Button 
        onPress={handleSubmit(onSubmit)}
        buttonStyle={{ width: '60%', marginTop: 30 }} 
        title='Entrar' />
        
      <RegularText 
        style={{    
          marginBottom: 10,
          marginTop: 20,
          textDecorationLine: 'underline'
        }} 
        text='Esqueceu a senha?'
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

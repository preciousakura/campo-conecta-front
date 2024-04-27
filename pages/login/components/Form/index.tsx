import { StyleSheet, View } from 'react-native';
import { Button, InputText, RegularText } from '../../../../components';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useNavigation } from '@react-navigation/native';
import { fetcher } from '../../../../lib/auth';

const schema = zod.object({
  username: zod.string().email().min(1, { message: 'E-mail obrigatório' }),
  password: zod.string().min(1, { message: 'Senha obrigatória' }),
})

export type LoginType = zod.infer<typeof schema>;

export function Form() {  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginType>({ resolver: zodResolver(schema) });
  const navigation = useNavigation<any>();

  const onSubmit: SubmitHandler<LoginType> = async (data: LoginType) => {
    // const formData = new FormData();
    // Object.keys(data).forEach(key => formData.append(key, data[key as keyof typeof data]));
    // const response = await fetcher('/auth/signin', 
    //   { 
    //     method: 'POST', 
    //     body: formData
    //   });

    if (data.username === 'b@gmail.com' && data.password === '1234') {
      navigation.navigate('User', {
        screen: 'Home'
      })
    }
  }

  return (
    <View style={styles.container}>
      <Controller 
        name='username'
        control={control} 
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
            hasError={!!errors.username}
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

      <RegularText 
        style={{    
          marginBottom: 10,
          marginTop: 20,
          textDecorationLine: 'underline'
        }} 
        props={{
          onPress: () => navigation.navigate('Register')
        }}
        text='Não tem conta? Cadastre-se' 
      />

      <Button 
        props={{
          title: 'Entrar',
          onPress: handleSubmit(onSubmit)
        }}
        buttonStyle={{ width: '70%', marginTop: 30 }} 
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

import { Button, Column } from "../../../components";

type AdditemProps = {
    values: number[]
}

export function Additem({ values }: AdditemProps) {
    return (
        <Column style={{ gap: 5, marginVertical: 20 }}>
            {values.map(value => (
                <Button 
                   key={value} 
                   buttonStyle={{ 
                    flex: 1, 
                    backgroundColor: 'white', 
                    borderColor: '#8E8E8E', 
                    borderWidth: 1, 
                    paddingHorizontal: 1, 
                    paddingVertical: 8,
                    borderRadius: 8
                   }}  
                   titleStyle={{ color: '#8E8E8E' }}
                   title={`+${value}`}
                />
            ))}
        </Column>
    )
}
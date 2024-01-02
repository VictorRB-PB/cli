import { useState, useEffect, useMemo, useCallback } from 'react'

const Teste = () => {

  const [name, setName] = useState('Victor');
  const [age, setAge] = useState(26);

  // UseMemo = salvar referencia em variaveis (const, var, let)
  // UseCallback = salvar referencia de função

  const handleChangeName = useCallback(() => {
    console.log('alterou nome')
    setName(prev => prev === 'Victor' ? 'José' : 'Victor')},[])
  

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log('age atual', age, newAge)
    setAge(prev => prev === 26 ? 32 : 26)}, [age])

  const calculo = useMemo(()=> { 
    console.log("Calculo", age)  
    return 10 * age;
  }, [age]);  

  console.log("renderizou", calculo);

 // useEffect(() => {
 //   handleChangeName();
 // }, []);

  return (
    <div>
      <p>
        Idade: {age}
      </p>
      <br/>
      <p>
        Nome: {name}
      </p><br />
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
}


export { Teste };
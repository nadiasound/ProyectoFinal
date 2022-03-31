const horasDormidas = [2, 5, 7, 14]
for (let i = 0; i < horasDormidas.length; i++) {
   if (horasDormidas[i] < 5)
      console.log(`las horas que dormiste son ${horasDormidas[i]} te estas drogando`)

   else if (horasDormidas[i] == 5) {
      console.log(`las horas que dormiste son ${horasDormidas[i]} descansa un poco mas`)
   }
   else if (horasDormidas[i] > 5 && horasDormidas[i] < 8) {
      console.log(`las horas que dormiste son ${horasDormidas[i]} estas regix`)
   }
   else if (horasDormidas[i] > 8 && horasDormidas[i] <= 14) {
      console.log(`las horas que dormiste son ${horasDormidas[i]} marmota mood`)
   }

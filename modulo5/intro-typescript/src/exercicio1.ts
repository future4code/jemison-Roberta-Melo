const checaTriangulo = (a: number, b: number, c: number) : string | number => {
    if(a !== b && b !== c) {
       return "Escaleno"
    } else if (a === b && b === c) {
       return "Equilátero";
     } else {
       return "Isósceles";
     }
   }
   
   console.log(checaTriangulo(3, 3, 3))
   console.log(checaTriangulo(3, 5, 7))
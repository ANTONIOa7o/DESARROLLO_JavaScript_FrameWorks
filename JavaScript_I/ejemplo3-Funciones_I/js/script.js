/*
                        ==================
                          LAS FUNCIONES
                        ==================
        
            Entendidas y definadas como declaraciones de expresiones
            Palabra clave reservada function
            seguida y definida:
                1. Nombre de la funcion() -declaramos la misma-
                2. Lista de parametro (que la definen, entre parentesis, separados por coma )
                3.Las expresiones en javascript una accion en la funcion, controlada por su
                ambito (la acotacion de {})
            Sintasis:
                function nombreFuncion (a,b,...){
                  dentro del ambito de la funcion podremos declara expresion de accion...
                    
                }

                <<<<<Ambitos de la Variable>>>>

                🎈 Variables Globales:
                Caracteristicas:
                -> Cuando se puede acceder a su valor o contenido desde cualquier punto de la pagina
                donde reside su script
                ->Para poderlas definir como globales, tendrán que ser declaradas fuera de cualquier
                otro procedimiento o funcion.
                ->Cargan de manera permaneten en la memoria adyacente, actua directamente en el motor
                de carga de la pagina.
                ->Recomendaciones [Usos y abusos]: Uso de variables globales cuando realmente sean necesarias;
                Indice de comparticion de dicha variable es trasversal a varias funciones
                Ejemplo:
                
                var global =0 [varibale Global]

                function lolaFlores(guitarrista, palmeros) {    [funcion nombre]+[(parametros)]
                        global = guitarrista + palmeros  [declaraciones ]
                }

                lolaFlores (2+4)
*/
                var nombre = window.prompt('Introduce tu nombre'); //variable global

                function saludar(){
                    
                    swal('Hola! Bienvenido ' + nombre); 
                }


                /*
                ⚙ Variable Locales
                Caracteristicas:
                -> Aquella que son definidas dentro del entorno de la propia funcion.
                ->Su carga adyacente se genera solamente en la propia ejecucion de la funcion,
                gana eficiencia ya que dicha variable es desalojada de la memoria.
                ->Las varibles locales solo podrán acceder dentro del ambito acotado de su funcion
                */
               function despedir(){
                var apellido = 'Cuadrado'; // Variable Local
                swal('Adios alma de cantaro ' + nombre + apellido);








               }
               /*
               Puede la funcion saludar utilizar la variable apellido?
               */


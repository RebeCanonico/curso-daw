USE empleados_departamentos;

-- 1. Obtener los datos completos de los empleados
SELECT * FROM empleados;

-- 2. Obtener los datos completos de los departamentos
SELECT * FROM departamentos;

-- 3. Obtener los datos de los empleados con cargo ‘Secretaria’
SELECT * FROM empleados WHERE LOWER(cargoE)= 'secretaria';

-- 4. Obtener el nombre y salario de los empleados
SELECT nomemp, salemp FROM empleados;

-- 5. Obtener los datos de los empleados vendedores, ordenado por nombre
SELECT * FROM empleados WHERE LOWER(cargoE)= 'vendedor' ORDER BY nomEmp ASC;

-- 6. Listar el nombre de los departamentos (SELECT DISTINCT se usa para devolver valores que no se repitan)
SELECT DISTINCT nombreDPto FROM departamentos;

-- 7. Obtener el nombre y cargo de todos los empleados, ordenado por salario
SELECT nomEmp, cargoE, salEmp FROM empleados ORDER BY salEmp;

-- 8. Listar los salarios y comisiones de los empleados del departamento 2000, ordenado por comisión
SELECT salemP, comisionE FROM empleados WHERE codDepto = '2000' ORDER BY comisionE;

-- 9. Listar todas las comisiones
SELECT DISTINCT comisionE FROM empleados;

-- 10. Obtener el valor total a pagar que resulta de sumar a los empleados del departamento 3000 una bonificación de 500.000, en orden alfabético del empleado 
-- AS 'pago estimado' para que lo muestre asi en el resultado y no salem+500000)
SELECT nomEmp, salEmp, (salEmp+500000) AS 'pago estimado'
FROM empleados 
WHERE codDepto = '3000'
ORDER BY nomEmp;

-- 11. Obtener la lista de los empleados que ganan una comisión superior a su sueldo
SELECT nomEmp, salEmp, comisionE 
FROM empleados
WHERE comisionE > salEmp;

-- 12. Listar los empleados cuya comisión es menor o igual que el 30% de su sueldo
SELECT nomEmp, salEmp, comisionE 
FROM empleados
WHERE comisionE <= (salEmp * 0.3);

-- 13.Elabore un listado donde para cada fila, figure ‘Nombre’ y ‘Cargo’ antes del valor respectivo para cada empleado
SELECT nomEmp AS Nombre, cargoE AS Cargo
FROM empleados;

-- 14. Hallar el salario y la comisión de aquellos empleados cuyo número de documento de identidad es superior al ‘19.709.802’
SELECT , salEmp, comisionE 
FROM empleados
WHERE nDIEmp > '19.709.802';

-- 15. Muestra los empleados cuyo nombre empiece entre las letras J y Z (rango). Liste estos empleados y su cargo por orden alfabético
SELECT nomEmp, cargoE
FROM empleados
WHERE lower(nomEmp) > 'j' and lower(nomEmp) < 'z'
ORDER BY nomEmp;

-- 16. Listar el salario, la comisión, el salario total (salario + comisión), documento de identidad del empleado y nombre, de aquellos empleados que tienen comisión superior a 1.000.000, ordenar el informe por el número del documento de identidad
SELECT salemp, comisione, (salemp + comisione) AS 'Salario total', ndiemp, nomemp
FROM empleados
WHERE comisione > 1000000
ORDER BY ndiemp;

-- 17. Obtener un listado similar al anterior, pero de aquellos empleados que NO tienen comisión
SELECT salemp, comisione, (salemp + comisione) AS 'Salario total', ndiemp, nomemp
FROM empleados
WHERE comisione = 0;

-- 18. Hallar los empleados cuyo nombre no contiene la cadena «MA»
SELECT nomemp
FROM empleados
WHERE lower(nomEmp) not like '%ma%';

-- 19. Obtener los nombres de los departamentos que no sean “Ventas” ni “Investigación” NI ‘MANTENIMIENTO’
SELECT nombredpto
FROM departamentos
WHERE lower(nombredpto) NOT IN ('ventas', 'investigación', 'mantenimiento');

-- 20. Obtener el nombre y el departamento de los empleados con cargo ‘Secretaria’ o ‘Vendedor’, que no trabajan en el departamento de “PRODUCCION”, cuyo salario es superior a $1.000.000, ordenados por fecha de incorporación
SELECT e.nomemp, d.nombredpto, cargoe
FROM empleados e, departamentos d
WHERE e.coddepto = d.coddepto AND (LOWER(e.cargoe)='secretaria' OR LOWER(e.cargoe)='vendedor')
AND LOWER(d.nombredpto) NOT IN ('producción') AND e.salemp > 1000000
ORDER BY e.fecincorporacion;

-- 21. Obtener información de los empleados cuyo nombre tiene exactamente 11 caracteres
SELECT *
FROM empleados
WHERE char_length(nomemp) = 11;

-- 22. Obtener información de los empleados cuyo nombre tiene al menos 11 caracteres
SELECT *
FROM empleados
WHERE char_length(nomemp) < 11;

-- 23. Listar los datos de los empleados cuyo nombre inicia por la letra ‘M’, su salario es mayor a $800.000 o reciben comisión y trabajan para el departamento de ‘VENTAS’
SELECT e.*
FROM empleados e, departamentos d
WHERE e.coddepto = d.coddepto AND LOWER(e.nomemp) LIKE 'm%' AND (e.salemp > 800000 OR e.comisione > 0)
AND LOWER(d.nombredpto) = 'ventas';

-- 24. Obtener los nombres, salarios y comisiones de los empleados que reciben un salario situado entre la mitad de la comisión la propia comisión
SELECT nomemp, salemp, comisione
FROM empleados
WHERE salemp BETWEEN (comisione/2) AND comisione;

-- 25. Mostrar el salario más alto de la empresa
SELECT nomEmp, salEmp
FROM empleados
ORDER BY salEmp DESC
LIMIT 1;

-- 26. Mostrar cada una de las comisiones y el número de empleados que las reciben. Solo si tiene comisión
SELECT comisionE, COUNT(*) AS 'Numero empleados'
FROM empleados GROUP BY comisionE HAVING comisionE > 0;

-- 27. Mostrar el nombre del último empleado de la lista por orden alfabético
SELECT MAX(nomemp) AS 'Mayor alfabeticamente'
FROM empleados;

-- 28. Hallar el salario más alto, el más bajo y la diferencia entre ellos
SELECT MAX(salEmp) AS 'Salario mayor', MIN(salEmp) AS 'Salario menor', MAX(salEmp) - MIN(salEmp) AS 'Diferencia'
FROM empleados;

-- 29. Mostrar el número de empleados de sexo femenino y de sexo masculino, por departamento
SELECT codDepto, sexemp, COUNT(*) AS 'Numero empleados'
FROM empleados
GROUP BY codDepto, sexemp;

-- 30. Hallar el salario promedio por departamento
SELECT codDepto, AVG(salemp) AS 'Salario promedio'
FROM empleados
GROUP BY codDepto;

-- 31. Mostrar la lista de los empleados cuyo salario es mayor o igual que el promedio de la empresa. Ordenarlo por departamento
SELECT nomemp, salemp
FROM empleados
WHERE salemp >= (SELECT AVG(SALEMP) FROM empleados);

-- 32. Hallar los departamentos que tienen más de tres empleados. Mostrar el número de empleados de esos departamentos
SELECT d.codDepto, d.nombreDpto, COUNT(*) AS 'Numero empleados'
FROM empleados e, departamentos d
WHERE d.codDepto = e.codDepto
GROUP BY d.codDepto
HAVING COUNT(*) >= 3;

-- numero de empleados por departamento
SELECT codDepto, COUNT() AS 'Numero empleados'
FROM empleados, coddepto;
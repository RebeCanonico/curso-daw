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
SELECT nDIEmp, salEmp, comisionE 
FROM empleados
WHERE nDIEmp > '19.709.802';

-- 15. Muestra los empleados cuyo nombre empiece entre las letras J y Z (rango). Liste estos empleados y su cargo por orden alfabético
SELECT nomEmp, cargoE
FROM empleados
WHERE lower(nomEmp) > 'j' and lower(nomEmp) < 'z'
ORDER BY nomEmp;

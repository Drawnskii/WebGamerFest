import React, { useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import * as d3 from "d3";

const InscritosChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const competenciasRef = collection(db, "competencias");

      try {
        const competenciasSnapshot = await getDocs(competenciasRef);

        const inscripcionesData = [];

        // Recorrer las competencias
        for (const competenciaDoc of competenciasSnapshot.docs) {
          const competenciaId = competenciaDoc.id;
          const inscripcionesRef = collection(
            db,
            "competencias",
            competenciaId,
            "inscripciones"
          );

          const inscripcionesSnapshot = await getDocs(inscripcionesRef);

          // Recorrer las inscripciones de cada competencia
          inscripcionesSnapshot.forEach((inscripcionDoc) => {
            const inscripcionData = inscripcionDoc.data();
            console.log(inscripcionData);
            inscripcionesData.push({
              fecha: new Date(inscripcionData.fechaCompra),
              inscritos: inscripcionData.id,
            });
          });
        }

        // Procesar los datos y crear el gráfico después de recuperar todos los datos
        drawChart(inscripcionesData);
      } catch (error) {
        console.error("Error al obtener las inscripciones:", error);
      }
    }

    fetchData();
  }, []);

  const drawChart = (data) => {
    // Procesar los datos para obtener la cantidad de inscripciones por fecha
    const dataByDate = d3.rollup(
      data,
      (v) => v.length,
      (d) => d3.timeDay(d.fecha)
    );

    // Convertir los datos a un formato compatible con D3.js
    const chartData = Array.from(dataByDate, ([fecha, inscritos]) => ({
      fecha,
      inscritos,
    }));

    // Ordenar los datos por fecha
    chartData.sort((a, b) => a.fecha - b.fecha);

    // Configurar dimensiones y escalas
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Configurar la escala X
    const x = d3
      .scaleTime()
      .domain(d3.extent(chartData, (d) => d.fecha))
      .range([0, width]);

    const maxY = d3.max(chartData, (d) => d.inscritos); // Obtenemos el máximo número de inscripciones
    const y = d3.scaleLinear().domain([0, maxY]).nice().range([height, 0]); // Escala lineal para el eje y

    // Dibujar la línea del gráfico
    const line = d3
      .line()
      .x((d) => x(d.fecha))
      .y((d) => y(d.inscritos)); // Usamos la escala y para las coordenadas y de la línea

    // Redondear los valores del eje y para que sean números enteros
    const yAxis = d3.axisLeft(y).ticks(maxY); // Define el eje y con los ticks igual al máximo de inscritos

    // Agregar la línea al gráfico
    svg
      .append("path")
      .datum(chartData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line); // Asignamos la línea al atributo 'd'

    // Agregar ejes
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x)); // Eje x

    svg.append("g").call(yAxis); // Eje y
  };

  return <svg ref={chartRef}></svg>;
};

export default InscritosChart;

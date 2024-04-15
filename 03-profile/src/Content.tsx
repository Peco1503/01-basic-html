// src/components/Content.tsx
const Content = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
        {/* Header: Nombre y título */}
        <header className="my-8 text-center">
        <h1 className="text-4xl font-bold text-black">FRANCO ENRIQUE LUGO MEZA</h1>
        </header>
  
        {/* Sección de Educación */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold text-center">Educación</h2>
          <div className="mt-2">
            <p className="text-lg font-medium">
              Instituto Tecnológico de Estudios Superiores de Monterrey (ITESM)
            </p>
            <p className="italic flex justify-between">
                <span>B.S in Computer Science in Technology (ITC)</span>
                <span className="text-right align-top">Agosto 2020 - Diciembre 2023</span>
            </p>
            <p>GPA: 4.0 (Escala de 4.0) | 95.12 (Escala de 100)</p>
            <p>Cursos relevantes: Programación Orientada a Objetos, Estructuras de Datos y Algoritmos, IoT, Construcción de Software, Toma de Decisiones, Sistemas Multi-Agente con Gráficos Computacionales y Planificación de Sistemas de Software.</p>
          </div>
        </section>

        {/* Sección de Experiencia */}

        <section className="mb-8 w-full">
            <h2 className="text-2xl font-semibold  text-center">Experiencia</h2>
            <div className="mt-2">
                <p className="text-lg font-medium flex justify-between">
                    <span>Danu Consulting Group</span>
                    <span className="text-right align-top font-normal">Monterrey, N.L</span>
                </p>
                <p className="italic">Data Engineer Intern, Septiembre 2023 - Enero 2024</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Implementación de procesos ETL en la nube usando Google Cloud Platform (GCP), incluyendo scripting en Jupyter Notebook para la conexión a APIs públicas, manipulación de datos y transformación SQL, y almacenamiento de datos con BigQuery.</li>
                    <li>Uso de herramientas de BI como LookerStudio y Amazon QuickSight para análisis de datos profundos y creación de dashboards interactivos para apoyar la toma de decisiones estratégicas.</li>
                    <li>Ingeniería y gestión de arquitecturas de datos en AWS, incluyendo construcción de pipelines con Aurora y Glue, optimización de data lakes en S3 y almacenamiento en Redshift con reportes en QuickSight para dispositivos móviles.</li>
                </ul>            
            </div>
        </section>

        {/* Sección de Experiencia */}

        <section className="mb-8 w-full">
            <h2 className="text-2xl font-semibold text-center">Proyectos</h2>
            <div className="mt-2">
                <p className="text-lg font-medium">IoT based Smart Greenhouse</p>
                <p className="italic">Septiembre 2022 - Diciembre 2022</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Desarrollé un invernadero inteligente con sensores de humedad, temperatura y luz para monitoreo y control remoto de condiciones ambientales.</li>
                    <li>Recopilé datos mediante sensores, los cuales fueron almacenados en una base de datos para posteriormente ser visualizados en una pagina web usando JavaScript, HTML y CSS</li>
                    <li>Implementé procesos de ETL para facilitar la integración y preparación de datos, para su posterior análisis y uso</li>
                </ul>
            </div>

            <div className="mt-6">
                <p className="text-lg font-medium">Landpage Global Trainees</p>
                <p className="italic">Agosto 2023-Junio 2023</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Diseñé e implementé una base de datos robusta utilizando SQL Server para almacenar y administrar datos de usuarios de Ternium</li>
                    <li>Desarrollé la interfaz de usuario utilizando React, Typescript y TailwindCSS</li>
                    <li>Utilicé GitHub como sistema de manejo de versiones</li>
                </ul>
            </div>

            <div className="mt-6">
                <p className="text-lg font-medium">Mobile Learning App</p>
                <p className="italic">Septiembre 2023 - December 2023</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Desarrollé una aplicación movil para el Instituto Nuevo Amanecer, diseñanada para mejorar el aprendizaje de los estudiantes a través de la asociación de concepto-imagen-palabras clave, con niveles de dificultad ajustables adaptados a cada estudiante</li>
                    <li>Diseñé un backend robusto utilizando Node.js y TypeScript, integrando SQLite para la gestión de datos.</li>
                    <li>Diseñé una interfaz de usuario en Android Studio, utilizando el framework de Jetpack Compse</li>
                </ul>
            </div>
        </section>

        {/* Sección de Habilidades */}
        <section className="mb-8 w-full">
            <h2 className="text-2xl font-semibold text-center">Habilidades Técnicas</h2>
            <div className="flex flex-wrap gap-3 mt-2">
                <span className="tag">C++</span>
                <span className="tag">C#</span>
                <span className="tag">Python</span>
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">SQL</span>
                <span className="tag">React.js</span>
                <span className="tag">TailwindCSS</span>
                <span className="tag">Node.js</span>
                <span className="tag">Git</span>
                <span className="tag">AWS</span>
                <span className="tag">GCP</span>
                <span className="tag">Docker</span>
                <span className="tag">Kotlin</span>
                <span className="tag">Express.js</span>
                <span className="tag">R</span>
            </div>
        </section>

        {/* Sección de Idiomas */}
        <section className="mb-8 w-full">
            <h2 className="text-2xl font-semibold text-center">Idiomas</h2>
            <div className="flex flex-wrap gap-3 mt-2">
            <span className="tag">Español (Nativo)</span>
            <span className="tag">Inglés (C1)</span>
            </div>
        </section>
  
      </div>
    );
  };
  
  export default Content;
  
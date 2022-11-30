// import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/Testimony.js'

function App() {
  return (
    <div className='App'>
      <div className='container-main'>
        <h1>Esto es lo que dicen nuestros alumnos:</h1>
        <Testimony
        name='Shawn Wang'
        country='Singapur'
        image='shawn'
        position='Ingeniera de Software'
        company='Amazon'
        testimony={`Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. ${<strong>'freeCodeCamp cambió mi vida'</strong>}.`}
        />
        <Testimony
        name='Sarah Chiman'
        country='Nigeria'
        image='sarah'
        position='Ingeniera de Software'
        company='ChatDesk'
        testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
        />
        <Testimony
        name='Emma Bostian'
        country='Suecia'
        image='emma'
        position='Ingeniera de Software'
        company='Spotify'
        testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
        />
      </div>
    </div>
  );
}

export default App;

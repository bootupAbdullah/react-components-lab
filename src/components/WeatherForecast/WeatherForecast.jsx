import './WeatherForecast.css';

const WeatherForecast = (props) => {
    const {forecast} = props;
    return (
        <div className="weather">
        <h2>{forecast.day}</h2>
        <img src={forecast.img} alt={forecast.imgAlt} />
        <p><span>conditions: {forecast.conditions} </span></p>
        <p><span>time: {forecast.time} </span></p>
      </div>
    );
  };
  
  export default WeatherForecast
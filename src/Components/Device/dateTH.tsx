import './css/Device.css';

const date = new Date()

const DateTime = date.toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function Timer() {
    return (
        
            <p className="textdate">({date.toLocaleString()})</p>
        
    );
}
export default Timer;

import './ChartBar.css'

const ChartBar = props => {

  let barFillHeight = '0%';

  if(props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; // Bar가 얼마나 채워져야 하는지 1~100 사이의 값을 퍼센트로 나타내 줌. + CSS에서 사용하기 위해 끝에 % 붙은 문자열로 만들어줌.
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barFillHeight}}>

        </div>
      </div>
      <div className='chart-bar__label'>
        {props.label}
      </div>
    </div>
  );
}

export default ChartBar